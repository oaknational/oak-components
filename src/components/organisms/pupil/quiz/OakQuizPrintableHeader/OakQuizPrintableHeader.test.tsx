import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakQuizPrintableHeader } from "./OakQuizPrintableHeader";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

describe("OakQuizPrintableHeader", () => {
  it("renders", () => {
    const { getByText } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakQuizPrintableHeader
          iconName="subject-science"
          alt="icon"
          breadcrumbs={["first", "second", "third", "fourth"]}
          title="Pupil Journey Header"
          worksheetDownloaded={true}
          videoPercentage={80}
          data-testid="test"
        />
      </ThemeProvider>,
    );
    expect(getByText("Pupil Journey Header")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        {" "}
        <OakQuizPrintableHeader
          iconName="subject-science"
          alt="icon"
          breadcrumbs={["first", "second", "third", "fourth"]}
          title="Pupil Journey Header"
          worksheetDownloaded={true}
          videoPercentage={80}
        />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
