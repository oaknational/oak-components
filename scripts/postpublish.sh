echo "postpublish"
git add package.json
git commit -m "chore: bump version" --no-verify
git tag v$(node -p "require('./package.json').version") 
git push --follow-tags --no-verify