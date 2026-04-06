#!/usr/bin/env node
/**
 * Rancho Moonrise — Image Scraper
 *
 * Crawls all pages on ranchomoonrise.com, extracts every image URL,
 * and downloads them to /site/images/ with clean filenames.
 *
 * Usage: node scrape-images.js
 *
 * No dependencies — uses built-in Node modules only.
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// ── Config ──────────────────────────────────────────────
const BASE_URL = 'https://ranchomoonrise.com';
const OUTPUT_DIR = path.join(__dirname, 'site', 'images', 'original');
const CONCURRENCY = 3; // simultaneous downloads
const PAGES = [
    '/',
    '/accommodations/',
    '/weddings/',
    '/host-your-event/',
    '/events/',
    '/faqs/',
    '/contact/',
    '/policies/',
    '/accessibility/',
    '/happenings/',
    '/pool-pass/',
];

// ── Helpers ─────────────────────────────────────────────

function fetch(url) {
    return new Promise((resolve, reject) => {
        const client = url.startsWith('https') ? https : http;
        const req = client.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
                'Accept': 'text/html,application/xhtml+xml,*/*'
            },
            timeout: 15000
        }, (res) => {
            // Follow redirects
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                const redirectUrl = new URL(res.headers.location, url).href;
                fetch(redirectUrl).then(resolve).catch(reject);
                return;
            }
            if (res.statusCode !== 200) {
                reject(new Error(`HTTP ${res.statusCode} for ${url}`));
                return;
            }
            const chunks = [];
            res.on('data', (chunk) => chunks.push(chunk));
            res.on('end', () => resolve(Buffer.concat(chunks)));
            res.on('error', reject);
        });
        req.on('error', reject);
        req.on('timeout', () => { req.destroy(); reject(new Error(`Timeout: ${url}`)); });
    });
}

function extractImageUrls(html, pageUrl) {
    const urls = new Set();

    // 1. <img src="..."> and <img data-src="..."> (lazy load)
    const imgSrc = /(?:src|data-src|data-lazy-src)=["']([^"']+\.(?:jpg|jpeg|png|webp|gif|svg|avif)[^"']*)/gi;
    let match;
    while ((match = imgSrc.exec(html)) !== null) {
        urls.add(match[1]);
    }

    // 2. srcset="url 300w, url 600w, ..."
    const srcset = /srcset=["']([^"']+)/gi;
    while ((match = srcset.exec(html)) !== null) {
        const entries = match[1].split(',');
        for (const entry of entries) {
            const src = entry.trim().split(/\s+/)[0];
            if (/\.(jpg|jpeg|png|webp|gif|svg|avif)/i.test(src)) {
                urls.add(src);
            }
        }
    }

    // 3. CSS background-image: url(...)
    const bgUrl = /url\(["']?([^"')]+\.(?:jpg|jpeg|png|webp|gif|avif)[^"')]*)/gi;
    while ((match = bgUrl.exec(html)) !== null) {
        urls.add(match[1]);
    }

    // 4. og:image and twitter:image meta tags
    const metaImg = /content=["']([^"']+\.(?:jpg|jpeg|png|webp|gif|avif)[^"']*)/gi;
    while ((match = metaImg.exec(html)) !== null) {
        if (/\.(jpg|jpeg|png|webp|gif|avif)/i.test(match[1])) {
            urls.add(match[1]);
        }
    }

    // Resolve relative URLs to absolute
    const resolved = new Set();
    for (const url of urls) {
        try {
            const absolute = new URL(url, pageUrl).href;
            // Only keep images from ranchomoonrise.com (skip external CDNs, tracking pixels, etc.)
            if (absolute.includes('ranchomoonrise.com') || absolute.includes('wp-content')) {
                resolved.add(absolute);
            }
        } catch {
            // Skip malformed URLs
        }
    }

    return resolved;
}

function cleanFilename(url) {
    try {
        const parsed = new URL(url);
        let filename = path.basename(parsed.pathname);
        // Remove query strings and decode
        filename = decodeURIComponent(filename.split('?')[0]);
        // Remove WordPress size suffixes like -300x200, -1024x768
        // but keep the original for highest quality
        return filename;
    } catch {
        return null;
    }
}

async function downloadFile(url, filepath) {
    const data = await fetch(url);
    fs.writeFileSync(filepath, data);
    return data.length;
}

async function runPool(tasks, concurrency) {
    const results = [];
    let index = 0;

    async function worker() {
        while (index < tasks.length) {
            const i = index++;
            try {
                results[i] = await tasks[i]();
            } catch (err) {
                results[i] = { error: err.message };
            }
        }
    }

    const workers = Array.from({ length: concurrency }, () => worker());
    await Promise.all(workers);
    return results;
}

// ── Main ────────────────────────────────────────────────

