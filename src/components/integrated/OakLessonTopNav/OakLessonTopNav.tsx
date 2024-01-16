import React, { ReactNode } from "react";
import styled from "styled-components";

import {
  OakBox,
  OakFlex,
  OakHeading,
  OakIconProps,
  OakSpan,
} from "@/components/base";
import { OakRoundIcon } from "@/components/ui";
import { getBreakpoint } from "@/styles/utils/responsiveStyle";

type LessonSectionName = "intro" | "starter-quiz" | "video" | "exit-quiz";

const StyledMobileSummary = styled(OakSpan)`
  @media (min-width: ${getBreakpoint("small")}px) {
    display: none;
  }
`;

export type OakLessonTopNavProps = {
  lessonSectionName: LessonSectionName;
  /**
   * Slot to render `OakBackLink` or similar
   */
  backLinkSlot: ReactNode;
  heading: ReactNode;
  /**
   * Displayed at the mobile breakpoint where the counter is not rendered.
   * Provides alternative content for the counter/progress in the lesson.
   */
  mobileSummary: ReactNode;
  /**
   * Slot to render `OakQuizCounter` or similar
   */
  counterSlot?: ReactNode;
};

/**
 * Controls for navigating back and displaying progress in a lesson
 */
export const OakLessonTopNav = ({
  lessonSectionName,
  backLinkSlot,
  counterSlot,
  heading,
  mobileSummary,
}: OakLessonTopNavProps) => {
  return (
    <OakFlex $gap="space-between-m" $alignItems="center">
      {backLinkSlot}
      <OakFlex $flexGrow="none">
        <OakRoundIcon
          {...pickSectionIcon(lessonSectionName)}
          $width="all-spacing-8"
          $height="all-spacing-8"
        />
      </OakFlex>
      <OakBox>
        <OakHeading tag="h1" $font={["heading-7", "heading-5"]}>
          {heading}
        </OakHeading>
        <StyledMobileSummary $font="body-3">
          {mobileSummary}
        </StyledMobileSummary>
      </OakBox>
      <OakFlex $flexGrow={1} $justifyContent="flex-end">
        <OakBox $display={["none", "block"]}>{counterSlot}</OakBox>
      </OakFlex>
    </OakFlex>
  );
};

function pickSectionIcon(
  sectionName: LessonSectionName,
): Pick<OakIconProps, "iconName" | "$background"> {
  switch (sectionName) {
    case "intro":
      return {
        iconName: "signed-video-4",
        $background: "aqua110",
      };
    case "starter-quiz":
      return {
        iconName: "quiz-6",
        $background: "mint110",
      };
    case "video":
      return {
        iconName: "video-3",
        $background: "pink110",
      };
    case "exit-quiz":
      return {
        iconName: "quiz-6",
        $background: "lemon110",
      };
  }
}
