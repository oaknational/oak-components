<img alt="Oak National Academy" src="https://github.com/oaknational/oak-components/assets/122096/3b34c863-ff79-403a-a38e-0c997003909c" width="300" />

# Oak Components

## Overview

This is a React Typescript components library which supports React and Next applications produced by [Oak National Academy](https://www.thenational.academy/). A Storybook for the components can be found [here](https://lively-meringue-8ebd43.netlify.app/) please consult 1Password for access.

## Installation

This library is suitable for use in an app using React 18 and Next.js 13+

You can install it using `npm i @oaknational/oak-components` or any other package manager that supports the NPM registry.

## Development

1. Copy the example env config `cp .env.example .env`
2. Ask a colleague for the values to populate `.env`
3. run `nvm use`
4. run `npm install`
5. To view the storybook run `npm run storybook`

## Structure

We're trying to follow the tenets of "Atomic design". [Brad Frost's book](https://atomicdesign.bradfrost.com/) is
a great resource if you're just starting out building your first component for this library. It's also a great reference
if you're in doubt as to where a component belongs (it can be a little fuzzy at times!).

Components are organised into a three tier hierarchical structure applying the following rules:

### Atoms

- Can import other atoms
- Imports from molecules and organisms are forbidden!
- Generic
- Unstyled
- Avoid embedded logic and state
- No sub-components
  (eg. `Box`)

### Molecules

- Imports from atoms components and other molecules
- Imports from organisms are forbidden!
- Generic
- Styled
- Avoid embedded logic and state
- No sub-components
  (eg. `IconButton`)

### Organisms

- Imports from atoms, molecules and occasionally organisms
- Combines multiple molecules together
- Applicable to a limited range of contexts which might occur in multiple apps
- Styled
- May contain embedded logic or state
- May be split into sub-components
  (eg. `SchoolInputForm`)

  NB. these rules are a work in progress. Modifications may be required as the library builds.
