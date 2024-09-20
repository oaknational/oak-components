import React from "react";

import {
  OakBulletList,
  OakBulletListProps,
  OakHandDrawnCardWithIcon,
  OakJauntyAngleLabel,
} from "@/components/molecules";
import { OakFlex, OakHeading, OakIconProps } from "@/components/atoms";
import { FlexStyleProps } from "@/styles/utils/flexStyle";

export type OakPrintableHeaderProps = {
  title: string;
  iconName: OakIconProps["iconName"];
  alt?: OakIconProps["alt"];
  breadcrumbs: OakBulletListProps["listItems"];
  optionalityTitle?: string;
  worksheetDownloaded: boolean;
  videoPercentage: number;
} & FlexStyleProps;

/**
 * This component is the header for the printable view;
 *
 *
 *
 */
export const OakPrintableHeader = ({
  title,
  iconName,
  alt,
  breadcrumbs,
  worksheetDownloaded,
  videoPercentage,
}: OakPrintableHeaderProps) => {
  return (
    <OakFlex
      $flexDirection={"row"}
      $gap={"space-between-s"}
      $justifyContent={"space-between"}
    >
      <OakFlex $flexDirection={"row"} $gap={"space-between-s"}>
        <OakHandDrawnCardWithIcon
          iconName={iconName}
          fill={"white"}
          $flexGrow={0}
          iconHeight={"all-spacing-10"}
          iconWidth={"all-spacing-10"}
          $width={"all-spacing-10"}
          $height={"all-spacing-10"}
          alt={alt}
        />
        <OakFlex $flexDirection={"column"} $gap={"space-between-xs"}>
          <OakHeading tag="h1" $font={"heading-7"}>
            {title}
          </OakHeading>
          <OakBulletList listItems={breadcrumbs} />
        </OakFlex>
      </OakFlex>
      <OakFlex $flexDirection={"column"} $gap={"space-between-xs"}>
        <OakJauntyAngleLabel
          label={`Lesson video completion - ${videoPercentage}`}
          $background={"bg-neutral"}
          $font={"heading-light-7"}
        />
        <OakJauntyAngleLabel
          label={`Worksheet downloaded - ${worksheetDownloaded}%`}
          $background={"bg-neutral"}
          $font={"heading-light-7"}
        />
      </OakFlex>
    </OakFlex>
  );
};
