import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { OakSvg } from "./OakSvg";

import { HeaderUnderline } from "@/svgs";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakSvg", () => {
  it("renders", () => {
    const { container } = render(<OakSvg svg={HeaderUnderline} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakSvg svg={HeaderUnderline} />);
    expect(container).toMatchSnapshot();
  });
});
