import React, { ReactElement } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import {
  SubCarouselPositionIndicator,
  SubCarouselPositionIndicatorProps,
} from "./SubCarouselPositionIndicator";

// Mock types
type FlexProps = {
  children: ReactElement | ReactElement[];
  $gap?: string;
  $alignItems?: string;
};

// Mock OakFlex component
jest.mock("@/components/atoms", () => ({
  OakFlex: ({ children }: FlexProps): ReactElement => (
    <div data-testid="oak-flex">{children}</div>
  ),
}));

describe("SubCarouselPositionIndicator", () => {
  const defaultProps: SubCarouselPositionIndicatorProps = {
    numberOfItems: 3,
    activeIndex: 0,
  };

  const renderComponent = (
    props: Partial<SubCarouselPositionIndicatorProps> = {},
  ): ReturnType<typeof render> => {
    return render(
      <SubCarouselPositionIndicator {...defaultProps} {...props} />,
    );
  };

  describe("PositionIcon", () => {
    it("renders active icon with correct fill color", () => {
      renderComponent();
      const circles = screen.getAllByRole("img");
      const activeCircle = circles[0];

      expect(activeCircle).toBeInTheDocument();
      expect(activeCircle?.querySelector("circle")).toHaveAttribute(
        "fill",
        "#222222",
      );
    });

    it("renders inactive icon with correct fill color", () => {
      renderComponent({ activeIndex: 1 });
      const circles = screen.getAllByRole("img");
      const inactiveCircle = circles[0];

      expect(inactiveCircle).toBeInTheDocument();
      expect(inactiveCircle?.querySelector("circle")).toHaveAttribute(
        "fill",
        "#FFFFFF",
      );
    });
  });

  describe("SubCarouselPositionIndicator", () => {
    it("renders correct number of position indicators", () => {
      renderComponent({ numberOfItems: 5 });
      const indicators = screen.getAllByRole("img");
      expect(indicators).toHaveLength(5);
    });

    it("renders no indicators when numberOfItems is 0", () => {
      renderComponent({ numberOfItems: 0 });
      const indicators = screen.queryAllByRole("img");
      expect(indicators).toHaveLength(0);
    });

    it("marks correct indicator as active", () => {
      renderComponent({ numberOfItems: 3, activeIndex: 1 });
      const circles = screen.getAllByRole("img");

      // Check first indicator (inactive)
      expect(circles[0]?.querySelector("circle")).toHaveAttribute(
        "fill",
        "#FFFFFF",
      );
      // Check second indicator (active)
      expect(circles[1]?.querySelector("circle")).toHaveAttribute(
        "fill",
        "#222222",
      );
      // Check third indicator (inactive)
      expect(circles[2]?.querySelector("circle")).toHaveAttribute(
        "fill",
        "#FFFFFF",
      );
    });

    it("handles active index at start of range", () => {
      renderComponent({ numberOfItems: 3, activeIndex: 0 });
      const circles = screen.getAllByRole("img");
      expect(circles[0]?.querySelector("circle")).toHaveAttribute(
        "fill",
        "#222222",
      );
    });

    it("handles active index at end of range", () => {
      renderComponent({ numberOfItems: 3, activeIndex: 2 });
      const circles = screen.getAllByRole("img");
      expect(circles[2]?.querySelector("circle")).toHaveAttribute(
        "fill",
        "#222222",
      );
    });

    it("renders SVGs with correct attributes", () => {
      renderComponent();
      const svgs = screen.getAllByRole("img");

      svgs.forEach((svg) => {
        expect(svg).toHaveAttribute("width", "16");
        expect(svg).toHaveAttribute("height", "17");
        expect(svg).toHaveAttribute("viewBox", "0 0 16 17");
        expect(svg).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
      });
    });

    it("renders circles with correct common attributes", () => {
      renderComponent();
      const circles = screen
        .getAllByRole("img")
        .map((svg) => svg.querySelector("circle"));

      circles.forEach((circle) => {
        expect(circle).toHaveAttribute("cx", "8");
        expect(circle).toHaveAttribute("cy", "8.67798");
        expect(circle).toHaveAttribute("r", "7");
        expect(circle).toHaveAttribute("stroke", "#222222");
        expect(circle).toHaveAttribute("stroke-width", "2");
      });
    });
  });
});
