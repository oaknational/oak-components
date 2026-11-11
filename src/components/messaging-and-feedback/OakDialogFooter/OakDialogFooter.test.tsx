import React from "react";
import "@testing-library/jest-dom";

import { OakDialogFooter } from "./OakDialogFooter";

import { OakPrimaryButton } from "@/components/buttons/OakPrimaryButton";
import renderWithTheme from "@/test-helpers/renderWithTheme";

// The layouts are tested in InternalModalFooter
describe("OakDialogFooter", () => {
  it("passes the layout through", () => {
    const { container } = renderWithTheme(
      <OakDialogFooter layout="vertical">
        <OakPrimaryButton>Save</OakPrimaryButton>
      </OakDialogFooter>,
    );
    expect(container.firstElementChild).toHaveStyleRule(
      "flex-direction",
      "column",
    );
  });
});
