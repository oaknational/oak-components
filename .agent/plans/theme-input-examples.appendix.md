# Theme Input Specification Appendix

> Reference document for all valid theme input types.
> See [ADR-0002 Nomenclature](../../docs/architecture/decision-records/0002-custom-semantic-tokens.adr.md#nomenclature) for term definitions.

## Input Spectrum

The theme system accepts a **spectrum of inputs** from minimal to fully explicit:

| Level | Input | Output | Nomenclature |
|-------|-------|--------|--------------|
| **A** | 1-2 hex colors | Full Theme | **Brand Colors** → **Generated Theme** |
| **B** | Some token categories | Full Theme | **Partial Theme** (tokens) → **Generated Theme** |
| **C** | Single mode (light only) | Full Theme | **Partial Theme** (mode) → **Generated Theme** |
| **D** | Light + dark | Full Theme | Manual **Full Theme** (no generation) |
| **E** | Light + dark + contrast variants | Full Theme | Manual **Full Theme** with contrast |
| **F** | Custom-named theme | Named Theme | **Named Theme** (Simple or Full) |

---

## Level A: Brand Colors Only

**Input:** 1-2 hex colors
**Output:** Complete `GeneratedTheme` with light, dark, and optionally high-contrast modes

```typescript
// Single color
const result = generateTheme({ primary: "#287c34" });

// Two colors
const result = generateTheme({ 
  primary: "#287c34",
  secondary: "#7c2834" 
});

// With options
const result = generateTheme(
  { primary: "#287c34" },
  { contrast: "AAA", includeHighContrast: true }
);
```

---

## Level B: Partial Theme

**Input:** Some token categories specified
**Output:** Missing tokens derived from provided values

```typescript
const partialConfig = {
  light: {
    surface: { primary: "#ffffff" },
    text: { primary: "#1a1a1a" },
    // All other tokens derived automatically
  },
  dark: {
    surface: { primary: "#1a1a1a" },
    text: { primary: "#f0f0f0" },
  },
};
```

**Derivation rules:**

- `surface.secondary` → `surface.primary` shifted 5% lightness
- `text.muted` → `text.primary` at reduced contrast
- `interactive.primary` → first chromatic color found
- See master plan for full derivation table

---

## Level C: Single Mode (Partial Theme)

> **Note:** A single-mode input is a **Partial Theme** containing only one mode. The other mode is generated automatically.

**Input:** Only `light` mode specified
**Output:** `dark` mode generated automatically

```typescript
const lightOnlyConfig = {
  light: {
    surface: { primary: "#ffffff", secondary: "#f5f5f5", accent: "#e8f4e8", inverse: "#1a1a1a" },
    text: { primary: "#1a1a1a", muted: "#666666", inverse: "#f0f0f0", accent: "#287c34" },
    border: { subtle: "#e0e0e0", strong: "#1a1a1a", accent: "#287c34" },
    interactive: { primary: "#287c34", hover: "#1f5f28", focus: "#4a9f54" },
    shadow: { subtle: "rgba(0,0,0,0.08)", strong: "rgba(0,0,0,0.2)" },
  },
  // dark mode auto-generated
};
```

---

## Level D: Full Light + Dark

**Input:** Both modes explicitly specified
**Output:** Themes used as-is (no derivation)

```typescript
const fullConfig = {
  light: {
    surface: { primary: "#ffffff", secondary: "#f5f5f5", accent: "#e8f4e8", inverse: "#1a1a1a" },
    text: { primary: "#1a1a1a", muted: "#666666", inverse: "#f0f0f0", accent: "#287c34" },
    border: { subtle: "#e0e0e0", strong: "#1a1a1a", accent: "#287c34" },
    interactive: { primary: "#287c34", hover: "#1f5f28", focus: "#4a9f54" },
    shadow: { subtle: "rgba(0,0,0,0.08)", strong: "rgba(0,0,0,0.2)" },
  },
  dark: {
    surface: { primary: "#1a1a1a", secondary: "#2a2a2a", accent: "#1e3a1e", inverse: "#ffffff" },
    text: { primary: "#f0f0f0", muted: "#999999", inverse: "#1a1a1a", accent: "#4a9f54" },
    border: { subtle: "#3a3a3a", strong: "#f0f0f0", accent: "#4a9f54" },
    interactive: { primary: "#4a9f54", hover: "#5cb565", focus: "#287c34" },
    shadow: { subtle: "rgba(0,0,0,0.2)", strong: "rgba(0,0,0,0.5)" },
  },
};
```

---

## Level E: Full System Theme (with Contrast Variants)

**Input:** Light, dark, highContrastLight, highContrastDark
**Output:** Full system integration with `prefers-contrast` support

```typescript
const systemConfig = {
  light: { /* ... */ },
  dark: { /* ... */ },
  highContrastLight: {
    surface: { primary: "#ffffff", secondary: "#ffffff", accent: "#ffffff", inverse: "#000000" },
    text: { primary: "#000000", muted: "#000000", inverse: "#ffffff", accent: "#000000" },
    // Maximum contrast for accessibility
  },
  highContrastDark: {
    surface: { primary: "#000000", secondary: "#000000", accent: "#000000", inverse: "#ffffff" },
    text: { primary: "#ffffff", muted: "#ffffff", inverse: "#000000", accent: "#ffffff" },
  },
  lowContrastLight: { /* softer contrast */ },
  lowContrastDark: { /* softer contrast */ },
};
```

---

## Level F: Named Theme

> **Note:** A **Named Theme** is orthogonal to Simple/Full — it's about *identification and scoping*. A Named Theme can be a Simple Theme (one mode) or a Full Theme (complete matrix).

**Input:** Custom-named theme with optional scope
**Output:** Theme applied via `data-theme` attribute

```typescript
const namedConfig = {
  light: { /* base light */ },
  dark: { /* base dark */ },
  named: {
    "festive-theme-2025": {
      surface: { primary: "#1a472a", secondary: "#0d2818", accent: "#8b0000", inverse: "#ffd700" },
      text: { primary: "#ffffff", muted: "#c0c0c0", inverse: "#1a472a", accent: "#ffd700" },
      border: { subtle: "#2a5a3a", strong: "#ffd700", accent: "#8b0000" },
      interactive: { primary: "#ffd700", hover: "#ffed4a", focus: "#e6c200" },
      shadow: { subtle: "rgba(0,0,0,0.3)", strong: "rgba(0,0,0,0.6)" },
    },
  },
};
```

**Usage:**

```tsx
<div data-theme="festive-theme-2025">
  <OakBox $background="custom-surface-primary">
    Festive content
  </OakBox>
</div>
```

---

## Combining Levels

These levels can be combined:

```typescript
// Generate base theme from brand, then add named seasonal variant
const brand = generateTheme({ primary: "#287c34" });

const config = {
  ...brand.theme,
  named: {
    "festive-2025": { /* explicit festive theme */ },
  },
};
```

---

## Minimum Viable Input

| Path | Minimum Required |
|------|------------------|
| `generateTheme()` | 1 hex color |
| Direct config | `light.surface.primary` + `light.text.primary` + same for `dark` |

---

## Related Docs

- [phase-2-theme-generator.plan.md](./phase-2-theme-generator.plan.md) - Implementation details
- [arbitrary-theme-support.plan.md](./arbitrary-theme-support.plan.md) - Master plan
- [0002-custom-semantic-tokens.adr.md](../docs/architecture/decision-records/0002-custom-semantic-tokens.adr.md) - Architecture decision
