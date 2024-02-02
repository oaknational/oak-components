import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import { OakLessonInfoCard } from "./OakLessonInfoCard";

describe("OakLessonInfoCard component test", () => {
  it("renders", () => {
    const { getByTestId } = render(
      <OakLessonInfoCard
        data-testid="test"
        iconName="home"
        infoCardTitle="Title"
        infoCardDescription="the is the description"
        tag="h1"
      />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakLessonInfoCard
        iconName="home"
        infoCardTitle="Title"
        infoCardDescription="the is the description"
        tag="h1"
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
