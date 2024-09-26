import React, { ReactNode } from "react";
import "@testing-library/jest-dom";
import { act, create } from "react-test-renderer";
import { fireEvent } from "@testing-library/react";

import { OakFilterDrawer } from "./OakFilterDrawer";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { installMockIntersectionObserver } from "@/test-helpers";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

installMockIntersectionObserver();

jest.mock("react-dom", () => {
  return {
    ...jest.requireActual("react-dom"),
    createPortal: (node: ReactNode) => node,
  };
});

describe("OakFilterDrawer", () => {
  it("does not render until mounted on the client", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakFilterDrawer
          clearAllInputs={() => {}}
          isOpen
          onClose={() => {}}
          footerSlot="Oak filter footer"
        >
          Filter drawer content
        </OakFilterDrawer>
      </OakThemeProvider>,
    );

    expect(tree.toJSON()).toBeNull();
  });

  it("matches snapshot when mounted", async () => {
    const result = renderWithTheme(
      <OakFilterDrawer
        clearAllInputs={() => {}}
        isOpen
        onClose={() => {}}
        footerSlot="Oak filter footer"
      >
        Modal content
      </OakFilterDrawer>,
    );

    expect(result.container).toMatchSnapshot();
  });

  it("renders component", () => {
    const { getByTestId } = renderWithTheme(
      <OakFilterDrawer
        data-testid="test"
        onClose={() => {}}
        clearAllInputs={() => {}}
        isOpen={true}
        children="Click Me"
      />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    const onCloseSpy = jest.fn();

    const { getByLabelText } = renderWithTheme(
      <OakFilterDrawer isOpen clearAllInputs={() => {}} onClose={onCloseSpy}>
        Filter content
      </OakFilterDrawer>,
    );

    act(() => {
      fireEvent.click(getByLabelText("Close"));
    });

    expect(onCloseSpy).toHaveBeenCalled();
  });

  it("calls onClear when the clear button is clicked", () => {
    const onClearSpy = jest.fn();

    const { getByLabelText } = renderWithTheme(
      <OakFilterDrawer isOpen clearAllInputs={onClearSpy} onClose={() => {}}>
        Filter content
      </OakFilterDrawer>,
    );

    act(() => {
      fireEvent.click(getByLabelText("Clear"));
    });

    expect(onClearSpy).toHaveBeenCalled();
  });
});
