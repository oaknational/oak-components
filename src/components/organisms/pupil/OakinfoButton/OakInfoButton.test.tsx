import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakInfoButton } from "./OakInfoButton";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe(OakInfoButton, () => {
  it("matches snapshot", () => {
    const handleClick = () => jest.fn();
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakInfoButton isOpen={false} isLoading={false} onClick={handleClick} />
        ,
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
