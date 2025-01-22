import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakMediaClipStackListItem } from "./OakMediaClipStackListItem";

import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";
import renderWithTheme from "@/test-helpers/renderWithTheme";

describe("OakMediaClipStackListItem", () => {
  const props = {
    title: "Learning cycle 3 videos",
    href: "",
    imageUrl: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336494/samples/landscapes/nature-mountains.jpg`,
    imageAltText: "alt text for the image",
    numberOfClips: 5,
    isAudioClip: false,
  };
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakMediaClipStackListItem data-testid="test" {...props} />,
    );
    expect(getByTestId("test")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakMediaClipStackListItem {...props} />
      </OakThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
