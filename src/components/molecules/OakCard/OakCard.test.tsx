import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";

import { OakCard, OakCardProps } from "@/components/molecules/OakCard";
import renderWithTheme from "@/test-helpers/renderWithTheme";

const testData = {
  heading: "Test Heading",
  href: "https://www.example.com",
  cardOrientation: "row" as const,
  cardWidth: "spacing-360" as const,
  imageSrc: "https://www.example.com/image.jpg",
  imageAlt: "Test image",
  aspectRatio: "4/3" as const,
  subCopy: "Some Test Subcopy",
  tagName: "Test Tag",
  linkText: "Test Link Text",
  linkIconName: "chevron-right" as const,
};

describe("OakCard", () => {
  const allProps: OakCardProps = { ...testData };
  const requiredProps: OakCardProps = {
    heading: testData.heading,
    href: testData.href,
  };

  it("matches snapshot when passed all props", () => {
    const { container } = renderWithTheme(<OakCard {...allProps} />);

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with only required props", () => {
    renderWithTheme(<OakCard {...requiredProps} />);

    expect(screen.getByText(testData.heading)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", testData.href);
  });

  it("renders card with correct orientation when provided", () => {
    renderWithTheme(<OakCard {...requiredProps} cardOrientation="row" />);

    expect(screen.getByRole("link")).toHaveStyle("flex-direction: row");
  });

  it("renders card with correct default orientation when not provided", () => {
    renderWithTheme(<OakCard {...requiredProps} />);

    expect(screen.getByRole("link")).toHaveStyle("flex-direction: column");
  });

  it("renders with image when provided", () => {
    renderWithTheme(
      <OakCard
        {...requiredProps}
        imageSrc={testData.imageSrc}
        imageAlt={testData.imageAlt}
      />,
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByAltText(testData.imageAlt)).toBeInTheDocument();
  });

  it("renders image with correct aspect ratio when provided", () => {
    renderWithTheme(
      <OakCard
        {...requiredProps}
        imageSrc={testData.imageSrc}
        imageAlt={testData.imageAlt}
        aspectRatio="4/3"
      />,
    );

    expect(screen.getByRole("img").parentElement).toHaveStyle(
      "aspect-ratio: 4/3",
    );
  });

  it("renders image with correct default aspect ratio when not provided", () => {
    renderWithTheme(
      <OakCard
        {...requiredProps}
        imageSrc={testData.imageSrc}
        imageAlt={testData.imageAlt}
      />,
    );

    expect(screen.getByRole("img").parentElement).toHaveStyle(
      "aspect-ratio: 1/1",
    );
  });

  it("renders with sub copy when provided", () => {
    renderWithTheme(<OakCard {...requiredProps} subCopy={testData.subCopy} />);

    expect(screen.getByText(testData.subCopy)).toBeInTheDocument();
  });

  it("renders with tag when provided", () => {
    renderWithTheme(<OakCard {...requiredProps} tagName={testData.tagName} />);

    expect(screen.getByText(testData.tagName)).toBeInTheDocument();
  });

  it("renders with link text and correct icon when provided", () => {
    renderWithTheme(
      <OakCard
        {...requiredProps}
        linkText={testData.linkText}
        linkIconName={testData.linkIconName}
      />,
    );

    expect(screen.getByText(testData.linkText)).toBeInTheDocument();
    expect(screen.getByAltText("chevron-right")).toBeInTheDocument();
  });

  it("renders with link text and correct default icon when not provided", () => {
    renderWithTheme(
      <OakCard {...requiredProps} linkText={testData.linkText} />,
    );

    expect(screen.getByText(testData.linkText)).toBeInTheDocument();
    expect(screen.getByAltText("arrow-right")).toBeInTheDocument();
  });
});
