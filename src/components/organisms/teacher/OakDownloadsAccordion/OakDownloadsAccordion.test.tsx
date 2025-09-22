import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { act, fireEvent } from "@testing-library/react";

import { OakDownloadsAccordion } from "./OakDownloadsAccordion";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider, OakFlex } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";
import { OakDownloadCard } from "@/components/molecules/OakDownloadCard";

const mockHandleToggleSelectAll = jest.fn();

const defaultProps = {
  id: "test-downloads-accordion",
  downloadsText: "Slides, quizzes, worksheet, additional materials",
  handleToggleSelectAll: mockHandleToggleSelectAll,
  selectAllChecked: false,
  children: (
    <OakFlex $flexDirection="column" $gap="spacing-16">
      <OakDownloadCard
        id="lesson-plan"
        value="lesson-plan"
        iconName="book-steps"
        titleSlot="Lesson plan"
        formatSlot="PDF"
        fileSizeSlot="245KB"
      />
      <OakDownloadCard
        id="presentation"
        value="presentation"
        iconName="slide-deck"
        titleSlot="Lesson presentation"
        formatSlot="PPTX"
        fileSizeSlot="1.2MB"
      />
    </OakFlex>
  ),
};

describe("OakDownloadsAccordion", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("matches snapshot when closed", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakDownloadsAccordion {...defaultProps} />
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("displays correct heading when selectAllChecked is false", () => {
    const { getByText } = renderWithTheme(
      <OakDownloadsAccordion {...defaultProps} selectAllChecked={false} />,
    );

    expect(getByText("Select all resources")).toBeInTheDocument();
  });

  it("displays correct heading when selectAllChecked is true", () => {
    const { getByText } = renderWithTheme(
      <OakDownloadsAccordion {...defaultProps} selectAllChecked={true} />,
    );

    expect(getByText("All resources selected")).toBeInTheDocument();
  });

  it("displays the downloads text", () => {
    const { getByText } = renderWithTheme(
      <OakDownloadsAccordion {...defaultProps} />,
    );

    expect(
      getByText("Slides, quizzes, worksheet, additional materials"),
    ).toBeInTheDocument();
  });

  it("starts closed by default", () => {
    const { queryByRole } = renderWithTheme(
      <OakDownloadsAccordion {...defaultProps} />,
    );

    expect(queryByRole("region")).not.toBeInTheDocument();
  });

  it("starts open when initialOpen is true", () => {
    const { getByRole, getByText } = renderWithTheme(
      <OakDownloadsAccordion {...defaultProps} initialOpen={true} />,
    );

    expect(getByRole("region")).toBeInTheDocument();
    expect(getByText("Lesson plan")).toBeInTheDocument();
    expect(getByText("Lesson presentation")).toBeInTheDocument();
  });

  it("toggles open and closed when accordion button is clicked", () => {
    const { queryByRole, getByRole, getByText } = renderWithTheme(
      <OakDownloadsAccordion {...defaultProps} initialOpen={false} />,
    );

    expect(queryByRole("region")).not.toBeInTheDocument();

    act(() => {
      fireEvent.click(getByRole("button"));
    });

    expect(getByRole("region")).toBeInTheDocument();
    expect(getByText("Lesson plan")).toBeInTheDocument();

    act(() => {
      fireEvent.click(getByRole("button"));
    });

    expect(queryByRole("region")).not.toBeInTheDocument();
  });

  it("calls handleToggleSelectAll when select all checkbox clicked", () => {
    const { getByRole } = renderWithTheme(
      <OakDownloadsAccordion {...defaultProps} />,
    );

    act(() => {
      fireEvent.click(getByRole("checkbox"));
    });

    expect(mockHandleToggleSelectAll).toHaveBeenCalledTimes(1);
  });

  it("calls handleToggleSelectAll when select all wrapper is clicked", () => {
    const { container } = renderWithTheme(
      <OakDownloadsAccordion {...defaultProps} />,
    );

    const selectAllWrapper = container.querySelector("#select-all-wrapper");

    if (selectAllWrapper) {
      act(() => {
        fireEvent.click(selectAllWrapper);
      });

      expect(mockHandleToggleSelectAll).toHaveBeenCalledTimes(1);
    } else {
      // If the wrapper doesn't exist, skip this test or fail appropriately
      expect(selectAllWrapper).toBeInTheDocument();
    }
  });

  it("reflects the checked state of the select all checkbox", () => {
    const { getByRole, rerender } = renderWithTheme(
      <OakDownloadsAccordion {...defaultProps} selectAllChecked={false} />,
    );

    const checkbox = getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    rerender(
      <OakDownloadsAccordion {...defaultProps} selectAllChecked={true} />,
    );

    expect(checkbox).toBeChecked();
  });

  it("has correct accessibility attributes", () => {
    const { getByRole } = renderWithTheme(
      <OakDownloadsAccordion {...defaultProps} />,
    );

    const button = getByRole("button");
    const checkbox = getByRole("checkbox");

    expect(button).toHaveAttribute("id", "test-downloads-accordion");
    expect(checkbox).toHaveAttribute("id", "select-all");
    expect(checkbox).toHaveAttribute("name", "select-all");
    expect(checkbox).toHaveAttribute(
      "aria-labelledby",
      "downloads-accordion-heading",
    );
  });

  it("displays chevron icon that rotates when accordion opens", () => {
    const { getByRole } = renderWithTheme(
      <OakDownloadsAccordion {...defaultProps} initialOpen={false} />,
    );

    const chevronIcon = document.querySelector(".chevron-icon");
    expect(chevronIcon).toBeInTheDocument();
    expect(chevronIcon).toHaveStyle("transform: none");

    act(() => {
      fireEvent.click(getByRole("button"));
    });

    expect(chevronIcon).toHaveStyle("transform: rotate(180deg)");
  });

  it("renders children content when open", () => {
    const { getByText } = renderWithTheme(
      <OakDownloadsAccordion {...defaultProps} initialOpen={true} />,
    );

    expect(getByText("Lesson plan")).toBeInTheDocument();
    expect(getByText("Lesson presentation")).toBeInTheDocument();
    expect(getByText("PDF")).toBeInTheDocument();
    expect(getByText("PPTX")).toBeInTheDocument();
  });
});
