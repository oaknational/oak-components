# Architecture

**Project:** Oak Components (`@oaknational/oak-components`)
**Purpose:** React component library for Oak National Academy applications

---

## Overview

Oak Components is a React component library providing themed, accessible UI components for Oak applications. It follows Atomic Design principles (atoms → molecules → organisms) and uses styled-components for theming.

## Component Hierarchy

```text
src/components/
├── atoms/           # Base building blocks (OakBox, OakFlex, OakIcon, etc.)
├── molecules/       # Combinations of atoms (OakButton, OakLink, etc.)
├── organisms/       # Complex components (OakPupilJourneyLayout, etc.)
│   ├── pupil/       # Pupil-facing components
│   ├── teacher/     # Teacher-facing components
│   └── create/      # Content creation components
└── CopyPasteThisComponent/  # Template for new components
```

### Atom Rules

- Can import other atoms
- Imports from molecules/organisms forbidden
- Generic, unstyled
- No embedded logic or state

### Molecule Rules

- Can import atoms and other molecules
- Imports from organisms forbidden
- Generic, styled
- No embedded logic or state

### Organism Rules

- Can import atoms, molecules, and occasionally organisms
- Context-specific (pupil, teacher, create)
- May contain logic and state
- May have sub-components

### Naming Conventions

- **`Oak*`** - Public API components, exported for consumers (e.g., `OakButton`, `OakBox`)
- **`Internal*`** - Implementation details, not exported (e.g., `InternalButton`, `InternalCheckBox`)

### Component Template

Use `src/components/CopyPasteThisComponent/` as a template for new components.

## Styling System

### Design Tokens

All styling uses design tokens from the theme:

```typescript
import { OakThemeProvider, oakDefaultTheme } from "@oaknational/oak-components";

// In app layout
<OakThemeProvider theme={oakDefaultTheme}>
  {children}
</OakThemeProvider>
```

### Token Categories

- **Colors**: `$color`, `$background`, semantic tokens (e.g., `text-primary`, `bg-decorative1-main`)
- **Spacing**: `$ma`, `$pa`, `$mv`, `$ph`, etc. with values like `spacing-8`
- **Typography**: Font sizes, weights, line heights
- **Borders**: Border styles, radii

### Style Utilities

Pure functions in `src/styles/utils/` generate CSS from props:

```typescript
// colorStyle, spacingStyle, flexStyle, etc.
const StyledComponent = styled.div<ColorStyleProps & SpacingStyleProps>`
  ${colorStyle}
  ${spacingStyle}
`;
```

## Key Components

### Layout Primitives

- `OakBox` - Base container with all style props
- `OakFlex` - Flexbox layout container
- `OakGrid` / `OakGridArea` - CSS Grid layout

### Typography

- `OakHeading` - Semantic headings (h1-h6)
- `OakP` - Paragraph text
- `OakSpan` - Inline text

### Interactive

- `OakPrimaryButton`, `OakSecondaryButton` - Action buttons
- `OakLink`, `OakBackLink` - Navigation
- `OakAccordion` - Expandable sections

### Form Elements

- `OakTextInput`, `OakTextArea` - Text input
- `OakCheckBox`, `OakRadio` - Selection inputs
- `OakFieldset`, `OakForm` - Form structure

## Testing Strategy

See [testing-strategy.md](./testing-strategy.md) for full details.

**Test priority:**

1. Pure function unit tests (style utilities)
2. Component behavior tests (interactions, accessibility)
3. Snapshot tests (structural regression)
4. Storybook visual tests

## Storybook

Primary development and documentation environment:

```bash
npm run storybook
```

Each component has:

- `ComponentName.tsx` - Implementation
- `ComponentName.stories.tsx` - Storybook stories
- `ComponentName.test.tsx` - Jest tests

## Build Output

The library builds to:

- `dist/cjs/` - CommonJS modules
- `dist/esm/` - ES modules
- `dist/types.d.ts` - TypeScript declarations

## Key Dependencies

- **React 18** - UI framework
- **styled-components** - CSS-in-JS theming
- **Next.js 14+** - Primary consumer framework (peer dependency)
- **next-cloudinary** - Image optimization

## Quick Reference

### Quality Gates

```bash
npm run build
npm run check-types
npm run lint
npm run format:check
npm run test:ci
```

### Development

```bash
npm run storybook      # Local development
npm run test           # Watch mode testing
npm run publish:local  # Publish to yalc for local testing
```
