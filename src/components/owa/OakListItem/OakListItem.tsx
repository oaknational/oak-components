import React, { useContext } from "react";
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
import { RadioContext } from "@/components/form-elements";
import { InternalRadioWrapper } from "@/components/internal-components/InternalRadioWrapper";
import { InternalRadio } from "@/components/internal-components/InternalRadio";
import { OakScreenReader } from "@/components/messaging-and-feedback/OakScreenReader";

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
  asRadio?: boolean;
  radioValue?: string;
};

/**
 * * OakListItem component used as links for unit cards
 * * adding asRadio and radioValue props to allow OakListItem to be used as radio buttons within OakUnitsContainer if the OakUnitsContainer is passed a radioGroupName prop. This allows for better accessibility when OakListItem is used in OakUnitsContainer, as the user can select a unit by clicking anywhere on the card, rather than having to click on a specific radio button.
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
    asRadio,
    radioValue,
  } = props;

  const radioContext = useContext(RadioContext);
  const onClickLocal = unavailable ? undefined : onClick;
  const textColor = unavailable ? "text-disabled" : "text-primary";

  let background: OakUiRoleToken;
  if (unavailable) {
    background = "bg-neutral-stronger";
  } else if (isLegacy) {
    background = indexLegacyBgColour;
  } else {
    background = indexBgColour;
  }

  const checkboxSize = "spacing-24";
  const checkedBorderColor = "border-primary";
  const isExpandedBorderRadius = "border-radius-square";
  const unavailableBgColor = "bg-neutral";

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (asRadio && radioValue && !unavailable) {
      document.getElementById(radioValue)?.click();
    }
    onClickLocal?.(e);
  };

  return (
    <OakLI
      $listStyle={"none"}
      $width={"100%"}
      $display={"flex"}
      $flexDirection={"column"}
    >
      {asRadio && radioValue && (
        <OakScreenReader id={`${radioValue}-label`}>{title}</OakScreenReader>
      )}
      <OakFlex $flexGrow={1} $alignItems={"center"} $columnGap={"spacing-16"}>
        {asRadio && radioValue && (
          <InternalRadioWrapper
            checked={radioValue === radioContext.currentValue}
            size={checkboxSize}
            disabled={unavailable}
            radioBorderColor={checkedBorderColor}
            internalRadio={
              <InternalRadio
                id={radioValue}
                name={radioContext.name}
                value={radioValue}
                disabled={unavailable}
                onChange={radioContext.onValueUpdated}
                checked={radioValue === radioContext.currentValue}
                aria-labelledby={asRadio ? `${radioValue}-label` : undefined}
              />
            }
          />
        )}

        {/* Desktop layout */}
        <StyledListItem
            data-testid="OakListItem-id"
            $alignItems={"center"}
            $background={unavailable ? unavailableBgColor : "bg-primary"}
            $borderRadius="border-radius-m"
            $bbrr={isExpanded ? isExpandedBorderRadius : "border-radius-m"}
            $bblr={isExpanded ? isExpandedBorderRadius : "border-radius-m"}
            $disabled={unavailable}
            $pr="spacing-16"
            $width="100%"
            $display={["none", "flex"]}
            $indexHoverBgColour={indexHoverBgColour}
            $hoverBgColour={hoverBgColour}
            aria-hidden={asRadio}
          >
            <FlexWithFocus
              $borderRadius="border-radius-m"
              $gap="spacing-16"
              $alignItems="center"
              $width="100%"
              $height="100%"
              ref={firstItemRef}
              onClick={handleCardClick}
              aria-hidden={asRadio}
            >
              <StyledOakIndexBox
                $background={background}
                $btlr={"border-radius-m"}
                $bblr={isExpanded ? isExpandedBorderRadius : "border-radius-m"}
                $justifyContent={"center"}
                $alignItems={"center"}
                $minWidth="spacing-64"
                $alignSelf="stretch"
                $indexHoverBgColour={indexHoverBgColour}
                aria-hidden="true"
              >
                <OakSpan $font={"heading-5"} $color={textColor}>
                  {index}
                </OakSpan>
              </StyledOakIndexBox>
              <OakFlex $pv="spacing-20" $pr="spacing-16" $flexGrow={1}>
                <OakP
                  $font={"heading-7"}
                  $color={textColor}
                  className="hover-text"
                >
                  {title}
                </OakP>
              </OakFlex>
              <OakFlex
                $minWidth="spacing-80"
                $alignItems="center"
                $justifyContent="end"
                $color={textColor}
              >
                {middleSlot}
              </OakFlex>
              <OakFlex
                $font={"heading-light-7"}
                $color={textColor}
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
            $background={unavailable ? unavailableBgColor : "bg-primary"}
            $borderRadius="border-radius-m"
            $bbrr={isExpanded ? isExpandedBorderRadius : "border-radius-m"}
            $bblr={isExpanded ? isExpandedBorderRadius : "border-radius-m"}
            $disabled={unavailable}
            $display={["flex", "none"]}
            $width="100%"
            $pa="spacing-16"
            $indexHoverBgColour={indexHoverBgColour}
            $hoverBgColour={hoverBgColour}
            onClick={handleCardClick}
            aria-hidden={asRadio}
          >
            <OakFlex $flexDirection="column" $gap="spacing-16" $width="100%">
              <OakFlex $gap="spacing-16">
                <OakFlex
                  $background={background}
                  $justifyContent={"center"}
                  $alignItems={"center"}
                  $borderRadius="border-radius-m"
                  $width="spacing-40"
                  $height="spacing-40"
                  $minWidth="spacing-40"
                >
                  <OakHeading tag="h3" $font="heading-5" $color={textColor}>
                    {index}
                  </OakHeading>
                </OakFlex>
                <OakBox $width="100%">
                  <OakP $font="heading-7" $color={textColor}>
                    {title}
                  </OakP>
                </OakBox>
              </OakFlex>
              <OakFlex
                $justifyContent="space-between"
                $alignItems="center"
                $color={textColor}
              >
                {middleSlot}
                {endSlot}
              </OakFlex>
            </OakFlex>
          </StyledListItem>
        </OakFlex>
        {expandedContent && isExpanded && (
          <OakFlex $ml={"spacing-24"} $flexGrow={1}>
            <OakFlex
              $background={"bg-primary"}
              $pa={"spacing-24"}
              $borderColor={indexBgColour}
              $bt={"border-solid-s"}
              $bbrr={"border-radius-m"}
              $bblr={"border-radius-m"}
              $ml={"spacing-16"}
              $flexGrow={1}
            >
              {expandedContent}
            </OakFlex>
          </OakFlex>
        )}
    </OakLI>
  );
};
