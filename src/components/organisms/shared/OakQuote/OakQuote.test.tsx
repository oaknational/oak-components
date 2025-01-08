import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakQuote } from "./OakQuote";

import { oakDefaultTheme } from "@/styles";

describe("OakQuote component", () => {
  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakQuote
          quote="This is a quote"
          authorName="Author Name"
          authorTitle="Author Title"
          authorImageSrc="https://via.placeholder.com/150"
        />
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
