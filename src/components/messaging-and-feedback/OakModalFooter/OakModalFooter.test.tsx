import React from "react";
import "@testing-library/jest-dom";

import { OakModalFooter } from "./OakModalFooter";

import { OakPrimaryButton } from "@/components/buttons/OakPrimaryButton";
import renderWithTheme from "@/test-helpers/renderWithTheme";

// The layouts are tested in InternalModalFooter
describe("OakModalFooter", () => {
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
