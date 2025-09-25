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

  it("changing value changed the text", async () => {
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
});

// tests for callbacks
/**
 * initial value
 */
