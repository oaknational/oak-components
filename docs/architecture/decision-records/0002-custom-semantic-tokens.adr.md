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

## Related

- [arbitrary-theme-support.plan.md](../../.agent/plans/arbitrary-theme-support.plan.md)
- [RULES.md](../../.agent/RULES.md) - TDD and type safety standards followed
