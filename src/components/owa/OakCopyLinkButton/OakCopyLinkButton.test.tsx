import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { OakCopyLinkButton } from "./OakCopyLinkButton";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe(OakCopyLinkButton, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakCopyLinkButton href={"/copy-this-link"} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders", () => {
    const { getByRole } = renderWithTheme(
      <OakCopyLinkButton href={"/copy-this-link"} />,
    );

    expect(getByRole("button")).toBeInTheDocument();
  });

  it("updates the title", async () => {
    const { getByTestId, rerender } = renderWithTheme(
      <OakCopyLinkButton href={"/copy-this-link"} />,
    );

    const user = userEvent.setup();

    const button = getByTestId("copy-link-desktop-button");
    expect(button).toHaveTextContent("Copy link");

    await user.click(button);

    rerender(<OakCopyLinkButton href={"/copy-this-link"} />);

    const clickedButton = getByTestId("copy-link-desktop-button");
    expect(clickedButton).toHaveTextContent("Link copied");
  });

  it("copies the current URL to the clipboard by default", async () => {
    const { getByTestId } = renderWithTheme(<OakCopyLinkButton />);

    const user = userEvent.setup();

    const button = getByTestId("copy-link-desktop-button");
    await user.click(button);

    const clipboardText = await navigator.clipboard.readText();
    expect(clipboardText).toBe("http://localhost/");
  });

  it("copies the provided URL to the clipboard", async () => {
    const { getByTestId } = renderWithTheme(
      <OakCopyLinkButton href={"https://example.com"} />,
    );

    const user = userEvent.setup();

    const button = getByTestId("copy-link-desktop-button");
    await user.click(button);

    const clipboardText = await navigator.clipboard.readText();
    expect(clipboardText).toBe("https://example.com");
  });

  it("has aria-live polite", async () => {
    const { getByTestId } = renderWithTheme(
      <OakCopyLinkButton href={"/copy-this-link"} />,
    );
    const user = userEvent.setup();

    const button = getByTestId("copy-link-desktop-button");
    await user.click(button);

    const anouncement = getByTestId("announce");
    expect(anouncement).toBeInTheDocument();
    expect(anouncement).toHaveAttribute("aria-live", "polite");
  });
});
