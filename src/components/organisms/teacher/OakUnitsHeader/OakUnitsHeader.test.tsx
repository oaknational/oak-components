import React from "react";
import "@testing-library/jest-dom";

import { OakUnitsHeader } from "./OakUnitsHeader";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakInlineBanner } from "@/components";

const props = {
  isLegacy: false,
  subject: "maths",
  phase: "secondary",
  curriculumHref: "https://www.thenational.academy",
};

describe("OakUnitsHeader", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakUnitsHeader data-testid="test" {...props} />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(
      <OakUnitsHeader {...props}></OakUnitsHeader>,
    );
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with banner", () => {
    const { container } = renderWithTheme(
      <OakUnitsHeader
        {...props}
        banner={
          <OakInlineBanner
            isOpen={true}
            message={"Example banner text"}
            type="neutral"
            $width={"100%"}
          />
        }
      ></OakUnitsHeader>,
    );
    expect(container).toMatchSnapshot();
  });
});
