import React from "react";

import { OakFlex, OakHeading, OakIconProps } from "../../../atoms";
import {
  OakBulletList,
  OakBulletListProps,
  OakHandDrawnCardWithIcon,
} from "../../../molecules";

export type OakPupilJourneyHeaderProps = {
  title: string;
  iconName: OakIconProps["iconName"];
  alt?: OakIconProps["alt"];
  iconBackground?: "primary" | "secondary";
} & OakBulletListProps;

/**
 * This component is the header for the pupil journey;
 *
 * the icon, title and list of items are passed as props and change change depending on which page it is called
 *
 *
 */
export const OakPupilJourneyHeader = ({
  iconBackground = "primary",
  ...props
}: OakPupilJourneyHeaderProps) => {
  return (
    <OakFlex $flexDirection={"row"} $gap={"space-between-m"} {...props}>
      <OakHandDrawnCardWithIcon
        fill={getIconBackground(iconBackground)}
        iconName={props.iconName}
        $flexGrow={0}
        iconHeight={"all-spacing-10"}
        iconWidth={"all-spacing-10"}
        $width={"all-spacing-13"}
        $height={"all-spacing-13"}
        alt={props.alt}
      />
      <OakFlex $flexDirection={"column"} $gap={"space-between-s"}>
        <OakHeading tag="h1" $font={"heading-4"}>
          {props.title}
        </OakHeading>
        <OakBulletList listItems={props.listItems} />
      </OakFlex>
    </OakFlex>
  );
};

function getIconBackground(iconBackground: "primary" | "secondary") {
  return iconBackground === "primary"
    ? "bg-decorative4-main"
    : "bg-decorative3-main";
}
