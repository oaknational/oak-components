import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { screen } from "@testing-library/react";

import { OakIncompleteUnitsBanner } from "./OakIncompleteUnitsBanner";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe("CopyPasteThisComponent", () => {
  it("renders", () => {
    renderWithTheme(
      <OakIncompleteUnitsBanner
        onClick={(email: string) => console.log(email)}
        formError={false}
      />,
    );
    expect(
      screen.getByRole("heading", { name: "Full unit on the way!" }),
    ).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakIncompleteUnitsBanner
          onClick={(email: string) => console.log(email)}
          formError={false}
        ></OakIncompleteUnitsBanner>
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
