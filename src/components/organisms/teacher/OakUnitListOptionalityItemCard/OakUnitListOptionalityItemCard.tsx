import React, { MutableRefObject } from "react";
import styled, { css } from "styled-components";

import { OakFlex, OakSpan, OakHeading, OakIcon } from "@/components/atoms";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { OakSmallTertiaryInvertedButton } from "@/components/molecules";

const StyledOptionalityListItem = styled(OakFlex)<{ $disabled?: boolean }>`
  outline: none;
  text-align: initial;
  animation-timing-function: ease-out;
  transition-duration: 300ms;

  &:hover .hover-text {
    text-decoration: underline;
  }

  &:focus-visible {
    background: ${parseColor("white")};
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }
  ${(props) =>
    !props.$disabled &&
    css`  
      /* Don't apply hover styles on touch devices */
      @media (hover: hover) {
    &:hover {
      ${StyledOakIndexBox} {
        background: ${parseColor("lavender110")};
      }
      background: ${parseColor("bg-decorative3-main")};
    }
  }
      }
    `}

  ${(props) =>
    props.$disabled &&
    css`
      cursor: not-allowed;
      background: ${parseColor("bg-neutral")};
      border-color: ${parseColor("border-neutral-lighter")};
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

export type OakUnitListOptionalityItemCardProps = {
  unavailable?: boolean;
  title: string;
  lessonCount: string | null;
  href: string;
  slug: string;
  firstItemRef?: MutableRefObject<HTMLAnchorElement | null> | null | undefined;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onSave?: (unitSlug: string) => void;
  isSaved?: boolean;
};

const HeadingWithFocus = styled(OakHeading)`
  animation-timing-function: ease-out;
  transition-duration: 300ms;
  outline: none;
  border-radius: 6px;
  padding: 4px;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }
`;

/**
 *
 * OakUnitsListItem component used as links for unit cards
 */
export const OakUnitListOptionalityItemCard = (
  props: OakUnitListOptionalityItemCardProps,
) => {
  const {
    lessonCount,
    href,
    unavailable,
    firstItemRef,
    onClick,
    isSaved,
    onSave,
    ...rest
  } = props;

  return (
    <OakFlex $display={"flex"} $flexGrow={1}>
      <StyledOptionalityListItem
        $ph="inner-padding-s"
        $pv="inner-padding-m"
        $background={"bg-decorative3-very-subdued"}
        $borderRadius="border-radius-m"
        $borderColor={"border-decorative3"}
        $ba="border-solid-m"
        $disabled={unavailable}
        $flexGrow={1}
        {...rest}
      >
        <OakFlex
          $justifyContent={"space-between"}
          $flexGrow={1}
          $flexDirection={"column"}
        >
          <HeadingWithFocus
            $font={"heading-7"}
            $color={unavailable ? "text-disabled" : "text-primary"}
            tag={"h3"}
            $mb={"space-between-xs"}
            as={onSave ? "a" : "h3"}
            onClick={unavailable ? undefined : onClick}
            href={unavailable ? undefined : href}
            ref={firstItemRef}
            className={onSave ? undefined : "hover-text"}
          >
            {props.title}
          </HeadingWithFocus>
          <OakFlex
            $justifyContent={onSave ? "space-between" : "flex-end"}
            $ph="inner-padding-ssx"
          >
            <OakFlex $alignItems={"center"} $justifyContent={"flex-end"}>
              <OakSpan
                $color={unavailable ? "text-disabled" : "text-primary"}
                $font={"heading-light-7"}
                className={onSave ? undefined : "hover-text"}
              >
                {lessonCount}
              </OakSpan>

              {!onSave && (
                <OakIcon
                  iconName="chevron-right"
                  $colorFilter={unavailable ? "text-disabled" : "text-primary"}
                />
              )}
            </OakFlex>
            {onSave && (
              <OakSmallTertiaryInvertedButton
                iconName={isSaved ? "bookmark-filled" : "bookmark-outlined"}
                isTrailingIcon
                disabled={unavailable}
                onClick={() => onSave(props.slug)}
                aria-label={`${isSaved ? "Unsave" : "Save"} this unit: ${
                  props.title
                } `}
              >
                {isSaved ? "Saved" : "Save"}
              </OakSmallTertiaryInvertedButton>
            )}
          </OakFlex>
        </OakFlex>
      </StyledOptionalityListItem>
    </OakFlex>
  );
};
