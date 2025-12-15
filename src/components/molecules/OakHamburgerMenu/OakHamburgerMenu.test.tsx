import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, waitFor } from "@testing-library/react";

import { OakHamburgerMenu } from "./OakHamburgerMenu";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { installMockIntersectionObserver } from "@/test-helpers";

installMockIntersectionObserver();

describe("OakHamburgerMenu", () => {
  it("renders", () => {
    const { getByRole } = renderWithTheme(
      <OakHamburgerMenu>Menu content</OakHamburgerMenu>,
    );
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakHamburgerMenu>Menu content</OakHamburgerMenu>,
    );
    expect(container).toMatchSnapshot();
  });

  it("opens menu when trigger button is clicked", async () => {
    const { getByRole, queryByText, getByText } = renderWithTheme(
      <OakHamburgerMenu>Menu content</OakHamburgerMenu>,
    );

    expect(queryByText(/Menu content/)).not.toBeInTheDocument();

    fireEvent.click(getByRole("button"));

    await waitFor(() => {
      expect(getByText("Menu content")).toBeInTheDocument();
    });
  });

  it("closes menu when close button is clicked", async () => {
    const { getByText, getByRole, getByLabelText, queryByText } =
      renderWithTheme(<OakHamburgerMenu>Menu content</OakHamburgerMenu>);

    fireEvent.click(getByRole("button"));

    await waitFor(() => {
      expect(getByText("Menu content")).toBeInTheDocument();
    });

    fireEvent.click(getByLabelText("Close"));

    await waitFor(() => {
      expect(queryByText("Menu content")).not.toBeInTheDocument();
    });
  });
});
