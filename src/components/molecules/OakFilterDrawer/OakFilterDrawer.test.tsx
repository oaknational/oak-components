import React, { ReactNode } from "react";
import "@testing-library/jest-dom";
import { act, create } from "react-test-renderer";
import { fireEvent } from "@testing-library/react";

import { OakFilterDrawer } from "./OakFilterDrawer";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { installMockIntersectionObserver } from "@/test-helpers";

installMockIntersectionObserver();

jest.mock("react-dom", () => {
  return {
    ...jest.requireActual("react-dom"),
    createPortal: (node: ReactNode) => node,
  };
});

describe("OakFilterDrawer", () => {
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

  it("gives the first focusable element in the modal body focus", () => {
    const { getByRole } = renderWithTheme(
      <OakFilterDrawer isOpen clearAllInputs={() => {}} onClose={() => {}}>
        <input type="text" />
      </OakFilterDrawer>,
    );

    expect(getByRole("textbox")).toHaveFocus();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakFilterDrawer
        clearAllInputs={() => {}}
        onClose={() => {}}
        isOpen={true}
      >
        Click Me
      </OakFilterDrawer>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
