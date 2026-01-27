import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { OakMultilineText } from "./OakMultilineText";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakP } from "@/components/typography/OakP";

describe("OakMultilineText", () => {
  it("renders", () => {
    const { getByPlaceholderText } = renderWithTheme(
      <OakMultilineText
        charLimit={200}
        $height="spacing-56"
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
        $height="spacing-56"
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
        $height="spacing-56"
        disabled={false}
        initialValue="This is the initial value."
        id={"1"}
        name="textarea"
      ></OakMultilineText>,
    );
    expect(getByDisplayValue("This is the initial value.")).toBeInTheDocument();
  });

  it("renders externally set value", () => {
    const { getByDisplayValue } = renderWithTheme(
      <OakMultilineText
        charLimit={200}
        $height="spacing-56"
        disabled={false}
        value="This value is controlled externally."
        id={"1"}
        name="textarea"
      ></OakMultilineText>,
    );
    expect(
      getByDisplayValue("This value is controlled externally."),
    ).toBeInTheDocument();
  });

  it("shows char count on focus", async () => {
    const { getByRole, getByLabelText } = renderWithTheme(
      <OakMultilineText
        charLimit={200}
        $height="spacing-56"
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

  it("calls onChange when text is changed", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    const { getByDisplayValue } = renderWithTheme(
      <OakMultilineText
        charLimit={200}
        $height="spacing-56"
        disabled={false}
        id={"1"}
        name="textarea"
        value="Hello"
        onChange={onChange}
      />,
    );
    const textArea = getByDisplayValue("Hello");
    expect(textArea).toBeInTheDocument();
    await user.click(textArea);
    expect(textArea).toHaveFocus();
    await user.type(textArea, ", world!");
    expect(onChange).toHaveBeenCalled();
  });

  it("trims text when pasted text length exceeds character limit", async () => {
    const user = userEvent.setup();

    const { getByRole } = renderWithTheme(
      <OakMultilineText
        charLimit={10}
        $height="spacing-56"
        disabled={false}
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
  });

  it("counts characters correctly when text is edited", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    const { getByRole, getByLabelText } = renderWithTheme(
      <OakMultilineText
        charLimit={100}
        $height="spacing-56"
        disabled={false}
        onChange={onChange}
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
    expect(onChange).toHaveBeenCalledTimes(14);
  });

  it("shows errors if errors have been passed in as prop", () => {
    const { getByRole, getByText } = renderWithTheme(
      <OakMultilineText
        charLimit={100}
        $height="spacing-56"
        disabled={false}
        errors={["Invalid text"]}
        id={"1"}
        name="textarea"
      />,
    );

    const textArea = getByRole("textbox");
    expect(textArea).toBeInTheDocument();

    const invalidText = getByText("Invalid text");
    expect(invalidText).toBeInTheDocument();
  });

  it("calls onBlur when blurred", async () => {
    const user = userEvent.setup();
    const onBlur = jest.fn();
    const { getByRole, getByText } = renderWithTheme(
      <>
        <OakMultilineText
          charLimit={100}
          $height="spacing-56"
          disabled={false}
          onBlur={onBlur}
          id={"1"}
          name="textarea"
        />
        <OakP>test</OakP>
      </>,
    );

    const textArea = getByRole("textbox");
    const paragraph = getByText("test");

    await user.click(textArea);
    await user.click(paragraph);

    expect(onBlur).toHaveBeenCalled();
  });

  it("calls onFocus when focused", async () => {
    const onFocus = jest.fn();
    const user = userEvent.setup();

    const { getByRole, getByText } = renderWithTheme(
      <>
        <OakMultilineText
          charLimit={100}
          $height="spacing-56"
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
        $height="spacing-56"
        disabled={false}
        value="Test"
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
});
