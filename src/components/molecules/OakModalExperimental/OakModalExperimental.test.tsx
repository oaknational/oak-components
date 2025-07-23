import { create } from "react-test-renderer";
import React, { ReactNode } from "react";
import "@testing-library/jest-dom";
import { act, fireEvent } from "@testing-library/react";

import { OakModalExperimental } from "./OakModalExperimental";

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

describe(OakModalExperimental, () => {
  it("does not render until mounted on the client", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakModalExperimental
          isOpen
          onClose={() => {}}
          footerSlot="Modal footer"
        >
          Modal content
        </OakModalExperimental>
      </OakThemeProvider>,
    );

    expect(tree.toJSON()).toBeNull();
  });

  it("matches snapshot when mounted", async () => {
    const result = renderWithTheme(
      <OakModalExperimental isOpen onClose={() => {}}>
        Modal content
      </OakModalExperimental>,
    );

    expect(result.container).toMatchSnapshot();
  });

  it("calls onClose when the close button is clicked", () => {
    const onCloseSpy = jest.fn();

    const { getByLabelText } = renderWithTheme(
      <OakModalExperimental isOpen onClose={onCloseSpy}>
        Modal content
      </OakModalExperimental>,
    );

    act(() => {
      fireEvent.click(getByLabelText("Close"));
    });

    expect(onCloseSpy).toHaveBeenCalled();
  });

  it("gives the first focusable element in the modal body focus", () => {
    const { getByRole } = renderWithTheme(
      <OakModalExperimental isOpen onClose={() => {}}>
        <input type="text" />
      </OakModalExperimental>,
    );

    expect(getByRole("textbox")).toHaveFocus();
  });
});
