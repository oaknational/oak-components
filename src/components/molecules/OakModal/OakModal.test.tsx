import { create } from "react-test-renderer";
import React, { ReactNode } from "react";
import "@testing-library/jest-dom";
import { act, fireEvent } from "@testing-library/react";

import { OakModal } from "./OakModal";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";
import { OakThemeProvider } from "@/components/atoms";

jest.mock("react-dom", () => {
  return {
    ...jest.requireActual("react-dom"),
    createPortal: (node: ReactNode) => node,
  };
});

global.IntersectionObserver =
  global.IntersectionObserver ??
  class IntersectionObserver {
    constructor() {}
    observe() {
      return null;
    }
    disconnect() {
      return null;
    }
  };

describe(OakModal, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakModal isOpen onClose={() => {}} footerSlot="Modal footer">
          Modal content
        </OakModal>
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("calls onClose when the close button is clicked", () => {
    const onCloseSpy = jest.fn();

    const { getByLabelText } = renderWithTheme(
      <OakModal isOpen onClose={onCloseSpy}>
        Modal content
      </OakModal>,
    );

    act(() => {
      fireEvent.click(getByLabelText("Close"));
    });

    expect(onCloseSpy).toHaveBeenCalled();
  });

  it("gives the first focusable element in the modal body focus", () => {
    const { getByRole } = renderWithTheme(
      <OakModal isOpen onClose={() => {}}>
        <input type="text" />
      </OakModal>,
    );

    expect(getByRole("textbox")).toHaveFocus();
  });
});
