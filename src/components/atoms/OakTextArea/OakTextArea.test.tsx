import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { OakTextArea } from "./OakTextArea";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakTextArea", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakTextArea
        data-testid="test"
        disabled={false}
        placeholder="Start typing answer..."
      />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakTextArea />);
    expect(container).toMatchSnapshot();
  });

  it.each([
    [true, "test\ntest 2"],
    [false, "testtest 2"],
  ])(
    "allows carriage return only when true",
    async (allowCarriageReturn, expectedValue) => {
      const user = userEvent.setup();
      const { getByRole } = renderWithTheme(
        <OakTextArea
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
});
