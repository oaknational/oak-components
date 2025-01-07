import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { HeaderUnderline } from "@/svgs";

describe("HeaderUnderline", () => {
  it("renders", () => {
    const { container } = render(<HeaderUnderline />);

    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
