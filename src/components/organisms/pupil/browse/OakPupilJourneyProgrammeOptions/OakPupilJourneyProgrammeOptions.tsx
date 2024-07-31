import React from "react";

import { OakFlex } from "@/components/atoms/OakFlex";
import { OakHandDrawnHR } from "@/components/molecules/OakHandDrawnHR";

export type OakPupilJourneyProgrammeOptionsProps = {
  children: React.ReactNode;
  phase: "primary" | "secondary";
  titleSlot?: React.ReactNode;
  optionTitleSlot: React.ReactNode;
};

/**
 *
 * A styled list container with a option title to be use with OakPupilJourneyYearButton as the option Buttons
 *
 *
 */

export const OakPupilJourneyProgrammeOptions = ({
  children,
  phase,
  titleSlot,
  optionTitleSlot,
}: OakPupilJourneyProgrammeOptionsProps) => {
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
          $mb={"space-between-m2"}
        >
          {titleSlot}
          <OakHandDrawnHR hrColor={"white"} $height={"all-spacing-1"} />
        </OakFlex>
      )}
      <OakFlex
        $justifyContent={"center"}
        $background={"bg-primary"}
        $ba={"border-solid-m"}
        $borderRadius={"border-radius-l"}
        $pa={"inner-padding-xl"}
        $borderColor={backgroundColor}
      >
        <OakFlex
          $pv={"inner-padding-xl"}
          $flexDirection={"column"}
          $alignItems={"center"}
          $gap={"space-between-l"}
        >
          {optionTitleSlot}
          <OakFlex
            $gap={"space-between-s"}
            $flexWrap={"wrap"}
            $justifyContent={"center"}
          >
            {children}
          </OakFlex>
        </OakFlex>
      </OakFlex>
    </OakFlex>
  );
};
