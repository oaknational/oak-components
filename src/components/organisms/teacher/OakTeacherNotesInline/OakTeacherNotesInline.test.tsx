import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakTeacherNotesInline } from "./OakTeacherNotesInline";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";
import { OakThemeProvider } from "@/components/atoms";

describe("OakTeacherNotesInline", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(<OakTeacherNotesInline />);
    expect(getByTestId("oak-teacher-notes-inline")).toBeInTheDocument();
  });

  it("renders inner HTML", () => {
    const { getByText } = renderWithTheme(
      <OakTeacherNotesInline sanitizedHtml="<p>Teacher notes</p><b>bold</b>" />,
    );
    expect(getByText("Teacher notes")).toBeInTheDocument();
    expect(getByText("bold")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakTeacherNotesInline />
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
