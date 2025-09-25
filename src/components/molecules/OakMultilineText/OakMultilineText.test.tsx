import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { OakMultilineText } from "./OakMultilineText";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakMultilineText", () => {
  it("renders", () => {
    const { getByPlaceholderText } = renderWithTheme(
      <OakMultilineText
        charLimit={200}
        $height="all-spacing-10"
        placeholder="Start typing answer..."
        disabled={false}
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
      ></OakMultilineText>,
    );
    expect(container).toMatchSnapshot();
  });

  it("shows char count on focus", async () => {
    const { getByRole, getByLabelText } = renderWithTheme(
      <OakMultilineText
        charLimit={200}
        $height="all-spacing-10"
        disabled={false}
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

  it("updates text when value changed", async () => {
    const { getByDisplayValue } = renderWithTheme(
      <OakMultilineText
        charLimit={200}
        $height="all-spacing-10"
        disabled={false}
        value="Hello"
      />,
    );
    const textArea = getByDisplayValue("Hello");
    expect(textArea).toBeInTheDocument();
  });

  it("trims text when pasted text length exceeds character limit", async () => {
    const user = userEvent.setup();

    const { getByDisplayValue } = renderWithTheme(
      <OakMultilineText
        charLimit={5}
        $height="all-spacing-10"
        disabled={false}
        value="Hello"
      />,
    );

    const textArea = getByDisplayValue("Hello");
    expect(textArea).toBeInTheDocument();

    await user.paste("Hello, world!");
    expect(textArea).toHaveValue("Hello");
  });

  it("counts characters correctly when text when text is edited", async () => {
    const user = userEvent.setup();

    const { getByRole, getByLabelText } = renderWithTheme(
      <OakMultilineText
        charLimit={100}
        $height="all-spacing-10"
        disabled={false}
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
  });

  it("shows invalid text if invalid is true and invalid text has been set", () => {
    const { getByRole, getByLabelText } = renderWithTheme(
      <OakMultilineText
        charLimit={100}
        $height="all-spacing-10"
        disabled={false}
        invalid={true}
        invalidText="Invalid text"
      />,
    );

    const textArea = getByRole("textbox");
    expect(textArea).toBeInTheDocument();

    const invalidText = getByLabelText("invalid text message");
    expect(invalidText).toBeInTheDocument();
    expect(invalidText).toHaveTextContent("Invalid text");
  });
});
