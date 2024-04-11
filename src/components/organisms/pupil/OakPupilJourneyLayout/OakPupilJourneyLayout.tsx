import React, { ReactNode } from "react";
import styled from "styled-components";

import { OakFlex } from "@/components/atoms";
import { getBreakpoint } from "@/styles/utils/responsiveStyle";
import { OakCombinedColorToken } from "@/styles";
import { OakHandDrawnHR } from "@/components/molecules/OakHandDrawnHR";

type PupilJourneySectionName =
  | "tier-listing"
  | "unit-listing"
  | "lesson-listing";

type Phase = "primary" | "secondary";

export type OakPupilJourneyLayoutProps = {
  sectionName: PupilJourneySectionName;
  topNavSlot: ReactNode;
  titleSlot: ReactNode;
  phase: Phase;
  children: ReactNode;
};

/**
 * `OakBox` does not support space-between tokens on `padding` only `margin`, so we need to
 * set it here to apply appropriate padding to the top of the content.
 */
const StyledLayoutBox = styled(OakFlex)`
  @media (min-width: ${getBreakpoint("small")}px) {
  }
`;

/**
 * Provides overall page layout and colours for the sections of a lesson.
 */
export const OakPupilJourneyLayout = ({
  sectionName,
  titleSlot,
  topNavSlot,
  phase,
  children,
}: OakPupilJourneyLayoutProps) => {
  const [
    pageBackgroundColor,
    // contentBackgroundColor,
    // mobileContentBackgroundColor,
  ] = pickSectionColours(phase);

  return (
    <StyledLayoutBox
      $ph={["inner-padding-s", "inner-padding-xl"]}
      $background={pageBackgroundColor}
      $flexDirection="column"
      $alignItems={"center"}
    >
      {sectionName}
      {topNavSlot && (
        <OakFlex
          $height={"all-spacing-16"}
          $background={"transparent"}
          $alignItems={"center"}
          $width="100%"
        >
          {topNavSlot}
        </OakFlex>
      )}
      <OakFlex
        $flexDirection="column"
        $background={pageBackgroundColor}
        $maxWidth={["100%", "all-spacing-22", "all-spacing-23"]}
        $minWidth={["100%", "all-spacing-22", "all-spacing-23"]}
        $pt={["inner-padding-none", "inner-padding-m"]}
        $gap={["space-between-l", "space-between-xl"]}
        $mb={["space-between-l", "space-between-l", "space-between-xl"]}
      >
        {titleSlot}
        <OakHandDrawnHR hrColor={"white"} $height={"all-spacing-1"} />
        {children}
      </OakFlex>
    </StyledLayoutBox>
  );
};

function pickSectionColours(phase: Phase): [
  pageBackgroundColor: OakCombinedColorToken,
  // contentBackgroundColor: OakCombinedColorToken,
  // mobileContentBackgroundColor: OakCombinedColorToken,
] {
  switch (phase) {
    case "primary":
      return [
        "bg-decorative4-very-subdued",
        //  "bg-primary",
        //  "bg-primary"
      ];
    case "secondary":
      return [
        "bg-decorative3-very-subdued",
        // "bg-decorative2-very-subdued",
        // "bg-decorative2-subdued",
      ];
  }
}
