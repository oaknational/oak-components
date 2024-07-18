import React from "react";

import { OakBulletList, OakBulletListProps } from "@/components/molecules";
import { OakFlex } from "@/components/atoms";

export type OakPupilJourneyPreviousLessonsProps = {
  textSlot?: React.ReactNode;
} & OakBulletListProps;

/**
 * This component displays a heading for the previous lessons
 *
 *
 * listItems - List of labels to be displayed
 * textSlot? - Can pass if any react node, but <OakPupilJourneyListCounter /> is recommended
 *
 */
export const OakPupilJourneyPreviousLessons = (
  props: OakPupilJourneyPreviousLessonsProps,
) => {
  const { textSlot, listItems } = props;

  return (
    <OakFlex
      $flexDirection={["column", "row"]}
      $flexWrap={"wrap"}
      $justifyContent={"space-between"}
      $flexGrow={[null, 1]}
      $alignItems={["flex-start", "center"]}
      $gap={"space-between-m"}
    >
      {textSlot}
      <OakBulletList
        listItems={listItems}
        $background={"bg-decorative5-very-subdued"}
        $borderRadius={"border-radius-s"}
        $borderColor={"border-decorative5"}
        $ba={"border-solid-s"}
        $ph={"inner-padding-xs"}
        $pv={"inner-padding-ssx"}
      />
    </OakFlex>
  );
};
