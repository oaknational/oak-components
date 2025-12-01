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
      $width={["100%", "spacing-640", "spacing-960"]}
      $background={outerBackgroundColor}
    >
      {titleSlot && (
        <OakFlex
          $flexDirection={"column"}
          $gap={["spacing-24", "spacing-32", "spacing-32"]}
          $mb={"spacing-32"}
        >
          {titleSlot}
          <OakHandDrawnHR hrColor={"text-inverted"} $height={"spacing-4"} />
        </OakFlex>
      )}
      <OakFlex
        $justifyContent={"center"}
        $background={"bg-primary"}
        $ba={"border-solid-m"}
        $borderRadius={"border-radius-l"}
        $pa={"spacing-24"}
        $borderColor={backgroundColor}
      >
        <OakFlex
          $pv={"spacing-24"}
          $flexDirection={"column"}
          $alignItems={"center"}
          $gap={"spacing-48"}
        >
          {optionTitleSlot}
          <OakFlex
            $gap={"spacing-16"}
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
