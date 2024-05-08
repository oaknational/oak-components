import React from "react";

import { OakFlex } from "@/components/atoms/OakFlex";

export type OakPupilJourneyListProps = {
  children: React.ReactNode;
  phase: "primary" | "secondary";
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
}: OakPupilJourneyListProps) => {
  const backgroundColor =
    phase === "primary" ? "bg-decorative4-subdued" : "bg-decorative3-subdued";
  return (
    <OakFlex
      $flexDirection={"column"}
      $pa={"inner-padding-m"}
      $background={backgroundColor}
      $borderRadius={"border-radius-l"}
      $gap={"space-between-s"}
    >
      {children}
    </OakFlex>
  );
};
