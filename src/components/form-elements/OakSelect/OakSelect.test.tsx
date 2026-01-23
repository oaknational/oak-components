import React from "react";
import "@testing-library/jest-dom";

import { OakSelect, OakOptGroup, OakOption } from ".";

import renderWithTheme from "@/test-helpers/renderWithTheme";

jest.spyOn(console, "error").mockImplementation(() => jest.fn());

// NOTE: These are due to react/jsdom being behind browser standards, they will catch up and we can remove these
// See <https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select> for current support
function expectJsdomOptionError() {
  expect(console.error).toHaveBeenCalledTimes(2);
  expect(console.error).toHaveBeenNthCalledWith(
    1,
    "Warning: The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.%s",
    "selectedcontent",
    expect.anything(),
  );
  expect(console.error).toHaveBeenNthCalledWith(
    2,
    "Warning: validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s%s",
    "<button>",
    "select",
    expect.anything(),
    expect.anything(),
    expect.anything(),
  );
}

// NOTE: These are due to react/jsdom being behind browser standards, they will catch up and we can remove these
// See <https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select> for current support
function expectJsdomOptGroupError() {
  expect(console.error).toHaveBeenCalledTimes(3);
  expect(console.error).toHaveBeenNthCalledWith(
    1,
    "Warning: The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.%s",
    "selectedcontent",
    expect.anything(),
  );
  expect(console.error).toHaveBeenNthCalledWith(
    2,
    "Warning: validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s%s",
    "<button>",
    "select",
    expect.anything(),
    expect.anything(),
    expect.anything(),
  );
  expect(console.error).toHaveBeenNthCalledWith(
    3,
    "Warning: validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s%s",
    "<legend>",
    "optgroup",
    expect.anything(),
    expect.anything(),
    expect.anything(),
  );
}

describe("OakSelect", () => {
  it("plain select", () => {
    const { container } = renderWithTheme(
      <OakSelect>
        <OakOption>one</OakOption>
        <OakOption>two</OakOption>
        <OakOption>three</OakOption>
      </OakSelect>,
    );

    expectJsdomOptionError();
    expect(container).toMatchSnapshot();
  });

  it("disabled select", () => {
    const { container } = renderWithTheme(
      <OakSelect disabled={true}>
        <OakOption>one</OakOption>
        <OakOption>two</OakOption>
        <OakOption>three</OakOption>
      </OakSelect>,
    );

    expectJsdomOptionError();
    expect(container).toMatchSnapshot();
  });

  it("highlighted select", () => {
    const { container } = renderWithTheme(
      <OakSelect isHighlighted={true}>
        <OakOption>one</OakOption>
        <OakOption>two</OakOption>
        <OakOption>three</OakOption>
      </OakSelect>,
    );

    expectJsdomOptionError();
    expect(container).toMatchSnapshot();
  });

  it("invalid select", () => {
    const { container } = renderWithTheme(
      <OakSelect validity="invalid" aria-invalid="false">
        <OakOption>one</OakOption>
        <OakOption>two</OakOption>
        <OakOption>three</OakOption>
      </OakSelect>,
    );

    expectJsdomOptionError();
    expect(container).toMatchSnapshot();
  });

  it("optgroup select", () => {
    const { container } = renderWithTheme(
      <OakSelect>
        <OakOptGroup label="Group 1">
          <OakOption>one</OakOption>
          <OakOption>two</OakOption>
          <OakOption>three</OakOption>
        </OakOptGroup>
        <OakOptGroup label="Group 2">
          <OakOption>four</OakOption>
          <OakOption>five</OakOption>
          <OakOption>six</OakOption>
        </OakOptGroup>
      </OakSelect>,
    );

    expectJsdomOptGroupError();
    expect(container).toMatchSnapshot();
  });
});
