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
            
            absolute=$(realpath "$directory/$import")
            if [ -f "$absolute" ]; then
                echo "cannot find file $absolute for $import"
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
