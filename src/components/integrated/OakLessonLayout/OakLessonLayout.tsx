import React, { ReactNode } from "react";
import styled from "styled-components";

import { OakBox, OakFlex } from "@/components/base";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { getBreakpoint } from "@/styles/utils/responsiveStyle";
import { OakCombinedColorToken } from "@/styles";

type LessonSectionName =
  | "overview"
  | "intro"
  | "starter-quiz"
  | "video"
  | "exit-quiz"
  | "review";

export type OakLessonLayoutProps = {
  lessonSectionName: LessonSectionName;
  topNavSlot: ReactNode;
  bottomNavSlot: ReactNode;
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

const StickyFooter = styled(OakBox)`
  position: sticky;
  bottom: 0;
  z-index: 10;
`;

/**
 * Provides overall page layout and colours for the sections of a lesson.
 */
export const OakLessonLayout = ({
  lessonSectionName,
  topNavSlot,
  bottomNavSlot,
  children,
}: OakLessonLayoutProps) => {
  const [
    pageBackgroundColor,
    contentBackgroundColor,
    contentBorderColor,
    mobileContentBackgroundColor,
  ] = pickSectionColours(lessonSectionName);

  return (
    <StyledLayoutBox
      $minHeight="100vh"
      $width="100%"
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
          </OakBox>
        )}
        <OakFlex
          $flexGrow={1}
          $flexDirection="column"
          $mh={["space-between-s", "space-between-l"]}
        >
          {children}
        </OakFlex>
        {bottomNavSlot && (
          <StickyFooter
            $mh={[
              "space-between-none",
              "space-between-none",
              "space-between-sssx",
            ]}
            $borderColor={contentBorderColor}
            $bt={"border-solid-xl"}
            $background={["bg-primary", contentBackgroundColor]}
          >
            {bottomNavSlot}
          </StickyFooter>
        )}
      </OakFlex>
    </StyledLayoutBox>
  );
};

function pickSectionColours(
  sectionName: LessonSectionName,
): [
  pageBackgroundColor: OakCombinedColorToken,
  contentBackgroundColor: OakCombinedColorToken,
  contentBorderColor: OakCombinedColorToken,
  mobileContentBackgroundColor: OakCombinedColorToken,
] {
  switch (sectionName) {
    case "overview":
      return [
        "bg-decorative4-subdued",
        "bg-primary",
        "border-decorative4",
        "bg-primary",
      ];
    case "intro":
      return [
        "bg-decorative2-subdued",
        "bg-decorative2-very-subdued",
        "border-inverted",
        "bg-decorative2-subdued",
      ];
    case "starter-quiz":
      return [
        "bg-decorative1-main",
        "bg-decorative1-very-subdued",
        "border-inverted",
        "bg-decorative1-subdued",
      ];
    case "video":
      return [
        "bg-decorative4-subdued",
        "bg-primary",
        "border-decorative4",
        "bg-primary",
      ];
    case "exit-quiz":
      return [
        "bg-decorative5-main",
        "bg-decorative5-very-subdued",
        "border-inverted",
        "bg-decorative5-subdued",
      ];
    case "review":
      return [
        "bg-decorative4-subdued",
        "bg-primary",
        "border-decorative4",
        "bg-primary",
      ];
  }
}
