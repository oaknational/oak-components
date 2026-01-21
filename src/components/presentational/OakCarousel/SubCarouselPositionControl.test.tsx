import React, { ReactElement } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import {
  SubCarouselPositionControl,
  SubCarouselPositionControlProps,
} from "./SubCarouselPositionControl";

import renderWithTheme from "@/test-helpers/renderWithTheme";

// Mock the custom components
type FlexProps = {
  children: ReactElement | ReactElement[];
  $gap?: string;
};

type ButtonProps = {
  onClick: () => void;
  iconName: string;
  disabled?: boolean;
};

jest.mock("@/components/layout-and-structure/OakFlex", () => ({
  OakFlex: ({ children }: FlexProps): ReactElement => <div>{children}</div>,
}));

jest.mock("@/components/buttons/OakTertiaryInvertedButton", () => ({
  OakTertiaryInvertedButton: ({
    onClick,
    iconName,
    disabled,
  }: ButtonProps): ReactElement => (
    <button
      onClick={onClick}
      disabled={disabled}
      data-testid={`button-${iconName}`}
    >
      {iconName}
    </button>
  ),
}));

describe("SubCarouselPositionControl", () => {
  const defaultProps: SubCarouselPositionControlProps = {
    onBack: jest.fn(),
    onFwd: jest.fn(),
    fwdLabel: "Forward",
    backLabel: "Back",
  };

  const renderComponent = (
    props: SubCarouselPositionControlProps = defaultProps,
  ): ReturnType<typeof render> => {
    return renderWithTheme(<SubCarouselPositionControl {...props} />);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Rendering", () => {
    it("renders both back and forward buttons", () => {
      renderComponent();
      expect(screen.getByTestId("button-chevron-left")).toBeInTheDocument();
      expect(screen.getByTestId("button-chevron-right")).toBeInTheDocument();
    });

    it("renders buttons as enabled by default", () => {
      renderComponent();
      expect(screen.getByTestId("button-chevron-left")).not.toBeDisabled();
      expect(screen.getByTestId("button-chevron-right")).not.toBeDisabled();
    });
  });

  describe("Button states", () => {
    it("disables back button when disableBack is true", () => {
      renderComponent({ ...defaultProps, disableBack: true });
      expect(screen.getByTestId("button-chevron-left")).toBeDisabled();
      expect(screen.getByTestId("button-chevron-right")).not.toBeDisabled();
    });

    it("disables forward button when disableFwd is true", () => {
      renderComponent({ ...defaultProps, disableFwd: true });
      expect(screen.getByTestId("button-chevron-left")).not.toBeDisabled();
      expect(screen.getByTestId("button-chevron-right")).toBeDisabled();
    });

    it("can disable both buttons simultaneously", () => {
      renderComponent({ ...defaultProps, disableBack: true, disableFwd: true });
      expect(screen.getByTestId("button-chevron-left")).toBeDisabled();
      expect(screen.getByTestId("button-chevron-right")).toBeDisabled();
    });
  });

  describe("Click handlers", () => {
    it("calls onBack when back button is clicked", () => {
      const onBack = jest.fn();
      renderComponent({ ...defaultProps, onBack });

      fireEvent.click(screen.getByTestId("button-chevron-left"));
      expect(onBack).toHaveBeenCalledTimes(1);
    });

    it("calls onFwd when forward button is clicked", () => {
      const onFwd = jest.fn();
      renderComponent({ ...defaultProps, onFwd });

      fireEvent.click(screen.getByTestId("button-chevron-right"));
      expect(onFwd).toHaveBeenCalledTimes(1);
    });

    it("does not call onBack when back button is disabled", () => {
      const onBack = jest.fn();
      renderComponent({ ...defaultProps, onBack, disableBack: true });

      fireEvent.click(screen.getByTestId("button-chevron-left"));
      expect(onBack).not.toHaveBeenCalled();
    });

    it("does not call onFwd when forward button is disabled", () => {
      const onFwd = jest.fn();
      renderComponent({ ...defaultProps, onFwd, disableFwd: true });

      fireEvent.click(screen.getByTestId("button-chevron-right"));
      expect(onFwd).not.toHaveBeenCalled();
    });
  });
});
