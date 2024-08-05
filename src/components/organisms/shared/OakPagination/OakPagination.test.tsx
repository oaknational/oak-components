import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { fireEvent } from "@testing-library/react";

import { OakPagination } from "./OakPagination";
import { generatePageNumbers } from "./utils";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe("OakPagination Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakPagination
          paginationHref={""}
          pageName={"test"}
          initialPage={1}
          totalPages={8}
          onPageChange={() => {}}
        />
        ,
      </OakThemeProvider>,
    );
    expect(getByTestId("pagination")).toBeInTheDocument();
  });

  it("should not render when no additional pages", () => {
    const { queryByTestId, container } = renderWithTheme(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakPagination
          paginationHref={""}
          pageName={"test"}
          initialPage={1}
          totalPages={1}
          onPageChange={() => {}}
        />
      </OakThemeProvider>,
    );
    expect(queryByTestId("pagination")).not.toBeInTheDocument();
    expect(container.firstChild).toBeNull();
  });

  it("renders the correct number of pages", () => {
    const { getAllByTestId } = renderWithTheme(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakPagination
          paginationHref={""}
          onPageChange={() => {}}
          pageName={"test"}
          initialPage={1}
          totalPages={7}
        />
      </OakThemeProvider>,
    );

    expect(getAllByTestId("page-number-component")).toHaveLength(7);
  });

  it("disables the backwards button when on the first page", () => {
    const { getByTestId } = renderWithTheme(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakPagination
          paginationHref={""}
          pageName={"test"}
          initialPage={1}
          onPageChange={() => {}}
          totalPages={7}
        />
      </OakThemeProvider>,
    );
    expect(getByTestId("backwards-button")).toBeDisabled();
  });

  it("disables the backwards button when on the first page", () => {
    const { getByTestId } = renderWithTheme(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakPagination
          paginationHref={""}
          pageName={"test"}
          initialPage={7}
          onPageChange={() => {}}
          totalPages={7}
        />
      </OakThemeProvider>,
    );

    const forwardsButton = getByTestId("forwards-button");

    expect(forwardsButton).toBeDisabled();
  });

  it("changes the page back and forward buttons are clicked", () => {
    const onPageChangeMock = jest.fn();
    const initialPage = 2;

    const { getByTestId } = renderWithTheme(
      <OakPagination
        totalPages={5}
        initialPage={initialPage}
        onPageChange={onPageChangeMock}
        paginationHref="/#"
        pageName="test"
      />,
    );

    const backwardsButton = getByTestId("backwards-button");
    const forwardsButton = getByTestId("forwards-button");

    fireEvent.click(backwardsButton);
    expect(onPageChangeMock).toHaveBeenCalledWith(initialPage - 1);

    fireEvent.click(forwardsButton);
    expect(onPageChangeMock).toHaveBeenCalledWith(initialPage);
  });

  it("changes the page when page number is clicked", () => {
    const onPageChangeMock = jest.fn();
    const initialPage = 2;

    const { getAllByTestId } = renderWithTheme(
      <OakPagination
        totalPages={5}
        initialPage={initialPage}
        onPageChange={onPageChangeMock}
        paginationHref="/#"
        pageName="test"
      />,
    );

    const numberButtons = getAllByTestId("page-number-component");
    expect(numberButtons).toHaveLength(5);
    numberButtons.forEach((button, i) => {
      fireEvent.click(button);
      expect(onPageChangeMock).toHaveBeenCalledWith(i + 1);
    });
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakPagination
          paginationHref={""}
          pageName={"test"}
          initialPage={1}
          totalPages={7}
          onPageChange={() => {}}
        />
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("generatePageNumbers", () => {
    test("should return all page numbers if totalPages is less than or equal to 7", () => {
      expect(generatePageNumbers(0, 5)).toEqual([0, 1, 2, 3, 4]);
      expect(generatePageNumbers(3, 7)).toEqual([0, 1, 2, 3, 4, 5, 6]);
    });

    test("should return correct page numbers when activePage is less than or equal to 3", () => {
      expect(generatePageNumbers(0, 10)).toEqual([0, 1, 2, 3, "...", 9]);
      expect(generatePageNumbers(3, 10)).toEqual([0, 1, 2, 3, "...", 9]);
    });

    test("should return correct page numbers when activePage is between 4 and totalPages - 3", () => {
      expect(generatePageNumbers(4, 10)).toEqual([0, "...", 3, 4, "...", 9]);
      expect(generatePageNumbers(6, 10)).toEqual([0, "...", 5, 6, "...", 9]);
    });

    test("should return correct page numbers when activePage is greater than or equal to totalPages - 3", () => {
      expect(generatePageNumbers(7, 10)).toEqual([0, "...", 6, 7, 8, 9]);
      expect(generatePageNumbers(9, 10)).toEqual([0, "...", 6, 7, 8, 9]);
    });
  });
});
