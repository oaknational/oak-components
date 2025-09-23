import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { InternalTextInput } from "./InternalTextInput";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("InternalTextInput", () => {
  it("renders", () => {
    const { getByTestId } = render(<InternalTextInput data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<InternalTextInput />);
    expect(container).toMatchSnapshot();
  });

  it("renders with placeholder", () => {
    const { getByPlaceholderText } = render(
      <InternalTextInput placeholder="placeholder text" />,
    );
    expect(getByPlaceholderText("placeholder text")).toBeInTheDocument();
  });

  it("calls onFocus when focused", () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(
      <InternalTextInput data-testid="test" onFocus={onFocus} />,
    );
    getByTestId("test").focus();
    getByTestId("test").blur();
    getByTestId("test").focus();
    getByTestId("test").blur();
    getByTestId("test").focus();
    expect(onFocus).toHaveBeenCalledTimes(3);
  });

  it("calls onBlur when blurred", () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(
      <InternalTextInput data-testid="test" onBlur={onBlur} />,
    );
    getByTestId("test").focus();
    getByTestId("test").blur();
    expect(onBlur).toHaveBeenCalled();
  });

  it("calls onInitialFocus when focused for the first time", () => {
    const onInitialFocus = jest.fn();
    const { getByTestId } = render(
      <InternalTextInput data-testid="test" onInitialFocus={onInitialFocus} />,
    );
    getByTestId("test").focus();
    expect(onInitialFocus).toHaveBeenCalled();
  });

  it("calls onFocus when onInitialFocus is also defined", () => {
    const onFocus = jest.fn();
    const onInitialFocus = jest.fn();
    const { getByTestId } = render(
      <InternalTextInput
        data-testid="test"
        onFocus={onFocus}
        onInitialFocus={onInitialFocus}
      />,
    );
    getByTestId("test").focus();
    expect(onFocus).toHaveBeenCalled();
  });

  it("doesn't call onInitialFocus only when focused for subsequent times", () => {
    const onInitialFocus = jest.fn();
    const { getByTestId } = render(
      <InternalTextInput data-testid="test" onInitialFocus={onInitialFocus} />,
    );
    getByTestId("test").focus();
    getByTestId("test").blur();
    getByTestId("test").focus();
    getByTestId("test").blur();
    getByTestId("test").focus();
    expect(onInitialFocus).toHaveBeenCalledTimes(1);
  });
});
