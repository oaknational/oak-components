# Agent Documentation

This directory contains documentation for AI agents working on Oak Components.

> **For Human Developers**: Start with the root [README.md](../README.md).

## Foundation Documents

| Document | Purpose |
|----------|---------|
| [RULES.md](./RULES.md) | Coding standards, type discipline, Storybook best practices |
| [architecture.md](./architecture.md) | Component hierarchy, styling system, build output |
| [testing-strategy.md](./testing-strategy.md) | TDD workflow, test categories, gap analysis |

## Key Principles

1. **TDD of pure functions first** - Extract testable logic from components
2. **Storybook first** - Develop and test components in isolation
3. **Design tokens only** - No arbitrary CSS values
4. **Accessibility required** - All components WCAG 2.1 AA compliant

## Quality Gates

```bash
npm run build
npm run check-types
npm run lint
npm run format:check
npm run test:ci
```

## Reading Order for New Sessions

1. Root [README.md](../README.md) - Installation, development setup
2. [architecture.md](./architecture.md) - How the library is structured
3. [RULES.md](./RULES.md) - Coding standards
4. [testing-strategy.md](./testing-strategy.md) - How to write tests
