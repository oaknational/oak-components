#! /bin/bash

echo "pre-publish"

branch="$(git rev-parse --abbrev-ref HEAD)"

if [ "$branch" != "main" ]; then
  echo "Error: You must be on the main branch to publish"
  exit 1
fi

# If we're not on CI, run the tests
if [ "$CI" != "true" ]; then
  npm run test:ci
fi;

npm run build
