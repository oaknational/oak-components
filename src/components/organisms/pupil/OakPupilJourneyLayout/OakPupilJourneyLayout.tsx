import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

import { OakFlex } from "@/components/atoms";
import { OakHandDrawnHR } from "@/components/molecules/OakHandDrawnHR";
import { getBreakpoint } from "@/styles/utils/responsiveStyle";

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

const StyledLayoutBox = styled(OakFlex)<{
  sectionName: PupilJourneySectionName;
  phase: Phase;
}>`
  @media (min-width: ${getBreakpoint("large")}px) {
    ${(props) => css`
      background-image: url(${getBackgroundUrlForSection(
        props.sectionName,
        props.phase,
      )});
      background-repeat: no-repeat;
      background-position-x: center;
      background-size: cover;
    `}
`;

/**
 * Provides overall page layout and colours for the pupil journey
 *
 * Used for the unit, lesson and tiers/programme factor listing pages
 *
 * the sections of the page are passed in as props and children
 */

export const OakPupilJourneyLayout = ({
  sectionName,
  titleSlot,
  topNavSlot,
  phase,
  children,
}: OakPupilJourneyLayoutProps) => {
  return (
    <StyledLayoutBox
      $ph={["inner-padding-s", "inner-padding-xl"]}
      $background={
        phase === "primary"
          ? "bg-decorative4-very-subdued"
          : "bg-decorative3-very-subdued"
      }
      $flexDirection="column"
      $alignItems={"center"}
      sectionName={sectionName}
      phase={phase}
    >
      {topNavSlot && (
        <OakFlex
          $height={["all-spacing-13", "all-spacing-14", "all-spacing-16"]}
          $background={"transparent"}
          $alignItems={"center"}
          $maxWidth={"100%"}
          $width={["100%", "100%", "all-spacing-24"]}
        >
          {topNavSlot}
        </OakFlex>
      )}
      <OakFlex
        $flexDirection="column"
        $maxWidth={["100%", "all-spacing-22"]}
        $minWidth={["100%", "all-spacing-22", "all-spacing-23"]}
        $pt={["inner-padding-none", "inner-padding-m"]}
        $mb={["space-between-l", "space-between-l", "space-between-xl"]}
      >
        <OakFlex $flexDirection={"column"} $gap={["space-between-m2"]}>
          {titleSlot}
          <OakHandDrawnHR hrColor={"white"} $height={"all-spacing-1"} />
          {children}
        </OakFlex>
      </OakFlex>
    </StyledLayoutBox>
  );
};

function getBackgroundUrlForSection(
  sectionName: PupilJourneySectionName,
  phase: Phase,
) {
  switch (sectionName) {
    case "lesson-listing":
      return phase === "primary"
        ? "https://res.cloudinary.com/oak-web-application/image/upload/v1699887218/pupil-journey/Confetti_Background_vatiqx.svg"
        : "https://res.cloudinary.com/oak-web-application/image/upload/v1699887218/pupil-journey/Confetti_Background_1_i6hsxn.svg";
    case "unit-listing":
      return phase === "primary"
        ? "https://res.cloudinary.com/oak-web-application/image/upload/v1699887218/pupil-journey/Line_Background_1_q2dn7p.svg"
        : "https://res.cloudinary.com/oak-web-application/image/upload/v1699887218/pupil-journey/Line_Background_toygyu.svg";
    default:
      return "";
  }
}
