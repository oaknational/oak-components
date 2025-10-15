import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { OakMultilineText } from "./OakMultilineText";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakP } from "@/components/atoms/OakP";

describe("OakMultilineText", () => {
  it("renders", () => {
    const { getByPlaceholderText } = renderWithTheme(
      <OakMultilineText
        charLimit={200}
        $height="all-spacing-10"
        placeholder="Start typing answer..."
        disabled={false}
        id={"1"}
        name="textarea"
      />,
    );
    expect(getByPlaceholderText("Start typing answer...")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakMultilineText
        charLimit={200}
        $height="all-spacing-10"
        disabled={false}
        id={"1"}
        name="textarea"
      ></OakMultilineText>,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders with initial value", () => {
    const { getByDisplayValue } = renderWithTheme(
      <OakMultilineText
        charLimit={200}
        $height="all-spacing-10"
        disabled={false}
        initialValue="This is the initial value."
        id={"1"}
        name="textarea"
      ></OakMultilineText>,
    );
    expect(getByDisplayValue("This is the initial value.")).toBeInTheDocument();
  });

  it("shows char count on focus", async () => {
    const { getByRole, getByLabelText } = renderWithTheme(
      <OakMultilineText
        charLimit={200}
        $height="all-spacing-10"
        disabled={false}
        id={"1"}
        name="textarea"
      ></OakMultilineText>,
    );
    const textArea = getByRole("textbox");
    expect(textArea).toBeInTheDocument();
    expect(textArea).not.toHaveFocus();

    expect(() => {
      getByLabelText("character count");
    }).toThrow();

    const user = userEvent.setup();
    await user.click(textArea);
    expect(textArea).toHaveFocus();

    expect(getByLabelText("character count")).toBeInTheDocument();
  });

  it("calls onTextAreaChange when text is changed", async () => {
    const user = userEvent.setup();
    const onTextAreaChange = jest.fn();
    const { getByDisplayValue } = renderWithTheme(
      <OakMultilineText
        charLimit={200}
        $height="all-spacing-10"
        disabled={false}
        id={"1"}
        name="textarea"
        initialValue="Hello"
      />,
    );
    const textArea = getByDisplayValue("Hello");
    expect(textArea).toBeInTheDocument();
    await user.click(textArea);
    expect(textArea).toHaveFocus();
    await user.type(textArea, ", world!");
    expect(textArea).toHaveValue("Hello, world!");
    expect(onTextAreaChange).not.toHaveBeenCalled();
  });

  it("trims text when pasted text length exceeds character limit", async () => {
    const user = userEvent.setup();
    const onError = jest.fn();

    const { getByRole } = renderWithTheme(
      <OakMultilineText
        charLimit={10}
        $height="all-spacing-10"
        disabled={false}
        onError={onError}
        id={"1"}
        name="textarea"
      />,
    );

    const textArea = getByRole("textbox");
    expect(textArea).toBeInTheDocument();
    await user.type(textArea, "Hello");
    await user.click(textArea);
    await user.paste("Testing paste");
    expect(textArea).toHaveValue("HelloTesti");
    expect(textArea).toHaveFocus();

    expect(onError).toHaveBeenCalled();
  });

  it("counts characters correctly when text is edited", async () => {
    const user = userEvent.setup();
    const onTextAreaChange = jest.fn();

    const { getByRole, getByLabelText } = renderWithTheme(
      <OakMultilineText
        charLimit={100}
        $height="all-spacing-10"
        disabled={false}
        onTextAreaChange={onTextAreaChange}
        id={"1"}
        name="textarea"
      />,
    );

    const textArea = getByRole("textbox");
    await user.type(textArea, "Hello, world!");
    const charCount = getByLabelText("character count");

    await user.click(textArea);
    expect(textArea).toHaveFocus();
    expect(charCount).toHaveTextContent("13/100");

    await user.type(textArea, "{Backspace}");
    expect(textArea).toHaveValue("Hello, world");
    await user.click(textArea);
    expect(textArea).toHaveFocus();
    expect(charCount).toHaveTextContent("12/100");
    expect(onTextAreaChange).toHaveBeenCalledTimes(14);
  });

  it("shows invalid text if invalid is true and invalid text has been set", () => {
    const { getByRole, getByText } = renderWithTheme(
      <OakMultilineText
        charLimit={100}
        $height="all-spacing-10"
        disabled={false}
        invalidText="Invalid text"
        id={"1"}
        name="textarea"
      />,
    );

    const textArea = getByRole("textbox");
    expect(textArea).toBeInTheDocument();

    const invalidText = getByText("Invalid text");
    expect(invalidText).toBeInTheDocument();
  });

  it("calls onTextAreaBlur when blurred", async () => {
    const user = userEvent.setup();
    const onTextAreaBlur = jest.fn();
    const { getByRole, getByText } = renderWithTheme(
      <>
        <OakMultilineText
          charLimit={100}
          $height="all-spacing-10"
          disabled={false}
          onTextAreaBlur={onTextAreaBlur}
          id={"1"}
          name="textarea"
        />
        <OakP>test</OakP>
      </>,
    );

    const textArea = getByRole("textbox");
    const paragraph = getByText("test");

    await user.click(textArea);
    await user.type(textArea, "text");
    await user.click(paragraph);

    expect(onTextAreaBlur).toHaveBeenCalledWith("text");
  });

  it("calls onFocus when focused", async () => {
    const onFocus = jest.fn();
    const user = userEvent.setup();

    const { getByRole, getByText } = renderWithTheme(
      <>
        <OakMultilineText
          charLimit={100}
          $height="all-spacing-10"
          disabled={false}
          onFocus={onFocus}
          id={"1"}
          name="textarea"
        />
        ,<OakP>test</OakP>
      </>,
    );

    const textArea = getByRole("textbox");
    const paragraph = getByText("test");

    await user.click(paragraph);
    expect(textArea).not.toHaveFocus();

    await user.click(textArea);
    expect(textArea).toHaveFocus();

    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it("displays correct character count when text area value is already set", async () => {
    const user = userEvent.setup();
    const { getByRole, getByLabelText } = renderWithTheme(
      <OakMultilineText
        charLimit={100}
        $height="all-spacing-10"
        disabled={false}
        initialValue="Test"
        id={"1"}
        name="textarea"
      ></OakMultilineText>,
    );

    const textarea = getByRole("textbox");

    await user.click(textarea);
    const charCount = getByLabelText("character count");
    expect(textarea).toHaveFocus();
    expect(charCount).toBeInTheDocument();
    expect(textarea).toHaveTextContent("Test");
    expect(charCount).toHaveTextContent("4/100");
  });

  it.each([
    [true, "test\ntest 2"],
    [false, "testtest 2"],
  ])(
    "allows carriage return only when true",
    async (allowCarriageReturn, expectedValue) => {
      const user = userEvent.setup();
      const { getByRole } = renderWithTheme(
        <OakMultilineText
          charLimit={200}
          data-testid="test"
          disabled={false}
          placeholder="Start typing answer..."
          allowCarriageReturn={allowCarriageReturn}
        />,
      );
      const textArea = getByRole("textbox");
      expect(textArea).toBeInTheDocument();

      await user.click(textArea);
      await user.type(textArea, "test");

      expect(textArea).toHaveValue("test");

      await user.type(textArea, "{Enter}");
      await user.type(textArea, "test 2");
      expect(textArea).toHaveValue(expectedValue);
    },
  );

  it("trims leading and trailing whitespace on blur when allowLeadingTrailingSpaces is false", async () => {
    const user = userEvent.setup();
    const onError = jest.fn();
    const onTextAreaBlur = jest.fn();
    const onTextAreaChange = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakMultilineText
        charLimit={200}
        data-testid="test"
        disabled={false}
        onError={onError}
        onTextAreaBlur={onTextAreaBlur}
        onTextAreaChange={onTextAreaChange}
        placeholder="Start typing answer..."
        allowLeadingTrailingSpaces={false}
      />,
    );
    const textArea = getByRole("textbox");
    expect(textArea).toBeInTheDocument();

    await user.click(textArea);
    await user.type(textArea, "   test   ");

    expect(onTextAreaChange).toHaveBeenLastCalledWith("   test   ");
    await user.click(document.body); // blur

    expect(onTextAreaBlur).toHaveBeenLastCalledWith("test");
    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledWith(
      "Leading or trailing spaces have been removed",
    );
  });

  it("removes carriage returns on pasted text", async () => {
    const user = userEvent.setup();
    const onError = jest.fn();
    const onTextAreaChange = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakMultilineText
        charLimit={200}
        data-testid="test"
        disabled={false}
        onError={onError}
        onTextAreaChange={onTextAreaChange}
        placeholder="Start typing answer..."
        allowLeadingTrailingSpaces={true}
      />,
    );
    const textArea = getByRole("textbox");
    expect(textArea).toBeInTheDocument();

    await user.click(textArea);
    await user.paste("test\ntest 2");

    expect(onTextAreaChange).toHaveBeenLastCalledWith("test test 2");
    expect(onError).toHaveBeenCalledWith("Carriage returns have been removed");
  });
});
