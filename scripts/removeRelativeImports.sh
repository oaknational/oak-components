#! /bin/bash

# Traverse all files inside src directory
find src -type f \( -name "*.tsx" -o -name "*.ts" \) | while read -r file; do

    # Check if the file contains the pattern 'import ... from "../..."'
    imports=$(grep -E '^import.*from\s"(../.*)";$' $file | awk -F'"' '{print $2}')

    if [ -z $imports ]; then
        imports=$(grep -E '^}\sfrom\s"(../.*)";$' $file | awk -F'"' '{print $2}')
    fi

    if [ -n "$imports" ]; then
        echo "File: $file"
        directory=$(dirname "$file")
        # Replace the pattern 'import ... from "../..."' with 'import ... from "..."' in the file
        for import in $imports; do
            
            # if the last two parts of absolute are the same then remove the last part
            if [ "$(basename "$import")" = "$(basename "$(dirname "$import")")" ]; then
                absolute=$(realpath "$directory/$(dirname import)")
                echo "absolute: $absolute , import: $import, directory: $directory"
            else
                absolute=$(realpath "$directory/$import")
            fi

        
            if [ -f "$absolute" ]; then
                # this refers to the file not the folder remove the final part of the path
                echo "$absolute refers to  file not a folder"
                continue
            fi

            if [ ! -d "$absolute" ]; then
                echo "$absolute does not exist"
                continue
            fi
                
            if [[ "$absolute" != *"/src"* ]]; then
                echo "cannot import file outside src directory for $import"
                continue
            fi

            alias=$(echo "$absolute" | sed 's|.*src/|@/|')

            if [ -z "$alias" ]; then
                echo "cannot alias import for $import"
                continue
            fi

            echo "Aliasing $import to $alias"
            sed -i '' "s|\"$import\"|\"$alias\"|g" $file
            
        done
    fi

done
