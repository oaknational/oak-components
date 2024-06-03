import { create } from "react-test-renderer";
import React, { ReactNode } from "react";
import "@testing-library/jest-dom";
import { act, fireEvent } from "@testing-library/react";

import { OakModalCenter } from "./";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";
import { OakThemeProvider } from "@/components/atoms";

jest.mock("react-dom", () => {
  return {
    ...jest.requireActual("react-dom"),
    createPortal: (node: ReactNode) => node,
  };
});

describe(OakModalCenter, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakModalCenter isOpen onClose={() => {}}>
          Modal content
        </OakModalCenter>
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("shows the child content", () => {
    const { getByTestId } = renderWithTheme(
      <OakModalCenter isOpen onClose={() => {}}>
        <div data-testid="child-content">Hello World</div>
      </OakModalCenter>,
    );

    expect(getByTestId("child-content")).toHaveTextContent("Hello World");
  });

  it("calls onClose when the close button is clicked", () => {
    const onCloseSpy = jest.fn();

    const { getByTestId } = renderWithTheme(
      <OakModalCenter isOpen onClose={onCloseSpy}>
        Modal content
      </OakModalCenter>,
    );

    act(() => {
      fireEvent.click(getByTestId("close-button"));
    });

    expect(onCloseSpy).toHaveBeenCalled();
  });

  it("hides close button when hideCloseButton is true", () => {
    const onCloseSpy = jest.fn();

    const { queryAllByTestId } = renderWithTheme(
      <OakModalCenter isOpen onClose={onCloseSpy} hideCloseButton={true}>
        Modal content
      </OakModalCenter>,
    );

    expect(queryAllByTestId("close-button")).toBeNull;
  });

  it("calls onClose when the backdrop is clicked", () => {
    const onCloseSpy = jest.fn();

    renderWithTheme(
      <OakModalCenter isOpen onClose={onCloseSpy}>
        Modal content
      </OakModalCenter>,
    );

    act(() => {
      fireEvent.mouseDown(document);
    });

    expect(onCloseSpy).toHaveBeenCalled();
  });

  it("doesn't call onClose when the backdrop is clicked and disableBackdropClick is true", () => {
    const onCloseSpy = jest.fn();

    renderWithTheme(
      <OakModalCenter isOpen onClose={onCloseSpy} disableBackdropClick={true}>
        Modal content
      </OakModalCenter>,
    );

    act(() => {
      fireEvent.mouseDown(document);
    });

    expect(onCloseSpy).toHaveBeenCalledTimes(0);
  });

  it("calls onClose when the esc key is pressed", () => {
    const onCloseSpy = jest.fn();

    const { getByTestId } = renderWithTheme(
      <OakModalCenter isOpen onClose={onCloseSpy}>
        Modal content
      </OakModalCenter>,
    );

    act(() => {
      fireEvent.keyDown(getByTestId("backdrop"), { key: "Escape" });
    });

    expect(onCloseSpy).toHaveBeenCalled();
  });

  it("doesn't call onClose when the esc key is pressed and disableEscapeKey is true", () => {
    const onCloseSpy = jest.fn();

    const { getByTestId } = renderWithTheme(
      <OakModalCenter isOpen onClose={onCloseSpy} disableEscapeKey={true}>
        Modal content
      </OakModalCenter>,
    );

    act(() => {
      fireEvent.keyDown(getByTestId("backdrop"), { key: "Escape" });
    });

    expect(onCloseSpy).toHaveBeenCalledTimes(0);
  });

  it("gives the first focusable element in the modal body focus", () => {
    const { getByRole } = renderWithTheme(
      <OakModalCenter isOpen onClose={() => {}}>
        <input type="text" />
      </OakModalCenter>,
    );

    expect(getByRole("textbox")).toHaveFocus();
  });

  it("passes aria label to modal", () => {
    const ariaText = "dummy aria label";
    const { getByRole } = renderWithTheme(
      <OakModalCenter
        isOpen
        onClose={() => {}}
        modalFlexProps={{ "aria-label": ariaText }}
      >
        Modal content
      </OakModalCenter>,
    );

    expect(getByRole("dialog")).toHaveAttribute("aria-label", ariaText);
  });
});
