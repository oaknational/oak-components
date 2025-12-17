Reflect on the following. Do not assume you know what work is coming next.

Read (in .agent/) @RULES.md, @architecture.md, and @testing-strategy.md. Take to heart that it is encouraged to step back and consider if work is delivering value through impact at the system level, not just fixing the problem right in front of you. Identify and question assumptions. Ask, are we solving the right problem, at the right layer? Ask, could it be simpler without compromising quality?

Any generated plans must include regularly re-reading and re-committing to those foundation documents, and re-evaluating the work in light of them.

For architectural decisions, see [ADRs](../docs/architecture/decision-records/).

Quality gate definitions for later:

```shell
# From the repo root, one at a time, with no filters
npm run build
npm run check-types
npm run lint
npm run format:check
npm run test:ci
```

For development with Storybook:

```shell
npm run storybook
```
