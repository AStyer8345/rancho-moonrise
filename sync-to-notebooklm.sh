#!/bin/zsh

# Rancho Moonrise — NotebookLM Auto-Sync
# - Detects NEW files → uploads them
# - Detects MODIFIED files → deletes old version from NotebookLM, re-uploads
# - Unchanged files → skips
# Designed to run on a schedule or manually

NOTEBOOK_ID="f2e7baf6-e0f2-4b29-93af-4f5ae09303bf"
NLM="/Users/adamstyer/.local/bin/notebooklm"
REPO="/Users/adamstyer/Documents/rancho-moonrise"
TRACKER="$REPO/.notebooklm-uploaded"
TIMESTAMPS="$REPO/.notebooklm-timestamps"
LOG="$REPO/.notebooklm-sync.log"

# Set active notebook
$NLM use $NOTEBOOK_ID > /dev/null 2>&1

# Ensure tracker files exist
touch $TRACKER
touch $TIMESTAMPS

echo "$(date '+%Y-%m-%d %H:%M:%S') — Sync started" >> "$LOG"
echo "🔍 Scanning for new and modified files..."

new_count=0
updated_count=0
skipped_count=0
failed_count=0

for folder in deal brand; do
  dir="$REPO/$folder"
  if [ ! -d "$dir" ]; then continue; fi

  for file in "$dir"/*; do
    [ -f "$file" ] || continue
    filename=$(basename "$file")

    # Skip files under 1500 bytes — NotebookLM rejects thin sources
    filesize=$(stat -f "%z" "$file")
    if [ "$filesize" -lt 1500 ]; then
      echo "  ⏭️  Too small ($filesize bytes): $filename"
      skipped_count=$((skipped_count + 1))
      continue
    fi

    # Get current file modification time (epoch seconds)
    current_mtime=$(stat -f "%m" "$file")

    # Check if file was previously uploaded
    previously_uploaded=false
    if grep -qF "$filename" "$TRACKER"; then
      previously_uploaded=true
    fi

    # Check stored timestamp
    stored_mtime=$(grep "^${filename}|" "$TIMESTAMPS" 2>/dev/null | cut -d'|' -f2)

    # Skip if unchanged
    if [ "$previously_uploaded" = true ] && [ "$stored_mtime" = "$current_mtime" ]; then
      echo "  ⏭️  Unchanged: $filename"
      skipped_count=$((skipped_count + 1))
      continue
    fi

    # MODIFIED FILE — delete old version from NotebookLM first
    if [ "$previously_uploaded" = true ]; then
      echo "  🗑️  Deleting old version: $filename"
      $NLM source delete-by-title "$filename" -y > /dev/null 2>&1
      if [ $? -eq 0 ]; then
        echo "  ✅ Old version deleted"
      else
        echo "  ⚠️  Could not delete old version (may not exist). Uploading anyway."
      fi
      echo "  🔄 Re-uploading: $filename"
      action="updated"
    else
      echo "  ⬆️  New: $filename"
      action="new"
    fi

    # Upload to NotebookLM
    $NLM source add "$file" --json > /dev/null 2>&1

    if [ $? -eq 0 ]; then
      # Add to tracker if new
      if [ "$action" = "new" ]; then
        echo "$filename" >> "$TRACKER"
        new_count=$((new_count + 1))
        echo "  ✅ Uploaded: $filename"
        echo "$(date '+%Y-%m-%d %H:%M:%S') — NEW: $filename" >> "$LOG"
      else
        updated_count=$((updated_count + 1))
        echo "  ✅ Re-uploaded: $filename"
        echo "$(date '+%Y-%m-%d %H:%M:%S') — UPDATED: $filename" >> "$LOG"
      fi

      # Update timestamp (remove old entry, add new)
      grep -v "^${filename}|" "$TIMESTAMPS" > "${TIMESTAMPS}.tmp" 2>/dev/null
      mv "${TIMESTAMPS}.tmp" "$TIMESTAMPS"
      echo "${filename}|${current_mtime}" >> "$TIMESTAMPS"
    else
      failed_count=$((failed_count + 1))
      echo "  ❌ Failed: $filename"
      echo "$(date '+%Y-%m-%d %H:%M:%S') — FAILED: $filename" >> "$LOG"
    fi
  done
done

echo ""
echo "✅ Sync complete."
echo "   📊 New: $new_count | Updated: $updated_count | Unchanged: $skipped_count | Failed: $failed_count"
echo "$(date '+%Y-%m-%d %H:%M:%S') — Sync complete. New: $new_count | Updated: $updated_count | Unchanged: $skipped_count | Failed: $failed_count" >> "$LOG"
