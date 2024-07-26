import React, {
  ComponentPropsWithoutRef,
  ElementType,
  MutableRefObject,
} from "react";
import styled, { css } from "styled-components";

import { OakFlex, OakBox, OakP, OakHeading, OakSpan } from "@/components/atoms";
import { parseColor } from "@/styles/helpers/parseColor";
import { OakSecondaryLink } from "@/components/molecules";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

const StyledLessonLink = styled(OakSecondaryLink)`
  text-decoration: none;
`;

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

export type OakUnitListItemProps<C extends ElementType> = {
  as?: C;
  disabled?: boolean;
  unavailable?: boolean;
  index?: number;
  title: string;
  yearTitle?: string | null;
  lessonCount: number | null;
  isLegacy: boolean;
  href: string;
  firstItemRef?: MutableRefObject<HTMLAnchorElement | null> | null | undefined;
} & ComponentPropsWithoutRef<C>;

/**
 *
 * OakUnitsListItem component used as links for unit cards
 */
export const OakUnitListItem = <C extends ElementType>(
  props: OakUnitListItemProps<C>,
) => {
  const {
    as,
    lessonSectionName,
    lessonCount,
    progress,
    disabled,
    href,
    unavailable,
    onClick,
    index,
    isLegacy,
    firstItemRef,
    ...rest
  } = props;

  const disabledOrUnavailable = disabled || unavailable;

  return (
    <OakBox $width={"100%"} role="listitem">
      <StyledUnitListItem
        $alignItems={"center"}
        $background={unavailable ? "bg-neutral" : "bg-primary"}
        $borderRadius="border-radius-m"
        $disabled={disabledOrUnavailable}
        href={disabledOrUnavailable ? undefined : href}
        onClick={disabledOrUnavailable ? undefined : onClick}
        ref={firstItemRef}
        as={"a"}
        {...rest}
      >
        {index && (
          <StyledOakIndexBox
            $alignSelf={"stretch"}
            $background={
              disabledOrUnavailable
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
              $color={disabledOrUnavailable ? "text-disabled" : "text-primary"}
            >
              {index}
            </OakHeading>
          </StyledOakIndexBox>
        )}
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
              $color={disabledOrUnavailable ? "text-disabled" : "text-primary"}
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
                $color={
                  disabledOrUnavailable ? "text-disabled" : "text-primary"
                }
              >
                {props.yearTitle}
              </OakP>
            </OakFlex>
            <OakFlex>
              <StyledLessonLink
                isTrailingIcon
                iconName="chevron-right"
                disabled={disabledOrUnavailable}
              >
                <OakSpan
                  $font={"heading-light-7"}
                  $color={
                    disabledOrUnavailable ? "text-disabled" : "text-primary"
                  }
                >
                  {lessonCount} Lessons
                </OakSpan>
              </StyledLessonLink>
            </OakFlex>
          </LessonDetailsWrapper>
        </OakFlex>
      </StyledUnitListItem>
    </OakBox>
  );
};
