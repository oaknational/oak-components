import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { OakSaveCount } from "./OakSaveCount";

const defaultProps = {
  count: 0,
  href: "#",
};

describe("OakSaveCount", () => {
  it("should render a count", () => {
    render(<OakSaveCount {...defaultProps} />);
    const count = screen.getByRole("link");
    expect(count).toBeInTheDocument();
    expect(count).toHaveTextContent("0");
  });
  it("should match snapshot", () => {
    const { container } = render(<OakSaveCount {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
