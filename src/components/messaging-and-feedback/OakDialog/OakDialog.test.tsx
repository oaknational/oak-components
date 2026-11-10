import React, { useState } from "react";
import "@testing-library/jest-dom";
import { act, fireEvent, waitFor } from "@testing-library/react";

import { OakDialog } from "./OakDialog";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const Harness = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open</button>
      <OakDialog
        isOpen={isOpen}
        aria-labelledby="dialog-title"
        footerSlot={
          <button onClick={() => setIsOpen(false)}>I understand</button>
        }
      >
        <h2 id="dialog-title">Content guidance</h2>
      </OakDialog>
    </>
  );
};

describe("OakDialog", () => {
  it("matches snapshot", () => {
    const { baseElement } = renderWithTheme(
      <OakDialog isOpen aria-label="Content guidance">
        Dialog content
      </OakDialog>,
    );
    expect(baseElement).toMatchSnapshot();
  });

  it("renders nothing when closed", () => {
    const { queryByRole } = renderWithTheme(
      <OakDialog isOpen={false} aria-label="Content guidance">
        Dialog content
      </OakDialog>,
    );
    expect(queryByRole("alertdialog")).not.toBeInTheDocument();
  });

  it("renders a named modal alertdialog with its content", () => {
    const { getByRole } = renderWithTheme(
      <OakDialog
        isOpen
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <h2 id="dialog-title">Content guidance</h2>
        <p id="dialog-description">This lesson contains upsetting themes.</p>
      </OakDialog>,
    );
    const dialog = getByRole("alertdialog", { name: "Content guidance" });
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveAccessibleDescription(
      "This lesson contains upsetting themes.",
    );
  });

  it("has no close button", () => {
    const { queryByRole } = renderWithTheme(
      <OakDialog isOpen aria-label="Content guidance">
        Dialog content
      </OakDialog>,
    );
    expect(queryByRole("button")).not.toBeInTheDocument();
  });

  it("stays open when Escape is pressed or the backdrop is clicked", () => {
    const { getByRole, getByTestId } = renderWithTheme(
      <OakDialog isOpen aria-label="Content guidance">
        Dialog content
      </OakDialog>,
    );
    fireEvent.keyDown(document, { key: "Escape" });
    act(() => {
      fireEvent.mouseDown(getByTestId("modal-backdrop"));
    });
    expect(getByRole("alertdialog")).toBeInTheDocument();
  });

  it("renders the footer slot outside the scrollable content", () => {
    const { getByTestId } = renderWithTheme(
      <OakDialog
        isOpen
        aria-label="Content guidance"
        footerSlot={<div data-testid="footer">Continue</div>}
      >
        Dialog content
      </OakDialog>,
    );
    expect(getByTestId("footer")).toHaveTextContent("Continue");
    expect(getByTestId("modal-content")).not.toContainElement(
      getByTestId("footer"),
    );
  });

  it("is centred with rounded corners", () => {
    const { getByRole } = renderWithTheme(
      <OakDialog isOpen aria-label="Content guidance">
        Dialog content
      </OakDialog>,
    );
    const dialog = getByRole("alertdialog");
    expect(dialog).toHaveStyleRule("margin", "auto");
    expect(dialog).toHaveStyleRule("border-radius", "1.5rem");
  });

  it("is 960 x 640 by default", () => {
    const { getByRole } = renderWithTheme(
      <OakDialog isOpen aria-label="Content guidance">
        Dialog content
      </OakDialog>,
    );
    const dialog = getByRole("alertdialog");
    expect(dialog).toHaveStyleRule("width", "60rem");
    expect(dialog).toHaveStyleRule(
      "max-height",
      expect.stringContaining("min(40rem"),
    );
  });

  it("uses the width and maxHeight tokens", () => {
    const { getByRole } = renderWithTheme(
      <OakDialog
        isOpen
        aria-label="Content guidance"
        width="spacing-640"
        maxHeight="spacing-480"
      >
        Dialog content
      </OakDialog>,
    );
    const dialog = getByRole("alertdialog");
    expect(dialog).toHaveStyleRule("width", "40rem");
    expect(dialog).toHaveStyleRule(
      "max-height",
      expect.stringContaining("min(30rem"),
    );
  });

  it("accepts a z-index override", () => {
    const { getByTestId } = renderWithTheme(
      <OakDialog isOpen aria-label="Content guidance" zIndex={1000}>
        Dialog content
      </OakDialog>,
    );
    expect(getByTestId("modal-root")).toHaveStyleRule("z-index", "1000");
  });

  it("requires exactly one of aria-label or aria-labelledby", () => {
    // These are type checks: `pnpm check-types` fails if the errors go away
    // @ts-expect-error - an accessible name is required
    const neither = <OakDialog isOpen>Content</OakDialog>;
    const both = (
      // @ts-expect-error - only one accessible name may be given
      <OakDialog isOpen aria-label="Label" aria-labelledby="title">
        Content
      </OakDialog>
    );
    expect(neither).toBeDefined();
    expect(both).toBeDefined();
  });

  describe("focus", () => {
    it("focuses the top of the content, not the first button", async () => {
      const { getByTestId } = renderWithTheme(
        <OakDialog
          isOpen
          aria-label="Content guidance"
          footerSlot={<button>I understand, continue</button>}
        >
          Dialog content
        </OakDialog>,
      );
      await waitFor(() => expect(getByTestId("modal-content")).toHaveFocus());
    });

    it("focuses an element with data-autofocus when focusContentOnOpen is false", async () => {
      const { getByRole } = renderWithTheme(
        <OakDialog
          isOpen
          aria-label="Content guidance"
          focusContentOnOpen={false}
          footerSlot={
            <>
              <button>Continue</button>
              <button data-autofocus>Go back</button>
            </>
          }
        >
          Dialog content
        </OakDialog>,
      );
      await waitFor(() =>
        expect(getByRole("button", { name: "Go back" })).toHaveFocus(),
      );
    });

    it("focuses the first button when focusContentOnOpen is false and nothing is marked", async () => {
      const { getByRole } = renderWithTheme(
        <OakDialog
          isOpen
          aria-label="Content guidance"
          focusContentOnOpen={false}
          footerSlot={<button>OK</button>}
        >
          Dialog content
        </OakDialog>,
      );
      await waitFor(() =>
        expect(getByRole("button", { name: "OK" })).toHaveFocus(),
      );
    });

    it("closes through the consumer's own button and returns focus to the trigger", async () => {
      const { getByRole, queryByRole } = renderWithTheme(<Harness />);
      const trigger = getByRole("button", { name: "Open" });
      trigger.focus();
      fireEvent.click(trigger);
      await waitFor(() => expect(getByRole("alertdialog")).toBeInTheDocument());

      fireEvent.click(getByRole("button", { name: "I understand" }));

      await waitFor(() =>
        expect(queryByRole("alertdialog")).not.toBeInTheDocument(),
      );
      await waitFor(() => expect(trigger).toHaveFocus());
    });
  });
});
