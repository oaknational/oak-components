import React from "react";
import "@testing-library/jest-dom";

import { OakSelect, OakOptGroup, OakOption } from "./";

import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakSelect", () => {
  it("plain select", () => {
    const { container } = renderWithTheme(
      <OakSelect>
        <OakOption>one</OakOption>
        <OakOption>two</OakOption>
        <OakOption>three</OakOption>
      </OakSelect>,
    );

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

    expect(container).toMatchSnapshot();
  });
});
