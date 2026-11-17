import React from "react";
import "@testing-library/jest-dom";

import {
  InternalModalFooter,
  InternalModalFooterLayout,
} from "./InternalModalFooter";

import { OakPrimaryButton } from "@/components/buttons/OakPrimaryButton";
import { OakSecondaryButton } from "@/components/buttons/OakSecondaryButton";
import renderWithTheme from "@/test-helpers/renderWithTheme";

const renderFooter = (layout: InternalModalFooterLayout) =>
  renderWithTheme(
    <InternalModalFooter layout={layout}>
      <OakSecondaryButton>Cancel</OakSecondaryButton>
      <OakPrimaryButton>Save</OakPrimaryButton>
    </InternalModalFooter>,
  );

const footerOf = (container: HTMLElement) =>
  container.firstElementChild as HTMLElement;

describe("InternalModalFooter", () => {
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

  it.each([
    ["horizontal", "row"],
    ["vertical", "column"],
    ["left", "row"],
    ["right", "row"],
  ] as const)("lays buttons out in a %s direction", (layout, direction) => {
    const { container } = renderFooter(layout);
    expect(footerOf(container)).toHaveStyleRule("flex-direction", direction);
  });

  it.each([
    ["horizontal", "flex-start"],
    ["vertical", "flex-start"],
    ["left", "flex-start"],
    ["right", "flex-end"],
  ] as const)("aligns buttons when %s", (layout, justify) => {
    const { container } = renderFooter(layout);
    expect(footerOf(container)).toHaveStyleRule("justify-content", justify);
  });

  // Consumers set `width="100%"` on the buttons; the footer must not
  // depend on the buttons' internal styles
  it.each(["horizontal", "vertical", "left", "right"] as const)(
    "does not resize its children when %s",
    (layout) => {
      const { container } = renderFooter(layout);
      const footer = footerOf(container);
      expect(footer).not.toHaveStyleRule("flex", expect.anything(), {
        modifier: "&& > *",
      });
      expect(footer).not.toHaveStyleRule("width", expect.anything(), {
        modifier: "&& > *",
      });
    },
  );
});
