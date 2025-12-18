# ADR-0003: Theme Selection & Resolution

**Date:** 2025-12-18
**Status:** Draft

## Context

[ADR-0002](./0002-custom-semantic-tokens.adr.md) defines theme *structure* (what themes are). This ADR addresses theme *selection* and *resolution* (how themes are chosen and applied at runtime).

A Full Theme contains multiple Token Sets (light, dark, high-contrast variants). At runtime, only one Token Set is "active" — determined by:

1. User's explicit preference (Picked Theme)
2. System preferences (OS color scheme, contrast settings)

## Nomenclature

See [ADR-0002 Nomenclature](./0002-custom-semantic-tokens.adr.md#nomenclature) for term definitions, including:

- **Picked Theme**: User's explicit preference
- **Resolved Theme**: Actual theme being applied

## Decision

### Selection Flow

```text
User Picks Theme → Persist Preference → Resolve Theme → Apply Token Set

                    ┌─────────────────┐
                    │  Picked Theme   │
                    │  (user choice)  │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
        ┌─────▼─────┐  ┌─────▼─────┐  ┌─────▼─────┐
        │  system   │  │   light   │  │   dark    │  ... (or Named Theme)
        └─────┬─────┘  └─────┬─────┘  └─────┬─────┘
              │              │              │
     OS Detection            │         Direct Use
              │              │              │
              ▼              ▼              ▼
        ┌─────────────────────────────────────────┐
        │           Resolved Theme                │
        │  (actual Token Set being applied)       │
        └─────────────────────────────────────────┘
```

### Persistence Strategy

| Cookie | Values | Purpose |
|--------|--------|---------|
| `oak-theme-pref` | `system`, `light`, `dark`, `high-contrast-*`, or Named Theme key | Picked Theme |
| `oak-resolved-theme` | `light`, `dark` | Cached OS detection for SSR optimization |

### Resolution Rules

1. **Explicit Picked Theme** (not `system`): Use directly
2. **`system` Picked Theme**:
   - Client: Detect via `matchMedia`
   - Server: Use `oak-resolved-theme` cookie (if set) or default to `light`

## Consequences

### Benefits

- **Clear separation**: Selection logic decoupled from theme structure
- **SSR-friendly**: Two-cookie approach eliminates flash on repeat visits
- **Extensible**: Named Themes integrate naturally

### Trade-offs

- **First-visit flash for `system`**: Unavoidable since OS preference is client-only
- **Cookie dependency**: Requires cookie consent consideration

## Related

- [ADR-0002 Custom Semantic Tokens](./0002-custom-semantic-tokens.adr.md) — Theme structure
- [Starter-app ADR-0012 SSR Theme Rendering](file:///Users/jim/code/oak/starter-app-spike/docs/architecture/decision-records/0012-ssr-theme-rendering-strategy.md) — Implementation reference
