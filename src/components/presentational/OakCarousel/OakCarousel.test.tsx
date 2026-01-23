import React, { ReactElement } from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";

import { OakCarousel, OakCarouselProps } from "./OakCarousel";

// Define types for the mocked components
type PositionIndicatorProps = {
  activeIndex: number;
  numberOfItems: number;
};

type PositionControlProps = {
  onFwd: () => void;
  onBack: () => void;
  disableFwd: boolean;
  disableBack: boolean;
};

type FlexProps = {
  children: ReactElement | ReactElement[];
};

// Mock the imported components
jest.mock("./SubCarouselPositionIndicator", () => ({
  SubCarouselPositionIndicator: ({
    activeIndex,
    numberOfItems,
  }: PositionIndicatorProps): ReactElement => (
    <div data-testid="position-indicator">
      {activeIndex}/{numberOfItems}
    </div>
  ),
}));

jest.mock("./SubCarouselPositionControl", () => ({
  SubCarouselPositionControl: ({
    onFwd,
    onBack,
    disableFwd,
    disableBack,
  }: PositionControlProps): ReactElement => (
    <div>
      <button onClick={onBack} disabled={disableBack} data-testid="back-button">
        Back
      </button>
      <button onClick={onFwd} disabled={disableFwd} data-testid="fwd-button">
        Forward
      </button>
    </div>
  ),
}));

jest.mock("@/components/layout-and-structure/OakFlex", () => ({
  OakFlex: ({ children }: FlexProps): ReactElement => <div>{children}</div>,
}));

describe("OakCarousel", () => {
  const mockContent: ReactElement[] = ["Slide 1", "Slide 2", "Slide 3"].map(
    (text: string): ReactElement => <div key={text}>{text}</div>,
  );

  const renderCarousel = (
    props: OakCarouselProps,
  ): ReturnType<typeof render> => {
    return render(<OakCarousel {...props} />);
  };

  describe("Non-looping behavior", () => {
    it("renders initial content correctly", () => {
      renderCarousel({
        content: mockContent,
        fwdLabel: "forward",
        backLabel: "back",
        containerLabel: "test",
      });
      expect(screen.getByText("Slide 1")).toBeInTheDocument();
    });

    it("moves forward correctly", () => {
      renderCarousel({
        content: mockContent,
        fwdLabel: "forward",
        backLabel: "back",
        containerLabel: "test",
      });
      fireEvent.click(screen.getByTestId("fwd-button"));
      expect(screen.getByText("Slide 2")).toBeInTheDocument();
    });

    it("moves backward correctly", () => {
      renderCarousel({
        content: mockContent,
        fwdLabel: "forward",
        backLabel: "back",
        containerLabel: "test",
      });
      fireEvent.click(screen.getByTestId("fwd-button"));
      fireEvent.click(screen.getByTestId("back-button"));
      expect(screen.getByText("Slide 1")).toBeInTheDocument();
    });

    it("disables back button at start", () => {
      renderCarousel({
        content: mockContent,
        fwdLabel: "forward",
        backLabel: "back",
        containerLabel: "test",
      });
      expect(screen.getByTestId("back-button")).toBeDisabled();
    });

    it("disables forward button at end", () => {
      renderCarousel({
        content: mockContent,
        fwdLabel: "forward",
        backLabel: "back",
        containerLabel: "test",
      });
      fireEvent.click(screen.getByTestId("fwd-button"));
      fireEvent.click(screen.getByTestId("fwd-button"));
      expect(screen.getByTestId("fwd-button")).toBeDisabled();
    });
  });

  describe("Looping behavior", () => {
    it("loops forward at end", () => {
      renderCarousel({
        content: mockContent,
        isLooping: true,
        fwdLabel: "forward",
        backLabel: "back",
        containerLabel: "test",
      });
      fireEvent.click(screen.getByTestId("fwd-button"));
      fireEvent.click(screen.getByTestId("fwd-button"));
      fireEvent.click(screen.getByTestId("fwd-button"));
      expect(screen.getByText("Slide 1")).toBeInTheDocument();
    });

    it("loops backward at start", () => {
      renderCarousel({
        content: mockContent,
        isLooping: true,
        fwdLabel: "forward",
        backLabel: "back",
        containerLabel: "test",
      });
      fireEvent.click(screen.getByTestId("back-button"));
      expect(screen.getByText("Slide 3")).toBeInTheDocument();
    });

    it("never disables navigation buttons", () => {
      renderCarousel({
        content: mockContent,
        isLooping: true,
        fwdLabel: "forward",
        backLabel: "back",
        containerLabel: "test",
      });
      expect(screen.getByTestId("back-button")).not.toBeDisabled();
      fireEvent.click(screen.getByTestId("fwd-button"));
      fireEvent.click(screen.getByTestId("fwd-button"));
      expect(screen.getByTestId("fwd-button")).not.toBeDisabled();
    });
  });

  it("updates position indicator correctly", () => {
    renderCarousel({
      content: mockContent,
      fwdLabel: "forward",
      backLabel: "back",
      containerLabel: "test",
    });
    expect(screen.getByTestId("position-indicator")).toHaveTextContent("0/3");
    fireEvent.click(screen.getByTestId("fwd-button"));
    expect(screen.getByTestId("position-indicator")).toHaveTextContent("1/3");
  });
});
