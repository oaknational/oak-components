import React from "react";
import "@testing-library/jest-dom";

import { OakDialogFooter, OakDialogFooterLayout } from "./OakDialogFooter";

import { OakPrimaryButton } from "@/components/buttons/OakPrimaryButton";
import { OakSecondaryButton } from "@/components/buttons/OakSecondaryButton";
import renderWithTheme from "@/test-helpers/renderWithTheme";

const renderFooter = (layout: OakDialogFooterLayout) =>
  renderWithTheme(
    <OakDialogFooter layout={layout}>
      <OakSecondaryButton>Cancel</OakSecondaryButton>
      <OakPrimaryButton>Save</OakPrimaryButton>
    </OakDialogFooter>,
  );

const footerOf = (container: HTMLElement) =>
  container.firstElementChild as HTMLElement;

describe("OakDialogFooter", () => {
  it("matches snapshot", () => {
    const { container } = renderFooter("horizontal");
    expect(container).toMatchSnapshot();
  });

  it("renders its buttons", () => {
    const { getByRole } = renderFooter("horizontal");
    expect(getByRole("button", { name: "Cancel" })).toBeInTheDocument();
    expect(getByRole("button", { name: "Save" })).toBeInTheDocument();
  });

  it("is not a landmark", () => {
    const { queryByRole } = renderFooter("horizontal");
    expect(queryByRole("contentinfo")).not.toBeInTheDocument();
  });

  it("has a top border", () => {
    const { container } = renderFooter("horizontal");
    expect(footerOf(container)).toHaveStyleRule("border-top", "0.063rem solid");
  });

  it("shares the width equally between buttons when horizontal", () => {
    const { container } = renderFooter("horizontal");
    const footer = footerOf(container);
    expect(footer).toHaveStyleRule("flex-direction", "row");
    expect(footer).toHaveStyleRule("flex", "1 1 0", { modifier: "&& > *" });
  });

  it("stacks full-width buttons when vertical", () => {
    const { container } = renderFooter("vertical");
    const footer = footerOf(container);
    expect(footer).toHaveStyleRule("flex-direction", "column");
    expect(footer).toHaveStyleRule("width", "100%", { modifier: "&& > *" });
  });

  it.each([
    ["left", "flex-start"],
    ["right", "flex-end"],
  ] as const)(
    "aligns buttons at their natural width when %s",
    (layout, justify) => {
      const { container } = renderFooter(layout);
      const footer = footerOf(container);
      expect(footer).toHaveStyleRule("justify-content", justify);
      expect(footer).not.toHaveStyleRule("flex", "1 1 0", {
        modifier: "&& > *",
      });
      expect(footer).not.toHaveStyleRule("width", "100%", {
        modifier: "&& > *",
      });
    },
  );
});
