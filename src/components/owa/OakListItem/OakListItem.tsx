import React from "react";
import styled, { css } from "styled-components";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakP } from "@/components/typography/OakP";
import { OakHeading } from "@/components/typography/OakHeading";
import { OakLI } from "@/components/typography/OakLI";
import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakSpan } from "@/components/typography/OakSpan";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { OakUiRoleToken } from "@/styles";
import { OakCheckBox } from "@/components/form-elements/OakCheckBox";

const FlexWithFocus = styled(OakFlex)`
  animation-timing-function: ease-out;
  transition-duration: 300ms;
  outline: none;

  &:hover .hover-text {
    text-decoration: underline;
  }

  &:focus-visible {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }
`;

const StyledListItem = styled(OakFlex)<{
  $disabled?: boolean;
  $indexHoverBgColour: OakUiRoleToken;
  $hoverBgColour: OakUiRoleToken;
}>`
  text-align: initial;
  animation-timing-function: ease-out;
  transition-duration: 300ms;

  ${(props) =>
    !props.$disabled &&
    css`
      /* Don't apply hover styles on touch devices */
      @media (hover: hover) {
    &:hover {
      ${StyledOakIndexBox} {
        background: ${parseColor(props.$indexHoverBgColour)};
      }
      background: ${parseColor(props.$hoverBgColour)};
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

const StyledOakIndexBox = styled(OakFlex)<{
  $indexHoverBgColour: OakUiRoleToken;
}>`
  animation-timing-function: ease-out;
  transition-duration: 300ms;
  @media (hover: hover) {
    &:hover {
      ${(props) => css`
        background: ${parseColor(props.$indexHoverBgColour)};
      `}
    }
  }
`;

export type OakListItemProps = {
  unavailable?: boolean;
  index: number;
  title: string;
  isLegacy: boolean;
  firstItemRef?:
    | React.MutableRefObject<HTMLDivElement | null>
    | null
    | undefined;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  middleSlot?: React.ReactNode;
  endSlot?: React.ReactNode;
  hoverBgColour?: OakUiRoleToken;
  indexBgColour?: OakUiRoleToken;
  indexHoverBgColour?: OakUiRoleToken;
  indexLegacyBgColour?: OakUiRoleToken;
  expandedContent?: React.ReactNode;
  isExpanded?: boolean;
  id?: string;
  onCheckedChange?: (isChecked: boolean) => void;
  checked?: boolean;
  defaultChecked?: boolean;
};

/**
 *
 * OakListItem component used as links for unit cards
 */
export const OakListItem = (props: OakListItemProps) => {
  const {
    title,
    unavailable,
    onClick,
    index,
    isLegacy,
    firstItemRef,
    middleSlot,
    endSlot,
    hoverBgColour = "bg-decorative4-subdued",
    indexBgColour = "bg-decorative4-main",
    indexHoverBgColour = "bg-decorative4-main",
    indexLegacyBgColour = "bg-decorative4-subdued",
    expandedContent,
    isExpanded,
    id,
    onCheckedChange,
    checked,
    defaultChecked,
  } = props;

  return (
    <OakLI
      $listStyle={"none"}
      $width={"100%"}
      $display={"flex"}
      $flexDirection={"column"}
    >
      <OakFlex $flexGrow={1} $alignItems={"center"} $columnGap={"spacing-16"}>
        {onCheckedChange && (
          <OakFlex>
            <OakCheckBox
              id={id ?? title}
              value={id ?? title}
              displayValue={""}
              aria-label={title}
              checkboxSize={"spacing-24"}
              checked={checked}
              defaultChecked={defaultChecked}
              onChange={(e) => {
                if (onCheckedChange) onCheckedChange(e.target.checked);
              }}
              disabled={unavailable}
            />
          </OakFlex>
        )}
        {/* Desktop layout */}
        <StyledListItem
          data-testid="OakListItem-id"
          $alignItems={"center"}
          $background={unavailable ? "bg-neutral" : "bg-primary"}
          $borderRadius="border-radius-m"
          $bbrr={isExpanded ? "border-radius-square" : "border-radius-m"}
          $bblr={isExpanded ? "border-radius-square" : "border-radius-m"}
          $disabled={unavailable}
          $pr="spacing-16"
          $width="100%"
          $display={["none", "flex"]}
          $indexHoverBgColour={indexHoverBgColour}
          $hoverBgColour={hoverBgColour}
        >
          <FlexWithFocus
            $borderRadius="border-radius-m"
            $gap="spacing-16"
            $alignItems="center"
            $width="100%"
            $height="100%"
            ref={firstItemRef}
            onClick={unavailable ? undefined : onClick}
          >
            <StyledOakIndexBox
              $background={
                unavailable
                  ? "bg-neutral-stronger"
                  : isLegacy
                    ? indexLegacyBgColour
                    : indexBgColour
              }
              $btlr={"border-radius-m"}
              $bblr={isExpanded ? "border-radius-square" : "border-radius-m"}
              $justifyContent={"center"}
              $alignItems={"center"}
              $minWidth="spacing-64"
              $alignSelf="stretch"
              $indexHoverBgColour={indexHoverBgColour}
            >
              <OakSpan
                $font={"heading-5"}
                $color={unavailable ? "text-disabled" : "text-primary"}
              >
                {index}
              </OakSpan>
            </StyledOakIndexBox>
            <OakFlex $pv="spacing-20" $pr="spacing-16" $flexGrow={1}>
              <OakP
                $font={"heading-7"}
                $color={unavailable ? "text-disabled" : "text-primary"}
                className="hover-text"
              >
                {title}
              </OakP>
            </OakFlex>
            <OakFlex
              $minWidth="spacing-80"
              $alignItems="center"
              $justifyContent="end"
              $color={unavailable ? "text-disabled" : "text-primary"}
            >
              {middleSlot}
            </OakFlex>
            <OakFlex
              $font={"heading-light-7"}
              $color={unavailable ? "text-disabled" : "text-primary"}
              $alignItems="center"
              $justifyContent="end"
              $minWidth={"spacing-160"}
            >
              {endSlot}
            </OakFlex>
          </FlexWithFocus>
        </StyledListItem>
        {/* Mobile layout */}
        <StyledListItem
          data-testid="OakListItem-id"
          $background={unavailable ? "bg-neutral" : "bg-primary"}
          $borderRadius="border-radius-m"
          $bbrr={isExpanded ? "border-radius-square" : "border-radius-m"}
          $bblr={isExpanded ? "border-radius-square" : "border-radius-m"}
          $disabled={unavailable}
          $display={["flex", "none"]}
          $width="100%"
          $pa="spacing-16"
          $indexHoverBgColour={indexHoverBgColour}
          $hoverBgColour={hoverBgColour}
          onClick={unavailable ? undefined : onClick}
        >
          <OakFlex $flexDirection="column" $gap="spacing-16" $width="100%">
            <OakFlex $gap="spacing-16">
              <OakFlex
                $background={
                  unavailable
                    ? "bg-neutral-stronger"
                    : isLegacy
                      ? indexLegacyBgColour
                      : indexBgColour
                }
                $justifyContent={"center"}
                $alignItems={"center"}
                $borderRadius="border-radius-m"
                $width="spacing-40"
                $height="spacing-40"
                $minWidth="spacing-40"
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
                  {title}
                </OakP>
              </OakBox>
            </OakFlex>
            <OakFlex
              $justifyContent="space-between"
              $alignItems="center"
              $color={unavailable ? "text-disabled" : "text-primary"}
            >
              {middleSlot}
              {endSlot}
            </OakFlex>
          </OakFlex>
        </StyledListItem>
      </OakFlex>
      {expandedContent && isExpanded && (
        <OakFlex $ml={onCheckedChange && "spacing-24"} $flexGrow={1}>
          <OakFlex
            $background={"white"}
            $pa={"spacing-24"}
            $borderColor={indexBgColour}
            $bt={"border-solid-s"}
            $bbrr={"border-radius-m"}
            $bblr={"border-radius-m"}
            $ml={onCheckedChange && "spacing-16"}
            $flexGrow={1}
          >
            {expandedContent}
          </OakFlex>
        </OakFlex>
      )}
    </OakLI>
  );
};
