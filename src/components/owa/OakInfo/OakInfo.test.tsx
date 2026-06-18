import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { OakInfo } from "./OakInfo";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import {
  installMockIntersectionObserver,
  installMockResizeObserver,
} from "@/test-helpers";

installMockIntersectionObserver();
installMockResizeObserver();

describe("OakInfo", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakInfo
        hint="The answer is right in front of your eyes"
        id="info-tooltip"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("does not associate tooltip content with the trigger before it is opened", () => {
    const { getByRole } = renderWithTheme(
      <OakInfo
        hint="The answer is right in front of your eyes"
        id="info-tooltip"
      />,
    );

    const button = getByRole("button", { name: "open info tooltip" });
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).not.toHaveAttribute("aria-describedby");
  });

  it("does not allow buttonProps to override controlled ARIA attributes", async () => {
    const { getByRole } = renderWithTheme(
      <OakInfo
        hint="The answer is right in front of your eyes"
        id="info-tooltip"
        buttonProps={{
          "aria-describedby": "consumer-override",
          "aria-expanded": true,
          "aria-label": "consumer label",
        }}
      />,
    );
    const user = userEvent.setup();

    const closedButton = getByRole("button", { name: "open info tooltip" });
    expect(closedButton).toHaveAttribute("aria-expanded", "false");
    expect(closedButton).not.toHaveAttribute("aria-describedby");

    await user.click(closedButton);

    const openButton = getByRole("button", { name: "close info tooltip" });
    expect(openButton).toHaveAttribute("aria-expanded", "true");
    expect(openButton).toHaveAttribute("aria-describedby", "info-tooltip");
  });

  it("associates tooltip content with the trigger when opened", async () => {
    const { getByRole, getByTestId } = renderWithTheme(
      <OakInfo
        hint="The answer is right in front of your eyes"
        id="info-tooltip"
      />,
    );
    const user = userEvent.setup();

    await user.click(getByRole("button", { name: "open info tooltip" }));

    const button = getByRole("button", { name: "close info tooltip" });
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(button).toHaveAttribute("aria-describedby", "info-tooltip");

    const description = getByTestId("info-tooltip-description");
    expect(description).toHaveTextContent(
      "The answer is right in front of your eyes",
    );
  });
});
