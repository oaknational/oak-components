import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakPrintableHeader } from "./OakPrintableHeader";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { oakDefaultTheme } from "@/styles";

describe("OakPrintableHeader", () => {
  it("renders", () => {
    const { getByText } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakPrintableHeader
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
        <OakPrintableHeader
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
