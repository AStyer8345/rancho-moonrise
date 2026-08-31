#!/usr/bin/env python3
"""Render site/competitive-intelligence.md into site/competitive-intelligence.html.

The HTML page is what every Intel card on improvement-plan.html links to. Before
this script existed the two drifted: the markdown was rewritten weekly by
rancho-competitive-weekly while the HTML sat frozen at its April 6, 2026 build
for 141 days, still publishing claims the markdown had since corrected.

The existing page's <head> (and therefore all of its CSS) is preserved verbatim;
only the <header> meta block and <main> are regenerated. Run after every report
rewrite:

    python3 scripts/render-competitive-report.py
"""

import html
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MD = ROOT / "site" / "competitive-intelligence.md"
HTML_OUT = ROOT / "site" / "competitive-intelligence.html"


def inline(text):
    """Markdown inline spans -> HTML. Escapes first, so source HTML is inert."""
    out = html.escape(text, quote=False)
    out = re.sub(r"`([^`]+)`", r"<code>\1</code>", out)
    out = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<a href="\2">\1</a>', out)
    out = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", out)
    out = re.sub(r"(?<![\w*])\*([^*]+)\*(?![\w*])", r"<em>\1</em>", out)
    out = out.replace("—", "&mdash;").replace("·", "&middot;")
    return out


def split_row(line):
    return [c.strip() for c in line.strip().strip("|").split("|")]


def render_body(lines):
    out, i = [], 0
    n = len(lines)
    while i < n:
        line = lines[i]
        stripped = line.strip()

        if not stripped:
            i += 1
            continue

        if stripped == "---":
            out.append("<hr>")
            i += 1
            continue

        m = re.match(r"^(#{2,4})\s+(.*)$", stripped)
        if m:
            level = len(m.group(1))
            out.append(f"<h{level}>{inline(m.group(2))}</h{level}>")
            i += 1
            continue

        # Table: a header row followed by a |---|---| separator.
        if stripped.startswith("|") and i + 1 < n and re.match(
            r"^\|[\s:|-]+\|$", lines[i + 1].strip()
        ):
            head = split_row(stripped)
            i += 2
            body = []
            while i < n and lines[i].strip().startswith("|"):
                body.append(split_row(lines[i].strip()))
                i += 1
            out.append('<div class="table-wrap">')
            out.append("<table>")
            out.append(
                "<thead><tr>"
                + "".join(f"<th>{inline(c)}</th>" for c in head)
                + "</tr></thead>"
            )
            out.append("<tbody>")
            for row in body:
                out.append(
                    "<tr>" + "".join(f"<td>{inline(c)}</td>" for c in row) + "</tr>"
                )
            out.append("</tbody></table></div>")
            continue

        if stripped.startswith("> "):
            quote = []
            while i < n and lines[i].strip().startswith(">"):
                quote.append(lines[i].strip().lstrip(">").strip())
                i += 1
            out.append("<blockquote><p>" + inline(" ".join(quote)) + "</p></blockquote>")
            continue

        m = re.match(r"^(\d+)\.\s+(.*)$", stripped)
        if m:
            items = []
            while i < n and re.match(r"^\d+\.\s+", lines[i].strip()):
                items.append(re.sub(r"^\d+\.\s+", "", lines[i].strip()))
                i += 1
            out.append("<ol>")
            out.extend(f"<li>{inline(t)}</li>" for t in items)
            out.append("</ol>")
            continue

        if re.match(r"^[-*]\s+", stripped):
            items = []
            while i < n and re.match(r"^[-*]\s+", lines[i].strip()):
                items.append(re.sub(r"^[-*]\s+", "", lines[i].strip()))
                i += 1
            out.append("<ul>")
            out.extend(f"<li>{inline(t)}</li>" for t in items)
            out.append("</ul>")
            continue

        para = []
        while i < n and lines[i].strip() and not re.match(
            r"^(#{2,4}\s|[-*]\s|\d+\.\s|\||>|---$)", lines[i].strip()
        ):
            para.append(lines[i].strip())
            i += 1
        if para:
            out.append("<p>" + inline(" ".join(para)) + "</p>")

    return "\n".join(out)


def main():
    if not MD.exists():
        sys.exit(f"missing source: {MD}")
    if not HTML_OUT.exists():
        sys.exit(f"missing shell: {HTML_OUT} (the <head> is reused, not generated)")

    md_lines = MD.read_text(encoding="utf-8").splitlines()

    # Front matter: the H1 plus the "**Key:** value" lines above the first rule.
    title = "Rancho Moonrise — Competitive Intelligence Report"
    meta, body_start = [], 0
    for idx, line in enumerate(md_lines):
        s = line.strip()
        if s.startswith("# "):
            title = s[2:].strip()
            continue
        if s == "---":
            body_start = idx + 1
            break
        if s.startswith("**"):
            meta.append(inline(s))

    shell = HTML_OUT.read_text(encoding="utf-8")
    head = shell.split("<body>", 1)[0]

    page = (
        head
        + "<body>\n\n"
        + '<header class="report-header">\n  <div class="container">\n'
        + f"    <h1>{inline(title)}</h1>\n"
        + '    <div class="meta">\n      '
        + "<br>\n      ".join(meta)
        + "\n    </div>\n  </div>\n</header>\n\n"
        + '<main>\n<div class="container">\n\n'
        + render_body(md_lines[body_start:])
        + '\n\n</div><!-- /.container -->\n</main>\n\n</body>\n</html>\n'
    )

    HTML_OUT.write_text(page, encoding="utf-8")
    print(f"rendered {MD.name} -> {HTML_OUT.name} ({len(page):,} bytes)")


if __name__ == "__main__":
    main()