async function main() {
    console.log('╔══════════════════════════════════════════╗');
    console.log('║  Rancho Moonrise — Image Scraper         ║');
    console.log('╚══════════════════════════════════════════╝\n');

    // Create output directory
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    // Step 1: Fetch all pages and extract image URLs
    console.log(`Fetching ${PAGES.length} pages...\n`);
    const allImageUrls = new Set();

    for (const pagePath of PAGES) {
        const pageUrl = BASE_URL + pagePath;
        process.stdout.write(`  ${pagePath.padEnd(25)}`);
        try {
            const html = (await fetch(pageUrl)).toString('utf-8');
            const images = extractImageUrls(html, pageUrl);
            for (const img of images) allImageUrls.add(img);
            console.log(`✓  ${images.size} images found`);
        } catch (err) {
            console.log(`✗  ${err.message}`);
        }
    }

    console.log(`\nTotal unique images found: ${allImageUrls.size}\n`);

    if (allImageUrls.size === 0) {
        console.log('No images found. The site may be blocking requests.');
        console.log('Try running with Chrome MCP or manually saving images.');
        return;
    }

    // Step 2: Filter out tiny images (tracking pixels, icons < 1KB likely)
    // and deduplicate by filename (keep largest / first)
    const seen = new Map(); // filename -> url
    const downloadList = [];

    for (const url of allImageUrls) {
        const filename = cleanFilename(url);
        if (!filename) continue;

        // Skip obvious non-content images
        if (/^(pixel|spacer|blank|tracking|fb-|google-)/i.test(filename)) continue;
        if (filename.length < 3) continue;

        // For WordPress sized variants (-300x200.jpg), prefer the original
        const baseFilename = filename.replace(/-\d+x\d+(\.\w+)$/, '$1');

        if (!seen.has(baseFilename)) {
            seen.set(baseFilename, url);
            // If this IS the base (no size suffix), prefer it
            downloadList.push({ url, filename: baseFilename });
        } else if (filename === baseFilename) {
            // This is the original — replace the sized version
            const idx = downloadList.findIndex(d => d.filename === baseFilename);
            if (idx >= 0) downloadList[idx].url = url;
        }
    }

    console.log(`After dedup (preferring originals): ${downloadList.length} images to download\n`);
    console.log('Downloading...\n');

    // Step 3: Download with concurrency limit
    let completed = 0;
    let totalBytes = 0;
    const errors = [];

    const tasks = downloadList.map((item) => async () => {
        const filepath = path.join(OUTPUT_DIR, item.filename);

        // Skip if already downloaded
        if (fs.existsSync(filepath)) {
            completed++;
            const size = fs.statSync(filepath).size;
            totalBytes += size;
            process.stdout.write(`  [${completed}/${downloadList.length}] SKIP ${item.filename} (exists)\n`);
            return;
        }

        try {
            const bytes = await downloadFile(item.url, filepath);
            completed++;
            totalBytes += bytes;
            const sizeKB = (bytes / 1024).toFixed(0);
            process.stdout.write(`  [${completed}/${downloadList.length}] ✓ ${item.filename} (${sizeKB} KB)\n`);
        } catch (err) {
            completed++;
            errors.push({ filename: item.filename, url: item.url, error: err.message });
            process.stdout.write(`  [${completed}/${downloadList.length}] ✗ ${item.filename}: ${err.message}\n`);
        }
    });

    await runPool(tasks, CONCURRENCY);

    // Step 4: Summary
    const totalMB = (totalBytes / (1024 * 1024)).toFixed(1);
    console.log('\n══════════════════════════════════════════');
    console.log(`  Downloaded: ${downloadList.length - errors.length} images (${totalMB} MB)`);
    console.log(`  Failed:     ${errors.length}`);
    console.log(`  Output:     ${OUTPUT_DIR}`);
    console.log('══════════════════════════════════════════\n');

    if (errors.length > 0) {
        console.log('Failed downloads:');
        for (const err of errors) {
            console.log(`  ${err.filename}: ${err.error}`);
            console.log(`    URL: ${err.url}`);
        }
        console.log('');
    }

    // Write a manifest for reference
    const manifest = downloadList.map(d => ({
        filename: d.filename,
        source: d.url,
        downloaded: !errors.find(e => e.filename === d.filename)
    }));
    fs.writeFileSync(
        path.join(OUTPUT_DIR, '_manifest.json'),
        JSON.stringify(manifest, null, 2)
    );
    console.log('Wrote _manifest.json with source URLs for each image.\n');

    // List all unique URLs for manual review
    fs.writeFileSync(
        path.join(OUTPUT_DIR, '_all-urls.txt'),
        [...allImageUrls].sort().join('\n')
    );
    console.log('Wrote _all-urls.txt with all discovered image URLs.\n');
}

main().catch(err => {
    console.error('Fatal error:', err.message);
    process.exit(1);
});
