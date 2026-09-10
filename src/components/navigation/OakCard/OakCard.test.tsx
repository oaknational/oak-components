import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";

import { OakCard, OakCardProps } from "./OakCard";

import renderWithTheme from "@/test-helpers/renderWithTheme";
import { getBreakpoint } from "@/styles/utils/responsiveStyle";

const testData = {
  heading: "Test Heading",
  headingLevel: "h3" as const,
  href: "https://www.example.com",
  cardOrientation: "row" as const,
  cardWidth: "spacing-360" as const,
  imageSrc: "https://www.example.com/image.jpg",
  imageAlt: "Test image",
  aspectRatio: "4/3" as const,
  subCopy: "Some Test Subcopy",
  tagName: "Test Tag",
  tagBackground: "bg-decorative5-main" as const,
  linkText: "Test Link Text",
  linkIconName: "chevron-right" as const,
  $background: "bg-decorative1-subdued" as const,
  $borderRadius: "border-radius-xl" as const,
  $bblr: "border-radius-square" as const,
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

  it("matches snapshot when passed as='li'", () => {
    const { container } = renderWithTheme(<OakCard {...allProps} as="li" />);

    expect(container.firstElementChild!.tagName).toBe("LI");
    expect(container).toMatchSnapshot();
  });

  it("renders card with only heading and href when passed only required props", () => {
    renderWithTheme(<OakCard {...requiredProps} />);

    expect(screen.getByText(testData.heading)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", testData.href);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.queryByRole("paragraph")).not.toBeInTheDocument();
  });

  it("renders card with the correct heading level when provided", () => {
    renderWithTheme(<OakCard {...requiredProps} headingLevel="h4" />);

    expect(screen.getByRole("heading")).toHaveProperty("tagName", "H4");
  });

  it("renders card with correct orientation when provided", () => {
    renderWithTheme(<OakCard {...requiredProps} cardOrientation="row" />);

    expect(screen.getByRole("link")).toHaveStyle("flex-direction: row");
  });

  it("renders card with small screen orientation when provided", () => {
    renderWithTheme(
      <OakCard {...requiredProps} cardOrientation={["column", "row"]} />,
    );

    expect(screen.getByRole("link")).toHaveStyleRule(
      "flex-direction",
      "column",
    );
    expect(screen.getByRole("link")).toHaveStyleRule("flex-direction", "row", {
      media: `(min-width: ${getBreakpoint("small")}px)`,
    });
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

  it("renders with tag with correct background colour when provided", () => {
    renderWithTheme(
      <OakCard
        {...requiredProps}
        tagName={testData.tagName}
        tagBackground={testData.tagBackground}
      />,
    );

    expect(screen.getByText(testData.tagName)).toBeInTheDocument();
  });

  it("renders tag with correct default background colour when not provided", () => {
    renderWithTheme(<OakCard {...requiredProps} tagName={testData.tagName} />);

    expect(screen.getByText(testData.tagName)).toBeInTheDocument();
  });

  it("renders with link text and icon when provided", () => {
    renderWithTheme(
      <OakCard
        {...requiredProps}
        linkText={testData.linkText}
        linkIconName={testData.linkIconName}
      />,
    );

    expect(screen.getByText(testData.linkText)).toBeInTheDocument();
    expect(screen.getByRole("presentation")).toBeInTheDocument();
  });

  it("renders link text with an icon when not provided", () => {
    renderWithTheme(
      <OakCard {...requiredProps} linkText={testData.linkText} />,
    );

    expect(screen.getByText(testData.linkText)).toBeInTheDocument();
    expect(screen.getByRole("presentation")).toBeInTheDocument();
  });

  it("renders card with the correct background colour when provided", () => {
    renderWithTheme(
      <OakCard {...requiredProps} $background={testData.$background} />,
    );

    expect(screen.getByRole("link")).toHaveStyle(
      "background: rgb(223, 249, 222)",
    );
  });

  it("renders card with the correct default background colour when not provided", () => {
    renderWithTheme(<OakCard {...requiredProps} />);

    expect(screen.getByRole("link")).toHaveStyle(
      "background: rgb(255, 255, 255)",
    );
  });

  it("does not let the background colour override the hover background colour", () => {
    renderWithTheme(
      <OakCard
        {...requiredProps}
        $background={testData.$background}
        hoverBackground="bg-decorative5-main"
      />,
    );

    expect(screen.getByRole("link")).toHaveStyleRule("background", "#ffe555", {
      modifier: ":hover",
    });
  });

  it("renders card with the correct default border radius when not provided", () => {
    renderWithTheme(<OakCard {...requiredProps} />);

    expect(screen.getByRole("link")).toHaveStyleRule("border-radius", "0.5rem");
  });

  it("renders card with the correct border radius when provided", () => {
    renderWithTheme(
      <OakCard {...requiredProps} $borderRadius={testData.$borderRadius} />,
    );

    expect(screen.getByRole("link")).toHaveStyleRule("border-radius", "1.5rem");
  });

  it("renders card with individual corner radii overriding the border radius", () => {
    renderWithTheme(
      <OakCard
        {...requiredProps}
        $borderRadius={testData.$borderRadius}
        $btlr="border-radius-square"
        $btrr="border-radius-s"
        $bblr="border-radius-m"
        $bbrr="border-radius-l"
      />,
    );

    const link = screen.getByRole("link");

    expect(link).toHaveStyleRule("border-top-left-radius", "0rem");
    expect(link).toHaveStyleRule("border-top-right-radius", "0.25rem");
    expect(link).toHaveStyleRule("border-bottom-left-radius", "0.375rem");
    expect(link).toHaveStyleRule("border-bottom-right-radius", "1rem");
  });

  it("doesn't render image when showImage is false", () => {
    renderWithTheme(<OakCard {...testData} showImage={false} />);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("render image when showImage is true", () => {
    renderWithTheme(<OakCard {...testData} showImage={true} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("render image by default", () => {
    renderWithTheme(<OakCard {...testData} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
