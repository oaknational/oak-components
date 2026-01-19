import React from "react";

import {
  OakBulletList,
  OakBulletListProps,
} from "@/components/owa/OakBulletList";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";

export type OakPupilJourneyListItemSubheadingProps = {
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
export const OakPupilJourneyListItemSubheading = (
  props: OakPupilJourneyListItemSubheadingProps,
) => {
  const { textSlot, listItems } = props;

  return (
    <OakFlex
      $flexDirection={["column", "row"]}
      $flexWrap={"wrap"}
      $justifyContent={"space-between"}
      $flexGrow={[null, 1]}
      $alignItems={["flex-start", "center"]}
      $gap={"spacing-24"}
    >
      {textSlot}
      <OakBulletList
        listItems={listItems}
        $background={"bg-decorative5-very-subdued"}
        $borderRadius={"border-radius-s"}
        $borderColor={"border-decorative5"}
        $ba={"border-solid-s"}
        $ph={"spacing-8"}
        $pv={"spacing-4"}
      />
    </OakFlex>
  );
};
