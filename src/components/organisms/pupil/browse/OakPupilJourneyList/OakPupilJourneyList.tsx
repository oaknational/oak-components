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
      <OakFlex $flexDirection={"column"} $gap={"spacing-24"}>
        <OakFlex $flexDirection={"column"} $gap={"spacing-32"}>
          {titleSlot}
          <OakHandDrawnHR hrColor={"bg-primary"} $height={"spacing-4"} />
        </OakFlex>
        <OakFlex $flexDirection={"column"} $gap={"spacing-32"}>
          {filterSlot}
          <OakFlex>{subheadingSlot}</OakFlex>
        </OakFlex>
      </OakFlex>
    );
  } else {
    return <OakFlex $pt={"spacing-24"}>{subheadingSlot}</OakFlex>;
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
      $width={["100%", "spacing-640", "spacing-960"]}
      $background={outerBackgroundColor}
      $gap={"spacing-24"}
    >
      <Slots
        titleSlot={titleSlot}
        filterSlot={filterSlot}
        subheadingSlot={subheadingSlot}
      />
      <OakFlex
        $flexDirection={"column"}
        $pa={"spacing-16"}
        $borderRadius={"border-radius-l"}
        $gap={"spacing-16"}
        $background={backgroundColor}
        role="list"
      >
        {children}
      </OakFlex>
    </OakFlex>
  );
};
