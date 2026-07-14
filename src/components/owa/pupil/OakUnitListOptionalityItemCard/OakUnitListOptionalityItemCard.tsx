import React, { MutableRefObject } from "react";
import styled, { css } from "styled-components";

import { OakIcon } from "@/components/images-and-icons/OakIcon";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakSpan } from "@/components/typography/OakSpan";
import { OakHeading } from "@/components/typography/OakHeading";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

const StyledOptionalityListItem = styled(OakFlex)<{ $disabled?: boolean }>`
  outline: none;
  text-align: initial;
  animation-timing-function: ease-out;
  transition-duration: 300ms;

  &:hover .hover-text {
    text-decoration: underline;
  }

  &:focus-visible {
    background: ${parseColor("bg-primary")};
    box-shadow:
      ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }
  ${(props) =>
    !props.$disabled &&
    css`  
      /* Don't apply hover styles on touch devices */
      @media (hover: hover) {
    &:hover {
      ${StyledOakIndexBox} {
        background: ${parseColor("bg-decorative3-very-subdued")};
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
      background: ${parseColor("bg-decorative3-very-subdued")};
    }
  }
`;

export type OakUnitListOptionalityItemCardProps = {
  unavailable?: boolean;
  title: string;
  lessonCount: string | null;
  href: string;
  slug: string;
  firstItemRef?: MutableRefObject<HTMLAnchorElement | null> | null;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
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
    box-shadow:
      ${parseDropShadow("drop-shadow-centered-lemon")},
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
  const { lessonCount, href, unavailable, firstItemRef, onClick, ...rest } =
    props;

  return (
    <OakFlex $display={"flex"} $flexGrow={1}>
      <StyledOptionalityListItem
        as={unavailable ? "div" : "a"}
        href={unavailable ? undefined : href}
        onClick={unavailable ? undefined : onClick}
        ref={unavailable ? undefined : (firstItemRef ?? undefined)}
        $ph="spacing-12"
        $pv="spacing-16"
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
            $mb={"spacing-12"}
          >
            <span className="hover-text">{props.title}</span>
          </HeadingWithFocus>
          <OakFlex $justifyContent="flex-end" $ph="spacing-4">
            <OakFlex $alignItems={"center"} $justifyContent={"flex-end"}>
              <OakSpan
                $color={unavailable ? "text-disabled" : "text-primary"}
                $font={"heading-light-7"}
                className="hover-text"
              >
                {lessonCount}
              </OakSpan>

              <OakIcon
                iconName="chevron-right"
                $colorFilter={unavailable ? "text-disabled" : "text-primary"}
              />
            </OakFlex>
          </OakFlex>
        </OakFlex>
      </StyledOptionalityListItem>
    </OakFlex>
  );
};
