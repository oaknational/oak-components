import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakBaseTextInput } from "./OakBaseTextInput";

describe("OakBaseTextInput", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakBaseTextInput data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakBaseTextInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with placeholder", () => {
    const { getByPlaceholderText } = render(
      <OakBaseTextInput placeholder="placeholder text" />,
    );
    expect(getByPlaceholderText("placeholder text")).toBeInTheDocument();
  });

  it("calls onFocus when focused", () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(
      <OakBaseTextInput data-testid="test" onFocus={onFocus} />,
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
      <OakBaseTextInput data-testid="test" onBlur={onBlur} />,
    );
    getByTestId("test").focus();
    getByTestId("test").blur();
    expect(onBlur).toHaveBeenCalled();
  });

  it("calls onInitialFocus when focused for the first time", () => {
    const onInitialFocus = jest.fn();
    const { getByTestId } = render(
      <OakBaseTextInput data-testid="test" onInitialFocus={onInitialFocus} />,
    );
    getByTestId("test").focus();
    expect(onInitialFocus).toHaveBeenCalled();
  });

  it("doesn't call onInitialFocus only when focused for subsequent times", () => {
    const onInitialFocus = jest.fn();
    const { getByTestId } = render(
      <OakBaseTextInput data-testid="test" onInitialFocus={onInitialFocus} />,
    );
    getByTestId("test").focus();
    getByTestId("test").blur();
    getByTestId("test").focus();
    getByTestId("test").blur();
    getByTestId("test").focus();
    expect(onInitialFocus).toHaveBeenCalledTimes(1);
  });
});
