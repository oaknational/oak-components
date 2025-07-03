import React, { MutableRefObject } from "react";
import styled, { css } from "styled-components";

import {
  OakFlex,
  OakP,
  OakHeading,
  OakLI,
  OakBox,
  OakIcon,
} from "@/components/atoms";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { OakSaveButton } from "@/components/molecules/OakSaveButton/OakSaveButton";

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

const StyledUnitListItem = styled(OakFlex)<{ $disabled?: boolean }>`
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

export type OakUnitListItemProps = {
  unavailable?: boolean;
  index: number;
  title: string;
  yearTitle?: string | null;
  lessonCount: string | null;
  isLegacy: boolean;
  href: string;
  firstItemRef?: MutableRefObject<HTMLAnchorElement | null> | null | undefined;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onSave?: () => void;
  isSaved?: boolean;
  isSaving?: boolean;
  saveButtonId?: string;
};

/**
 *
 * OakUnitsListItem component used as links for unit cards
 */
export const OakUnitListItem = (props: OakUnitListItemProps) => {
  const {
    lessonCount,
    href,
    unavailable,
    onClick,
    index,
    isLegacy,
    onSave,
    isSaved,
    isSaving,
    firstItemRef,
    saveButtonId,
    ...rest
  } = props;

  return (
    <OakLI $listStyle={"none"} $width={"100%"}>
      {/* Desktop layout */}
      <StyledUnitListItem
        $alignItems={"center"}
        $background={unavailable ? "bg-neutral" : "bg-primary"}
        $borderRadius="border-radius-m"
        $disabled={unavailable}
        $pr="inner-padding-m"
        $width="100%"
        $display={["none", "flex"]}
        {...rest}
      >
        <FlexWithFocus
          $pr={onSave ? "inner-padding-xs" : "inner-padding-none"}
          $borderRadius="border-radius-m"
          $gap="space-between-s"
          $alignItems="center"
          $width="100%"
          $height="100%"
          as="a"
          href={unavailable ? undefined : href}
          ref={firstItemRef}
          onClick={unavailable ? undefined : onClick}
        >
          <StyledOakIndexBox
            $background={
              unavailable
                ? "bg-neutral-stronger"
                : isLegacy
                  ? "lavender50"
                  : "lavender"
            }
            $justifyContent={"center"}
            $alignItems={"center"}
            $minWidth="all-spacing-11"
            $alignSelf="stretch"
          >
            <OakHeading
              tag="h3"
              $font={"heading-5"}
              $color={unavailable ? "text-disabled" : "text-primary"}
            >
              {index}
            </OakHeading>
          </StyledOakIndexBox>
          <OakFlex $pv="inner-padding-l" $pr="inner-padding-m" $flexGrow={1}>
            <OakP
              $font={"heading-7"}
              $color={unavailable ? "text-disabled" : "text-primary"}
              className="hover-text"
            >
              {props.title}
            </OakP>
          </OakFlex>
          <OakFlex
            $minWidth="all-spacing-13"
            $alignItems="center"
            $justifyContent="end"
          >
            <OakP
              $font={"heading-light-7"}
              $whiteSpace="nowrap"
              $color={unavailable ? "text-disabled" : "text-primary"}
            >
              {props.yearTitle}
            </OakP>
          </OakFlex>
          <OakFlex
            $font={"heading-light-7"}
            $color={unavailable ? "text-disabled" : "text-primary"}
            $alignItems="center"
            $justifyContent="end"
            $minWidth={onSave ? "all-spacing-15" : "all-spacing-17"}
          >
            <OakP $whiteSpace="nowrap">{lessonCount}</OakP>

            {!onSave && (
              <OakIcon
                iconName="chevron-right"
                iconWidth="all-spacing-7"
                $colorFilter={unavailable ? "text-disabled" : "text-primary"}
              />
            )}
          </OakFlex>
        </FlexWithFocus>
        {onSave && (
          <OakSaveButton
            onSave={onSave}
            isSaved={isSaved ?? false}
            isLoading={isSaving ?? false}
            unavailable={unavailable}
            saveButtonId={saveButtonId}
            title={props.title}
          />
        )}
      </StyledUnitListItem>
      {/* Mobile layout */}
      <StyledUnitListItem
        $background={unavailable ? "bg-neutral" : "bg-primary"}
        $borderRadius="border-radius-m"
        $disabled={unavailable}
        $display={["flex", "none"]}
        $width="100%"
        $pa="inner-padding-m"
        {...rest}
      >
        <OakFlex $flexDirection="column" $gap="space-between-s" $width="100%">
          <OakFlex
            $gap="space-between-s"
            as="a"
            href={unavailable ? undefined : href}
          >
            <OakFlex
              $background={
                unavailable
                  ? "bg-neutral-stronger"
                  : isLegacy
                    ? "lavender50"
                    : "lavender"
              }
              $justifyContent={"center"}
              $alignItems={"center"}
              $borderRadius="border-radius-m"
              $width="all-spacing-8"
              $height="all-spacing-8"
              $minWidth="all-spacing-8"
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
                {props.title}
              </OakP>
            </OakBox>
          </OakFlex>
          <OakFlex $justifyContent="space-between" $alignItems="center">
            <OakP
              $font={"heading-light-7"}
              $color={unavailable ? "text-disabled" : "text-primary"}
            >
              {props.yearTitle}
            </OakP>
            <OakP
              $font={"heading-light-7"}
              $color={unavailable ? "text-disabled" : "text-primary"}
            >
              {lessonCount}
            </OakP>
            {onSave && (
              <OakSaveButton
                onSave={onSave}
                isSaved={isSaved ?? false}
                isLoading={isSaving ?? false}
                unavailable={unavailable}
                title={props.title}
              />
            )}
          </OakFlex>
        </OakFlex>
      </StyledUnitListItem>
    </OakLI>
  );
};
