# Oak Components - Project Summary

## Purpose

Oak Components (`@oaknational/oak-components`) is a **React component library** providing themed, accessible UI components for Oak National Academy applications.

## What It Does

- Provides reusable React components following Atomic Design principles
- Implements Oak's design system with theming support
- Ensures accessibility (WCAG 2.1 AA) across all components
- Supports Next.js applications with SSR-compatible styled-components

## Who Uses It

- **Oak Web Application (OWA)** - Primary consumer
- **Other Oak Applications** - Any Oak project needing consistent UI
- **Third-party Oak Partners** - Via npm package

## How It Works

### Component Hierarchy

- **Atoms** - Basic building blocks (Box, Flex, Icon, Typography)
- **Molecules** - Combinations of atoms (Button, Link, Accordion)
- **Organisms** - Complex compositions (Layouts, Forms, Quizzes)

### Theming

Components consume theme tokens via styled-components:

```typescript
import { OakThemeProvider, oakDefaultTheme } from "@oaknational/oak-components";

<OakThemeProvider theme={oakDefaultTheme}>
  <OakPrimaryButton>Click me</OakPrimaryButton>
</OakThemeProvider>
```

## Development Workflow

1. **Develop in Storybook** - Build components in isolation
2. **Test with Jest/RTL** - Behavior and snapshot tests
3. **Document with Stories** - Each component has stories
4. **Publish to npm** - Semantic release on merge to main

## Quality Standards

- All components must be accessible (a11y addon in Storybook)
- All styling via design tokens (no arbitrary values)
- All components have tests and stories
- Semantic versioning via conventional commits

## Impact

- **Consistency** - Unified look and feel across Oak applications
- **Accessibility** - Built-in a11y for all components
- **Speed** - Teams use proven components instead of building from scratch
- **Quality** - Professional design system maintained centrally
