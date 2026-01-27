import React, { ReactNode } from "react";
import styled from "styled-components";

import { LessonSectionName } from "@/components/owa/pupil/lesson/OakLessonLayout";
import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakHeading } from "@/components/typography/OakHeading";
import { OakIconProps } from "@/components/images-and-icons/OakIcon";
import { OakSpan } from "@/components/typography/OakSpan";
import { OakRoundIcon } from "@/components/images-and-icons/OakRoundIcon";
import { getBreakpoint } from "@/styles/utils/responsiveStyle";

type LessonTopNavSectionName = Omit<LessonSectionName, "overview" | "review">;

const StyledMobileSummary = styled(OakSpan)`
  @media (min-width: ${getBreakpoint("small")}px) {
    display: none;
  }
`;

export type OakLessonTopNavProps = {
  lessonSectionName: LessonTopNavSectionName;
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
    <OakFlex $gap="spacing-24" $alignItems="center">
      <OakBox $pl={["spacing-0", "spacing-12"]}>{backLinkSlot}</OakBox>
      <OakFlex $flexGrow="none">
        <OakRoundIcon
          {...pickSectionIcon(lessonSectionName)}
          $width="spacing-40"
          $height="spacing-40"
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
  sectionName: LessonTopNavSectionName,
): Pick<OakIconProps, "iconName" | "$background"> {
  switch (sectionName) {
    case "intro":
      return {
        iconName: "intro",
        $background: "icon-decorative2",
      };
    case "starter-quiz":
      return {
        iconName: "quiz",
        $background: "icon-decorative1",
      };
    case "video":
      return {
        iconName: "video",
        $background: "icon-decorative4",
      };
    case "exit-quiz":
      return {
        iconName: "quiz",
        $background: "icon-decorative5",
      };
    default:
      return {
        iconName: "intro",
        $background: "icon-decorative2",
      };
  }
}
