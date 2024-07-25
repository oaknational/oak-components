import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
// import { fireEvent } from "@testing-library/react";

import { OakPagination } from "./OakPagination";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakPagination Component", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakPagination
        paginationHref={""}
        pageName={"test"}
        currentPage={1}
        totalPages={8}
      />,
    );
    expect(getByTestId("pagination")).toBeInTheDocument();
  });

  it("renders the correct number of pages", () => {
    const { getAllByTestId } = renderWithTheme(
      <OakPagination
        paginationHref={""}
        pageName={"test"}
        currentPage={1}
        totalPages={7}
      />,
    );

    expect(getAllByTestId("page-number-component")).toHaveLength(7);
  });

  it("disables the backwards button when on the first page", () => {
    const { getByTestId } = renderWithTheme(
      <OakPagination
        paginationHref={""}
        pageName={"test"}
        currentPage={1}
        totalPages={7}
      />,
    );
    expect(getByTestId("backwards-button")).toBeDisabled();
  });

  it("disables the backwards button when on the first page", () => {
    const { getByTestId } = renderWithTheme(
      <OakPagination
        paginationHref={""}
        pageName={"test"}
        currentPage={7}
        totalPages={7}
      />,
    );

    const forwardsButton = getByTestId("forwards-button");

    expect(forwardsButton).toBeDisabled();
  });

  it.skip("matches snapshot", () => {
    const tree = create(
      <OakPagination
        paginationHref={""}
        pageName={"test"}
        currentPage={1}
        totalPages={7}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
