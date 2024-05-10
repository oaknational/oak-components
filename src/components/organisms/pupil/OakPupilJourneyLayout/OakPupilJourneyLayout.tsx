import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

import { OakBox, OakFlex } from "@/components/atoms";
import { OakHandDrawnHR } from "@/components/molecules/OakHandDrawnHR";
import { getBreakpoint } from "@/styles/utils/responsiveStyle";

// TODO : This needs to be refactored into two components Layout and List
// - the existing List component can be adapted to include the title / header slot
// - the existing List component can also implement appropriate bottom padding
// this will allow layout to be more easily reused for subject and year listings
// Move the hard coded image urls into json data

type PupilJourneySectionName =
  | "tier-listing"
  | "examboard-listing"
  | "unit-listing"
  | "lesson-listing"
  | "subject-listing"
  | "year-listing";

type Phase = "primary" | "secondary";

export type OakPupilJourneyLayoutProps = {
  sectionName: PupilJourneySectionName;
  topNavSlot?: ReactNode;
  titleSlot?: ReactNode;
  phase?: Phase;
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
  titleSlot,
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
      $ph={["inner-padding-s", "inner-padding-xl"]}
      sectionName={sectionName}
      phase={phase}
    >
      {topNavSlot && (
        <OakFlex
          $height={["all-spacing-13", "all-spacing-14", "all-spacing-16"]}
          $alignItems={"center"}
          $width={["100%", "100%", "all-spacing-24"]}
        >
          {topNavSlot}
        </OakFlex>
      )}
      {titleSlot ? (
        <OakFlex
          $flexDirection={"column"}
          $gap={["space-between-m2"]}
          $width={["100%", "all-spacing-22", "all-spacing-23"]}
          $pt={["inner-padding-none", "inner-padding-m"]}
        >
          {titleSlot}
          <OakHandDrawnHR hrColor={"white"} $height={"all-spacing-1"} />
          <OakBox $width={"100%"}>{children}</OakBox>
        </OakFlex>
      ) : (
        <OakBox $width={"100%"}>{children}</OakBox>
      )}
    </StyledLayoutBox>
  );
};

function getBackgroundUrlForSection(
  sectionName: PupilJourneySectionName,
  phase?: Phase,
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
    case "subject-listing":
      return "https://res.cloudinary.com/oak-web-application/image/upload/v1715356384/pupil-journey/Line_Background_mint_rqnskp.svg";
    case "year-listing":
      return "https://res.cloudinary.com/oak-web-application/image/upload/v1715357422/pupil-journey/Confetti_Background_mint_chm1nv.svg";
    default:
      return "";
  }
}
