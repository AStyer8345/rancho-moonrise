# LEARNED — Rancho Moonrise

Append-only log of lessons learned while working this project. Dated entries, newest on top.

---

## 2026-04-09 — NotebookLM rejects HTML uploads

**What happened:** The `sync-to-notebooklm.sh` scheduled task failed repeatedly on two files:
- `brand/2026-04-08-rancho-moonrise-full-business-audit.html`
- `brand/2026-04-09-rancho-moonrise-improvement-plan.html`

Every scheduled run logged `FAILED` for both. The failures were not transient — same files, same error, across 6+ runs.

**Root cause:** NotebookLM's `notebooklm source add` command does not accept `.html` as a source type. The matching `.txt` version of the business audit uploaded fine on the same run, confirming it was the file format — not the content, not the notebook, not auth.

**Fix applied:**
1. Converted both HTML files to PDF using Chrome headless:
   ```
   /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
     --headless --disable-gpu --no-pdf-header-footer \
     --print-to-pdf="output.pdf" "file:///absolute/path/input.html"
   ```
   Output: clean PDFs, 433 KB and 712 KB, saved next to the HTML originals in `brand/`.
2. Patched `sync-to-notebooklm.sh` to skip `.html`/`.htm` extensions with a "convert to PDF" message — they no longer count as failures and stop polluting the log.
3. Re-ran sync. Both PDFs uploaded clean: `New: 2 | Updated: 0 | Unchanged: 63 | Failed: 0`.

**Going forward:**
- **Never drop raw HTML into `deal/` or `brand/` for NotebookLM sync.** Convert to PDF (or `.txt`/`.md`) first.
- HTML originals can stay in the folder — the script now skips them silently.
- If an HTML source changes, the PDF has to be regenerated manually. The sync script doesn't watch HTMLs or auto-convert. If this becomes a recurring pattern, add a pre-sync step that regenerates PDFs from any HTML whose mtime is newer than the sibling PDF.

**Supported NotebookLM source types (confirmed working this session):** `.txt`, `.md`, `.pdf`.
**Confirmed rejected:** `.html`.

---
