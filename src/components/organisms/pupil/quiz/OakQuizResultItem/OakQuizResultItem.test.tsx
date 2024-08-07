import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakQuizResultItem } from "./OakQuizResultItem";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe("OakQuizResultItem", () => {
  beforeAll(() => {
    //mock the console.error to prevent the error logs from appearing in the console
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  it("renders", () => {
    const { getByText } = renderWithTheme(
      <OakQuizResultItem
        standardText={"standardText"}
        boldPrefixText={"matchItem"}
      />,
    );
    expect(getByText(/standardText/)).toBeInTheDocument();
    expect(getByText(/matchItem/)).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakQuizResultItem standardText={"standardText"} />,
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("throws error if the boldPrefixText is specified without standardText ", () => {
    expect(() =>
      renderWithTheme(<OakQuizResultItem boldPrefixText={"boldPrefixText"} />),
    ).toThrow("standardText must be provided if boldPrefixText is provided");
  });

  it("throws error if neither standardtext nor image are provided ", () => {
    expect(() => renderWithTheme(<OakQuizResultItem />)).toThrow(
      "Either standardText or imageURL must be provided",
    );
  });

  it("throws an error if an image url is provided without alt text", () => {
    expect(() =>
      renderWithTheme(<OakQuizResultItem imageURL={"imageURL"} />),
    ).toThrow("Image URL provided without alt text");
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
});
