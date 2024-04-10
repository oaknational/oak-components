import React, { ComponentPropsWithoutRef, ElementType } from "react";
import styled, { css } from "styled-components";

import { OakBox, OakFlex, OakLabel } from "@/components/atoms";
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

  ${(props) => props.$disabled && "cursor: default"}

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
  const { as, lessonSectionName, progress, disabled, href, onClick, ...rest } =
    props;

  return (
    <StyledLessonNavItem
      as={disabled ? "div" : as ?? "a"}
      $gap="space-between-m2"
      $alignItems="center"
      $justifyContent={"flex-end"}
      $flexWrap={"wrap"}
      $background={"bg-primary"}
      $pa="inner-padding-xl"
      $borderRadius="border-radius-m"
      $ba={"border-solid-none"}
      $disabled={disabled}
      $color="text-primary"
      href={disabled ? undefined : href}
      onClick={disabled ? undefined : onClick}
      {...rest}
    >
      <OakFlex $justifyContent="center">
        <OakLabel
          $font={"heading-4"}
          $color={"text-primary"}
          $textDecoration={"none"}
        >
          {props.index}
        </OakLabel>
      </OakFlex>
      <FlexedOakBox>
        <StyledLabel
          $font={["heading-6", "heading-5"]}
          $color={disabled ? "text-disabled" : "text-primary"}
          $whiteSpace={"nowrap"}
        >
          {props.title}
        </StyledLabel>
      </FlexedOakBox>
      <OakFlex $alignItems={"center"} $gap={"space-between-xs"}>
        {props.numberOfLessons && (
          <StyledLabel
            $font={"heading-7"}
            $color={disabled ? "text-disabled" : "text-primary"}
          >
            {props.numberOfLessons} lessons
          </StyledLabel>
        )}
        <StyledRoundIcon iconName="chevron-right" $disabled={disabled} />
      </OakFlex>
    </StyledLessonNavItem>
  );
};

// function renderQuestionCounter(props: SectionProps) {
//   if (props.progress !== "complete") {
//     return null;
//   }

//   /**
//    * The large answer counter is only rendered when on a non-mobile screen
//    */
//   switch (props.lessonSectionName) {
//     case "exit-quiz":
//     case "starter-quiz":
//       return (
//         <OakBox $display={["none", "block"]} $mr="space-between-m">
//           <OakSpan $font="heading-4">{props.grade}</OakSpan>
//           <OakSpan $font="heading-6">&nbsp;/&nbsp;{props.numQuestions}</OakSpan>
//         </OakBox>
//       );
//     default:
//       return null;
//   }
// }
