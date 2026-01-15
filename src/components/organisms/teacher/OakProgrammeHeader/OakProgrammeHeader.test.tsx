import React from "react";
import "@testing-library/jest-dom";

import { OakProgrammeHeader } from "./OakProgrammeHeader";

import { subjectHeroImages } from "@/image-map";
import renderWithTheme from "@/test-helpers/renderWithTheme";
import { OakHeading, OakTypography } from "@/components/atoms";

const props = {
  subject: "music" as const,
  children: (
    <>
      <OakHeading tag="h1" $font="heading-4">
        Test Programme
      </OakHeading>
      <OakTypography $font="body-2">
        Test content for the programme header.
      </OakTypography>
    </>
  ),
};

describe("OakProgrammeHeader", () => {
  it("renders decorative image with empty alt text", () => {
    const { getByAltText } = renderWithTheme(<OakProgrammeHeader {...props} />);
    const image = getByAltText("");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "");
  });

  it("renders image with correct src URL", () => {
    const { getByRole } = renderWithTheme(<OakProgrammeHeader {...props} />);
    const image = getByRole("img");
    const imageId = subjectHeroImages.music;
    const expectedSrc = `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/${imageId}`;

    expect(image).toHaveAttribute("src", expectedSrc);
  });

  it("renders all text content", () => {
    const { getByRole, getByText } = renderWithTheme(
      <OakProgrammeHeader {...props} />,
    );

    expect(getByRole("heading", { level: 1 })).toHaveTextContent(
      "Test Programme",
    );
    expect(
      getByText("Test content for the programme header."),
    ).toBeInTheDocument();
  });

  it("renders header slot content when provided", () => {
    const headerContent = "Breadcrumb navigation";
    const { getByText } = renderWithTheme(
      <OakProgrammeHeader {...props} headerSlot={headerContent} />,
    );

    expect(getByText(headerContent)).toBeInTheDocument();
  });

  it("renders footer slot content when provided", () => {
    const footerContent = "Action buttons";
    const { getByText } = renderWithTheme(
      <OakProgrammeHeader {...props} footerSlot={footerContent} />,
    );

    expect(getByText(footerContent)).toBeInTheDocument();
  });
});
