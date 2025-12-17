# Coding Standards & Engineering Excellence

**Last Updated:** December 2025
**Project:** Oak Components
**Purpose:** Define non-negotiable quality standards for the Oak Design System

---

## 🚀 Quick Start (TL;DR)

> **The Cardinal Rules** — memorize these before reading further:

1. **Types are sacred** — `as`, `any`, `!` are FORBIDDEN escape hatches
2. **TDD always** — Write failing tests FIRST at all levels
3. **Fix root causes** — If types don't match, fix the architecture
4. **Storybook first** — Develop and test components in isolation
5. **Pure functions** — Prefer pure, explicit, immutable
6. **Oak design tokens** — Use the design system, not arbitrary values

**Quality Gates (all must pass):**

```bash
npm run build && npm run check-types && npm run lint && npm run format:check && npm run test:ci
```

---

## 🎯 Core Philosophy

> **Mission Statement:** We prioritize long-term stability, maintainability, and type safety over short-term convenience.

The cardinal rules above derive from these deeper principles:

- **Types reveal problems** - Type errors show architectural issues that need fixing, not bypassing
- **No temporary solutions** - Compatibility layers and "TODO: fix later" become permanent debt
- **Library expertise** - Domain expert libraries maintain better types than we can
- **Tests prove behaviour** - TDD ensures tests document and verify what the system does
- **Explicit is better** - Hidden dependencies and side effects create bugs

---

## 🏗️ Architectural Principles

### 1. Component-First Design

Build components in isolation using Storybook, test with React Testing Library, compose into larger patterns.

### 2. Design Token Consistency

All styling must use Oak design tokens for colors, spacing, and typography. **Forbidden:** arbitrary hex codes, pixel values, or hardcoded colors.

### 3. Accessibility First

All components must meet WCAG 2.1 AA standards. Use semantic HTML, ARIA attributes where needed, test with Storybook a11y addon.

### 4. Latest Dependencies Only

Use latest stable versions. If a library requires outdated peer dependencies, question its necessity.

---

## 📚 Storybook Standards

Storybook is our primary development and documentation environment. Every component must have excellent stories.

### Story Requirements

Every component MUST have:

1. **Default story** - Component with sensible defaults
2. **All variants** - One story per visual variant (size, color, state)
3. **Interactive states** - Hover, focus, active, disabled
4. **Edge cases** - Long text, empty states, error states
5. **Accessibility** - a11y addon passes with no violations

### Story Structure

```typescript
// OakButton.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { OakButton } from "./OakButton";

const meta: Meta<typeof OakButton> = {
  title: "Components/OakButton",
  component: OakButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "Visual style variant",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
  decorators: [
    (Story) => (
      <OakThemeProvider theme={oakDefaultTheme}>
        <Story />
      </OakThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof OakButton>;

export const Default: Story = {
  args: { children: "Click me", variant: "primary", size: "md" },
};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};

export const LongText: Story = {
  args: { ...Default.args, children: "Button with very long text that might wrap" },
};
```

### Story Best Practices

**DO:** Use `args` for props (enables Controls), `argTypes` for documentation, `tags: ["autodocs"]`, decorators for theme providers, `play` functions for interactions.

**DON'T:** Hardcode configurable values, skip edge cases, forget disabled/error states, omit a11y testing.

---

## 🧪 Testing Standards

> See [testing-strategy.md](./testing-strategy.md) for comprehensive TDD guidance and examples.

### Key Principles

1. **TDD is mandatory** - Write failing tests FIRST, then implement
2. **Test behaviour, not implementation** - Tests should survive refactoring
3. **Tests must prove something useful** - No vague `toBeDefined()` assertions
4. **Prefer pure functions** - Easier to test, no mocking needed

### Quick Reference

```typescript
// ✅ Good - tests behaviour
test("OakButton calls onClick when clicked", () => {
  const handleClick = jest.fn();
  render(<OakButton onClick={handleClick}>Click</OakButton>);
  fireEvent.click(screen.getByRole("button"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

// ❌ Bad - tests implementation
test("OakButton uses styled-components", () => {
  expect(container.querySelector("button")).toHaveClass("sc-");
});
```

