import React, { MutableRefObject } from "react";
import styled, { css } from "styled-components";

import { OakFlex, OakSpan, OakHeading, OakIcon } from "@/components/atoms";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

const StyledOptionalityListItem = styled(OakFlex)<{ $disabled?: boolean }>`
  outline: none;
  text-align: initial;
  animation-timing-function: ease-out;
  transition-duration: 300ms;

  &:focus-visible {
    background: ${parseColor("white")};
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
  lessonCount: number | null;
  href: string;
  firstItemRef?: MutableRefObject<HTMLAnchorElement | null> | null | undefined;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

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
        $pa={"inner-padding-m"}
        $background={"bg-decorative3-very-subdued"}
        $borderRadius="border-radius-m"
        $borderColor={"border-decorative3"}
        $ba="border-solid-m"
        $disabled={unavailable}
        href={unavailable ? undefined : href}
        onClick={unavailable ? undefined : onClick}
        ref={firstItemRef}
        as={"a"}
        $flexGrow={1}
        {...rest}
      >
        <OakFlex
          $justifyContent={"space-between"}
          $flexGrow={1}
          $flexDirection={"column"}
        >
          <OakHeading
            $font={"heading-7"}
            $color={unavailable ? "text-disabled" : "text-primary"}
            tag={"h3"}
            $mb={"space-between-xs"}
          >
            {props.title}
          </OakHeading>
          <OakFlex $alignItems={"center"} $justifyContent={"flex-end"}>
            <OakSpan
              $color={unavailable ? "text-disabled" : "text-primary"}
              $font={"heading-light-7"}
            >
              {`${lessonCount} lessons`}
            </OakSpan>
            <OakIcon
              iconName="chevron-right"
              $colorFilter={unavailable ? "text-disabled" : "text-primary"}
            />
          </OakFlex>
        </OakFlex>
      </StyledOptionalityListItem>
    </OakFlex>
  );
};
