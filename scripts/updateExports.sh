#! /bin/bash


# Function to recursively traverse folders
traverse_folders() {
    echo "$1"
    for dir in "$1"/*; do
        if [ -d "$dir" ]; then
            traverse_folders "$dir"
        fi
    done
}

# Function to check if a folder contains subfolders starting with "Oak"
contains_oak_subfolders() {
    for subfolder in "$1"/*; do
        if [ -d "$subfolder" ] && [[ "$(basename "$subfolder")" == Oak* ]]; then
            return 0
        fi
    done
    return 1
}

# Function to generate TypeScript exports for subfolders starting with "Oak"
generate_exports() {
    for subfolder in "$1"/*; do
        if [ -d "$subfolder" ] && [[ "$(basename "$subfolder")" == Oak* ]]; then
            subfolder_name=$(basename "$subfolder")
            echo "export * from \"./$subfolder_name\";" >> "$2"
        fi
    done
}

echo "Updating exports..."

# Main script logic
components_dir="./src/components"

traverse_folders "$components_dir" | while read -r folder; do
    # echo "Checking $folder"
    if contains_oak_subfolders "$folder"; then
        index_file="$folder/index.ts"
        if [ -f "$index_file" ]; then
            > "$index_file"
            # echo "Cleared $index_file"
        else
            touch "$index_file"
            # echo "Created $index_file"
        fi
        generate_exports "$folder" "$index_file"
    fi
done





