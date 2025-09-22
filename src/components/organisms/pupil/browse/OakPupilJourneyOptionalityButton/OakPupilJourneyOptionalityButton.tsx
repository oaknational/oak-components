import React, { ComponentPropsWithoutRef, ElementType } from "react";
import styled, { css } from "styled-components";

import { OakBox, OakFlex } from "@/components/atoms";
import { parseColor } from "@/styles/helpers/parseColor";
import {
  OakCardWithHandDrawnBorder,
  OakRoundIcon,
} from "@/components/molecules";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

type OakPupilJourneyOptionalityButtonProps<C extends ElementType> = {
  /**
   * Disable the section preventing navigation to it.
   */
  disabled?: boolean;
  /**
   * shows that a section is unavailable
   */
  unavailable?: boolean;
  title: string;
  numberOfLessons: number;
} & ComponentPropsWithoutRef<C>;

const StyledLabel = styled(OakBox)``;

const StyledPupilOptionalityListButton = styled(OakFlex)<{
  $disabled?: boolean;
}>`
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
        }
      }

      &:active {
        box-shadow: ${parseDropShadow("drop-shadow-lemon")},
          ${parseDropShadow("drop-shadow-grey")};
      }
    `}
`;

/**
 * Button for units with optionality it is only used as the child of the PupilJourneyOptionailityitem component
 */

export const OakPupilJourneyOptionalityButton = <C extends ElementType = "a">(
  props: OakPupilJourneyOptionalityButtonProps<C>,
) => {
  const {
    lessonSectionName,
    progress,
    disabled,
    href,
    unavailable,
    onClick,
    numberOfLessons,
    ...rest
  } = props;

  const disabledOrUnavailable = disabled || unavailable;
  return (
    <StyledPupilOptionalityListButton
      as={disabledOrUnavailable ? "div" : "a"}
      $flexGrow={1}
      $background={unavailable ? "bg-neutral" : "bg-primary"}
      $disabled={disabledOrUnavailable}
      $color="text-primary"
      href={disabledOrUnavailable ? undefined : href}
      onClick={disabledOrUnavailable ? undefined : onClick}
      {...rest}
    >
      <OakCardWithHandDrawnBorder
        fill={unavailable ? "border-neutral-lighter" : "black"}
        stroke={unavailable ? "border-neutral-lighter" : "black"}
        strokeWidth={"border-solid-s"}
      >
        <OakFlex $flexDirection={"column"} $gap={"spacing-8"}>
          <StyledLabel
            $font={["heading-7", "heading-6"]}
            $color={disabledOrUnavailable ? "text-subdued" : "text-primary"}
          >
            {props.title}
          </StyledLabel>

          <OakFlex $alignItems={"center"} $gap={"spacing-4"}>
            {!props.unavailable && (
              <>
                <StyledLabel
                  $font={"heading-light-7"}
                  $color={
                    disabledOrUnavailable ? "text-subdued" : "text-primary"
                  }
                >
                  {numberOfLessons} lessons
                </StyledLabel>
                <OakRoundIcon
                  iconName="chevron-right"
                  $width={"spacing-32"}
                  $height={"spacing-32"}
                  $background={"transparent"}
                  $colorFilter={
                    disabledOrUnavailable ? "icon-disabled" : "icon-inverted"
                  }
                />
              </>
            )}
            {props.unavailable && (
              <StyledLabel
                $font={"heading-7"}
                $color={disabledOrUnavailable ? "text-subdued" : "text-primary"}
              >
                Unavailable
              </StyledLabel>
            )}
          </OakFlex>
        </OakFlex>
      </OakCardWithHandDrawnBorder>
    </StyledPupilOptionalityListButton>
  );
};
