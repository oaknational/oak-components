import React from "react";
import "@testing-library/jest-dom";

import { OakListItem } from "./OakListItem";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakBox } from "@/components/atoms";

const onClick = jest.fn();
const onCheckedChange = jest.fn();

const defaultProps = {
  title: "Lesson 1",
  index: 1,
  isLegacy: false,
};

describe("OakListItem", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders one visible list item and one hidden (desktop/mobile)", () => {
    // Arrange
    const { getAllByTestId } = renderWithTheme(
      <OakListItem {...defaultProps} />,
    );
    const listItems = getAllByTestId("OakListItem-id");
    const [desktopItem, mobileItem] = listItems;
    // Assert
    expect(listItems).toHaveLength(2);
    expect(desktopItem).toHaveStyleRule("display", "none");
    expect(mobileItem).toHaveStyleRule("display", "flex");
  });

  it("matches snapshot", () => {
    // Arrange
    const { container } = renderWithTheme(<OakListItem {...defaultProps} />);
    // Assert
    expect(container).toMatchSnapshot();
  });

  it("calls onClick when title is clicked", () => {
    // Arrange
    const { getAllByText } = renderWithTheme(
      <OakListItem {...defaultProps} onClick={onClick} />,
    );
    const clickableItems = getAllByText("Lesson 1");
    const itemToClick = clickableItems.find(
      (item) => getComputedStyle(item).display !== "none",
    );
    // Act
    if (itemToClick) itemToClick.click();
    // Assert
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled and clicked", () => {
    // Arrange
    const { getAllByText } = renderWithTheme(
      <OakListItem {...defaultProps} onClick={onClick} unavailable />,
    );
    const clickableItems = getAllByText("Lesson 1");
    const itemToClick = clickableItems.find(
      (item) => getComputedStyle(item).display !== "none",
    );
    // Act
    if (itemToClick) itemToClick.click();
    // Assert
    expect(onClick).not.toHaveBeenCalled();
  });

  it("applies disabled styles when unavailable", () => {
    // Arrange
    const { getAllByTestId } = renderWithTheme(
      <OakListItem {...defaultProps} data-testid="list-item" unavailable />,
    );
    const listItems = getAllByTestId("OakListItem-id");
    // Assert
    listItems.forEach((listItem) => {
      if (getComputedStyle(listItem).display !== "none") {
        expect(listItem).toHaveStyleRule("cursor", "not-allowed");
        expect(listItem).toHaveStyleRule("background", "#f2f2f2");
      }
    });
  });

  it("renders middle and end slots", () => {
    // Arrange
    const { getAllByText } = renderWithTheme(
      <OakListItem
        {...defaultProps}
        middleSlot={<div>Middle</div>}
        endSlot={<div>End</div>}
      />,
    );
    // Assert
    expect(getAllByText("Middle").length).toBeGreaterThan(0);
    expect(getAllByText("End").length).toBeGreaterThan(0);
  });

  it("forwards the ref to the first item", () => {
    // Arrange
    const ref = React.createRef<HTMLDivElement>();
    renderWithTheme(<OakListItem {...defaultProps} firstItemRef={ref} />);
    // Assert
    expect(ref.current).toBeInTheDocument();
  });

  it("applies legacy styles when isLegacy is true", () => {
    // Arrange
    const { getAllByText } = renderWithTheme(
      <OakListItem {...defaultProps} isLegacy={true} />,
    );
    const indexBoxes = getAllByText("1").map((el) => el.parentElement);
    // Assert
    indexBoxes.forEach((indexBox) => {
      if (getComputedStyle(indexBox!).display !== "none") {
        expect(indexBox).toHaveStyleRule("background", "#e5d1e0"); // pink50
      }
    });
  });

  describe("expandable", () => {
    it("does not render expanded content by default", () => {
      // Arrange
      const { queryByText } = renderWithTheme(
        <OakListItem
          {...defaultProps}
          expandedContent={<OakBox>Expanded</OakBox>}
        />,
      );
      // Assert
      expect(queryByText("Expanded")).not.toBeInTheDocument();
    });

    it("renders expanded content when isExpanded is true", () => {
      // Arrange
      const { getByText } = renderWithTheme(
        <OakListItem
          {...defaultProps}
          isExpanded={true}
          expandedContent={<OakBox>Expanded</OakBox>}
        />,
      );
      // Assert
      expect(getByText("Expanded")).toBeInTheDocument();
    });
  });

  describe("selectable", () => {
    it("renders a checkbox when onCheckedChange is provided", () => {
      // Arrange
      const { getByRole } = renderWithTheme(
        <OakListItem {...defaultProps} onCheckedChange={onCheckedChange} />,
      );
      const checkbox = getByRole("checkbox");
      // Assert
      expect(checkbox).toBeInTheDocument();
    });

    it("calls onCheckedChange when checkbox is clicked", () => {
      // Arrange
      const { getByRole } = renderWithTheme(
        <OakListItem {...defaultProps} onCheckedChange={onCheckedChange} />,
      );
      const checkbox = getByRole("checkbox");
      // Act
      checkbox.click();
      // Assert
      expect(onCheckedChange).toHaveBeenCalledTimes(1);
      expect(onCheckedChange).toHaveBeenCalledWith(true);
    });

    it("does not call onCheckedChange when disabled", () => {
      // Arrange
      const { getByRole } = renderWithTheme(
        <OakListItem
          {...defaultProps}
          onCheckedChange={onCheckedChange}
          unavailable={true}
        />,
      );
      const checkbox = getByRole("checkbox") as HTMLInputElement;
      // Act
      checkbox.click();
      // Assert
      expect(checkbox.disabled).toBe(true);
      expect(onCheckedChange).not.toHaveBeenCalled();
    });
  });
});
