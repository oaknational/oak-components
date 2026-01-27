import React from "react";

import {
  OakBulletList,
  OakBulletListProps,
} from "@/components/owa/OakBulletList";
import { OakHandDrawnCardWithIcon } from "@/components/owa/OakHandDrawnCardWithIcon";
import { OakJauntyAngleLabel } from "@/components/form-elements/OakJauntyAngleLabel";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakHeading } from "@/components/typography/OakHeading";
import { OakIconProps } from "@/components/images-and-icons/OakIcon";
import { FlexStyleProps } from "@/styles/utils/flexStyle";

export type OakQuizPrintableHeaderProps = {
  title: string;
  iconName: OakIconProps["iconName"];
  alt?: OakIconProps["alt"];
  breadcrumbs: OakBulletListProps["listItems"];
  optionalityTitle?: string;
  worksheetDownloaded: boolean;
  workSheetAvailable: boolean;
  videoPercentage: number;
} & FlexStyleProps;

/**
 * This component is the header for the printable view;
 *
 *
 *
 */
export const OakQuizPrintableHeader = ({
  title,
  iconName,
  alt,
  breadcrumbs,
  worksheetDownloaded,
  workSheetAvailable,
  videoPercentage,
}: OakQuizPrintableHeaderProps) => {
  return (
    <OakFlex
      $flexDirection={["column", "row"]}
      $gap={"spacing-16"}
      $justifyContent={"space-between"}
    >
      <OakFlex $flexDirection={"row"} $gap={"spacing-16"}>
        <OakHandDrawnCardWithIcon
          iconName={iconName}
          fill={"bg-primary"}
          $flexGrow={0}
          iconHeight={"spacing-56"}
          iconWidth={"spacing-56"}
          $width={"spacing-56"}
          $height={"spacing-56"}
          alt={alt}
        />
        <OakFlex $flexDirection={"column"} $gap={"spacing-12"}>
          <OakHeading tag="h1" $font={"heading-7"}>
            {title}
          </OakHeading>
          <OakBulletList listItems={breadcrumbs} />
        </OakFlex>
      </OakFlex>
      <OakFlex
        $flexDirection={"column"}
        $gap={"spacing-12"}
        $alignItems={"flex-start"}
      >
        <OakJauntyAngleLabel
          label={`Lesson video completion - ${videoPercentage}%`}
          $background={"bg-neutral"}
          $font={"heading-light-7"}
        />
        <OakJauntyAngleLabel
          label={
            workSheetAvailable
              ? `Worksheet downloaded - ${worksheetDownloaded ? "Yes" : "No"}`
              : "No worksheet"
          }
          $background={"bg-neutral"}
          $font={"heading-light-7"}
        />
      </OakFlex>
    </OakFlex>
  );
};
