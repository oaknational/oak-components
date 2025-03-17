import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

import { OakBox, OakFlex } from "@/components/atoms";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { getBreakpoint } from "@/styles/utils/responsiveStyle";
import { OakCombinedColorToken, oakDefaultTheme } from "@/styles";
import { backgrounds } from "@/image-map";
import { parseColor } from "@/styles/helpers/parseColor";

export const lessonSectionNames: string[] = [
  "overview",
  "intro",
  "starter-quiz",
  "video",
  "exit-quiz",
  "review",
];

export type LessonSectionName = (typeof lessonSectionNames)[number];

type Phase = "primary" | "secondary";

export type OakLessonLayoutProps = {
  lessonSectionName: LessonSectionName;
  phase?: Phase;
  celebrate?: boolean;
  topNavSlot: ReactNode;
  bottomNavSlot: ReactNode;
  children: ReactNode;
};

/**
 * `OakBox` does not support space-between tokens on `padding` only `margin`, so we need to
 * set it here to apply appropriate padding to the top of the content.
 */
const StyledLayoutBox = styled(OakBox)<{
  sectionName: LessonSectionName;
  phase: Phase;
  celebrate: boolean;
}>`
  @media (min-width: ${getBreakpoint("small")}px) {
    padding-top: ${parseSpacing("space-between-xl")};
  }
  @media (min-width: ${getBreakpoint("large")}px) {
    ${(props) => css`
      ${getBackgroundUrlForLesson(
        props.sectionName,
        props.phase,
        props.celebrate,
      )}
    `}
    background-repeat: no-repeat;
    background-position-x: center;
    background-size: 100%;
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
  phase = "primary",
  celebrate = false,
  topNavSlot,
  bottomNavSlot,
  children,
}: OakLessonLayoutProps) => {
  const [
    pageBackgroundColor,
    contentBackgroundColor,
    contentBorderColor,
    mobileContentBackgroundColor,
  ] = pickSectionColours(lessonSectionName, phase);

  return (
    <StyledLayoutBox
      $display={"flex"}
      $width="100%"
      $minHeight={"100%"}
      $ph={["inner-padding-none", "inner-padding-xl"]}
      $background={pageBackgroundColor}
      sectionName={lessonSectionName}
      celebrate={celebrate}
      phase={phase}
    >
      <OakFlex
        $flexDirection="column"
        $flexGrow={1}
        $background={[mobileContentBackgroundColor, "transparent"]}
        $maxWidth="all-spacing-24"
        $minHeight="100%"
        $mh="auto"
        $position={"relative"}
      >
        <OakBox $display={["none", "block"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 1308 943"
            fill="none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0,
            }}
            preserveAspectRatio="none"
          >
            <mask id="wobbly_mask" fill="white">
              <path d="M1307.54 535.104C1307.23 636.219 1306.18 739.057 1306.6 839.224C1306.7 898.723 1307.88 947.11 1307 1006C871.2 1012.67 437.787 1006 2 1006C1 939 1.31004 845.783 2.6275 777.934C3.15031 725.636 2.9621 673.135 2.1047 621.04C1.77011 559.918 1.68647 498.83 0.933629 437.946C0.264441 384.059 1.60282 330.442 0.180796 275.304C-0.634779 244.608 1.51916 210.464 2.46021 178.01C3.06666 156.814 3.92405 136.091 4.44685 115.165C5.76432 63.2723 9.36114 33.861 17.2868 27.0998C19.9009 24.8686 22.4521 22.0965 25.087 18.8849C44.7654 12.9688 64.9662 10.1291 85.1882 10.4672C116.807 13.0364 148.782 8.37119 180.61 7.15417L213.714 6.2076C231.196 5.46386 248.595 4.78774 265.785 4.88916C504.33 5.83573 742.85 7.93171 981.395 7.93171C1023.49 7.93171 1065.67 5.93715 1107.85 3.87498C1136.42 2.45512 1164.98 1.03526 1193.53 0.0886897C1210.34 -0.486014 1227.15 1.88041 1243.88 2.9284C1250.8 2.9284 1257.71 4.24684 1264.56 4.07781C1275.4 3.4355 1286.23 5.43006 1296.48 10.0277C1297.86 18.9863 1302.6 31.427 1303.65 48.8371C1305.07 72.7042 1306.18 101.338 1306.91 133.014C1307.62 164.691 1307.94 198.801 1307.83 233.25C1307.71 273.58 1308.02 313.742 1308 354.073C1307.92 414.856 1307.75 475.639 1307.52 535.104H1307.54Z" />
            </mask>
            <path
              d="M1307.54 535.104C1307.23 636.219 1306.18 739.057 1306.6 839.224C1306.7 898.723 1307.88 947.11 1307 1006C871.2 1012.67 437.787 1006 2 1006C1 939 1.31004 845.783 2.6275 777.934C3.15031 725.636 2.9621 673.135 2.1047 621.04C1.77011 559.918 1.68647 498.83 0.933629 437.946C0.264441 384.059 1.60282 330.442 0.180796 275.304C-0.634779 244.608 1.51916 210.464 2.46021 178.01C3.06666 156.814 3.92405 136.091 4.44685 115.165C5.76432 63.2723 9.36114 33.861 17.2868 27.0998C19.9009 24.8686 22.4521 22.0965 25.087 18.8849C44.7654 12.9688 64.9662 10.1291 85.1882 10.4672C116.807 13.0364 148.782 8.37119 180.61 7.15417L213.714 6.2076C231.196 5.46386 248.595 4.78774 265.785 4.88916C504.33 5.83573 742.85 7.93171 981.395 7.93171C1023.49 7.93171 1065.67 5.93715 1107.85 3.87498C1136.42 2.45512 1164.98 1.03526 1193.53 0.0886897C1210.34 -0.486014 1227.15 1.88041 1243.88 2.9284C1250.8 2.9284 1257.71 4.24684 1264.56 4.07781C1275.4 3.4355 1286.23 5.43006 1296.48 10.0277C1297.86 18.9863 1302.6 31.427 1303.65 48.8371C1305.07 72.7042 1306.18 101.338 1306.91 133.014C1307.62 164.691 1307.94 198.801 1307.83 233.25C1307.71 273.58 1308.02 313.742 1308 354.073C1307.92 414.856 1307.75 475.639 1307.52 535.104H1307.54Z"
              fill={parseColor(contentBackgroundColor)({
                theme: oakDefaultTheme,
              })}
              stroke={parseColor(contentBorderColor)({
                theme: oakDefaultTheme,
              })}
              strokeWidth="8"
              mask="url(#wobbly_mask)"
            />
          </svg>
        </OakBox>
        <OakFlex
          $flexDirection="column"
          $flexGrow={1}
          $minHeight="100%"
          $zIndex={1}
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
          <OakFlex $flexGrow={1} $flexDirection="column">
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
      </OakFlex>
    </StyledLayoutBox>
  );
};

function pickSectionColours(
  sectionName: LessonSectionName,
  phase: Phase,
): [
  pageBackgroundColor: OakCombinedColorToken,
  contentBackgroundColor: OakCombinedColorToken,
  contentBorderColor: OakCombinedColorToken,
  mobileContentBackgroundColor: OakCombinedColorToken,
] {
  switch (sectionName) {
    case "overview":
      return phase === "secondary"
        ? [
            "bg-decorative3-subdued",
            "bg-primary",
            "border-decorative3",
            "bg-primary",
          ]
        : [
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
      return phase === "secondary"
        ? [
            "bg-decorative3-subdued",
            "bg-primary",
            "border-decorative3",
            "bg-primary",
          ]
        : [
            "bg-decorative4-subdued",
            "bg-primary",
            "border-decorative4",
            "bg-primary",
          ];
    default:
      return [
        "bg-decorative3-subdued",
        "bg-primary",
        "border-decorative3",
        "bg-primary",
      ];
  }
}

function getBackgroundUrlForLesson(
  sectionName: LessonSectionName,
  phase: Phase,
  celebrate: boolean,
) {
  const prefix = `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/`;
  switch (sectionName) {
    case "overview":
      return phase === "secondary"
        ? `background-image: url(${prefix}${backgrounds["lesson-confetti-lavender"]});`
        : `background-image: url(${prefix}${backgrounds["lesson-confetti-pink"]});`;
    case "intro":
      return `background-image: url(${prefix}${backgrounds["lesson-confetti-mint"]});`;
    case "starter-quiz":
      return celebrate
        ? `background-image: url(${prefix}${backgrounds["lesson-confetti-green"]});`
        : ``;
    case "video":
      return `background-image: url(${prefix}${backgrounds["lesson-confetti-pink"]});`;
    case "exit-quiz":
      return celebrate
        ? `background-image: url(${prefix}${backgrounds["lesson-confetti-green-lemon"]});`
        : ``;
    case "review":
      return phase === "secondary"
        ? `background-image: url(${prefix}${backgrounds["lesson-confetti-lavender"]});`
        : `background-image: url(${prefix}${backgrounds["lesson-confetti-pink"]});`;
    default:
      return "";
  }
}
