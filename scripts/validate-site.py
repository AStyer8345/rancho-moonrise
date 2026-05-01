#!/usr/bin/env python3
"""Static validation for the Rancho Moonrise public site."""

from __future__ import annotations

import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"
APEX = "ranchomoonrise.com"
BANNED_PUBLIC_PATTERNS = (
    "event-lone-star-400.webp",
    "event-lone-star-800.webp",
    "accom-safari-tent-bright-1024.webp",
    "up to 50 overnight guests",
    "sleeps up to 50",
    "sleeps 50",
    "all 20 sleeping sites",
    "Breakfast tacos",
    "breakfast tacos",
    "Hill Country",
    "$3K",
    "events start at $3,000",
    "packages starting at $3,000",
    "Packages start at $3K",
    "intent=private-event",
)


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.tags: list[tuple[str, dict[str, str]]] = []
        self.ld_json: list[str] = []
        self._in_ld_json = False
        self._current_ld = ""

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attr_map = {k: v or "" for k, v in attrs}
        self.tags.append((tag, attr_map))
        if tag == "script" and attr_map.get("type") == "application/ld+json":
            self._in_ld_json = True
            self._current_ld = ""

    def handle_endtag(self, tag: str) -> None:
        if tag == "script" and self._in_ld_json:
            self.ld_json.append(self._current_ld)
            self._in_ld_json = False

    def handle_data(self, data: str) -> None:
        if self._in_ld_json:
            self._current_ld += data


def public_html_files() -> list[Path]:
    skip_parts = {"admin", "audits"}
    skip_names = {
        "brand-audit.html",
        "competitive-intelligence.html",
        "dashboard.html",
        "improvement-plan.html",
        "mockup-preview.html",
        "report.html",
    }
    return [
        p
        for p in sorted(SITE.rglob("*.html"))
        if not skip_parts.intersection(p.relative_to(SITE).parts)
        and p.name not in skip_names
    ]


def parse_page(path: Path) -> tuple[str, PageParser]:
    html = path.read_text(encoding="utf-8", errors="ignore")
    parser = PageParser()
    parser.feed(html)
    return html, parser


def is_internal_asset(value: str) -> bool:
    return bool(value) and not value.startswith(("http://", "https://", "data:", "mailto:", "tel:", "#"))


def asset_path(page: Path, value: str) -> Path:
    cleaned = value.split("?", 1)[0].split("#", 1)[0]
    if cleaned.startswith("/"):
        return SITE / cleaned.lstrip("/")
    return page.parent / cleaned


def sitemap_paths() -> list[str]:
    xml = (SITE / "sitemap.xml").read_text(encoding="utf-8")
    urls = re.findall(r"<loc>(.*?)</loc>", xml)
    return [urlparse(url).path for url in urls]


def rewrite_sources() -> set[str]:
    config = json.loads((ROOT / "vercel.json").read_text(encoding="utf-8"))
    return {item["source"] for item in config.get("rewrites", [])}


def clean_route_map() -> dict[str, str]:
    routes = {
        "/pages/accommodations.html": "/accommodations/",
        "/pages/weddings.html": "/weddings/",
        "/pages/events.html": "/events/",
        "/pages/host-your-event.html": "/host-your-event/",
        "/pages/contact.html": "/contact/",
        "/pages/faqs.html": "/faqs/",
        "/pages/policies.html": "/policies/",
        "/pages/accessibility.html": "/accessibility/",
        "/pages/videos.html": "/videos/",
        "/pages/safari-tents-near-austin.html": "/safari-tents-near-austin/",
        "/pages/blog.html": "/blog/",
    }
    for path in SITE.joinpath("pages").glob("*.html"):
        stem = path.stem
        if stem not in {
            "accommodations",
            "weddings",
            "events",
            "host-your-event",
            "contact",
            "faqs",
            "policies",
            "accessibility",
            "videos",
            "safari-tents-near-austin",
            "blog",
        }:
            routes[f"/pages/{path.name}"] = f"/blog/{stem}/"
    return routes


def main() -> int:
    failures: list[str] = []
    rewrites = rewrite_sources()
    route_map = clean_route_map()
    page_files = public_html_files()

    for page in page_files:
        html, parser = parse_page(page)
        rel = page.relative_to(ROOT)

        for block in parser.ld_json:
            try:
                json.loads(block)
            except json.JSONDecodeError as exc:
                failures.append(f"{rel}: invalid JSON-LD: {exc}")

        for tag, attrs in parser.tags:
            for attr in ("src", "data-src"):
                value = attrs.get(attr, "")
                if is_internal_asset(value) and not asset_path(page, value).exists():
                    failures.append(f"{rel}: missing asset {attr}={value}")
            for attr in ("srcset", "data-srcset"):
                for candidate in attrs.get(attr, "").split(","):
                    value = candidate.strip().split(" ")[0]
                    if is_internal_asset(value) and not asset_path(page, value).exists():
                        failures.append(f"{rel}: missing asset {attr}={value}")

        for match in re.findall(r"https?://([^/\"'\s)]+)", html):
            if match == f"www.{APEX}":
                failures.append(f"{rel}: uses www host")

        for pattern in BANNED_PUBLIC_PATTERNS:
            if pattern in html:
                failures.append(f"{rel}: banned stale/risky public pattern: {pattern}")

        for old_path in route_map:
            if old_path in html:
                failures.append(f"{rel}: internal link should use clean route instead of {old_path}")

    for path in sitemap_paths():
        if path != "/" and path not in rewrites:
            failures.append(f"site/sitemap.xml: {path} has no matching vercel rewrite")

    if failures:
        print("Site validation failed:")
        for failure in failures:
            print(f" - {failure}")
        return 1

    print("Site validation passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
