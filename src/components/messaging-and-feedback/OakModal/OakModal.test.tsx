import React, { useState } from "react";
import "@testing-library/jest-dom";
import { act, fireEvent, waitFor } from "@testing-library/react";

import { OakModal, OakModalPosition } from "./OakModal";

import { OakDialog } from "@/components/messaging-and-feedback/OakDialog";
import { OakIcon } from "@/components/images-and-icons/OakIcon";
import renderWithTheme from "@/test-helpers/renderWithTheme";
import { getMediaQuery } from "@/styles/utils/responsiveStyle";

const iconFilter = (element: Element) =>
  getComputedStyle(element.querySelector("img") as HTMLElement).filter;

const positions: OakModalPosition[] = [
  "fullscreen",
  "left",
  "right",
  "top",
  "bottom",
];

type HarnessProps = {
  position?: OakModalPosition;
  returnFocus?: (returnTo: Element) => boolean | FocusOptions;
};

const Harness = ({ position = "right", returnFocus }: HarnessProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open</button>
      <OakModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position={position}
        aria-label="Filters"
        returnFocus={returnFocus}
      >
        Modal content
      </OakModal>
    </>
  );
};

const openHarness = async (position?: OakModalPosition) => {
  const utils = renderWithTheme(<Harness position={position} />);
  const trigger = utils.getByRole("button", { name: "Open" });
  trigger.focus();
  fireEvent.click(trigger);
  await waitFor(() => expect(utils.getByRole("dialog")).toBeInTheDocument());
  return { ...utils, trigger };
};

