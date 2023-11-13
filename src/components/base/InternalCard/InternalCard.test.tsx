import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { InternalCard } from "./InternalCard";

describe("Component OakBox", () => {
  it("renders", () => {
    const { getByTestId } = render(<InternalCard data-testid="test" />);
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<InternalCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("has default padding 24", async () => {
    const { getByTestId } = render(<InternalCard data-testid="test" />);

    expect(getByTestId("test")).toHaveStyle("padding-left: 1.5rem");
    expect(getByTestId("test")).toHaveStyle("padding-top: 1.5rem");
    expect(getByTestId("test")).toHaveStyle("padding-bottom: 1.5rem");
    expect(getByTestId("test")).toHaveStyle("padding-right: 1.5rem");
  });

  test("can pass custom padding", async () => {
    const { getByTestId } = render(
      <InternalCard data-testid="test" $pl={"inner-padding-m"} />,
    );
    expect(getByTestId("test")).toHaveStyle("padding-left: 1rem");
  });

  test("can pass custom margin", async () => {
    const { getByTestId } = render(
      <InternalCard data-testid="test" $mb={"space-between-ssx"} />,
    );
    expect(getByTestId("test")).toHaveStyle("margin-bottom: 0.5rem");
  });
});
