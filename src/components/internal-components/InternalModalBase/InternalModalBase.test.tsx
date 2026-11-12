import React, { useState } from "react";
import "@testing-library/jest-dom";
import { act, fireEvent, waitFor } from "@testing-library/react";

import {
  InternalModalBase,
  InternalModalBaseProps,
  InternalModalPlacement,
} from "./InternalModalBase";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { getMediaQuery } from "@/styles/utils/responsiveStyle";

const mobile = getMediaQuery("mobile");

const defaultProps: InternalModalBaseProps = {
  isOpen: true,
  placement: "centre",
  "aria-label": "Test modal",
  children: "Modal content",
};

type Overrides = Partial<InternalModalBaseProps>;

const renderBase = (props: Overrides = {}) =>
  renderWithTheme(<InternalModalBase {...defaultProps} {...props} />);

describe("InternalModalBase", () => {
  it("matches snapshot", () => {
    const { baseElement } = renderBase();
    expect(baseElement).toMatchSnapshot();
  });

  it("renders nothing when closed", () => {
    const { queryByRole } = renderBase({ isOpen: false });
    expect(queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("does not touch the document during server rendering", () => {
    // The browser build of react-dom/server needs TextEncoder, which jsdom lacks
    const { renderToString } = jest.requireActual<
      typeof import("react-dom/server")
    >("react-dom/server.node");
    expect(renderToString(<InternalModalBase {...defaultProps} />)).toBe("");
  });

  it("portals into document.body by default", () => {
    const { container, getByRole } = renderBase();
    expect(container).toBeEmptyDOMElement();
    expect(document.body).toContainElement(getByRole("dialog"));
  });

  it("portals into domContainer when given", () => {
    const domContainer = document.createElement("div");
    document.body.appendChild(domContainer);
    const { getByRole } = renderBase({ domContainer });
    expect(domContainer).toContainElement(getByRole("dialog"));
    domContainer.remove();
  });

  it("renders a modal dialog with an accessible name and description", () => {
    const { getByRole } = renderBase({
      "aria-describedby": "description",
      children: <p id="description">A description</p>,
    });
    const dialog = getByRole("dialog", { name: "Test modal" });
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveAccessibleDescription("A description");
  });

  it("can be named by aria-labelledby", () => {
    const { getByRole } = renderWithTheme(
      <InternalModalBase isOpen placement="centre" aria-labelledby="title">
        <h2 id="title">A title</h2>
      </InternalModalBase>,
    );
    expect(getByRole("dialog", { name: "A title" })).toBeInTheDocument();
  });

  it("prefers aria-labelledby when both names are given", () => {
    const { getByRole } = renderWithTheme(
      <InternalModalBase
        isOpen
        placement="centre"
        aria-label="Label"
        aria-labelledby="title"
      >
        <h2 id="title">A title</h2>
      </InternalModalBase>,
    );
    const dialog = getByRole("dialog", { name: "A title" });
    expect(dialog).not.toHaveAttribute("aria-label");
  });

  it("uses the given role", () => {
    const { getByRole } = renderBase({ role: "alertdialog" });
    expect(getByRole("alertdialog")).toBeInTheDocument();
  });

  it("renders the header, content and footer in visual order", () => {
    const { getByTestId } = renderBase({
      header: <div data-testid="header" />,
      children: <div data-testid="child" />,
      footerSlot: <div data-testid="footer" />,
    });
    const header = getByTestId("header");
    const content = getByTestId("modal-content");
    const footer = getByTestId("footer");
    expect(content).toContainElement(getByTestId("child"));
    expect(content).not.toContainElement(header);
    expect(content).not.toContainElement(footer);
    expect(header.compareDocumentPosition(content)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
    expect(content.compareDocumentPosition(footer)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
  });

  describe("dismissing", () => {
    it("calls onDismiss when Escape is pressed", () => {
      const onDismiss = jest.fn();
      renderBase({ onDismiss });
      fireEvent.keyDown(document, { key: "Escape" });
      expect(onDismiss).toHaveBeenCalledTimes(1);
    });

    it("calls onDismiss when the backdrop is clicked", () => {
      const onDismiss = jest.fn();
      const { getByTestId } = renderBase({ onDismiss });
      act(() => {
        fireEvent.mouseDown(getByTestId("modal-backdrop"));
      });
      expect(onDismiss).toHaveBeenCalledTimes(1);
    });

    it("does not call onDismiss when the panel is clicked", () => {
      const onDismiss = jest.fn();
      const { getByRole } = renderBase({ onDismiss });
      act(() => {
        fireEvent.mouseDown(getByRole("dialog"));
      });
      expect(onDismiss).not.toHaveBeenCalled();
    });

    it("stays open on Escape and backdrop click without onDismiss", () => {
      const { getByRole, getByTestId } = renderBase({ onDismiss: undefined });
      fireEvent.keyDown(document, { key: "Escape" });
      act(() => {
        fireEvent.mouseDown(getByTestId("modal-backdrop"));
      });
      expect(getByRole("dialog")).toBeInTheDocument();
    });
  });

  it("unmounts after the exit transition", async () => {
    const { queryByRole, rerender } = renderBase();
    rerender(<InternalModalBase {...defaultProps} isOpen={false} />);
    await waitFor(() => expect(queryByRole("dialog")).not.toBeInTheDocument());
  });

  describe("backdrop", () => {
    it.each<InternalModalPlacement>([
      "centre",
      "left",
      "right",
      "top",
      "bottom",
    ])("is shown for %s", (placement) => {
      const { getByTestId } = renderBase({ placement });
      expect(getByTestId("modal-backdrop")).toBeInTheDocument();
    });

    it("is not rendered for fullscreen", () => {
      const { queryByTestId } = renderBase({ placement: "fullscreen" });
      expect(queryByTestId("modal-backdrop")).not.toBeInTheDocument();
    });

    it.each<InternalModalPlacement>(["left", "right", "top", "bottom"])(
      "is hidden on small screens for %s",
      (placement) => {
        const { getByTestId } = renderBase({ placement });
        expect(getByTestId("modal-backdrop")).toHaveStyleRule(
          "display",
          "none",
          { media: mobile },
        );
      },
    );

    it("stays visible on small screens for centre", () => {
      const { getByTestId } = renderBase({ placement: "centre" });
      expect(getByTestId("modal-backdrop")).not.toHaveStyleRule(
        "display",
        "none",
        { media: mobile },
      );
    });
  });

  describe("placement and size", () => {
    it("fills the screen for fullscreen", () => {
      const { getByRole } = renderBase({ placement: "fullscreen" });
      expect(getByRole("dialog")).toHaveStyleRule("inset", "0rem");
    });

    it.each([
      ["left", "width", "40rem", "max-width"],
      ["right", "width", "40rem", "max-width"],
      ["top", "height", "40rem", "max-height"],
      ["bottom", "height", "40rem", "max-height"],
    ] as const)(
      "%s uses the size token for its %s and caps it at the screen",
      (placement, property, value, capProperty) => {
        const { getByRole } = renderBase({
          placement,
          width: "spacing-640",
          height: "spacing-640",
        });
        const dialog = getByRole("dialog");
        expect(dialog).toHaveStyleRule(property, value);
        expect(dialog).toHaveStyleRule(capProperty, "100%");
      },
    );

    it.each(["left", "right", "top", "bottom"] as const)(
      "%s fills the screen below the small breakpoint",
      (placement) => {
        const { getByRole } = renderBase({ placement });
        const dialog = getByRole("dialog");
        expect(dialog).toHaveStyleRule("inset", "0rem", { media: mobile });
        expect(dialog).toHaveStyleRule("width", "auto", { media: mobile });
        expect(dialog).toHaveStyleRule("height", "auto", { media: mobile });
      },
    );

    it("centre is capped at the screen size minus a gap on each side", () => {
      const { getByRole } = renderBase({
        placement: "centre",
        width: "spacing-960",
        height: "spacing-640",
      });
      const dialog = getByRole("dialog");
      expect(dialog).toHaveStyleRule("width", "60rem");
      expect(dialog).toHaveStyleRule(
        "max-width",
        "calc(100% - 1.25rem - 1.25rem)",
      );
      expect(dialog).toHaveStyleRule(
        "max-height",
        "min(40rem, calc(100% - 1.25rem - 1.25rem))",
      );
    });
  });

  it("fades the backdrop and panel in together", () => {
    const { getByTestId } = renderBase();
    const root = getByTestId("modal-root");
    expect(root).toHaveStyleRule("opacity", "1");
    expect(root).toHaveStyleRule("transition", "all 0.3s ease");
    expect(root).toContainElement(getByTestId("modal-backdrop"));
  });

  it("uses the modal-dialog z-index by default", () => {
    const { getByTestId } = renderBase();
    expect(getByTestId("modal-root")).toHaveStyleRule("z-index", "300");
  });

  it("accepts a z-index override", () => {
    const { getByTestId } = renderBase({ zIndex: 1000 });
    expect(getByTestId("modal-root")).toHaveStyleRule("z-index", "1000");
  });

  describe("content spacing", () => {
    const tabletUp = { media: "(min-width: 750px)" };

    it("runs to the panel's edges when not centred", () => {
      const { getByTestId } = renderBase({ placement: "right" });
      expect(getByTestId("modal-content")).not.toHaveStyleRule(
        "margin",
        expect.anything(),
      );
      const inner = getByTestId("modal-content-inner");
      expect(inner).toHaveStyleRule("padding-top", "3.5rem");
      expect(inner).toHaveStyleRule("padding-left", "1rem");
      expect(inner).toHaveStyleRule("padding-left", "4rem", tabletUp);
    });

    it("is inset when centred so the rounded corners don't clip the scrollbar, keeping the content in place", () => {
      const { getByTestId } = renderBase({ placement: "centre" });
      // 8px in from the panel's edges...
      expect(getByTestId("modal-content")).toHaveStyleRule("margin", "0.5rem");
      // ...and 8px less padding, so the content is still 56px / 64px from the edges
      const inner = getByTestId("modal-content-inner");
      expect(inner).toHaveStyleRule("padding-top", "3rem");
      expect(inner).toHaveStyleRule("padding-left", "1rem");
      expect(inner).toHaveStyleRule("padding-left", "3.5rem", tabletUp);
    });

    it("keeps the padding off the scroll area so it can shrink on short screens", () => {
      const { getByTestId } = renderBase();
      expect(getByTestId("modal-content")).not.toHaveStyleRule(
        "padding-top",
        expect.anything(),
      );
    });
  });

  describe("scrollable content", () => {
    it("is not tabbable when it does not scroll", () => {
      const { getByTestId } = renderBase();
      expect(getByTestId("modal-content")).not.toHaveAttribute("tabindex");
    });

    it("is tabbable once the content grows enough to scroll", () => {
      const callbacks: ResizeObserverCallback[] = [];
      const original = globalThis.ResizeObserver;
      globalThis.ResizeObserver = class {
        constructor(callback: ResizeObserverCallback) {
          callbacks.push(callback);
        }
        observe() {}
        unobserve() {}
        disconnect() {}
      };
      try {
        const { getByTestId } = renderBase();
        const content = getByTestId("modal-content");
        expect(content).not.toHaveAttribute("tabindex");

        // e.g. images load or an accordion opens without `children` changing
        Object.defineProperty(content, "scrollHeight", {
          configurable: true,
          value: 500,
        });
        Object.defineProperty(content, "clientHeight", {
          configurable: true,
          value: 100,
        });
        act(() => {
          callbacks.forEach((callback) => callback([], {} as ResizeObserver));
        });

        expect(content).toHaveAttribute("tabindex", "0");
      } finally {
        globalThis.ResizeObserver = original;
      }
    });

    it("is tabbable once a stateful child adds enough content to scroll", () => {
      const callbacks: ResizeObserverCallback[] = [];
      const observed: Element[] = [];
      const original = globalThis.ResizeObserver;
      globalThis.ResizeObserver = class {
        constructor(callback: ResizeObserverCallback) {
          callbacks.push(callback);
        }
        observe(target: Element) {
          observed.push(target);
        }
        unobserve() {}
        disconnect() {}
      };

      // Adds paragraphs through its own state, so the parent's `children` never change
      const GrowingContent = () => {
        const [count, setCount] = useState(1);
        return (
          <>
            {Array.from({ length: count }, (_, i) => (
              <p key={i}>Paragraph {i + 1}</p>
            ))}
            <button onClick={() => setCount((c) => c + 5)}>Add more</button>
          </>
        );
      };

      try {
        const { getByTestId, getByRole, getByText } = renderBase({
          children: <GrowingContent />,
        });
        const content = getByTestId("modal-content");
        expect(content).not.toHaveAttribute("tabindex");

        fireEvent.click(getByRole("button", { name: "Add more" }));
        expect(getByText("Paragraph 6")).toBeInTheDocument();

        // The wrapper around the children grows, so it must be observed
        expect(observed).toContain(getByTestId("modal-content-inner"));

        Object.defineProperty(content, "scrollHeight", {
          configurable: true,
          value: 500,
        });
        Object.defineProperty(content, "clientHeight", {
          configurable: true,
          value: 100,
        });
        act(() => {
          callbacks.forEach((callback) => callback([], {} as ResizeObserver));
        });

        expect(content).toHaveAttribute("tabindex", "0");
      } finally {
        globalThis.ResizeObserver = original;
      }
    });
  });

  describe("closing", () => {
    it("does not call onDismiss again while closing", () => {
      const onDismiss = jest.fn();
      const { getByTestId, rerender } = renderBase({ onDismiss });
      rerender(
        <InternalModalBase
          {...defaultProps}
          onDismiss={onDismiss}
          isOpen={false}
        />,
      );
      fireEvent.keyDown(document, { key: "Escape" });
      act(() => {
        fireEvent.mouseDown(getByTestId("modal-backdrop"));
      });
      expect(onDismiss).not.toHaveBeenCalled();
    });
  });

  describe("focus", () => {
    it("focuses the first focusable element by default", async () => {
      const { getByRole } = renderBase({
        children: <button>First</button>,
      });
      await waitFor(() =>
        expect(getByRole("button", { name: "First" })).toHaveFocus(),
      );
    });

    it("focuses the top of the content when autoFocusContent is set", async () => {
      const { getByTestId } = renderBase({
        autoFocusContent: true,
        children: <button>First</button>,
      });
      await waitFor(() => expect(getByTestId("modal-content")).toHaveFocus());
    });

    it("keeps focus on the content when autoFocusContent is set, even if a button is marked", async () => {
      const { getByTestId } = renderBase({
        autoFocusContent: true,
        footerSlot: <button data-autofocus>Safe choice</button>,
      });
      await waitFor(() => expect(getByTestId("modal-content")).toHaveFocus());
    });

    it("focuses a marked element when autoFocusContent is off", async () => {
      const { getByRole } = renderBase({
        children: <button>First</button>,
        footerSlot: <button data-autofocus>Safe choice</button>,
      });
      await waitFor(() =>
        expect(getByRole("button", { name: "Safe choice" })).toHaveFocus(),
      );
    });

    it("returns focus to the trigger after closing", async () => {
      const Harness = () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
          <>
            <button onClick={() => setIsOpen(true)}>Open</button>
            <InternalModalBase
              isOpen={isOpen}
              placement="centre"
              aria-label="Test modal"
              onDismiss={() => setIsOpen(false)}
            >
              <button>Inside</button>
            </InternalModalBase>
          </>
        );
      };
      const { getByRole, queryByRole } = renderWithTheme(<Harness />);
      const trigger = getByRole("button", { name: "Open" });
      trigger.focus();
      fireEvent.click(trigger);
      await waitFor(() =>
        expect(getByRole("button", { name: "Inside" })).toHaveFocus(),
      );
      fireEvent.keyDown(document, { key: "Escape" });
      await waitFor(() =>
        expect(queryByRole("dialog")).not.toBeInTheDocument(),
      );
      await waitFor(() => expect(trigger).toHaveFocus());
    });

    it("lets returnFocus override where focus goes after closing", async () => {
      // Returning false stops focus going back to the trigger
      const returnFocus = jest.fn(() => false);
      const Harness = () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
          <>
            <button onClick={() => setIsOpen(true)}>Open</button>
            <InternalModalBase
              isOpen={isOpen}
              placement="centre"
              aria-label="Test modal"
              onDismiss={() => setIsOpen(false)}
              returnFocus={returnFocus}
            >
              <button>Inside</button>
            </InternalModalBase>
          </>
        );
      };
      const { getByRole, queryByRole } = renderWithTheme(<Harness />);
      const trigger = getByRole("button", { name: "Open" });
      trigger.focus();
      fireEvent.click(trigger);
      await waitFor(() =>
        expect(getByRole("button", { name: "Inside" })).toHaveFocus(),
      );
      fireEvent.keyDown(document, { key: "Escape" });
      await waitFor(() =>
        expect(queryByRole("dialog")).not.toBeInTheDocument(),
      );
      await waitFor(() => expect(returnFocus).toHaveBeenCalledWith(trigger));
      expect(trigger).not.toHaveFocus();
    });
  });
});
