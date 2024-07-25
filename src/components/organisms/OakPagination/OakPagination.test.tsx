import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { fireEvent } from "@testing-library/react";

import { OakPagination } from "./OakPagination";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakPagination Component", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakPagination currentPage={1} totalPages={8} />,
    );
    expect(getByTestId("pagination")).toBeInTheDocument();
  });

  it("renders the correct number of pages", () => {
    const { getAllByTestId } = renderWithTheme(
      <OakPagination currentPage={1} totalPages={8} />,
    );

    expect(getAllByTestId("page-number-component")).toHaveLength(8);
  });

  it("disables the backwards button when on the first page", () => {
    const { getByTestId } = renderWithTheme(
      <OakPagination currentPage={1} totalPages={8} />,
    );
    expect(getByTestId("backwards-button")).toBeDisabled();
  });

  it("disables the backwards button when on the first page", () => {
    const { getByTestId } = renderWithTheme(
      <OakPagination currentPage={7} totalPages={8} />,
    );

    const forwardsButton = getByTestId("forwards-button");
    expect(forwardsButton).not.toBeDisabled();
    fireEvent.click(forwardsButton);
    expect(forwardsButton).toBeDisabled();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakPagination currentPage={1} totalPages={8} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
