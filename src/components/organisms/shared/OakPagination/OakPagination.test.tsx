import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { NextRouter } from "next/router";

import { OakPagination } from "./OakPagination";
import { generatePageNumbers } from "./utils";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const mockRouter: Partial<NextRouter> = {
  pathname: "/",
  route: "/",
  query: {},
  asPath: "/",
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
};

describe("OakPagination Component", () => {
  beforeEach(() => {
    // Mock the useRouter hook to return the mockRouter
    // (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });

  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakPagination
          paginationHref={""}
          pageName={"test"}
          currentPage={1}
          totalPages={8}
          router={mockRouter as NextRouter}
        />
        ,
      </OakThemeProvider>,
    );
    expect(getByTestId("pagination")).toBeInTheDocument();
  });

  it("renders the correct number of pages", () => {
    const { getAllByTestId } = renderWithTheme(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakPagination
          paginationHref={""}
          pageName={"test"}
          currentPage={1}
          totalPages={7}
          router={mockRouter as NextRouter}
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
          currentPage={1}
          totalPages={7}
          router={mockRouter as NextRouter}
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
          currentPage={7}
          totalPages={7}
          router={mockRouter as NextRouter}
        />
      </OakThemeProvider>,
    );

    const forwardsButton = getByTestId("forwards-button");

    expect(forwardsButton).toBeDisabled();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakPagination
          paginationHref={""}
          pageName={"test"}
          currentPage={1}
          totalPages={7}
          router={mockRouter as NextRouter}
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
