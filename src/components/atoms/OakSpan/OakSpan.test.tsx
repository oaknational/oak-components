import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakSpan } from "./OakSpan";

// import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakSpan", () => {
  it("renders", () => {
    const { getByTestId } = render(<OakSpan data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakSpan />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  //   test.skip("should apply font-family from props", () => {
  //     const { getByText } = renderWithTheme(
  //       <OakSpan $font="body-1">Test</OakSpan>,
  //     );
  //     const span = getByText("Test");
  //     expect(span).toHaveStyle(font-family:__Lexend_866216,__Lexend_Fallback_86621, Lexend,sans-serif");
  //     expect(span).toHaveStyle(`font-size: 1.125rem`);
  //     expect(span).toHaveStyle(`line-height: 1.75rem`);
  //     expect(span).toHaveStyle(`font-weight: 300`);
  //     expect(span).toHaveStyle(`letter-spacing: -0.005em`);
  //   });
});
