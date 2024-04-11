import React, { ComponentPropsWithoutRef, ElementType } from "react";
import styled, { css } from "styled-components";

import { OakBox, OakFlex } from "@/components/atoms";
import { parseColor } from "@/styles/helpers/parseColor";
import { OakRoundIcon } from "@/components/molecules";
import { parseColorFilter } from "@/styles/helpers/parseColorFilter";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

type OakPupilJourneyListItemProps<C extends ElementType> = {
  as?: C;
  /**
   * Disable the section preventing navigation to it.
   */
  disabled?: boolean;
  /**
   * shows that a section is unavailable
   */
  unavailable?: boolean;
  index: number;
  title: string;
  numberOfLessons?: number;
} & ComponentPropsWithoutRef<C>;

const StyledLabel = styled(OakBox)``;

const StyledRoundIcon = styled(OakRoundIcon)<{
  $disabled?: boolean;
}>`
  width: ${parseSpacing("all-spacing-8")};
  height: ${parseSpacing("all-spacing-8")};
  padding: 0;

  background: transparent;

  img {
    filter: ${(props) =>
      parseColorFilter(props.$disabled ? "icon-disabled" : "icon-inverted")};
  }
`;

const activeIconStyles = css`
  ${StyledRoundIcon} {
    box-shadow: ${parseDropShadow("drop-shadow-lemon")},
      ${parseDropShadow("drop-shadow-grey")};
  }
`;

const hoverIconStyles = css`
  ${StyledRoundIcon} {
    background: ${parseColor("bg-btn-primary")};

    img {
      filter: ${parseColorFilter("icon-main")};
    }
  }
`;

const StyledLessonNavItem = styled(OakFlex)<{ $disabled?: boolean }>`
  outline: none;
  text-align: initial;

  &:focus-visible {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }

  ${(props) => props.$disabled && "cursor: not-allowed"}

  ${(props) =>
    !props.$disabled &&
    css`
      cursor: pointer;

      /* Don't apply hover styles on touch devices */
      @media (hover: hover) {
        &:hover {
          background: ${parseColor("bg-decorative1-subdued")};
          ${StyledLabel} {
            text-decoration: underline;
          }

          ${hoverIconStyles}
        }
      }

      &:active {
        box-shadow: ${parseDropShadow("drop-shadow-lemon")},
          ${parseDropShadow("drop-shadow-grey")};
        ${activeIconStyles}
        ${hoverIconStyles}
      }
    `}
`;

const FlexedOakBox = styled(OakBox)`
  flex: 1;
`;

/**
 * Enables navigation to the given section of a lesson as well as displaying current progress
 */
export const OakPupilJourneyListItem = <C extends ElementType = "a">(
  props: OakPupilJourneyListItemProps<C>,
) => {
  const {
    as,
    lessonSectionName,
    progress,
    disabled,
    href,
    unavailable,
    onClick,
    ...rest
  } = props;

  const disabledOrUnavailable = disabled || unavailable;
  return (
    <StyledLessonNavItem
      as={disabledOrUnavailable ? "div" : as ?? "a"}
      $gap={["space-between-s", "space-between-m2"]}
      $alignItems="center"
      $justifyContent={"space-between"}
      $flexWrap={"wrap"}
      $background={unavailable ? "bg-neutral" : "bg-primary"}
      $pa={["inner-padding-l", "inner-padding-xl"]}
      $borderRadius="border-radius-m"
      $ba={unavailable ? "border-solid-m" : "border-solid-none"}
      $borderColor={unavailable ? "border-neutral-lighter" : "transparent"}
      $disabled={disabledOrUnavailable}
      $color="text-primary"
      href={disabledOrUnavailable ? undefined : href}
      onClick={disabledOrUnavailable ? undefined : onClick}
      {...rest}
    >
      <OakFlex $alignItems={"baseline"} $gap={["space-between-m2"]}>
        {" "}
        <OakFlex>
          <OakBox
            $font={["heading-5", "heading-4"]}
            $color={props.unavailable ? "text-disabled" : "text-primary"}
            $textDecoration={"none"}
          >
            {props.index}
          </OakBox>
        </OakFlex>
        <FlexedOakBox>
          <StyledLabel
            $font={["heading-6", "heading-5"]}
            $color={disabledOrUnavailable ? "text-disabled" : "text-primary"}
          >
            {props.title}
          </StyledLabel>
        </FlexedOakBox>
      </OakFlex>

      <OakFlex
        $alignItems={"center"}
        $gap={"space-between-xs"}
        $flexBasis={"auto"}
        $flexGrow={1}
        $justifyContent={"flex-end"}
      >
        {props.numberOfLessons && !props.unavailable && (
          <StyledLabel
            $font={"heading-7"}
            $color={disabledOrUnavailable ? "text-disabled" : "text-primary"}
          >
            {props.numberOfLessons} lessons
          </StyledLabel>
        )}
        {props.unavailable && (
          <StyledLabel
            $font={"heading-7"}
            $color={disabledOrUnavailable ? "text-disabled" : "text-primary"}
          >
            Unavailable
          </StyledLabel>
        )}
        {!props.unavailable && (
          <StyledRoundIcon
            iconName="chevron-right"
            $disabled={disabledOrUnavailable}
          />
        )}
      </OakFlex>
    </StyledLessonNavItem>
  );
};
