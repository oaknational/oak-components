import React from "react";

import { OakFlex } from "@/components/atoms/OakFlex";
import { OakHandDrawnHR } from "@/components/molecules/OakHandDrawnHR";

export type OakPupilJourneyListProps = {
  children: React.ReactNode;
  phase: "primary" | "secondary";
  titleSlot?: React.ReactNode;
  filterSlot?: React.ReactNode;
  subheadingSlot: React.ReactNode;
};

/*
 
FIXME: 
This component falls into the swiss army knife trap. 
Conditional logic is being used to handle a range of specific layout needs at a higher level in the tree.
It would be better to decompose this component and recompose more specific components handling the specific layout needs.
However, I do not want to introduce break changes in this PR.

*/

const Slots = ({
  titleSlot,
  filterSlot,
  subheadingSlot,
}: Pick<
  OakPupilJourneyListProps,
  "titleSlot" | "filterSlot" | "subheadingSlot"
>) => {
  if (titleSlot) {
    return (
      <OakFlex $flexDirection={"column"} $gap={"space-between-m"}>
        <OakFlex $flexDirection={"column"} $gap={"space-between-m2"}>
          {titleSlot}
          <OakHandDrawnHR hrColor={"white"} $height={"all-spacing-1"} />
        </OakFlex>

        <OakFlex $flexDirection={"column"} $gap={"space-between-m2"}>
          {filterSlot}
          <OakFlex>{subheadingSlot}</OakFlex>
        </OakFlex>
      </OakFlex>
    );
  } else {
    return <OakFlex $pt={"inner-padding-xl"}>{subheadingSlot}</OakFlex>;
  }
};

/**
 *
 * A styled list container for use with OakPupilJourneyListItems
 *
 *
 */

export const OakPupilJourneyList = ({
  children,
  phase,
  titleSlot,
  subheadingSlot,
  filterSlot,
}: OakPupilJourneyListProps) => {
  const outerBackgroundColor =
    phase === "primary"
      ? "bg-decorative4-very-subdued"
      : "bg-decorative3-very-subdued";
  const backgroundColor =
    phase === "primary" ? "bg-decorative4-subdued" : "bg-decorative3-subdued";

  return (
    <OakFlex
      $flexDirection={"column"}
      $width={["100%", "all-spacing-22", "all-spacing-23"]}
      $background={outerBackgroundColor}
      $gap={"space-between-m"}
    >
      <Slots
        titleSlot={titleSlot}
        filterSlot={filterSlot}
        subheadingSlot={subheadingSlot}
      />
      <OakFlex
        $flexDirection={"column"}
        $pa={"inner-padding-m"}
        $borderRadius={"border-radius-l"}
        $gap={"space-between-s"}
        $background={backgroundColor}
        role="list"
      >
        {children}
      </OakFlex>
    </OakFlex>
  );
};
