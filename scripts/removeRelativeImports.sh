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
            
            
            if [ "$(basename "$import")" = "$(basename "$(dirname "$import")")" ]; then
                # if the last two parts of the import are the same then remove the last part
                d_import=$(dirname "$import")
                # calculate the absolute path of the import
                absolute=$(realpath "$directory/$d_import")
            else
                # calculate the absolute path of the import
                absolute=$(realpath "$directory/$import")
            fi

        
            if [ -f "$absolute" ]; then
                # this refers to a file not the folder then skip it
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
