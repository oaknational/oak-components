#! /bin/bash

# Traverse all files inside src directory
find src -type f \( -name "*.tsx" -o -name "*.ts" \) | while read -r file; do

    # Check if the file contains the pattern 'import ... from "../..."'
    # Using awk to handle multiline import statements
    imports=$(grep -E '^import.*from\s"(../.*)";$' $file | awk -F'"' '{print $2}')


    if [ -n "$imports" ]; then
        echo "File: $file"
        directory=$(dirname "$file")
        # Replace the pattern 'import ... from "../..."' with 'import ... from "..."' in the file
        for import in $imports; do
            echo "Removing $import"
            absolute=$(realpath "$directory/$import")
            alias=$(echo "$absolute" | sed 's|.*src/|@/|')
            if [ -f "$absolute" ]; then
                sed -i '' "s|\"$import\"|\"$alias\"|g" $file
            else
                echo "File not found: $absolute"
            fi
        done
    fi

done
