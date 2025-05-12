import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { act, screen, waitFor } from "@testing-library/react";
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
  id: 1,
};

describe("OakToast", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  it("renders", () => {
    renderWithTheme(<OakToast {...defautProps} />);
    expect(screen.getByTestId("oak-toast")).toBeInTheDocument();
  });

  it("disappears with auto dismiss enabled", async () => {
    renderWithTheme(<OakToast {...defautProps} autoDismiss />);
    const toast = screen.getByTestId("oak-toast");
    expect(toast).toBeVisible();
    act(() => jest.advanceTimersByTime(5300));
    await waitFor(() => expect(toast).not.toBeVisible());
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

  it("extends the autodismiss duration when reopened", async () => {
    const { rerender } = renderWithTheme(
      <OakToast {...defautProps} autoDismiss id={1} />,
    );
    const toast = screen.getByTestId("oak-toast");
    expect(toast).toBeVisible();
    jest.advanceTimersByTime(2000);
    rerender(<OakToast {...defautProps} autoDismiss id={2} />);
    jest.advanceTimersByTime(4000);
    expect(toast).toBeVisible();
    jest.advanceTimersByTime(2000);
    await waitFor(() => expect(toast).not.toBeVisible());
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
