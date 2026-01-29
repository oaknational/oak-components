import React, { ComponentPropsWithoutRef, ElementType } from "react";
import styled, { css } from "styled-components";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakBox } from "@/components/layout-and-structure/OakBox";
import { parseColor } from "@/styles/helpers/parseColor";
import { OakRoundIcon } from "@/components/images-and-icons/OakRoundIcon";
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
  width: ${parseSpacing("spacing-40")};
  height: ${parseSpacing("spacing-40")};
  padding: 0;

  background: transparent;

  img {
    filter: ${(props) =>
      parseColorFilter(props.$disabled ? "icon-disabled" : "icon-primary")};
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
      filter: ${parseColorFilter("icon-inverted")};
    }
  }
`;

const StyledPupilJourneyItem = styled(OakFlex)<{ $disabled?: boolean }>`
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
    <OakBox role="listitem">
      <StyledPupilJourneyItem
        className={disabledOrUnavailable ? undefined : "pupil-journey-item"}
        as={disabledOrUnavailable ? "div" : as ?? "a"}
        $gap={["spacing-16", "spacing-32"]}
        $alignItems="center"
        $justifyContent={"space-between"}
        $flexWrap={"wrap"}
        $background={unavailable ? "bg-neutral" : "bg-primary"}
        $pa={["spacing-20", "spacing-24"]}
        $borderRadius="border-radius-m"
        $ba={unavailable ? "border-solid-m" : "border-solid-none"}
        $borderColor={unavailable ? "border-neutral-lighter" : "transparent"}
        $disabled={disabledOrUnavailable}
        $color="text-primary"
        href={disabledOrUnavailable ? undefined : href}
        onClick={disabledOrUnavailable ? undefined : onClick}
        {...rest}
      >
        <OakFlex $alignItems={"center"} $gap={["spacing-32"]}>
          {" "}
          <OakFlex>
            <OakBox
              $font={["heading-5", "heading-4"]}
              $color={props.unavailable ? "text-subdued" : "text-primary"}
              $textDecoration={"none"}
            >
              {props.index}
            </OakBox>
          </OakFlex>
          <FlexedOakBox>
            <StyledLabel
              $font={["heading-6", "heading-5"]}
              $color={disabledOrUnavailable ? "text-subdued" : "text-primary"}
            >
              {props.title}
            </StyledLabel>
          </FlexedOakBox>
        </OakFlex>

        <OakFlex
          $alignItems={"center"}
          $gap={"spacing-12"}
          $flexBasis={"auto"}
          $flexGrow={1}
          $justifyContent={"flex-end"}
        >
          {props.numberOfLessons !== undefined && !props.unavailable && (
            <StyledLabel
              $font={"heading-7"}
              $color={disabledOrUnavailable ? "text-subdued" : "text-primary"}
            >
              {props.numberOfLessons} lessons
            </StyledLabel>
          )}
          {props.unavailable && (
            <StyledLabel
              $font={"heading-7"}
              $color={disabledOrUnavailable ? "text-subdued" : "text-primary"}
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
      </StyledPupilJourneyItem>
    </OakBox>
  );
};
