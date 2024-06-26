import React from "react";

import {
  OakBulletList,
  OakBulletListProps,
  OakHandDrawnCardWithIcon,
} from "@/components/molecules";
import { OakFlex, OakHeading, OakIconProps } from "@/components/atoms";
import { FlexStyleProps } from "@/styles/utils/flexStyle";

export type OakPupilJourneyHeaderProps = {
  title: string;
  iconName: OakIconProps["iconName"];
  alt?: OakIconProps["alt"];
  iconBackground?: "primary" | "secondary";
  breadcrumbs: OakBulletListProps["listItems"];
  optionalityTitle?: string;
} & FlexStyleProps;

/**
 * This component is the header for the pupil journey;
 *
 * the icon, title and list of items are passed as props and change change depending on which page it is called
 *
 *
 */
export const OakPupilJourneyHeader = ({
  iconBackground = "primary",
  title,
  iconName,
  alt,
  breadcrumbs,
  optionalityTitle,
}: OakPupilJourneyHeaderProps) => {
  return (
    <OakFlex $flexDirection={"row"} $gap={"space-between-m"}>
      <OakHandDrawnCardWithIcon
        fill={getIconBackground(iconBackground)}
        iconName={iconName}
        $flexGrow={0}
        iconHeight={["all-spacing-9", "all-spacing-10", "all-spacing-10"]}
        iconWidth={["all-spacing-9", "all-spacing-10", "all-spacing-10"]}
        $width={["all-spacing-11", "all-spacing-13", "all-spacing-13"]}
        $height={["all-spacing-11", "all-spacing-13", "all-spacing-13"]}
        alt={alt}
      />
      <OakFlex $flexDirection={"column"} $gap={"space-between-s"}>
        {optionalityTitle && (
          <OakHeading tag="h2" $font={["heading-7"]}>
            {optionalityTitle}
          </OakHeading>
        )}
        <OakHeading tag="h1" $font={["heading-5", "heading-4"]}>
          {title}
        </OakHeading>
        <OakBulletList listItems={breadcrumbs} />
      </OakFlex>
    </OakFlex>
  );
};

function getIconBackground(iconBackground: "primary" | "secondary") {
  return iconBackground === "primary"
    ? "bg-decorative4-main"
    : "bg-decorative3-main";
}
