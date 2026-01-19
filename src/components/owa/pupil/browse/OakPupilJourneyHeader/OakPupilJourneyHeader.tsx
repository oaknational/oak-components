import React from "react";

import {
  OakBulletList,
  OakBulletListProps,
} from "@/components/owa/OakBulletList";
import { OakHandDrawnCardWithIcon } from "@/components/owa/OakHandDrawnCardWithIcon";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakHeading } from "@/components/typography/OakHeading";
import { OakIconProps } from "@/components/images-and-icons/OakIcon";
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
    <OakFlex $flexDirection={"row"} $gap={"spacing-24"}>
      <OakHandDrawnCardWithIcon
        fill={getIconBackground(iconBackground)}
        iconName={iconName}
        $flexGrow={0}
        iconHeight={["spacing-48", "spacing-56", "spacing-56"]}
        iconWidth={["spacing-48", "spacing-56", "spacing-56"]}
        $width={["spacing-64", "spacing-80", "spacing-80"]}
        $height={["spacing-64", "spacing-80", "spacing-80"]}
        alt={alt}
      />
      <OakFlex $flexDirection={"column"} $gap={"spacing-16"}>
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
