import React, { ReactNode } from "react";
import styled from "styled-components";

import { OakBox, OakFlex } from "@/components/atoms";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { getBreakpoint } from "@/styles/utils/responsiveStyle";
import { OakCombinedColorToken } from "@/styles";

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
const StyledLayoutBox = styled(OakBox)`
  @media (min-width: ${getBreakpoint("small")}px) {
    padding-top: ${parseSpacing("space-between-xl")};
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
    contentBackgroundColor,
    contentBorderColor,
    mobileContentBackgroundColor,
  ] = pickSectionColours(phase);

  return (
    <StyledLayoutBox
      $display={"flex"}
      $width="100%"
      $minHeight={"100%"}
      $ph={["inner-padding-none", "inner-padding-xl"]}
      $background={pageBackgroundColor}
    >
      <OakFlex
        $flexDirection="column"
        $flexGrow={1}
        $background={[mobileContentBackgroundColor, contentBackgroundColor]}
        $btr={[null, "border-radius-xl"]}
        $bt={[null, "border-solid-xl"]}
        $bh={[null, "border-solid-xl"]}
        $borderColor={[null, contentBorderColor]}
        $maxWidth="all-spacing-24"
        $minHeight="100%"
        $mh="auto"
        $pt={["inner-padding-none", "inner-padding-m"]}
        $gap={["space-between-l", "space-between-xl"]}
      >
        {topNavSlot && (
          <OakBox
            $pv="inner-padding-l"
            $pl={["inner-padding-m", "inner-padding-xs"]}
            $pr={["inner-padding-m", "inner-padding-none"]}
            $mr={["space-between-none", "space-between-l"]}
            $background={["bg-primary", "transparent"]}
          >
            {topNavSlot}
            {sectionName}
            {titleSlot}
            {children}
          </OakBox>
        )}
      </OakFlex>
    </StyledLayoutBox>
  );
};

function pickSectionColours(
  phase: Phase,
): [
  pageBackgroundColor: OakCombinedColorToken,
  contentBackgroundColor: OakCombinedColorToken,
  contentBorderColor: OakCombinedColorToken,
  mobileContentBackgroundColor: OakCombinedColorToken,
] {
  switch (phase) {
    case "primary":
      return [
        "bg-decorative1-main",
        "bg-primary",
        "border-decorative1-stronger",
        "bg-primary",
      ];
    case "secondary":
      return [
        "bg-decorative2-subdued",
        "bg-decorative2-very-subdued",
        "border-inverted",
        "bg-decorative2-subdued",
      ];
  }
}
