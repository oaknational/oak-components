import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { OakSvg } from "./OakSvg";

describe("OakSvg", () => {
  it("renders", () => {
    const { container } = render(<OakSvg name="header-underline" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
