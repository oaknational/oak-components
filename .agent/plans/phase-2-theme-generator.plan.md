# Phase 2: Theme Generator Implementation Plan

> **Status**: In Progress (Type Architecture Refinement)
> **Depends on**: Phase 1 (complete)
> **Last updated**: 2025-12-18

## Goal

Generate accessible theme configurations from brand colors with WCAG 2.2 AA/AAA validation.

---

## Key Discovery: Intent vs Artifact

> [!IMPORTANT]
> The input and output are fundamentally different types of things.

### The Conceptual Model

| Concept | Type Name | What It Is |
|---------|-----------|------------|
| **Input** | `BrandColors` | Consumer's intent - 1-2 hex colors expressing brand identity |
| **Output** | `GeneratedTheme` | Constructed artifact - complete, usable theme with all 16 tokens |

The generator **constructs a new artifact** from brand intent. It does not "complete" partial input.

```typescript
// Intent: what the consumer wants to express
interface BrandColors {
  primary: string;      // Required: primary brand color
  secondary?: string;   // Optional: accent color
}

// Artifact: what gets constructed
interface GeneratedTheme {
  surface: { primary: string; secondary: string; accent: string; inverse: string };
  text: { primary: string; muted: string; inverse: string; accent: string };
  border: { subtle: string; strong: string; accent: string };
  interactive: { primary: string; hover: string; focus: string };
  shadow: { subtle: string; strong: string };
}
```

### The Generator Function

```typescript
function generateTheme(
  brand: BrandColors,
  options?: GenerateThemeOptions
): {
  theme: GeneratedTheme;      // Complete artifact
  warnings: string[];         // Adjustments made
}
```

### CustomThemeProvider

Accepts either:

- `GeneratedTheme` from the generator (typical path)
- Manual color overrides for advanced users (sparse, optional properties)

---

## Deliverables

1. `generateTheme()` - constructs theme from brand colors
2. `BrandColors` type - consumer intent
3. `GeneratedTheme` type - constructed artifact
4. Color/contrast utilities
5. Full test coverage
6. Storybook stories

---

## Implementation Order

1. ✅ `colorUtils` (21 tests)
2. ✅ `contrastUtils` (13 tests)
3. ✅ `deriveTokens` (8 tests)
4. ✅ `generateTheme` (14 tests)
5. ⏳ Introduce `BrandColors` and `GeneratedTheme` types
6. ⏳ Refactor to use new type model
7. ⏳ Update tests (no assertions needed)
8. ⏳ Storybook stories
9. ⏳ Quality gates

---

## Quality Gates

```bash
npm run build && npm run check-types && npm run lint && npm run test:ci
```