describe("OakModal", () => {
  it.each(positions)("matches snapshot for %s", (position) => {
    const { baseElement } = renderWithTheme(
      <OakModal
        isOpen
        onClose={() => {}}
        position={position}
        aria-label="Filters"
      >
        Modal content
      </OakModal>,
    );
    expect(baseElement).toMatchSnapshot();
  });

  it("renders nothing when closed", () => {
    const { queryByRole } = renderWithTheme(
      <OakModal
        isOpen={false}
        onClose={() => {}}
        position="right"
        aria-label="Filters"
      >
        Modal content
      </OakModal>,
    );
    expect(queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders a named modal dialog with its content", () => {
    const { getByRole, getByTestId } = renderWithTheme(
      <OakModal
        isOpen
        onClose={() => {}}
        position="right"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <h2 id="modal-title">Filters</h2>
        <p id="modal-description">Narrow down the results</p>
        <div data-testid="child">Hello</div>
      </OakModal>,
    );
    const dialog = getByRole("dialog", { name: "Filters" });
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveAccessibleDescription("Narrow down the results");
    expect(getByTestId("child")).toHaveTextContent("Hello");
  });

  it("passes the close action to onClose", () => {
    const onClose = jest.fn();
    const { getByRole } = renderWithTheme(
      <OakModal isOpen onClose={onClose} position="right" aria-label="Filters">
        Modal content
      </OakModal>,
    );

    fireEvent.click(getByRole("button", { name: "Close" }));
    expect(onClose).toHaveBeenLastCalledWith("close_button");

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenLastCalledWith();
  });

  it("requires exactly one of aria-label or aria-labelledby", () => {
    // These are type checks: `pnpm check-types` fails if the errors go away
    const neither = (
      // @ts-expect-error - an accessible name is required
      <OakModal isOpen onClose={() => {}} position="right">
        Content
      </OakModal>
    );
    const both = (
      // @ts-expect-error - only one accessible name may be given
      <OakModal
        isOpen
        onClose={() => {}}
        position="right"
        aria-label="Label"
        aria-labelledby="title"
      >
        Content
      </OakModal>
    );
    expect(neither).toBeDefined();
    expect(both).toBeDefined();
  });

  describe("closing", () => {
    it("closes with the close button and unmounts", async () => {
      const { getByRole, queryByRole } = await openHarness();
      fireEvent.click(getByRole("button", { name: "Close" }));
      await waitFor(() =>
        expect(queryByRole("dialog")).not.toBeInTheDocument(),
      );
    });

    it("closes with Escape and unmounts", async () => {
      const { queryByRole } = await openHarness();
      fireEvent.keyDown(document, { key: "Escape" });
      await waitFor(() =>
        expect(queryByRole("dialog")).not.toBeInTheDocument(),
      );
    });

    it.each<OakModalPosition>(["left", "right", "top", "bottom"])(
      "closes with a backdrop click for %s and unmounts",
      async (position) => {
        const { getByTestId, queryByRole } = await openHarness(position);
        act(() => {
          fireEvent.mouseDown(getByTestId("modal-backdrop"));
        });
        await waitFor(() =>
          expect(queryByRole("dialog")).not.toBeInTheDocument(),
        );
      },
    );

    it("returns focus to the trigger", async () => {
      const { getByRole, queryByRole, trigger } = await openHarness();
      fireEvent.click(getByRole("button", { name: "Close" }));
      await waitFor(() =>
        expect(queryByRole("dialog")).not.toBeInTheDocument(),
      );
      await waitFor(() => expect(trigger).toHaveFocus());
    });

    it("passes returnFocus through", async () => {
      const returnFocus = jest.fn(() => false);
      const utils = renderWithTheme(<Harness returnFocus={returnFocus} />);
      const trigger = utils.getByRole("button", { name: "Open" });
      trigger.focus();
      fireEvent.click(trigger);
      await waitFor(() =>
        expect(utils.getByRole("dialog")).toBeInTheDocument(),
      );

      fireEvent.click(utils.getByRole("button", { name: "Close" }));
      await waitFor(() =>
        expect(utils.queryByRole("dialog")).not.toBeInTheDocument(),
      );
      await waitFor(() => expect(returnFocus).toHaveBeenCalledWith(trigger));
      expect(trigger).not.toHaveFocus();
    });

    it("has a 32px close button named 'Close'", () => {
      const { getByRole } = renderWithTheme(
        <OakModal
          isOpen
          onClose={() => {}}
          position="right"
          aria-label="Filters"
        >
          Content
        </OakModal>,
      );
      const closeButton = getByRole("button", { name: "Close" });
      expect(closeButton.querySelector(".icon-container")).toHaveStyle({
        width: "2rem",
      });
    });
  });

  describe("header", () => {
    it("renders headerSlot before the close button, outside the content", () => {
      const { getByRole, getByTestId } = renderWithTheme(
        <OakModal
          isOpen
          onClose={() => {}}
          position="right"
          aria-label="Filters"
          headerSlot={<a href="#back">Back</a>}
        >
          Content
        </OakModal>,
      );
      const link = getByRole("link", { name: "Back" });
      const closeButton = getByRole("button", { name: "Close" });
      expect(link.compareDocumentPosition(closeButton)).toBe(
        Node.DOCUMENT_POSITION_FOLLOWING,
      );
      expect(getByTestId("modal-content")).not.toContainElement(link);
    });

    it("focuses the close button first, even when headerSlot has a link", async () => {
      const { getByRole } = renderWithTheme(
        <OakModal
          isOpen
          onClose={() => {}}
          position="right"
          aria-label="Filters"
          headerSlot={<a href="#back">Back</a>}
        >
          <button>Inside content</button>
        </OakModal>,
      );
      await waitFor(() =>
        expect(getByRole("button", { name: "Close" })).toHaveFocus(),
      );
    });

    it("has no background and a dark close button by default", () => {
      const { getByTestId, getByRole } = renderWithTheme(
        <OakModal isOpen onClose={() => {}} position="right" aria-label="F">
          Content
        </OakModal>,
      );
      const { container: darkIcon } = renderWithTheme(
        <OakIcon iconName="cross" $colorFilter="icon-primary" />,
      );
      expect(getByTestId("modal-header")).not.toHaveStyleRule(
        "background",
        expect.anything(),
      );
      expect(iconFilter(getByRole("button", { name: "Close" }))).toBe(
        iconFilter(darkIcon),
      );
    });

    it("is black with white text and a white close button when inverted", () => {
      const { getByTestId, getByRole } = renderWithTheme(
        <OakModal
          isOpen
          onClose={() => {}}
          position="right"
          headerVariant="inverted"
          aria-label="F"
        >
          Content
        </OakModal>,
      );
      const { container: whiteIcon } = renderWithTheme(
        <OakIcon iconName="cross" $colorFilter="icon-inverted" />,
      );
      const header = getByTestId("modal-header");
      expect(header).toHaveStyleRule("background", "#222222");
      expect(header).toHaveStyleRule("color", "#ffffff");
      expect(iconFilter(getByRole("button", { name: "Close" }))).toBe(
        iconFilter(whiteIcon),
      );
    });

    it("has a minimum height so taller header content isn't clipped", () => {
      const { getByTestId } = renderWithTheme(
        <OakModal
          isOpen
          onClose={() => {}}
          position="right"
          aria-label="Filters"
        >
          Content
        </OakModal>,
      );
      const header = getByTestId("modal-header");
      expect(header).toHaveStyleRule("min-height", "4rem");
      expect(header).not.toHaveStyleRule("height", expect.anything());
    });
  });

  it("renders the footer slot outside the scrollable content", () => {
    const { getByTestId } = renderWithTheme(
      <OakModal
        isOpen
        onClose={() => {}}
        position="right"
        aria-label="Filters"
        footerSlot={<div data-testid="footer">Apply</div>}
      >
        Content
      </OakModal>,
    );
    expect(getByTestId("footer")).toHaveTextContent("Apply");
    expect(getByTestId("modal-content")).not.toContainElement(
      getByTestId("footer"),
    );
  });

  describe("size", () => {
    it("defaults to spacing-640", () => {
      const { getByRole } = renderWithTheme(
        <OakModal isOpen onClose={() => {}} position="left" aria-label="F">
          Content
        </OakModal>,
      );
      expect(getByRole("dialog")).toHaveStyleRule("width", "40rem");
    });

    it.each([
      ["left", "width"],
      ["right", "width"],
      ["top", "height"],
      ["bottom", "height"],
    ] as const)("sets the %s drawer's %s", (position, property) => {
      const { getByRole } = renderWithTheme(
        <OakModal
          isOpen
          onClose={() => {}}
          position={position}
          size="spacing-800"
          aria-label="F"
        >
          Content
        </OakModal>,
      );
      expect(getByRole("dialog")).toHaveStyleRule(property, "50rem");
    });

    it("is ignored for fullscreen", () => {
      const { getByRole } = renderWithTheme(
        <OakModal
          isOpen
          onClose={() => {}}
          position="fullscreen"
          size="spacing-800"
          aria-label="F"
        >
          Content
        </OakModal>,
      );
      const dialog = getByRole("dialog");
      expect(dialog).toHaveStyleRule("inset", "0rem");
      expect(dialog).not.toHaveStyleRule("width", expect.anything());
    });
  });

  it("shows drawers fullscreen without a backdrop on small screens", () => {
    const media = getMediaQuery("mobile");
    const { getByRole, getByTestId } = renderWithTheme(
      <OakModal isOpen onClose={() => {}} position="right" aria-label="F">
        Content
      </OakModal>,
    );
    expect(getByRole("dialog")).toHaveStyleRule("inset", "0rem", { media });
    expect(getByTestId("modal-backdrop")).toHaveStyleRule("display", "none", {
      media,
    });
  });

  it("has no backdrop when fullscreen", () => {
    const { queryByTestId } = renderWithTheme(
      <OakModal isOpen onClose={() => {}} position="fullscreen" aria-label="F">
        Content
      </OakModal>,
    );
    expect(queryByTestId("modal-backdrop")).not.toBeInTheDocument();
  });

  it("traps focus in a dialog opened on top, then returns focus to the modal", async () => {
    const onClose = jest.fn();
    const Stacked = () => {
      const [isDialogOpen, setIsDialogOpen] = useState(false);
      return (
        <OakModal isOpen onClose={onClose} position="right" aria-label="Edit">
          <button onClick={() => setIsDialogOpen(true)}>Discard changes</button>
          <OakDialog
            isOpen={isDialogOpen}
            aria-label="Are you sure?"
            footerSlot={
              <button onClick={() => setIsDialogOpen(false)}>Cancel</button>
            }
          >
            Your changes will be lost.
          </OakDialog>
        </OakModal>
      );
    };
    const { getByRole, getAllByTestId, queryByRole } = renderWithTheme(
      <Stacked />,
    );
    const discard = getByRole("button", { name: "Discard changes" });
    discard.focus();
    fireEvent.click(discard);

    await waitFor(() =>
      expect(getAllByTestId("modal-content")[1]).toHaveFocus(),
    );

    // Escape belongs to the dialog on top, which can't be dismissed
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).not.toHaveBeenCalled();
    expect(getByRole("alertdialog")).toBeInTheDocument();

    fireEvent.click(getByRole("button", { name: "Cancel" }));
    await waitFor(() =>
      expect(queryByRole("alertdialog")).not.toBeInTheDocument(),
    );
    await waitFor(() => expect(discard).toHaveFocus());
  });
});
