#!/bin/zsh

# Rancho Moonrise — NotebookLM Sync
# Uploads any new files in /deal and /brand to the NotebookLM notebook
# Run this after dropping new documents into either folder

NOTEBOOK_ID="f2e7baf6-e0f2-4b29-93af-4f5ae09303bf"
NLM="/Users/adamstyer/.local/bin/notebooklm"
REPO="/Users/adamstyer/Documents/rancho-moonrise"
TRACKER="$REPO/.notebooklm-uploaded"

# Set active notebook
$NLM use $NOTEBOOK_ID

# Ensure tracker file exists
touch $TRACKER

echo "🔍 Scanning for new files..."

for folder in deal brand; do
  dir="$REPO/$folder"
  if [ ! -d "$dir" ]; then continue; fi

  for file in "$dir"/*; do
    [ -f "$file" ] || continue
    filename=$(basename "$file")

    # Skip if already uploaded
    if grep -qF "$filename" "$TRACKER"; then
      echo "  ⏭️  Already uploaded: $filename"
      continue
    fi

    echo "  ⬆️  Uploading: $filename"
    $NLM source add "$file" --json

    if [ $? -eq 0 ]; then
      echo "$filename" >> "$TRACKER"
      echo "  ✅ Done: $filename"
    else
      echo "  ❌ Failed: $filename"
    fi
  done
done

echo ""
echo "✅ Sync complete."
