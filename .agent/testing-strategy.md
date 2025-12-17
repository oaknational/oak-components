# Testing and Development Strategy

> This document provides detailed TDD workflow and examples. For the declarative testing principles, see [RULES.md](./RULES.md#-testing-standards).

## Tooling

- Jest (unit + integration tests with jest-styled-components)
- React Testing Library (component rendering and interaction testing)
- Storybook (visual development, documentation, a11y addon)

## Philosophy

### TDD of Pure Functions First

**The preferred testing approach is TDD of pure functions wherever possible.**

Why pure function unit tests are preferred:

1. **Fastest to write and run** - No rendering, no DOM, no mocking
2. **Most stable** - Survive refactoring if behavior unchanged
3. **Best documentation** - Show exactly what inputs produce what outputs
4. **Force good design** - If code is hard to test purely, it needs refactoring

When creating new functionality:

1. **Extract pure logic first** - Separate calculation/transformation from rendering
2. **Write unit tests for pure functions** - TDD these in isolation
3. **Component tests only for React behavior** - Events, state, accessibility
4. **Avoid snapshot tests as primary proof** - They're brittle and don't prove behavior

### Test Pyramid (Priority Order)

1. **Pure function unit tests** (preferred) - Style utilities, transformations, validators
2. **Component behavior tests** (when needed) - User interactions, accessibility, state
3. **Snapshot tests** (sparingly) - Only to catch unintended style regressions
4. **Storybook stories** (always) - Visual documentation and a11y checking

## Current Test Categories

### 1. Style Utility Tests (Pure Functions) ✅ Good

Location: `src/styles/utils/*.test.tsx`

These are the **exemplary tests** - they test pure functions that generate CSS:

```typescript
// src/styles/utils/colorStyle.test.tsx
describe("colorStyle", () => {
  test("should correctly handle prop color set to OakColor", async () => {
    const StyledComponent = styled.div<ColorStyleProps>`
      ${colorStyle}
    `;
    const { getByTestId } = renderWithTheme(
      <StyledComponent data-testid="test" $color="text-subdued" />,
    );
    expect(getByTestId("test")).toHaveStyle("color: #575757");
  });
});
```

**Pattern:** Test that style functions produce correct CSS output for given inputs.

### 2. Component Behavior Tests ✅ Good

Location: Throughout `src/components/`

Test actual behaviors that users care about:

```typescript
// Good - tests behavior
describe("InternalButton", () => {
  it("calls onClick method", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <InternalButton data-testid="test" onClick={onClick}>Click</InternalButton>,
    );
    getByTestId("test").click();
    expect(onClick).toHaveBeenCalled();
  });

  it("correctly captures the duration of the hover event", () => {
    const onHovered = jest.fn();
    // ... tests timing behavior
    expect(onHovered).toHaveBeenCalledWith(expect.anything(), 1000);
  });
});
```

**Pattern:** Test user interactions (clicks, hovers), form behavior, accessibility.

### 3. Hook Tests

Location: `src/animation/`, `src/hooks/`

```typescript
// src/animation/usePrefersReducedMotion.test.ts
describe(usePrefersReducedMotion, () => {
  it("is true when the media query matches", () => {
    jest.spyOn(window, "matchMedia").mockReturnValue({ matches: true });
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(true);
  });
});
```

### 4. Snapshot Tests ⚠️ Use Sparingly

Used extensively but should be supplementary, not primary:

```typescript
// Common pattern - but don't rely on this alone
it("matches snapshot", () => {
  const { container } = renderWithTheme(<OakBox />);
  expect(container).toMatchSnapshot();
});
```

**Warning:** Snapshots break on any structural change, even if behavior is correct.

## Rules

- **TDD** - Write tests FIRST. Red → Green → Refactor
- **Test behavior, not implementation** - Tests should survive refactoring
- **Prefer pure functions** - Extract testable logic from components
- **No useless tests** - Each test must prove something useful
- **KISS: No complex mocks** - Complex mocks indicate code needs simplification
- **No skipped tests** - Fix it or delete it

## TDD Workflow

### For New Utility Functions (Pure Functions)

```typescript
// 1. RED - Write test first
describe("parseSpacingToken", () => {
  it("converts token to rem value", () => {
    expect(parseSpacingToken("spacing-8")).toBe("0.5rem");
  });
});
// Run → FAILS

// 2. GREEN - Minimal implementation
function parseSpacingToken(token: SpacingToken): string {
  const value = spacingValues[token];
  return `${value / 16}rem`;
}
// Run → PASSES

// 3. REFACTOR - Improve if needed
```

### For New Components

```typescript
// 1. Write behavior tests FIRST
describe("OakNewButton", () => {
  it("renders children", () => {
    render(<OakNewButton>Label</OakNewButton>);
    expect(screen.getByRole("button", { name: "Label" })).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const onClick = jest.fn();
    render(<OakNewButton onClick={onClick}>Click</OakNewButton>);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(<OakNewButton disabled>Click</OakNewButton>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
// Run → FAILS

// 2. Implement component to pass tests
// 3. Add snapshot test last (optional, for regression detection)
```

## File Naming

- Tests: `ComponentName.test.tsx` (next to component file)
- Stories: `ComponentName.stories.tsx` (next to component file)
- Snapshots: `__snapshots__/ComponentName.test.tsx.snap` (auto-generated)

## When Behavior Changes

Update tests at the SAME level FIRST, before changing implementation:

- **Utility function changes** → Update unit tests FIRST
- **Component behavior changes** → Update component tests FIRST
- **Visual changes only** → Update snapshots (run `npm run test:snapshot`)

## Gap Analysis & Improvement Opportunities

### Current State

| Category | Count | Quality |
|----------|-------|---------|
| Style utility tests | 16 | ✅ Good - pure function TDD |
| Component snapshot tests | 177 | ⚠️ Heavy reliance |
| Component behavior tests | ~200 | Mixed quality |
| Hook tests | 1 | ✅ Good |
| Accessibility tests | Few | ❌ Gap |

### Priority Improvements

1. **Add behavior tests before snapshots** - For untested components, add real assertions
2. **Add accessibility assertions** - Check ARIA, keyboard navigation
3. **Extract pure logic from components** - Then unit test that logic
4. **Reduce snapshot dependency** - They catch regressions but don't prove correctness
