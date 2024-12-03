import React, { ReactNode } from "react";

import { OakFlex } from "@/components/atoms/OakFlex";
import { OakTypography, OakUL } from "@/components/atoms";
import { OakMediaClipListAccordion } from "@/components/molecules/OakMediaClipListAccordion";

export type OakMediaClipListProps = {
  lessonTitle: string;
  currentClipCounter: number;
  totalClipCounter: number;
  children: ReactNode;
};

/**
 *
 * OakMediaClipList is a scrollable list of OakMediaClip components with clip counter and the title
 *
 */
export const OakMediaClipList = ({
  lessonTitle,
  currentClipCounter,
  totalClipCounter,
  children,
}: OakMediaClipListProps) => {
  const mediaClipListHeader = (
    <OakFlex
      $flexDirection={"column"}
      $textAlign={"left"}
      $ph={"inner-padding-m"}
      $pv={"inner-padding-s"}
    >
      <OakTypography $font="body-3" $mb={"space-between-sssx"}>
        Lesson
      </OakTypography>
      <OakTypography $font="heading-7" $mb={"space-between-sssx"}>
        {lessonTitle}
      </OakTypography>
      <OakTypography $font="body-3">
        {currentClipCounter}/{totalClipCounter} clips
      </OakTypography>
    </OakFlex>
  );

  const mediaClipListContent = (
    <OakUL $reset $ph={"inner-padding-s"} $pt={"inner-padding-xs"}>
      {children}
    </OakUL>
  );

  return (
    <OakMediaClipListAccordion
      header={mediaClipListHeader}
      children={mediaClipListContent}
      id="media-clip-list"
      initialOpen={true}
      $maxHeight={"all-spacing-21"}
    />
  );
};
