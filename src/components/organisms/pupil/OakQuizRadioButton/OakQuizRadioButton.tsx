import React, { MouseEventHandler, useContext } from "react";
import styled, { css } from "styled-components";

import { OakBox, OakFlex, OakIcon } from "@/components/atoms";
import {
  OakRadioButton,
  OakRadioButtonProps,
} from "@/components/molecules/OakRadioButton/OakRadioButton";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { parseBorder } from "@/styles/helpers/parseBorder";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { RadioContext } from "@/components/molecules/OakRadioGroup/OakRadioGroup";
import { OakUiRoleToken } from "@/styles";

export type OakQuizRadioButtonProps = OakRadioButtonProps & {
  /**
   * Present the element with answer feedback
   */
  feedback?: "correct" | "incorrect" | null;
  /**
   * An image to display above the label
   */
  image?: JSX.Element;
  /**
   * Give the field a highlight to draw attention to it
   */
  isHighlighted?: boolean;
};

type StyledOakFlexProps = {
  $disabled: boolean;
  $checked: boolean;
  $outlineColor?: OakUiRoleToken;
};

const StyledOakFlex = styled(OakFlex)<StyledOakFlexProps>`
  &:not(:focus-within) {
    ${(props) =>
      !!props.$outlineColor &&
      css`
        outline: ${parseBorder("border-solid-xl")}
          ${parseColor(props.$outlineColor)};
      `}
  }

  &:hover {
    cursor: ${(props) => (props.$disabled ? "default" : "pointer")};
  }

  &:focus-within {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }

  ${(props) =>
    !props.$disabled &&
    css`
      &:hover {
        background-color: ${parseColor("bg-decorative1-subdued")};
        text-decoration: underline;
      }
    `}

  ${(props) =>
    !props.$disabled &&
    !props.$checked &&
    css`
      &:hover:not(:focus-within)::after {
        pointer-events: none;
        content: "";
        position: absolute;
        inset: 0;
        border-radius: ${parseBorderRadius("border-radius-m2")};
        border-bottom: ${parseBorder("border-solid-l")} ${parseColor("grey60")};
      }
    `}
`;

/**
 * A radio button representing the options in a multiple choice question.
 *
 * Use with `OakRadioGroup` to create a group of radio buttons.
 */
export const OakQuizRadioButton = (props: OakQuizRadioButtonProps) => {
  const { value, feedback, image, disabled, isHighlighted, label, ...rest } =
    props;
  const showFeedback = !!feedback;
  // Give the input focus when the entire component is clicked
  const handleOnClick: MouseEventHandler<HTMLElement> = (event) => {
    event.currentTarget.querySelector("input")?.click();
  };
  const checked = useContext(RadioContext).currentValue === value;
  let outlineColor: OakUiRoleToken | undefined;
  let backgroundColor: OakUiRoleToken = "bg-primary";
  let feedbackIcon: "tick" | "cross" | null = null;
  let feedbackAltText: string | undefined;
  let radioBackground: OakUiRoleToken = "bg-primary";

  switch (true) {
    case disabled && !showFeedback:
      backgroundColor = "bg-neutral-stronger";
      break;
    case feedback === "correct" && checked:
      outlineColor = "border-success";
      backgroundColor = "bg-correct";
      feedbackIcon = "tick";
      feedbackAltText = "Correct";
      break;
    case feedback === "incorrect" && checked:
      outlineColor = "border-error";
      backgroundColor = "bg-incorrect";
      feedbackIcon = "cross";
      feedbackAltText = "Incorrect";
      break;
    case feedback === "incorrect" && !checked:
      feedbackIcon = "tick";
      feedbackAltText = "Unselected correct choice";
      break;
    case isHighlighted:
      radioBackground = "bg-decorative5-main";
      outlineColor = "border-decorative5-stronger";
      break;
    case checked && !disabled:
      outlineColor = "border-primary";
      break;
  }

  return (
    <StyledOakFlex
      $pa="inner-padding-l"
      $borderRadius="border-radius-m2"
      $justifyContent="space-between"
      $position="relative"
      $alignContent="center"
      onClick={handleOnClick}
      $disabled={disabled || showFeedback}
      $checked={checked}
      $outlineColor={outlineColor}
      $background={backgroundColor}
    >
      <OakRadioButton
        value={value}
        disabled={disabled || showFeedback}
        $labelGap="space-between-s"
        disableFocusRing
        radioInnerSize="all-spacing-6"
        radioOuterSize="all-spacing-7"
        radioBackground={radioBackground}
        checkedRadioBorderWidth="border-solid-l"
        label={
          image ? (
            <OakFlex
              $flexDirection="column"
              $minWidth="all-spacing-20"
              $gap="space-between-s"
            >
              <OakBox>{image}</OakBox>
              {label}
            </OakFlex>
          ) : (
            label
          )
        }
        {...rest}
      />
      {showFeedback && feedbackIcon && (
        <OakFlex $alignSelf="flex-end">
          <OakIcon
            iconName={feedbackIcon}
            $colorFilter={
              feedbackIcon === "tick" ? "icon-success" : "icon-error"
            }
            alt={feedbackAltText}
          />
        </OakFlex>
      )}
    </StyledOakFlex>
  );
};
