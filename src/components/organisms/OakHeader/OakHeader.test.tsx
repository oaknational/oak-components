import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakHeader, OakHeaderProps } from "./OakHeader";

import renderWithTheme from "@/test-helpers/renderWithTheme";

const oakHeaderProps: OakHeaderProps = {
  headingTitle: "How to plan a lesson: a helpful guide for teachers",
  authorTitle: "Head of School Support",
  authorName: "Rachel Storm",
  authorImageSrc: "https://via.placeholder.com/150",
  subHeadingText:
    "Body 1 Our guide for teachers, whether you're in your ITT, an ECT or a teacher of many years experience looking for a fresh look on lesson planning, is place to dive into expertise from across the sector.",
  heroImageSrc: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336490/sample.jpg`,
};

describe("OakHeader", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakHeader {...oakHeaderProps} data-testid="test" />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(<OakHeader {...oakHeaderProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
