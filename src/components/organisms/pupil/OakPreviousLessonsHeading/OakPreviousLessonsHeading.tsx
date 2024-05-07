import React from "react";

import { OakBulletList, OakBulletListProps } from "@/components/molecules";
import { OakFlex, OakHeading } from "@/components/atoms";

export type OakPreviousLessonsHeadingProps = {
  numberOfLessons: number;
} & OakBulletListProps;

/**
 * This component displays a heading for the previous lessons
 *
 * numberOfLessons - The number of lessons that have been released
 *
 * listItems - add the a list of descriptions to be displayed
 *
 *
 */
export const OakPreviousLessonsHeading = (
  props: OakPreviousLessonsHeadingProps,
) => {
  const { numberOfLessons, listItems } = props;

  return (
    <OakFlex
      $flexDirection={["column", "row"]}
      $flexWrap={"wrap"}
      $justifyContent={"space-between"}
      $alignItems={"flex-start"}
      $gap={"space-between-m"}
    >
      <OakHeading tag="h1" $font={["heading-6", "heading-6"]}>
        {`Previously released lessons (${numberOfLessons})`}
      </OakHeading>
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
