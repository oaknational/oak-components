import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakLessonTopNav, OakLessonTopNavProps } from "./OakLessonTopNav";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";
import { OakBackLink } from "@/components/molecules";
import renderWithTheme from "@/test-helpers/renderWithTheme";

const baseProps: OakLessonTopNavProps = {
  lessonSectionName: "intro",
  heading: "Intro",
  backLinkSlot: <OakBackLink type="button" />,
  mobileSummary: "In progress&hellip;",
};

describe(OakLessonTopNav, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakLessonTopNav {...baseProps} />
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders the back link", async () => {
    const { getByRole } = renderWithTheme(
      <OakLessonTopNav
        {...baseProps}
        backLinkSlot={<OakBackLink href="#" />}
      />,
    );

    expect(getByRole("link").getAttribute("href")).toEqual("#");
  });

  it("renders the optional count", async () => {
    const { queryByText } = renderWithTheme(
      <OakLessonTopNav {...baseProps} counterSlot={<div>4 of 6</div>} />,
    );

    expect(queryByText("4 of 6")).toBeInTheDocument();
  });
});
