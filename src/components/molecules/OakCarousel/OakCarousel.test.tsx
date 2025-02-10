import React from "react";
import { fireEvent, screen } from "@testing-library/react";

import { OakCarousel } from "./OakCarousel";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakCarousel", () => {
  const mockContent = ["Slide 1", "Slide 2", "Slide 3"].map((text) => (
    <div key={text}>{text}</div>
  ));

  describe("Non-looping behavior", () => {
    it("renders initial content correctly", () => {
      const { getByText } = renderWithTheme(
        <OakCarousel content={mockContent} />,
      );
      expect(getByText("Slide 1")).toBeInTheDocument();
    });

    it("moves forward correctly", () => {
      renderWithTheme(<OakCarousel content={mockContent} />);
      fireEvent.click(screen.getByTestId("fwd-button"));
      expect(screen.getByText("Slide 2")).toBeInTheDocument();
    });

    it("moves backward correctly", () => {
      renderWithTheme(<OakCarousel content={mockContent} />);
      fireEvent.click(screen.getByTestId("fwd-button"));
      fireEvent.click(screen.getByTestId("back-button"));
      expect(screen.getByText("Slide 1")).toBeInTheDocument();
    });

    it("disables back button at start", () => {
      renderWithTheme(<OakCarousel content={mockContent} />);
      expect(screen.getByTestId("back-button")).toBeDisabled();
    });

    it("disables forward button at end", () => {
      renderWithTheme(<OakCarousel content={mockContent} />);
      fireEvent.click(screen.getByTestId("fwd-button"));
      fireEvent.click(screen.getByTestId("fwd-button"));
      expect(screen.getByTestId("fwd-button")).toBeDisabled();
    });
  });

  describe("Looping behavior", () => {
    it("loops forward at end", () => {
      renderWithTheme(<OakCarousel content={mockContent} isLooping />);
      fireEvent.click(screen.getByTestId("fwd-button"));
      fireEvent.click(screen.getByTestId("fwd-button"));
      fireEvent.click(screen.getByTestId("fwd-button"));
      expect(screen.getByText("Slide 1")).toBeInTheDocument();
    });

    it("loops backward at start", () => {
      renderWithTheme(<OakCarousel content={mockContent} isLooping />);
      fireEvent.click(screen.getByTestId("back-button"));
      expect(screen.getByText("Slide 3")).toBeInTheDocument();
    });

    it("never disables navigation buttons", () => {
      renderWithTheme(<OakCarousel content={mockContent} isLooping />);
      expect(screen.getByTestId("back-button")).not.toBeDisabled();
      fireEvent.click(screen.getByTestId("fwd-button"));
      fireEvent.click(screen.getByTestId("fwd-button"));
      expect(screen.getByTestId("fwd-button")).not.toBeDisabled();
    });
  });

  it("updates position indicator correctly", () => {
    renderWithTheme(<OakCarousel content={mockContent} />);
    expect(screen.getByTestId("position-indicator")).toHaveTextContent("0/3");
    fireEvent.click(screen.getByTestId("fwd-button"));
    expect(screen.getByTestId("position-indicator")).toHaveTextContent("1/3");
  });
});
