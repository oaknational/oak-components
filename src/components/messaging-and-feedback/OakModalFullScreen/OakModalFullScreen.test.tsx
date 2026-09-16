import React, { ReactNode } from "react";
import "@testing-library/jest-dom";
import { fireEvent, waitFor } from "@testing-library/react";

import { OakModalFullScreen } from ".";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { installMockIntersectionObserver } from "@/test-helpers";

installMockIntersectionObserver();

jest.mock("react-dom", () => {
  return {
    ...jest.requireActual("react-dom"),
    createPortal: (node: ReactNode) => node,
  };
});

describe(OakModalFullScreen, () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakModalFullScreen isOpen onClose={() => {}} title="Worksheet">
        Modal content
      </OakModalFullScreen>,
    );

    expect(container).toMatchSnapshot();
  });

  it("shows the child content", () => {
    const { getByTestId } = renderWithTheme(
      <OakModalFullScreen isOpen onClose={() => {}} title="Worksheet">
        <div data-testid="child-content">Hello World</div>
      </OakModalFullScreen>,
    );

    expect(getByTestId("child-content")).toHaveTextContent("Hello World");
  });

  it("renders nothing when closed", () => {
    const { queryByRole } = renderWithTheme(
      <OakModalFullScreen isOpen={false} onClose={() => {}} title="Worksheet">
        Modal content
      </OakModalFullScreen>,
    );

    expect(queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("unmounts the dialog once it has transitioned out", async () => {
    const { queryByRole, rerender } = renderWithTheme(
      <OakModalFullScreen isOpen onClose={() => {}} title="Worksheet">
        Modal content
      </OakModalFullScreen>,
    );

    rerender(
      <OakModalFullScreen isOpen={false} onClose={() => {}} title="Worksheet">
        Modal content
      </OakModalFullScreen>,
    );

    await waitFor(() => expect(queryByRole("dialog")).not.toBeInTheDocument());
  });

  it("names the dialog with its title", () => {
    const { getByRole } = renderWithTheme(
      <OakModalFullScreen isOpen onClose={() => {}} title="Worksheet">
        Modal content
      </OakModalFullScreen>,
    );

    expect(getByRole("dialog", { name: "Worksheet" })).toBeInTheDocument();
  });

  it.each([
    { description: "missing", ariaLabelledBy: undefined },
    { description: "empty", ariaLabelledBy: "" },
  ])(
    "uses the title as the dialog name when the heading reference is $description",
    ({ ariaLabelledBy }) => {
      const { getByRole } = renderWithTheme(
        <OakModalFullScreen
          isOpen
          onClose={() => {}}
          title="Worksheet"
          aria-labelledby={ariaLabelledBy}
        >
          Modal content
        </OakModalFullScreen>,
      );

      expect(getByRole("dialog", { name: "Worksheet" })).toBeInTheDocument();
    },
  );

  it("lets a consumer name the dialog differently from its title", () => {
    const { getByRole } = renderWithTheme(
      <OakModalFullScreen
        isOpen
        onClose={() => {}}
        title="Worksheet"
        aria-label="Adding scaffolding to a worksheet"
      >
        Modal content
      </OakModalFullScreen>,
    );

    expect(
      getByRole("dialog", { name: "Adding scaffolding to a worksheet" }),
    ).toBeInTheDocument();
  });

  it("uses the supplied label when no heading reference is provided", () => {
    const { getByRole } = renderWithTheme(
      <OakModalFullScreen
        isOpen
        onClose={() => {}}
        title="Worksheet"
        aria-label="Adding scaffolding to a worksheet"
        aria-labelledby={undefined}
      >
        Modal content
      </OakModalFullScreen>,
    );

    expect(
      getByRole("dialog", { name: "Adding scaffolding to a worksheet" }),
    ).toBeInTheDocument();
  });

  it("uses a consumer aria-labelledby ahead of aria-label and the title", () => {
    const { getByRole } = renderWithTheme(
      <OakModalFullScreen
        isOpen
        onClose={() => {}}
        title="Worksheet"
        aria-label="Adding scaffolding to a worksheet"
        aria-labelledby="consumer-dialog-name"
      >
        <p id="consumer-dialog-name">Custom worksheet name</p>
      </OakModalFullScreen>,
    );

    expect(
      getByRole("dialog", { name: "Custom worksheet name" }),
    ).toBeInTheDocument();
  });

  it("titles itself at heading level 2 by default", () => {
    const { getByRole } = renderWithTheme(
      <OakModalFullScreen isOpen onClose={() => {}} title="Worksheet">
        Modal content
      </OakModalFullScreen>,
    );

    expect(
      getByRole("heading", { level: 2, name: "Worksheet" }),
    ).toBeInTheDocument();
  });

  it("takes a heading level for hosts with a different hierarchy", () => {
    const { getByRole } = renderWithTheme(
      <OakModalFullScreen
        isOpen
        onClose={() => {}}
        title="Worksheet"
        headingTag="h3"
      >
        Modal content
      </OakModalFullScreen>,
    );

    expect(
      getByRole("heading", { level: 3, name: "Worksheet" }),
    ).toBeInTheDocument();
  });

  it("labels the close button Close", () => {
    const { getByRole } = renderWithTheme(
      <OakModalFullScreen isOpen onClose={() => {}} title="Worksheet">
        Modal content
      </OakModalFullScreen>,
    );

    expect(getByRole("button", { name: "Close" })).toBeInTheDocument();
  });

  it("takes an override for the close button label", () => {
    const { getByRole } = renderWithTheme(
      <OakModalFullScreen
        isOpen
        onClose={() => {}}
        title="Worksheet"
        closeButtonLabel="Close worksheet"
      >
        Modal content
      </OakModalFullScreen>,
    );

    expect(
      getByRole("button", { name: "Close worksheet" }),
    ).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    const onCloseSpy = jest.fn();

    const { getByRole } = renderWithTheme(
      <OakModalFullScreen isOpen onClose={onCloseSpy} title="Worksheet">
        Modal content
      </OakModalFullScreen>,
    );

    fireEvent.click(getByRole("button", { name: "Close" }));

    expect(onCloseSpy).toHaveBeenCalled();
  });

  it("calls onClose when the escape key is pressed", () => {
    const onCloseSpy = jest.fn();

    renderWithTheme(
      <OakModalFullScreen isOpen onClose={onCloseSpy} title="Worksheet">
        Modal content
      </OakModalFullScreen>,
    );

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onCloseSpy).toHaveBeenCalled();
  });

  it("does not call onClose on escape when disableEscapeKey is true", () => {
    const onCloseSpy = jest.fn();

    renderWithTheme(
      <OakModalFullScreen
        isOpen
        onClose={onCloseSpy}
        title="Worksheet"
        disableEscapeKey
      >
        Modal content
      </OakModalFullScreen>,
    );

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onCloseSpy).not.toHaveBeenCalled();
  });

  it("leaves the content region out of the tab order when it fits", () => {
    const { getByTestId } = renderWithTheme(
      <OakModalFullScreen isOpen onClose={() => {}} title="Worksheet">
        Modal content
      </OakModalFullScreen>,
    );

    expect(getByTestId("modal-full-screen-content")).not.toHaveAttribute(
      "tabindex",
    );
  });

  it("gives the content region a tab stop when it scrolls", () => {
    const { getByTestId } = renderWithTheme(
      <OakModalFullScreen isOpen onClose={() => {}} title="Worksheet">
        Modal content
      </OakModalFullScreen>,
    );
    const content = getByTestId("modal-full-screen-content");

    Object.defineProperty(content, "scrollHeight", {
      configurable: true,
      value: 500,
    });
    Object.defineProperty(content, "clientHeight", {
      configurable: true,
      value: 100,
    });
    fireEvent.resize(window);

    expect(content).toHaveAttribute("tabindex", "0");
  });

  it("shows the footer slot", () => {
    const { getByTestId } = renderWithTheme(
      <OakModalFullScreen
        isOpen
        onClose={() => {}}
        title="Worksheet"
        footerSlot={<div data-testid="footer">Download</div>}
      >
        Modal content
      </OakModalFullScreen>,
    );

    expect(getByTestId("footer")).toHaveTextContent("Download");
  });
});
