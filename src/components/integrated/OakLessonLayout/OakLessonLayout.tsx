import React, { ReactNode } from "react";
import styled from "styled-components";

import { OakBox, OakFlex } from "@/components/base";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { getBreakpoint } from "@/styles/utils/responsiveStyle";

type OakLessonLayoutProps = {
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

export const OakLessonLayout = ({
  topNavSlot,
  bottomNavSlot,
  children,
}: OakLessonLayoutProps) => {
  return (
    <StyledLayoutBox
      $minHeight="100%"
      $width="100%"
      $ph={["inner-padding-none", "inner-padding-xl"]}
      $background={"bg-decorative1-main"}
    >
      <OakFlex
        $flexDirection="column"
        $flexGrow={1}
        $background={"bg-decorative1-very-subdued"}
        $btr={[null, "border-radius-xl"]}
        $bt={[null, "border-solid-xl"]}
        $bh={[null, "border-solid-xl"]}
        $borderColor={[null, "border-inverted"]}
        $maxWidth="all-spacing-24"
        $minHeight="100%"
        $mh={"auto"}
        $pt={["inner-padding-none", "inner-padding-m"]}
        $gap={["space-between-l", "space-between-xl"]}
      >
        {topNavSlot && (
          <OakBox
            $pt="inner-padding-l"
            $pb="inner-padding-l"
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
            $pt="inner-padding-ssx"
            $mh="space-between-sssx"
            $borderColor="border-inverted"
            $bt="border-solid-xl"
            $background={["bg-primary", "bg-decorative1-very-subdued"]}
          >
            {bottomNavSlot}
          </StickyFooter>
        )}
      </OakFlex>
    </StyledLayoutBox>
  );
};
