import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { OakSignLanguageButton } from "./OakSignLanguageButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakSignLanguageButton, () => {
  const onClick = jest.fn();

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakSignLanguageButton onClick={onClick} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders", () => {
    const { getByRole } = renderWithTheme(
      <OakSignLanguageButton onClick={onClick} />,
    );

    expect(getByRole("button")).toBeInTheDocument();
  });

  it("updates the title", async () => {
    const { getByTestId, rerender } = renderWithTheme(
      <OakSignLanguageButton onClick={onClick} />,
    );

    const user = userEvent.setup();

    const button = getByTestId("sign-language-desktop-button");
    expect(button).toHaveTextContent("Show sign language");

    await user.click(button);

    rerender(<OakSignLanguageButton onClick={onClick} />);

    const clickedButton = getByTestId("sign-language-desktop-button");
    expect(clickedButton).toHaveTextContent("Hide sign language");
  });

  it("calls provided onClick function", async () => {
    const { getByTestId } = renderWithTheme(
      <OakSignLanguageButton onClick={onClick} />,
    );

    const user = userEvent.setup();
    const button = getByTestId("sign-language-desktop-button");

    await user.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
