import React, { ReactNode } from "react";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakTypography } from "@/components/typography/OakTypography";
import { OakUL } from "@/components/typography/OakUL";
import { OakMediaClipListAccordion } from "@/components/owa/OakMediaClipListAccordion";

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
      $ph={"spacing-16"}
      $pv={"spacing-12"}
    >
      <OakTypography $font="body-3" $mb={"spacing-4"}>
        Lesson
      </OakTypography>
      <OakTypography $font="heading-7" $mb={"spacing-4"}>
        {lessonTitle}
      </OakTypography>
      <OakTypography $font="body-3">
        {currentClipCounter}/{totalClipCounter} clips
      </OakTypography>
    </OakFlex>
  );

  const mediaClipListContent = (
    <OakUL $reset $ph={"spacing-12"} $pt={"spacing-8"}>
      {children}
    </OakUL>
  );

  return (
    <OakMediaClipListAccordion
      header={mediaClipListHeader}
      id="media-clip-list"
      initialOpen={true}
      $maxHeight={"spacing-480"}
    >
      {mediaClipListContent}
    </OakMediaClipListAccordion>
  );
};
