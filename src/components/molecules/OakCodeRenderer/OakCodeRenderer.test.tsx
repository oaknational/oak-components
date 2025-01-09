import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { OakCodeRenderer } from "./OakCodeRenderer";

import { oakDefaultTheme } from "@/styles";
import renderWithTheme from "@/test-helpers/renderWithTheme";

const mockString =
  'What is the `output` of the following Python code?\n\n```is_weekend = True\nhave_homework = False\n\nif is_weekend and not have_homework:\n   print("Time to chill and relax")\nelse:\n   print("Time to study.")```';

describe("OakCodeRenderer", () => {
  it("renders", () => {
    const { getByText } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakCodeRenderer string={mockString} />
      </ThemeProvider>,
    );
    expect(getByText("output")).toBeInTheDocument;
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakCodeRenderer string={mockString} />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders plain text without backticks correctly", () => {
    const text = "This is a simple text without any backticks.";
    const { getByText } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakCodeRenderer string={text} />
      </ThemeProvider>,
    );
    expect(getByText(text)).toBeInTheDocument();
  });

  it("renders text with inline code (backticks) correctly", () => {
    const text = "This is `inline code` in a sentence.";
    const { getByText } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakCodeRenderer string={text} />
      </ThemeProvider>,
    );

    // Verify the non-code text
    expect(getByText(/This is /)).toBeInTheDocument();
    expect(getByText(/in a sentence./)).toBeInTheDocument();

    // Verify the styled code container
    const codeElement = getByText(/inline code/);
    expect(codeElement).toBeInTheDocument();
    expect(codeElement).toHaveStyle(
      'font-family: "Roboto Mono",--font-roboto-mono,monospace;',
    );
  });

  it("renders code blocks with syntax highlighting correctly", () => {
    const codeBlock = "```\nconst a = 42;\nconsole.log(a);\n```";
    const { getByText } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakCodeRenderer string={codeBlock} />
      </ThemeProvider>,
    );

    // Verify code block content
    expect(getByText(/const a = /)).toBeInTheDocument();
    expect(getByText(/console.log\(a\);/)).toBeInTheDocument();

    // Verify line numbers
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
  });

  it("handles mixed text and code blocks correctly", () => {
    const text = "Here is some text.\n```\nlet x = 10;\n```\nAnd more text.";
    const { getByText } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakCodeRenderer string={text} />
      </ThemeProvider>,
    );

    // Verify non-code text
    expect(getByText(/Here is some text./)).toBeInTheDocument();
    expect(getByText(/And more text./)).toBeInTheDocument();

    // Verify code block content
    expect(getByText(/let x = /)).toBeInTheDocument();
  });

  it("applies syntax highlighting to keywords and strings", () => {
    const codeBlock = "```\nconst str = 'Hello';\nif (true) {}\n```";
    const { getByText } = renderWithTheme(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakCodeRenderer string={codeBlock} />
      </ThemeProvider>,
    );

    // Verify syntax highlighting
    const stringElement = getByText("'Hello'");
    expect(stringElement).toHaveStyle(`color: rgb(148, 249, 175);`);

    const keywordElement = getByText("if");
    expect(keywordElement).toHaveStyle("color: rgb(238, 204, 255)");
  });
});
