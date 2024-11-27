import React from "react";

import { OakFlex } from "@/components/atoms/OakFlex";
import { OakTypography, OakUL, OakLI } from "@/components/atoms";
import {
  OakMediaClip,
  OakMediaClipProps,
} from "@/components/organisms/shared/OakMediaClip";
import { OakSolidBorderAccordion } from "@/components/molecules/OakSolidBorderAccordion";

export type OakMediaClipListProps = {
  /**
   * The title of the lesson
   */
  lessonTitle: string;
  /**
   * The array of OakMediaClip props
   */
  mediaClipList: OakMediaClipProps[];
};

type OakMediaClipListHeaderProps = {
  title: string;
  currentClipIndex: number;
  clipCount: number;
};

const MediaClipListHeader = ({
  title,
  currentClipIndex,
  clipCount,
}: OakMediaClipListHeaderProps) => (
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
      {title}
    </OakTypography>
    <OakTypography $font="body-3">
      {currentClipIndex}/{clipCount} clips
    </OakTypography>
  </OakFlex>
);

/**
 *
 * OakMediaClipList is a scrollable list of OakMediaClip components with clip counter and the title
 *
 */
export const OakMediaClipList = ({
  lessonTitle,
  mediaClipList,
}: OakMediaClipListProps) => {
  const clipCount = mediaClipList.length;
  const currentClipIndex =
    mediaClipList.findIndex(
      (mediaClip) => mediaClip.muxPlayingState === "playing",
    ) + 1;

  const MediaClipListContent = () => (
    <OakUL $reset $ph={"inner-padding-s"} $pt={"inner-padding-xs"}>
      {mediaClipList.map((mediaClipListItem, index) => (
        <OakLI $mb={"space-between-ssx"} key={index}>
          <OakMediaClip {...mediaClipListItem} />
        </OakLI>
      ))}
    </OakUL>
  );

  return (
    <OakSolidBorderAccordion
      header={
        <MediaClipListHeader
          title={lessonTitle}
          currentClipIndex={currentClipIndex}
          clipCount={clipCount}
        />
      }
      children={<MediaClipListContent />}
      id="media-clip-list"
      initialOpen={true}
      $maxHeight={"all-spacing-21"}
    />
  );
};
