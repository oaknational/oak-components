import React from "react";

import { OakFlex } from "@/components/atoms/OakFlex";
import { OakHandDrawnHR } from "@/components/molecules/OakHandDrawnHR";

export type OakPupilJourneyListProps = {
  children: React.ReactNode;
  phase: "primary" | "secondary";
  titleSlot?: React.ReactNode;
  counterSlot: React.ReactNode;
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
    >
      {titleSlot && (
        <OakFlex
          $flexDirection={"column"}
          $gap={["space-between-m", "space-between-m2", "space-between-m2"]}
        >
          {titleSlot}
          <OakHandDrawnHR hrColor={"white"} $height={"all-spacing-1"} />
        </OakFlex>
      )}
      <OakFlex $mv={"space-between-m"}>{counterSlot}</OakFlex>

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
