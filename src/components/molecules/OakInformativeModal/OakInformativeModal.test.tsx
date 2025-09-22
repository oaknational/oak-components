import { create } from "react-test-renderer";
import React, { ReactNode } from "react";
import "@testing-library/jest-dom";
import { act, fireEvent } from "@testing-library/react";

import { OakInformativeModal } from "./OakInformativeModal";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";
import { OakThemeProvider } from "@/components/atoms";
import { installMockIntersectionObserver } from "@/test-helpers";

installMockIntersectionObserver();

jest.mock("react-dom", () => {
  return {
    ...jest.requireActual("react-dom"),
    createPortal: (node: ReactNode) => node,
  };
});

describe(OakInformativeModal, () => {
  it("does not render until mounted on the client", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakInformativeModal
          isOpen
          onClose={() => {}}
          footerSlot="Modal footer"
        >
          Modal content
        </OakInformativeModal>
      </OakThemeProvider>,
    );

    expect(tree.toJSON()).toBeNull();
  });

  it("matches snapshot when mounted", async () => {
    const result = renderWithTheme(
      <OakInformativeModal isOpen onClose={() => {}}>
        Modal content
      </OakInformativeModal>,
    );

    expect(result.container).toMatchSnapshot();
  });

  it("calls onClose when the close button is clicked", () => {
    const onCloseSpy = jest.fn();

    const { getByLabelText } = renderWithTheme(
      <OakInformativeModal isOpen onClose={onCloseSpy}>
        Modal content
      </OakInformativeModal>,
    );

    act(() => {
      fireEvent.click(getByLabelText("Close"));
    });

    expect(onCloseSpy).toHaveBeenCalled();
  });

  it("gives the first focusable element in the modal body focus", () => {
    const { getByRole } = renderWithTheme(
      <OakInformativeModal isOpen onClose={() => {}}>
        <input type="text" />
      </OakInformativeModal>,
    );

    expect(getByRole("textbox")).toHaveFocus();
  });
});
