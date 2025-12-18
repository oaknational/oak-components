# Phase 2: Theme Generator Implementation Plan

> **Self-contained reference for continuing work in a new session**

## Quick Resume

To continue Phase 2 work:

1. Read this document fully
2. Check [theme-input-examples.appendix.md](./theme-input-examples.appendix.md) for input type details
3. Run `npm test` to verify current state
4. Pick up from "Remaining Work" section below

---

## Context

### What Was Built in Phase 1 (Complete)

- Token registry: 16 semantic tokens (`custom-surface-primary`, etc.)
- `CustomThemeProvider`: React component that generates CSS custom properties
- `parseColor` integration: Recognizes `custom-*` tokens, returns CSS var references
- Full test coverage and Storybook stories

### What Phase 2 Adds

A `generateTheme()` function that constructs a **Full Theme** (see [ADR-0002 Nomenclature](../../docs/architecture/decision-records/0002-custom-semantic-tokens.adr.md#nomenclature)) from minimal input (**Brand Colors**).

---

## Key Architectural Insight: Intent vs Artifact

During implementation, we discovered that theme types must be split into two domains:

| Concept | Type | What It Is |
|---------|------|------------|
| **Intent** | Various (see below) | What consumer provides |
| **Artifact** | `GeneratedTheme` | Complete, constructed theme |

**Input Spectrum** (from minimal to explicit):

- **Level A**: 1-2 brand colors → generates complete theme
- **Level B**: Partial theme (e.g., surfaces only) → derives missing tokens
- **Level C**: Single mode (light only) → generates dark mode
- **Level D**: Full light + dark → uses as-is
- **Level E**: Light + dark + contrast variants → full system theme
- **Level F**: Named theme with `data-theme` attribute

See [theme-input-examples.appendix.md](./theme-input-examples.appendix.md) for complete examples.

---

## Current Implementation Status

### Files Created

| File | Status | Tests |
|------|--------|-------|
| `themeTypes.ts` | ✅ | N/A (types only) |
| `colorUtils.ts` | ✅ | 21 passing |
| `contrastUtils.ts` | ✅ | 13 passing |
| `deriveTokens.ts` | ✅ | 8 passing |
| `generateTheme.ts` | ✅ | 14 passing |
| `generateTheme.stories.tsx` | ✅ | Storybook |

### Commits Made

1. **Phase 1 complete**: Token registry + CustomThemeProvider
2. **Type domain refactor** (`5ae38e2c`): Introduced `BrandColors`, `GeneratedTheme` types

---

## Remaining Work

### Commit 2: File Reorganization (Next)

Move all custom theme code into `custom-themes/` subdirectory:

```text
src/styles/theme/
├── color.ts              # Core Oak (unchanged)
├── spacing.ts            # Core Oak (unchanged)
└── custom-themes/        # NEW: All Phase 2+ code
    ├── index.ts
    ├── themeTypes.ts
    ├── colorUtils.ts
    ├── contrastUtils.ts
    ├── deriveTokens.ts
    ├── generateTheme.ts
    └── *.test.ts
```

Also move `customSemanticTokens.ts` into this folder.

**Steps:**

1. Create `custom-themes/` directory
2. Move files
3. Update imports
4. Update barrel exports
5. Run quality gates
6. Commit

### Commit 3: Finalization

1. Verify Storybook stories work
2. Update index exports
3. Final quality gates
4. Push to remote

---

## Core Types (Reference)

> See [ADR-0002 Nomenclature](../../docs/architecture/decision-records/0002-custom-semantic-tokens.adr.md#nomenclature) for term definitions.

```typescript
// Intent: Brand Colors (minimal brand information)
interface BrandColors {
  primary: string;
  secondary?: string;
}

// Artifact: Token Set (one mode's colors, all tokens guaranteed)
interface GeneratedThemeColors {
  surface: { primary: string; secondary: string; accent: string; inverse: string };
  text: { primary: string; muted: string; inverse: string; accent: string };
  border: { subtle: string; strong: string; accent: string };
  interactive: { primary: string; hover: string; focus: string };
  shadow: { subtle: string; strong: string };
}

// Artifact: Full Theme (complete theme matrix)
interface GeneratedTheme {
  light: GeneratedThemeColors;       // Token Set for light mode
  dark: GeneratedThemeColors;        // Token Set for dark mode
  highContrastLight?: GeneratedThemeColors;
  highContrastDark?: GeneratedThemeColors;
}
```

---

## API (Reference)

```typescript
function generateTheme(
  brand: BrandColors,
  options?: {
    contrast?: "AA" | "AAA";
    includeHighContrast?: boolean;
    colorBlindSafe?: boolean; // Phase 3
  }
): {
  theme: GeneratedTheme;
  warnings: string[];
}
```

---

## Quality Gates

```bash
npm run check  # Runs: type-check, lint, format:check, test:ci
```

All 1061 tests must pass.

---

## Related Documents

- [arbitrary-theme-support.plan.md](./arbitrary-theme-support.plan.md) - Master plan
- [theme-input-examples.appendix.md](./theme-input-examples.appendix.md) - Input type examples
- [0002-custom-semantic-tokens.adr.md](../../docs/architecture/decision-records/0002-custom-semantic-tokens.adr.md) - Architecture decision

## RULES

- Follow TDD approach
- No non-null assertions (per RULES.md)
- All functions pure with no side effects
- Full JSDoc documentation
