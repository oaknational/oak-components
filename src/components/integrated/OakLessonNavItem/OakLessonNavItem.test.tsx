import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakLessonNavItem } from "./OakLessonNavItem";

import { OakThemeProvider } from "@/components/base";
import { oakDefaultTheme } from "@/styles";

describe(OakLessonNavItem, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakLessonNavItem
          lessonSectionName="intro"
          progress="not-started"
          label="Intro"
          summary="Get ready"
        />
        ,
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
