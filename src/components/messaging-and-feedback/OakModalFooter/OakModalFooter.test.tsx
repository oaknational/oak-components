import React from "react";
import "@testing-library/jest-dom";

import { OakModalFooter } from "./OakModalFooter";

import { OakPrimaryButton } from "@/components/buttons/OakPrimaryButton";
import { OakSecondaryButton } from "@/components/buttons/OakSecondaryButton";
import renderWithTheme from "@/test-helpers/renderWithTheme";

// The layouts are tested in InternalModalFooter
describe("OakModalFooter", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakModalFooter layout="horizontal">
        <OakSecondaryButton>Cancel</OakSecondaryButton>
        <OakPrimaryButton>Save</OakPrimaryButton>
      </OakModalFooter>,
    );
    expect(container).toMatchSnapshot();
  });

  it("passes the layout through", () => {
    const { container } = renderWithTheme(
      <OakModalFooter layout="vertical">
        <OakPrimaryButton>Save</OakPrimaryButton>
      </OakModalFooter>,
    );
    expect(container.firstElementChild).toHaveStyleRule(
      "flex-direction",
      "column",
    );
  });
});
