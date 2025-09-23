import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";

import {
  OakLinkCard,
  OakLinkCardProps,
} from "@/components/molecules/OakLinkCard";
import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakFlex, OakHeading, OakP } from "@/components/atoms";

const testData = {
  headingText: "Test Heading",
  paragraphText: "Test paragraph content.",
  href: "https://www.example.com",
};

describe("OakLinkCard", () => {
  const defaultProps: OakLinkCardProps = {
    mainSection: (
      <OakFlex $flexDirection="column" $gap="spacing-12">
        <OakHeading tag="h1" $font="heading-5">
          {testData.headingText}
        </OakHeading>
        <OakP>{testData.paragraphText}</OakP>
      </OakFlex>
    ),
    iconName: "books",
    iconAlt: "Books icon",
    href: testData.href,
    showNew: false,
    narrow: false,
  };

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<OakLinkCard {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with default props", () => {
    renderWithTheme(<OakLinkCard {...defaultProps} />);

    expect(screen.getByText(testData.headingText)).toBeInTheDocument();
    expect(screen.getByText(testData.paragraphText)).toBeInTheDocument();

    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "https://www.example.com");
  });

  it("renders correctly with narrow props", () => {
    renderWithTheme(<OakLinkCard {...defaultProps} narrow />);

    expect(screen.getByText(testData.headingText)).toBeInTheDocument();
    expect(screen.getByText(testData.paragraphText)).toBeInTheDocument();

    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "https://www.example.com");
  });

  it("renders with a different icon and alt text", () => {
    renderWithTheme(
      <OakLinkCard
        {...defaultProps}
        iconName="bell"
        iconAlt="Illustration of a bell"
      />,
    );

    expect(screen.getByAltText("Illustration of a bell")).toBeInTheDocument();
  });

  it("displays the 'New' promo tag when showNew is true", () => {
    renderWithTheme(<OakLinkCard {...defaultProps} showNew={true} />);
    expect(screen.getByTestId("oak-new-promo-tag")).toBeInTheDocument();
  });

  it("does not display the 'New' promo tag when showNew is false", () => {
    renderWithTheme(<OakLinkCard {...defaultProps} showNew={false} />);
    expect(screen.queryByTestId("oak-new-promo-tag")).not.toBeInTheDocument();
  });

  it("applies an animation only when hasAnimation is true", () => {
    const { container: containerWithAnimation } = renderWithTheme(
      <OakLinkCard {...defaultProps} hasAnimation={true} />,
    );
    const { container: containerWithoutAnimation } = renderWithTheme(
      <OakLinkCard {...defaultProps} hasAnimation={false} />,
    );

    expect(containerWithAnimation.firstChild).toHaveStyle({
      animation: "background-fade 2s ease-in-out",
    });

    expect(containerWithoutAnimation.firstChild).toHaveStyle({
      animation: "none",
    });
  });
});
