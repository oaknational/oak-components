# ADR-0001: Core Architecture (Atomic Design)

**Date:** 2024-01-01 (retrospective)
**Status:** Accepted

## Context

Oak Components needs a clear organizational structure for UI components that:

1. Enables consistent component composition
2. Prevents circular dependencies
3. Makes component complexity predictable
4. Supports a large library of components

## Decision

We adopt **Atomic Design** principles with a three-tier component hierarchy:

### Atoms

Base building blocks with no dependencies on other component tiers.

- Can import other atoms
- **Cannot** import molecules or organisms
- Unstyled, generic primitives
- No embedded logic or state

Examples: `OakBox`, `OakFlex`, `OakIcon`, `OakHeading`, `OakP`

### Molecules

Combinations of atoms that form functional units.

- Can import atoms and other molecules
- **Cannot** import organisms
- Styled, generic components
- Minimal logic or state

Examples: `OakPrimaryButton`, `OakLink`, `OakAccordion`

### Organisms

Complex components combining atoms and molecules for specific contexts.

- Can import atoms, molecules, and occasionally other organisms
- Context-specific (organized by domain: pupil, teacher, create)
- May contain embedded logic and state
- May have sub-components

Examples: `OakPupilJourneyLayout`, `OakQuizMatch`, `OakDownloadsAccordion`

### Naming Conventions

**`Internal*` prefix** - Components prefixed with `Internal` are implementation details:

- Not exported from the package for consumer use
- Used as building blocks within the library
- Examples: `InternalButton`, `InternalCheckBox`, `InternalLink`

**`Oak*` prefix** - Public API components for consumer use:

- Exported from the package
- Documented in Storybook
- Examples: `OakPrimaryButton`, `OakBox`, `OakAccordion`

### Component Template

Use `src/components/CopyPasteThisComponent/` as a template for new components. It demonstrates:

- Props type definition with style props
- styled-components CSS patterns
- TSDoc documentation structure

### Directory Structure

```text
src/components/
├── atoms/           # Primitives
├── molecules/       # Functional units
└── organisms/       # Complex compositions
    ├── pupil/       # Pupil-facing
    ├── teacher/     # Teacher-facing
    └── create/      # Content creation
```

## Consequences

### Benefits

- **Clear dependencies** - Predictable import rules prevent circular deps
- **Scalability** - Easy to add new components at the right level
- **Reusability** - Atoms and molecules are highly reusable
- **Testability** - Simpler components are easier to test in isolation

### Trade-offs

- **Classification ambiguity** - Some components don't fit cleanly into one tier
- **Learning curve** - Contributors must understand the hierarchy
- **Occasional violations** - Organisms sometimes need to import other organisms

## Related

- [Architecture Overview](../../.agent/architecture.md)
- Brad Frost's [Atomic Design](https://atomicdesign.bradfrost.com/)
