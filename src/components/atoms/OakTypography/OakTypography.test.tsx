import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

// TODO: resolve these once typography is implemented
// import { FontVariant, FONT_VARIANTS } from "../../styles/utils/typography";
// import { REM_DP } from "../../styles/utils/getRemUnits";

import { OakTypography } from "./OakTypography";

// import { renderWithTheme } from "@/test-helpers/renderWithTheme";

describe("OakTypography", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakTypography data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakTypography />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  //   TODO: Implement once typography is implemented
  //     test.each(Object.entries(FONT_VARIANTS))(
  //     'should correctly handle prop $font="%s"',
  //     async (font, [fontSize, lineHeight, fontWeight, letterSpacing]) => {
  //       const { getByTestId } = renderWithTheme(
  //         <Typography data-testid="test" $font={font as FontVariant} />,
  //       );
  //       expect(getByTestId("test")).toHaveStyle("font-family: Lexend,sans-serif");
  //       expect(getByTestId("test")).toHaveStyle(
  //         `font-size: ${Number((fontSize / 16).toFixed(REM_DP))}rem`,
  //       );
  //       expect(getByTestId("test")).toHaveStyle(
  //         `line-height:  ${Number((lineHeight / 16).toFixed(REM_DP))}rem`,
  //       );
  //       expect(getByTestId("test")).toHaveStyle(`font-weight: ${fontWeight}`);
  //       expect(getByTestId("test")).toHaveStyle(
  //         `letter-spacing: ${letterSpacing}`,
  //       );
  //     },
  //   );
});