---

## 🔒 Type System Discipline

### Core Principle: Preserve Maximum Type Information

Every type escape hatch permanently destroys information that cannot be recovered.

### FORBIDDEN Constructs

- ❌ `as` (except `as const`)
- ❌ `any`
- ❌ `!` (non-null assertion)
- ❌ `Record<string, unknown>` or `{ [key: string]: unknown }`
- ❌ `Object.keys()`, `Object.entries()` (return `string[]`, losing type info)

**Exceptions:**

- ✅ `as const` for literal types
- ✅ `as` in tests when constructing mock data (with comment explaining why)

### Type-Safe Patterns

**Discriminated unions:**

```typescript
type Result<T> = { success: true; value: T } | { success: false; error: Error };
```

**Preserve literal types:**

```typescript
const SIZES = { small: "sm", medium: "md", large: "lg" } as const;
type Size = (typeof SIZES)[keyof typeof SIZES]; // 'sm' | 'md' | 'lg'
```

**Type-safe property access:**

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

### Type Rules

1. **Never widen types** - Keep literal types, don't accept `string` when you have `'sm' | 'md' | 'lg'`
2. **Single source of truth** - Define types once, import consistently
3. **Defer to library types** - Use React, styled-components types directly
4. **Validate external boundaries** - Props from consumers should be validated

---

## 📝 Code Quality Standards

### Pure Functions

Same input → same output. No side effects. Easy to test and compose.

### Explicit Over Implicit

```typescript
// ✅ Explicit dependencies
function getSpacing(token: SpacingToken, scale: number): string { ... }

// ❌ Hidden dependency
function getSpacing(token: SpacingToken): string {
  return calculateSpacing(token, globalScale); // Where does globalScale come from?
}
```

### Immutability

```typescript
// ✅ Returns new array
function addItem<T>(array: readonly T[], item: T): T[] {
  return [...array, item];
}
```

### No Unused Variables

All symbols must be used or removed. Never prefix with underscore to hide unused variables.

---

## 📖 Documentation Standards

### TSDoc for Public APIs

```typescript
/**
 * Primary action button following Oak design guidelines.
 *
 * @param children - Button content
 * @param onClick - Click handler
 * @param size - Button size: 'sm' | 'md' | 'lg'
 *
 * @example
 * <OakPrimaryButton onClick={handleSubmit}>Submit</OakPrimaryButton>
 */
export function OakPrimaryButton({ ... }: OakPrimaryButtonProps) { ... }
```

### File Naming

- Components: `OakButton.tsx` (PascalCase)
- Utilities: `parseToken.ts` (camelCase)
- Stories: `OakButton.stories.tsx`
- Tests: `OakButton.test.tsx`

---

## 🔧 TypeScript Configuration

Ensure `tsconfig.json` has strict mode:

```json
{
  "compilerOptions": {
    "strict": true,
    "strictNullChecks": true,
    "noImplicitAny": true,
    "noImplicitReturns": true
  }
}
```

**Prefer:**

- Type inference over explicit annotations
- Union types over enums
- Const objects with `as const` over enums

---

## 📋 Git Commit Standards

```
type(scope): short description
```

**Types:** `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `perf`

**Rules:** One logical change per commit. Code should work after each commit.

---

## ✅ Engineering Excellence Checklist

**Before every PR:**

1. ✅ All quality gates pass
2. ✅ TDD followed - tests written first
3. ✅ No type escape hatches (`as`, `any`, `!`)
4. ✅ Stories created/updated in Storybook
5. ✅ Storybook a11y addon passes
6. ✅ TSDoc for all public APIs
7. ✅ Design tokens used (no hardcoded values)

**When in doubt:**

- Am I choosing excellence over speed?
- Is the type system showing me an architectural problem?
- Will this test survive refactoring?
- Is this as simple as it can be?
