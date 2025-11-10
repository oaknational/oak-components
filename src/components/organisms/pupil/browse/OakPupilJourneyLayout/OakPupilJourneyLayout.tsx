import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

import { OakFlex } from "@/components/atoms";
import { getBreakpoint } from "@/styles/utils/responsiveStyle";
import { backgrounds } from "@/image-map";

export type PupilJourneySectionName =
  | "tier-listing"
  | "examboard-listing"
  | "unit-listing"
  | "lesson-listing"
  | "subject-listing"
  | "year-listing";

export type Phase = "primary" | "secondary";

export type OakPupilJourneyLayoutProps = {
  sectionName: PupilJourneySectionName;
  phase?: Phase;
  topNavSlot?: ReactNode;
  children: ReactNode;
};

const StyledLayoutBox = styled(OakFlex)<{
  sectionName: PupilJourneySectionName;
  phase?: Phase;
}>`
  @media (min-width: ${getBreakpoint("large")}px) {
    ${(props) => css`
      background-image: url(${getBackgroundUrlForSection(
        props.sectionName,
        props?.phase,
      )});
      background-repeat: no-repeat;
      background-position-x: center;
      background-size: 100%;
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
  topNavSlot,
  phase,
  children,
}: OakPupilJourneyLayoutProps) => {
  const backgroundColor = (() => {
    switch (true) {
      case sectionName === "lesson-listing" && phase === "primary":
        return "bg-decorative4-very-subdued";
      case sectionName === "lesson-listing" && phase === "secondary":
        return "bg-decorative3-very-subdued";
      case sectionName === "unit-listing" && phase === "primary":
        return "bg-decorative4-very-subdued";
      case sectionName === "unit-listing" && phase === "secondary":
        return "bg-decorative3-very-subdued";
      case sectionName === "tier-listing" && phase === "primary":
        return "bg-decorative4-very-subdued";
      case sectionName === "tier-listing" && phase === "secondary":
        return "bg-decorative3-very-subdued";
      case sectionName === "subject-listing":
      case sectionName === "year-listing":
        return "bg-decorative1-main";
    }
  })();

  return (
    <StyledLayoutBox
      $background={backgroundColor}
      $flexDirection="column"
      $alignItems={"center"}
      $ph={["spacing-12", "spacing-24"]}
      sectionName={sectionName}
      phase={phase}
    >
      {topNavSlot && (
        <OakFlex
          $height={["spacing-80", "spacing-92", "spacing-120"]}
          $alignItems={"center"}
          $width={["100%", "100%", "spacing-1280"]}
        >
          {topNavSlot}
        </OakFlex>
      )}
      {children}
    </StyledLayoutBox>
  );
};

export function getBackgroundUrlForSection(
  sectionName: PupilJourneySectionName,
  phase?: Phase,
) {
  const prefix = `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/`;
  switch (sectionName) {
    case "lesson-listing":
      return phase === "primary"
        ? `${prefix}${backgrounds["confetti-pink"]}`
        : `${prefix}${backgrounds["confetti-lavender"]}`;
    case "unit-listing":
      return phase === "primary"
        ? `${prefix}${backgrounds["line-pink"]}`
        : `${prefix}${backgrounds["line-lavender"]}`;
    case "subject-listing":
      return `${prefix}${backgrounds["line-mint"]}`;
    case "year-listing":
      return `${prefix}${backgrounds["confetti-mint"]}`;
    default:
      return "";
  }
}
