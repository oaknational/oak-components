import React from "react";

import { OakFlex } from "@/components/atoms/OakFlex";
import { OakHandDrawnHR } from "@/components/molecules/OakHandDrawnHR";

export type OakPupilJourneyListProps = {
  children: React.ReactNode;
  phase: "primary" | "secondary";
  titleSlot?: React.ReactNode;
  filterSlot?: React.ReactNode;
  counterSlot: React.ReactNode;
};

const Slots = ({
  titleSlot,
  filterSlot,
  counterSlot,
}: Pick<
  OakPupilJourneyListProps,
  "titleSlot" | "filterSlot" | "counterSlot"
>) => {
  if (titleSlot) {
    return (
      <OakFlex
        $flexDirection={"column"}
        $gap={["space-between-m", "space-between-m2", "space-between-m2"]}
      >
        {titleSlot}
        <OakHandDrawnHR hrColor={"white"} $height={"all-spacing-1"} />
        <OakFlex $flexDirection={"column"} $gap={"space-between-m"}>
          {filterSlot && (
            <OakFlex $background={"red50"} $justifyContent={"end"}>
              {filterSlot}
            </OakFlex>
          )}
          <OakFlex $background={"red50"}>{counterSlot}</OakFlex>
        </OakFlex>
      </OakFlex>
    );
  } else {
    return (
      <OakFlex $pt={"inner-padding-xl"} $background={"red50"}>
        {counterSlot}
      </OakFlex>
    );
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
  counterSlot,
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
        counterSlot={counterSlot}
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
