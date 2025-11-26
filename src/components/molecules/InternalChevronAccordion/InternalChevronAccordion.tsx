import React, { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { OakHandDrawnFocusUnderline } from "@/components/molecules/OakHandDrawnFocusUnderline";
import {
  OakBoxProps,
  OakFlex,
  OakIcon,
  OakBox,
  oakBoxCss,
} from "@/components/atoms";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import {
  InternalAccordionButton,
  InternalAccordionContent,
} from "@/components/atoms/InternalAccordion";
import useAccordionContext from "@/components/atoms/InternalAccordion/useAccordionContext";
import InternalAccordionProvider from "@/components/atoms/InternalAccordion/InternalAccordionProvider";
import { InternalStyledSvgProps } from "@/components/atoms/InternalStyledSvg";
import { FlexStyleProps, flexStyle } from "@/styles/utils/flexStyle";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { parseOpacity } from "@/styles/helpers/parseOpacity";
import { ColorStyleProps } from "@/styles/utils/colorStyle";

export type InternalChevronAccordionProps = {
  /**
   * The header of the accordion
   */
  header: ReactNode;
  /**
   * Whether the accordion should be open initially
   */
  initialOpen?: boolean;
  /**
   * The content of the accordion
   */
  children: ReactNode;
  /**
   * Optional subheading to display above the fold
   */
  subheading?: ReactNode;
  /**
   * The id of the accordion
   */
  id: string;
} & FlexStyleProps &
  OakBoxProps &
  ColorStyleProps;

const StyledAccordionUnderline = styled(
  OakHandDrawnFocusUnderline,
)<InternalStyledSvgProps>`
  position: absolute;
  width: 100%;
  bottom: -${parseSpacing("spacing-4")};
`;

export const StyledAccordionButton = styled(
  InternalAccordionButton,
)<FlexStyleProps>`
  ${flexStyle}
  ${oakBoxCss}
  position: relative;
  &:hover {
    text-decoration: underline;
  }
  &:focus-visible {
    .shadow {
      box-shadow:
        ${parseDropShadow("drop-shadow-centered-lemon")},
        ${parseDropShadow("drop-shadow-centered-grey")};
    }
  }
`;

const StyledContainer = styled(OakFlex)`
  ${StyledAccordionUnderline} {
    visibility: hidden;
  }
  ${StyledAccordionButton}:focus-visible ~ ${StyledAccordionUnderline} {
    visibility: visible;
  }
  ${oakBoxCss}
  ${flexStyle}
`;

type BottomBoxShadowProps = {
  shouldDisplayShadow: boolean;
};

export const BottomBoxShadow = styled(OakBox)<BottomBoxShadowProps>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  opacity: ${(props) =>
    props.shouldDisplayShadow
      ? parseOpacity("opaque")
      : parseOpacity("transparent")};
  z-index: 100;
  -webkit-box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);
  -moz-box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);
  box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);
  padding: 2px;
`;

/**
 * An accordion component that can be used to show/hide content
 */

const Accordion = ({
  header,
  children,
  id,
  subheading,
  ...styleProps
}: InternalChevronAccordionProps) => {
  const [shouldDisplayShadow, setShouldDisplayShadow] = useState(false);
  const scrollBox = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollHeight = scrollBox.current?.scrollHeight;
    const clientHeight = scrollBox.current?.clientHeight;

    if (scrollHeight && clientHeight && scrollHeight > clientHeight) {
      setShouldDisplayShadow(true);
    } else {
      setShouldDisplayShadow(false);
    }
  }, []);

  const handleScroll = () => {
    const scrollHeight = scrollBox.current?.scrollHeight;
    const scrollTop = scrollBox.current?.scrollTop;
    const clientHeight = scrollBox.current?.clientHeight;

    if (scrollHeight && scrollTop) {
      const bottom = scrollHeight - scrollTop === clientHeight;

      if (bottom) {
        setShouldDisplayShadow(false);
      } else {
        setShouldDisplayShadow(true);
      }
    }
  };

  const { isOpen } = useAccordionContext();

  return (
    <StyledContainer
      $position={"relative"}
      $pv={"spacing-12"}
      $flexDirection={"column"}
      $gap={"spacing-4"}
      {...styleProps}
    >
      <StyledAccordionButton
        id={id}
        $width={"100%"}
        $justifyContent={"space-between"}
        $alignItems={"center"}
      >
        {header}

        <OakBox $position={"relative"} $mr={"spacing-12"}>
          <OakBox
            className="shadow"
            $position={"absolute"}
            $borderRadius={"border-radius-s"}
            $width={"100%"}
            $height={"100%"}
            $top="spacing-0"
          />
          <OakIcon
            iconName="chevron-down"
            $width="spacing-32"
            $height="spacing-32"
            alt="An arrow to indicate whether the item is open or closed"
            style={{
              transform: isOpen ? "rotate(180deg)" : "none",
              transition: "all 0.3s ease 0s",
            }}
          />
        </OakBox>
      </StyledAccordionButton>
      {!isOpen && subheading}
      <OakBox
        ref={scrollBox}
        $position={"relative"}
        $overflow={"auto"}
        onScroll={handleScroll}
        data-testid={"scrollable-content"}
      >
        <InternalAccordionContent aria-labelledby={id}>
          {children}
        </InternalAccordionContent>
      </OakBox>
      <StyledAccordionUnderline $fill={"border-decorative5-stronger"} />
      {isOpen && (
        <BottomBoxShadow
          shouldDisplayShadow={shouldDisplayShadow}
          data-testid="bottom-box-shadow"
          $pointerEvents="none"
        />
      )}
    </StyledContainer>
  );
};

/**
 * InternalChevronAccordion has a chevron icon that rotates when the accordion is open
 */

export const InternalChevronAccordion = ({
  initialOpen = false,
  ...props
}: InternalChevronAccordionProps) => {
  return (
    <InternalAccordionProvider isInitialOpen={initialOpen}>
      <Accordion initialOpen {...props} />
    </InternalAccordionProvider>
  );
};
