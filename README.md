# Oak Components

## Overview

This is a React Typescript components library which supports React and Next applications produced by [Oak National Academy](https://www.thenational.academy/). A storybook for the components can be found [here](https://lively-meringue-8ebd43.netlify.app/) please consult OnePassword for access.

## Usage

TODO: Instructions for how to add Oak Components to a React App

## Install for development

1. run `nvm use`
2. run `npm install`
3. To view the storybook run `npm run storybook`

## Structure

Components are organised into a three tier hierarchical structure applying the following rules:

### Base components

- Imports from other base components
- Imports from Ui and Integrated components are forbidden!
- Generic
- Unstyled
- Avoid embedded logic and state
- No sub-components
  (eg. Box)

### Ui components

- Imports from base components and Ui components
- Imports from Integrated components are forbidden!
- Generic
- Styled
- Avoid embedded logic and state
- No sub-components
  (eg. IconButton)

### Integrated components

- Imports from base components, Ui components and occasionally Integrated components
- Combines multiple Ui components together
- Applicable to a limited range of contexts which might occur in multiple apps
- Styled
- May contain embedded logic or state
- May be split into sub-components
  (eg. SchoolInputForm)

  NB. these rules are a work in progress. Modifications may be required as the library builds.
