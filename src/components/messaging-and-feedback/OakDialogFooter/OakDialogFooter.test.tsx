import React from "react";
import "@testing-library/jest-dom";

import { OakDialogFooter } from "./OakDialogFooter";

import { OakPrimaryButton } from "@/components/buttons/OakPrimaryButton";
import { OakSecondaryButton } from "@/components/buttons/OakSecondaryButton";
import renderWithTheme from "@/test-helpers/renderWithTheme";

// The layouts are tested in InternalModalFooter
describe("OakDialogFooter", () => {
  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakDialogFooter layout="horizontal">
        <OakSecondaryButton>Cancel</OakSecondaryButton>
        <OakPrimaryButton>Save</OakPrimaryButton>
      </OakDialogFooter>,
    );
    expect(container).toMatchSnapshot();
  });

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
