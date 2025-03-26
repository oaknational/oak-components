import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { screen } from "@testing-library/react";

import { OakInlineRegistrationBanner } from "./OakInlineRegistrationBanner";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe("OakInlineRegistrationBanner", () => {
  it("renders", () => {
    renderWithTheme(
      <OakInlineRegistrationBanner
        onSubmit={(email: string) => Promise.resolve(email)}
      />,
    );
    expect(
      screen.getByRole("heading", { name: "Full unit on the way!" }),
    ).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakInlineRegistrationBanner
          onSubmit={(email: string) => Promise.resolve(email)}
        ></OakInlineRegistrationBanner>
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
