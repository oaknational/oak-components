#! /bin/bash

echo "pre-publish"

if [ "$CI" = "true" ]; then
  echo "Skipping pre-publish checks on CI"
  exit 0
fi;

branch="$(git rev-parse --abbrev-ref HEAD)"

if [ "$branch" != "main" ]; then
  echo "Error: You must be on the main branch to publish"
  exit 1
fi

npm run test:ci
npm run build
