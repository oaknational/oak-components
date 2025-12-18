# ADR-0002: Custom Semantic Token Layer

**Date:** 2025-12-17
**Status:** Accepted

## Context

Consuming applications need to use arbitrary branded colors in Oak Components while maintaining:

1. Design system consistency
2. Light/dark mode support with CSS `light-dark()`
3. Contrast preference accessibility (`prefers-contrast`)
4. Type safety with full autocomplete
5. SSR compatibility without hydration issues

The existing Oak color token system uses a fixed palette that cannot accommodate white-labeling requirements.

## Decision

We introduce a **custom semantic token layer** with these characteristics:

### Token Registry

16 semantic tokens organized by purpose:

- **surface**: primary, secondary, accent, inverse
- **text**: primary, muted, inverse, accent
- **border**: subtle, strong, accent
- **interactive**: primary, hover, focus
- **shadow**: subtle, strong

All tokens use the `custom-` prefix to avoid conflicts with existing Oak tokens.

### Type Extension

`CustomSemanticToken` is added to `OakCombinedColorToken`:

```typescript
export type OakCombinedColorToken =
  | OakColorToken
  | OakUiRoleToken
  | CustomSemanticToken;
```

### parseColor Update

`parseColor` recognizes custom tokens and returns CSS variable references:

```typescript
parseColor("custom-surface-primary"); // returns "var(--custom-surface-primary)"
```

### CustomThemeProvider Component

React component that generates CSS custom properties:

```tsx
<CustomThemeProvider config={themeConfig}>
  <OakBox $background="custom-surface-primary" />
</CustomThemeProvider>
```

Generated CSS uses `light-dark()` for automatic theme switching.

## Consequences

### Benefits

- **Zero breaking changes** - Existing Oak tokens continue to work unchanged
- **CSS-native theming** - Uses modern CSS features (`light-dark()`, `prefers-contrast`)
- **Type-safe** - Full autocomplete for all 16 custom tokens
- **SSR compatible** - CSS variables work without hydration issues
- **Extensible** - Architecture supports future phases (theme generator, CVD safety)

### Trade-offs

- **Requires CustomThemeProvider** - Apps must wrap content in provider
- **CSS variable fallback** - Undefined tokens render transparent
- **Browser support** - `light-dark()` requires modern browsers (Safari 15.4+, Chrome 123+)

## Future Considerations

> [!NOTE]
> The `CustomThemeConfig` may need to support specifying which theme preference (`light`/`dark`/`both`) and contrast preference (`more`/`less`/`no-preference`) it applies to. Default should be `both` and `no-preference`. This would enable more granular control for consumers.

## Type Architecture: Intent vs Artifact (Phase 2 Discovery)

> [!IMPORTANT]
> The input and output of theme generation are fundamentally different types of things.

### The Insight

During Phase 2 implementation, we discovered that using a single type with optional properties for both input and output was conceptually wrong. The fix isn't just making properties required - it's recognizing these are different entities:

| Concept | Type | What It Represents |
|---------|------|-------------------|
| **Intent** | `BrandColors` | Consumer's brand identity - 1-2 hex colors |
| **Artifact** | `GeneratedTheme` | Constructed theme - complete, ready-to-use |

### BrandColors (Intent)

What the consumer provides to express their brand:

```typescript
interface BrandColors {
  primary: string;      // Required: primary brand color
  secondary?: string;   // Optional: accent color
}
```

### GeneratedTheme (Artifact)

What the generator constructs - a complete, usable artifact:

```typescript
interface GeneratedTheme {
  surface: { primary: string; secondary: string; accent: string; inverse: string };
  text: { primary: string; muted: string; inverse: string; accent: string };
  border: { subtle: string; strong: string; accent: string };
  interactive: { primary: string; hover: string; focus: string };
  shadow: { subtle: string; strong: string };
}
```

### Why This Matters

1. **Clear semantics** - Names describe what things ARE, not their state
2. **Type safety** - Compiler enforces guarantees naturally
3. **No assertions** - Generated themes have all properties guaranteed

## Related

- [phase-2-theme-generator.plan.md](../../.agent/plans/phase-2-theme-generator.plan.md)
- [arbitrary-theme-support.plan.md](../../.agent/plans/arbitrary-theme-support.plan.md)
- [RULES.md](../../.agent/RULES.md)
- TDD and type safety standards followed
