# Phase 2: Theme Generator Implementation Plan

> **Self-contained reference for continuing work in a new session**
> **Last Updated:** 2025-12-18

---

## Quick Resume

1. Read this document fully
2. Check current test status: `npm test`
3. Pick up from "Remaining Work" section

---

## Context

### Phase 1 (Complete)

- Token registry: 16 semantic tokens (`custom-surface-primary`, etc.)
- `CustomThemeProvider`: React component generating CSS custom properties
- `parseColor` integration: Recognizes `custom-*` tokens

### Phase 2 Goal

Generate **Full Themes** (6 Token Sets) from **Brand Colours** or **Simple Themes** using colour theory and contrast calculations.

---

## Nomenclature

See [ADR-0002](../../docs/architecture/decision-records/0002-custom-semantic-tokens.adr.md#nomenclature):

- **Brand Colours** — 1-2 input hex colours
- **Simple Theme** — Fully specified Token Set (16 tokens, one mode only)
- **Base Palette** — 3-colour foundation derived via colour theory
- **Token Set** — All 16 tokens for one mode/contrast combo
- **Full Theme** — 6 Token Sets (light/dark × 3 contrasts)
- **Named Theme** — Pre-computed Simple Theme stored with a name

---

## 🔴 Remaining Work

### UI Issues (from feedback)

| Issue | Fix |
|-------|-----|
| Palette swatches have no hex labels | Show colour blocks with hex code underneath |
| Abbreviations unclear ("Sec", "Acc", "Sub") | Use full labels: "Secondary Surface", "Text Accent", etc. |
| Primary surface not visible | Show all 4 surfaces in a row |
| Token cards lack structure | Organise by role: Surfaces row, Text row, Borders row, Interactive row, Shadows row |
| Light mode cards lack borders | Add visible border around each Token Set card |
| Click me has hover styling | Remove hover styling, only show active state on click |
| Shadows not shown in context | Use shadows on elevated cards |

### Contrast Issues (from feedback)

| Issue | Fix |
|-------|-----|
| High contrast dark identical to dark | Force more variation: exceed AAA (9:1+) for high contrast |
| Contrast calculations not used | Verify and enforce contrast in derivation |
| Low contrast too similar | Hit close to AA (4.5:1), use more muted tones |

### Named Theme Issues (from feedback)

| Issue | Fix |
|-------|-----|
| Named theme uses two colours | Input should be a **fully specified Simple Theme** (16 tokens) |
| `expandSimpleTheme()` needed | Derive other 5 Token Sets from the provided one |

### Colour-Blind Safe Issues (from feedback)

| Issue | Fix |
|-------|-----|
| Generated dynamically | Should be a **pre-computed Named Theme** |
| Supports modes×contrast | Only provide one selectable theme (no variants) |
| Minimum AAA | Pre-computed theme meets AAA |

---

## Contrast Strategy (Revised)

| Mode | Target | Method |
|------|--------|--------|
| Normal | WCAG 2.2 AA (4.5:1) | Standard derivation |
| High Contrast | **Exceed AAA (≥9:1)** | Force whites/blacks, max separation |
| Low Contrast | **Hit close to AA (4.5:1–5:1)** | Muted tones, softer transitions |

> High contrast must be **visibly different** from normal mode.
> Low contrast should feel "softer" while remaining accessible.

---

## Type Definitions (Revised)

```typescript
// Simple Theme: fully specified single mode
interface SimpleTheme {
  name: string;
  mode: "light" | "dark";
  tokens: GeneratedThemeColors;
}

// Named Theme Registry
const namedThemes: Record<string, SimpleTheme> = {
  "festive-2025": { name: "festive-2025", mode: "light", tokens: {...} },
  "colour-blind-safe": { name: "colour-blind-safe", mode: "light", tokens: {...} },
};

// Colour-Blind Safe is a standalone theme (no modes×contrast expansion)
const colorBlindSafeTheme: GeneratedThemeColors = namedThemes["colour-blind-safe"].tokens;
```

---

## API (Revised)

```typescript
// Generate from Brand Colours (with expansion)
function generateTheme(
  brand: BrandColors,
  options?: { contrast?: "AA" | "AAA" }
): GenerateThemeResult

// Expand Simple Theme to Full Theme
function expandSimpleTheme(
  simple: SimpleTheme
): GeneratedTheme

// Get pre-computed Named Theme
function getNamedTheme(
  name: "festive-2025" | "colour-blind-safe"
): SimpleTheme | GeneratedTheme
```

---

## Storybook Demonstration (Revised)

### ThemeShowcase Layout

```text
┌────────────────────┬────────────────────┬────────────────────┬────────────────────┐
│ One Colour         │ Two Colours        │ Festive 2025       │ Colour-Blind Safe  │
├────────────────────┼────────────────────┼────────────────────┼────────────────────┤
│ Input: [■ #287c34] │ Input: [■ #1e40af] │ Input: Simple Theme│ Pre-computed       │
│                    │        [■ #ea580c] │ (fully specified)  │ Named Theme        │
├────────────────────┼────────────────────┼────────────────────┼────────────────────┤
│ Base Palette:      │ Base Palette:      │ N/A (tokens given) │ N/A (fixed)        │
│ [■ #287c34]        │ [■ #1e40af]        │                    │                    │
│ [■ #7c3498]        │ [■ #ea580c]        │                    │                    │
│ [■ #a86432]        │ [■ #16a085]        │                    │                    │
├────────────────────┼────────────────────┼────────────────────┼────────────────────┤
│ Light (6 sets)     │ Light (6 sets)     │ Light (6 sets)     │ Single theme       │
│ Dark               │ Dark               │ Dark               │ (no expansion)     │
│ HC-Light           │ HC-Light           │ HC-Light           │                    │
│ HC-Dark            │ HC-Dark            │ HC-Dark            │                    │
│ LC-Light           │ LC-Light           │ LC-Light           │                    │
│ LC-Dark            │ LC-Dark            │ LC-Dark            │                    │
└────────────────────┴────────────────────┴────────────────────┴────────────────────┘
```

### Token Set Card Layout (Revised)

Each Token Set card with border:

```text
┌─────────────────────────────────────────────────────────┐
│ Light Mode (Normal Contrast)                            │
├─────────────────────────────────────────────────────────┤
│ SURFACES                                                │
│ [■ Primary]  [■ Secondary]  [■ Accent]  [■ Inverse]     │
│  #ffffff      #f5e0d0        #e0d5f0     #1a1a1a        │
├─────────────────────────────────────────────────────────┤
│ TEXT                                                    │
│ Primary text    Muted text    Accent text    Inverse    │
├─────────────────────────────────────────────────────────┤
│ BORDERS                                                 │
│ ┌─Subtle─┐  ┌─Strong─┐  ┌─Accent─┐                      │
├─────────────────────────────────────────────────────────┤
│ INTERACTIVE                                             │
│ [Click me]  [Focus demo]                                │
├─────────────────────────────────────────────────────────┤
│ SHADOWS                                                 │
│ ┌────────┐  ┌────────┐                                  │
│ │ Subtle │  │ Strong │  (elevated cards)                │
│ └────────┘  └────────┘                                  │
└─────────────────────────────────────────────────────────┘
```

### Interactive Elements (Revised)

- **Click me** — No hover styling. On click: changes colour (lighter in dark mode, darker in light mode)
- **Focus demo** — Static focus ring display

---

## Implementation Steps

1. **Update contrast derivation** — Enforce 9:1+ for high contrast, 4.5–5:1 for low
2. **Create Simple Theme type** — Fully specified 16 tokens
3. **Create Named Theme registry** — festive-2025, colour-blind-safe
4. **Implement `expandSimpleTheme()`** — Generate 5 other Token Sets from one
5. **Pre-compute colour-blind-safe** — Store as Named Theme with AAA
6. **Update Storybook UI** — Full labels, hex codes, organised rows, borders
7. **Fix Click me button** — Remove hover, use active state with colour change
8. **Add shadow context demos** — Elevated cards

---

## Quality Gates

```bash
npm run check  # type-check, lint, format:check, test:ci
```

---

## RULES

- WCAG 2.2 AA minimum for all themes
- WCAG 2.2 AAA minimum for colour-blind-safe theme
- High contrast exceeds AAA (≥9:1) for visible distinction
- Low contrast close to AA (4.5–5:1) with muted tones
- No non-null assertions
- All functions pure
- TDD approach
