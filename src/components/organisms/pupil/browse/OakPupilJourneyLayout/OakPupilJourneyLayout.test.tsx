import React from "react";
import "@testing-library/jest-dom";
import { create } from "react-test-renderer";

import {
  OakPupilJourneyLayout,
  getBackgroundUrlForSection,
  PupilJourneySectionName,
  Phase,
} from "./OakPupilJourneyLayout";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakThemeProvider } from "@/components/atoms";
import { oakDefaultTheme } from "@/styles";

describe("OakPupilJourneyLayout", () => {
  it("should render successfully", () => {
    const { getByText } = renderWithTheme(
      <OakPupilJourneyLayout sectionName={"tier-listing"}>
        <p>Hello World</p>
      </OakPupilJourneyLayout>,
    );
    expect(getByText("Hello World")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = create(
      <OakThemeProvider theme={oakDefaultTheme}>
        <OakPupilJourneyLayout sectionName={"tier-listing"}>
          <p>Hello World</p>
        </OakPupilJourneyLayout>
      </OakThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("getBackgroundUrlForSection", () => {
  it("should return the correct background image for lesson-listing primary", () => {
    expect(getBackgroundUrlForSection("lesson-listing", "primary")).toBe(
      "https://res.cloudinary.com/mock-cloudinary-cloud/image/upload/v1734522868/pupil-journey/confetti-pink.svg",
    );
  });

  it("should return the correct background image for lesson-listing secondary", () => {
    expect(getBackgroundUrlForSection("lesson-listing", "secondary")).toBe(
      "https://res.cloudinary.com/mock-cloudinary-cloud/image/upload/v1734519662/pupil-journey/confetti-lavender.svg",
    );
  });

  it("should return the correct background image for unit-listing primary", () => {
    expect(getBackgroundUrlForSection("unit-listing", "primary")).toBe(
      "https://res.cloudinary.com/mock-cloudinary-cloud/image/upload/v1712912389/pupil-journey/line-pink.svg",
    );
  });

  it("should return the correct background image for unit-listing secondary", () => {
    expect(getBackgroundUrlForSection("unit-listing", "secondary")).toBe(
      "https://res.cloudinary.com/mock-cloudinary-cloud/image/upload/v1712912348/pupil-journey/line-lavender.svg",
    );
  });

  it("should return the correct background image for subject-listing", () => {
    expect(getBackgroundUrlForSection("subject-listing")).toBe(
      "https://res.cloudinary.com/mock-cloudinary-cloud/image/upload/v1715356384/pupil-journey/line-mint.svg",
    );
  });

  it("should return the correct background image for year-listing", () => {
    expect(getBackgroundUrlForSection("year-listing")).toBe(
      "https://res.cloudinary.com/mock-cloudinary-cloud/image/upload/v1734522739/pupil-journey/confetti-mint.svg",
    );
  });
});

describe("OakPupilJourneyLayout backgroundColor", () => {
  const renderComponent = (
    sectionName: PupilJourneySectionName,
    phase?: Phase,
  ) =>
    renderWithTheme(
      <OakPupilJourneyLayout sectionName={sectionName} phase={phase}>
        <p>Test Content</p>
      </OakPupilJourneyLayout>,
    );

  it("should return bg-decorative4-very-subdued for lesson-listing primary", () => {
    const { container } = renderComponent("lesson-listing", "primary");
    expect(container.firstChild).toHaveStyle("background: rgb(245, 233, 242)");
  });

  it("should return bg-decorative3-very-subdued for lesson-listing secondary", () => {
    const { container } = renderComponent("lesson-listing", "secondary");
    expect(container.firstChild).toHaveStyle("background: rgb(227, 233, 251)");
  });

  it("should return bg-decorative4-very-subdued for unit-listing primary", () => {
    const { container } = renderComponent("unit-listing", "primary");
    expect(container.firstChild).toHaveStyle("background: rgb(245, 233, 242)");
  });

  it("should return bg-decorative3-very-subdued for unit-listing secondary", () => {
    const { container } = renderComponent("unit-listing", "secondary");
    expect(container.firstChild).toHaveStyle("background: rgb(227, 233, 251)");
  });

  it("should return bg-decorative4-very-subdued for tier-listing primary", () => {
    const { container } = renderComponent("tier-listing", "primary");
    expect(container.firstChild).toHaveStyle("background: rgb(245, 233, 242)");
  });

  it("should return bg-decorative3-very-subdued for tier-listing secondary", () => {
    const { container } = renderComponent("tier-listing", "secondary");
    expect(container.firstChild).toHaveStyle("background: rgb(227, 233, 251)");
  });

  it("should return bg-decorative1-main for subject-listing", () => {
    const { container } = renderComponent("subject-listing");
    expect(container.firstChild).toHaveStyle("background: rgb(190, 242, 189)");
  });

  it("should return bg-decorative1-main for year-listing", () => {
    const { container } = renderComponent("year-listing");
    expect(container.firstChild).toHaveStyle("background: rgb(190, 242, 189)");
  });
});
