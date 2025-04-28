import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { OakToast } from "./OakToast";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

const defautProps = {
  message: <span>This is a toast message</span>,
  variant: "green" as const,
  showIcon: true,
  autoDismiss: false,
};

describe("OakToast", () => {
  it("renders", () => {
    renderWithTheme(<OakToast {...defautProps} />);
    expect(screen.getByTestId("oak-toast")).toBeInTheDocument();
  });

  it("disappears with auto dismiss enabled", async () => {
    renderWithTheme(<OakToast {...defautProps} autoDismiss />);
    const toast = screen.getByTestId("oak-toast");
    expect(toast).toBeVisible();
    setTimeout(() => {
      expect(toast).not.toBeVisible();
    }, 5000);
  });

  it("disappears when close is clicked", async () => {
    renderWithTheme(<OakToast {...defautProps} />);
    const toast = screen.getByTestId("oak-toast");
    expect(toast).toBeVisible();
    const closeButton = screen.getByRole("button");
    userEvent.click(closeButton);
    await waitFor(() => expect(toast).not.toBeVisible());
  });

  it("does not render close button when autoDismiss is true", () => {
    renderWithTheme(<OakToast {...defautProps} autoDismiss />);
    const closeButton = screen.queryByRole("button");
    expect(closeButton).not.toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakToast {...defautProps} />
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
