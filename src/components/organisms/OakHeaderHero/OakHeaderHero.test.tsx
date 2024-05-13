import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import { OakHeaderHero, OakHeaderHeroProps } from "./OakHeaderHero";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakLink } from "@/components/molecules";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

const oakHeaderProps: OakHeaderHeroProps = {
  headingTitle: "How to plan a lesson: a helpful guide for teachers",
  authorTitle: "Head of School Support",
  authorName: "Rachel Storm",
  authorImageSrc: "https://via.placeholder.com/150",
  breadcrumbs: <OakLink href="/home">Home</OakLink>,
  subHeadingText:
    "Body 1 Our guide for teachers, whether you're in your ITT, an ECT or a teacher of many years experience looking for a fresh look on lesson planning, is place to dive into expertise from across the sector.",
  heroImageSrc: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336490/sample.jpg`,
};

describe("OakHeaderHero", () => {
  it("renders", () => {
    const { getByTestId } = renderWithTheme(
      <OakHeaderHero {...oakHeaderProps} />,
    );
    expect(getByTestId("oak-header-component")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakHeaderHero {...oakHeaderProps} />
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
