import React, { MutableRefObject } from "react";
import styled, { css } from "styled-components";

import {
  OakFlex,
  OakP,
  OakHeading,
  OakSpan,
  OakIcon,
  OakLI,
} from "@/components/atoms";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

const LessonDetailsWrapper = styled(OakFlex)`
  min-width: 260px;

  @media (max-width: 650px) {
    min-width: 100%;
  }

  @media (max-width: 370px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledUnitListItem = styled(OakFlex)<{ $disabled?: boolean }>`
  outline: none;
  text-align: initial;
  animation-timing-function: ease-out;
  transition-duration: 300ms;

  &:focus-visible {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }
  ${(props) =>
    !props.$disabled &&
    css`
      cursor: pointer;

      /* Don't apply hover styles on touch devices */
      @media (hover: hover) {
    &:hover {
      ${StyledOakIndexBox} {
        background: ${parseColor("lavender110")};
      }
      background: ${parseColor("bg-decorative3-subdued")};
    }
  }
      }
    `}

  ${(props) =>
    props.$disabled &&
    css`
      cursor: not-allowed;
      background: ${parseColor("bg-neutral")};
    `}
`;

const StyledOakIndexBox = styled(OakFlex)`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  animation-timing-function: ease-out;
  transition-duration: 300ms;
  @media (hover: hover) {
    &:hover {
      background: ${parseColor("lavender110")};
    }
  }
`;

export type OakUnitListItemProps = {
  unavailable?: boolean;
  index: number;
  title: string;
  yearTitle?: string | null;
  lessonCount: string | null;
  isLegacy: boolean;
  href: string;
  firstItemRef?: MutableRefObject<HTMLAnchorElement | null> | null | undefined;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

/**
 *
 * OakUnitsListItem component used as links for unit cards
 */
export const OakUnitListItem = (props: OakUnitListItemProps) => {
  const {
    lessonCount,
    href,
    unavailable,
    onClick,
    index,
    isLegacy,
    firstItemRef,
    ...rest
  } = props;

  return (
    <OakLI $listStyle={"none"} $width={"100%"}>
      <StyledUnitListItem
        $alignItems={"center"}
        $background={unavailable ? "bg-neutral" : "bg-primary"}
        $borderRadius="border-radius-m"
        $disabled={unavailable}
        href={unavailable ? undefined : href}
        onClick={unavailable ? undefined : onClick}
        ref={firstItemRef}
        as={"a"}
        {...rest}
      >
        <StyledOakIndexBox
          $alignSelf={"stretch"}
          $background={
            unavailable
              ? "bg-neutral-stronger"
              : isLegacy
                ? "lavender50"
                : "lavender"
          }
          $minWidth={"all-spacing-11"}
          $justifyContent={"center"}
          $alignItems={"center"}
        >
          <OakHeading
            tag="h3"
            $font={"heading-5"}
            $color={unavailable ? "text-disabled" : "text-primary"}
          >
            {index}
          </OakHeading>
        </StyledOakIndexBox>
        <OakFlex
          $width={"100%"}
          $height={"100%"}
          $justifyContent={"space-between"}
          $alignItems={"left"}
          $flexDirection={["column", "row"]}
          $pa={["inner-padding-l"]}
          $gap={"space-between-s"}
        >
          <OakFlex $alignItems={["center"]} $maxWidth={["100%"]}>
            <OakP
              $font={"heading-7"}
              $color={unavailable ? "text-disabled" : "text-primary"}
            >
              {props.title}
            </OakP>
          </OakFlex>
          <LessonDetailsWrapper
            $alignItems={["center"]}
            $minWidth={"all-spacing-13"}
            $width={["100%", "auto"]}
            $justifyContent={"space-between"}
            $whiteSpace={"nowrap"}
          >
            <OakFlex $justifyContent={["flex-start", "flex-end"]}>
              <OakP
                $font={"heading-light-7"}
                $color={unavailable ? "text-disabled" : "text-primary"}
              >
                {props.yearTitle}
              </OakP>
            </OakFlex>

            <OakFlex $alignItems={"center"}>
              <OakSpan
                $font={"heading-light-7"}
                $color={unavailable ? "text-disabled" : "text-primary"}
              >
                {lessonCount}
              </OakSpan>
              <OakIcon
                $colorFilter={unavailable ? "text-disabled" : "text-primary"}
                iconName="chevron-right"
              />
            </OakFlex>
          </LessonDetailsWrapper>
        </OakFlex>
      </StyledUnitListItem>
    </OakLI>
  );
};
