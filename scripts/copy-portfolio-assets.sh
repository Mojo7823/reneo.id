#!/bin/bash

# Script to copy customer photos from Photos directory to public/portfolio
# Handles naming variations: customer_*, Customer_*, cuustomer_*
# Requirements: 6.1, 6.2, 6.4, 6.5

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
PHOTOS_DIR="$PROJECT_ROOT/Photos"
PUBLIC_PORTFOLIO_DIR="$PROJECT_ROOT/public/portfolio"

echo "=== Portfolio Asset Copy Script ==="
echo "Source: $PHOTOS_DIR"
echo "Destination: $PUBLIC_PORTFOLIO_DIR"
echo ""

# Create the portfolio directory if it doesn't exist
mkdir -p "$PUBLIC_PORTFOLIO_DIR"

# Counter for statistics
total_folders=0
total_images=0

# Find all customer folders (handling naming variations)
# Patterns: customer_*, Customer_*, cuustomer_*
for folder in "$PHOTOS_DIR"/customer_* "$PHOTOS_DIR"/Customer_* "$PHOTOS_DIR"/cuustomer_*; do
    # Skip if no match (glob didn't expand)
    [ -d "$folder" ] || continue
    
    folder_name=$(basename "$folder")
    
    # Normalize folder name to lowercase for destination
    # This ensures consistent naming in public folder
    normalized_name=$(echo "$folder_name" | tr '[:upper:]' '[:lower:]')
    
    # Fix typo: cuustomer -> customer
    normalized_name=$(echo "$normalized_name" | sed 's/cuustomer/customer/')
    
    dest_folder="$PUBLIC_PORTFOLIO_DIR/$normalized_name"
    
    echo "Processing: $folder_name -> $normalized_name"
    
    # Create destination folder
    mkdir -p "$dest_folder"
    
    # Copy all image files (jpg, jpeg, png, webp)
    image_count=0
    shopt -s nullglob
    for img in "$folder"/*.jpg "$folder"/*.jpeg "$folder"/*.png "$folder"/*.webp "$folder"/*.JPG "$folder"/*.JPEG "$folder"/*.PNG "$folder"/*.WEBP; do
        [ -f "$img" ] || continue
        
        img_name=$(basename "$img")
        cp "$img" "$dest_folder/$img_name"
        ((image_count++)) || true
    done
    shopt -u nullglob
    
    if [ $image_count -gt 0 ]; then
        echo "  Copied $image_count images"
        ((total_folders++)) || true
        ((total_images += image_count)) || true
    else
        echo "  No images found, removing empty folder"
        rmdir "$dest_folder" 2>/dev/null || true
    fi
done

echo ""
echo "=== Summary ==="
echo "Processed $total_folders customer folders"
echo "Copied $total_images total images"
echo "Destination: $PUBLIC_PORTFOLIO_DIR"
