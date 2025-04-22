import React, { MutableRefObject } from "react";
import styled, { css } from "styled-components";

import {
  OakFlex,
  OakP,
  OakHeading,
  OakLI,
  OakGrid,
  OakGridArea,
  OakBox,
  OakIcon,
} from "@/components/atoms";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { OakSmallTertiaryInvertedButton } from "@/components/molecules";

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
  onSave?: () => void;
  isSaved?: boolean;
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
    onSave,
    isSaved,
    firstItemRef,
    ...rest
  } = props;

  return (
    <OakLI $listStyle={"none"} $width={"100%"}>
      {/* Desktop layout */}
      <StyledUnitListItem
        $alignItems={"center"}
        $background={unavailable ? "bg-neutral" : "bg-primary"}
        $borderRadius="border-radius-m"
        $disabled={unavailable}
        $pr={onSave ? "inner-padding-s" : "inner-padding-none"}
        $width="100%"
        $display={["none", "flex"]}
        $gap="space-between-m2"
        {...rest}
      >
        <OakGrid
          as="a"
          href={unavailable ? undefined : href}
          ref={firstItemRef}
          onClick={unavailable ? undefined : onClick}
          $width="100%"
          role="link"
        >
          <OakGridArea $colStart={1} $colSpan={1}>
            <StyledOakIndexBox
              $background={
                unavailable
                  ? "bg-neutral-stronger"
                  : isLegacy
                    ? "lavender50"
                    : "lavender"
              }
              $justifyContent={"center"}
              $alignItems={"center"}
              $height="100%"
              $width="all-spacing-11"
            >
              <OakHeading
                tag="h3"
                $font={"heading-5"}
                $color={unavailable ? "text-disabled" : "text-primary"}
              >
                {index}
              </OakHeading>
            </StyledOakIndexBox>
          </OakGridArea>
          <OakGridArea
            $colSpan={7}
            $colStart={2}
            $pa="inner-padding-l"
            $justifyContent={"center"}
          >
            <OakP
              $font={"heading-7"}
              $color={unavailable ? "text-disabled" : "text-primary"}
            >
              {props.title}
            </OakP>
          </OakGridArea>
          <OakGridArea
            $colSpan={2}
            $colStart={9}
            $pv="inner-padding-l"
            $justifyContent={"center"}
            $alignItems="end"
          >
            <OakP
              $font={"heading-light-7"}
              $color={unavailable ? "text-disabled" : "text-primary"}
            >
              {props.yearTitle}
            </OakP>
          </OakGridArea>
          <OakGridArea
            $colSpan={2}
            $colStart={11}
            $pv="inner-padding-l"
            $alignItems="end"
            $justifyContent="center"
          >
            <OakFlex
              $font={"heading-light-7"}
              $color={unavailable ? "text-disabled" : "text-primary"}
              $alignItems="center"
              $justifyContent="center"
            >
              {lessonCount}
              {!onSave && (
                <OakIcon
                  iconName="chevron-right"
                  iconWidth="all-spacing-7"
                  $colorFilter={unavailable ? "text-disabled" : "text-primary"}
                />
              )}
            </OakFlex>
          </OakGridArea>
        </OakGrid>
        {onSave && (
          <OakSmallTertiaryInvertedButton
            iconName={isSaved ? "bookmark-filled" : "bookmark-outlined"}
            isTrailingIcon
            disabled={unavailable}
            onClick={onSave}
            width="all-spacing-15"
            $justifyContent="end"
          >
            {isSaved ? "Saved" : "Save"}
          </OakSmallTertiaryInvertedButton>
        )}
      </StyledUnitListItem>
      {/* Mobile layout */}
      <StyledUnitListItem
        $background={unavailable ? "bg-neutral" : "bg-primary"}
        $borderRadius="border-radius-m"
        $disabled={unavailable}
        $display={["flex", "none"]}
        $width="100%"
        $pa="inner-padding-m"
        {...rest}
      >
        <OakFlex $flexDirection="column" $gap="space-between-s" $width="100%">
          <OakFlex
            $gap="space-between-s"
            as="a"
            href={unavailable ? undefined : href}
            role="link"
          >
            <OakFlex
              $background={
                unavailable
                  ? "bg-neutral-stronger"
                  : isLegacy
                    ? "lavender50"
                    : "lavender"
              }
              $justifyContent={"center"}
              $alignItems={"center"}
              $borderRadius="border-radius-m"
              $width="all-spacing-8"
              $height="all-spacing-8"
            >
              <OakHeading
                tag="h3"
                $font="heading-5"
                $color={unavailable ? "text-disabled" : "text-primary"}
              >
                {index}
              </OakHeading>
            </OakFlex>
            <OakBox $width="100%">
              <OakP
                $font="heading-7"
                $color={unavailable ? "text-disabled" : "text-primary"}
              >
                {props.title}
              </OakP>
            </OakBox>
          </OakFlex>
          <OakFlex $justifyContent="space-between" $alignItems="center">
            <OakP
              $font={"heading-light-7"}
              $color={unavailable ? "text-disabled" : "text-primary"}
            >
              {props.yearTitle}
            </OakP>
            <OakP
              $font={"heading-light-7"}
              $color={unavailable ? "text-disabled" : "text-primary"}
            >
              {lessonCount}
            </OakP>
            {onSave && (
              <OakSmallTertiaryInvertedButton
                iconName={isSaved ? "bookmark-filled" : "bookmark-outlined"}
                isTrailingIcon
                disabled={unavailable}
                onClick={onSave}
              >
                {isSaved ? "Saved" : "Save"}
              </OakSmallTertiaryInvertedButton>
            )}
          </OakFlex>
        </OakFlex>
      </StyledUnitListItem>
    </OakLI>
  );
};
