import React, { ElementType, MutableRefObject } from "react";
import styled, { css } from "styled-components";

import {
  OakFlex,
  OakP,
  OakHeading,
  OakLI,
  OakBox,
  OakIcon,
  OakSpan,
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
        background: ${parseColor("bg-decorative3-subdued")};
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
      background: ${parseColor("bg-decorative3-subdued")};
    }
  }
`;

export type OakUnitListItemProps<element extends ElementType> = {
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
  as?: element;
};

/**
 *
 * OakUnitsListItem component used as links for unit cards
 */
export const OakUnitListItem = <element extends ElementType = "a">(
  props: OakUnitListItemProps<element>,
) => {
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
    as = "a",
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
        $pr="spacing-16"
        $width="100%"
        $display={["none", "flex"]}
        {...rest}
      >
        <FlexWithFocus
          $pr={onSave ? "spacing-8" : "spacing-0"}
          $borderRadius="border-radius-m"
          $gap="spacing-16"
          $alignItems="center"
          $width="100%"
          $height="100%"
          as={as}
          href={unavailable ? undefined : href}
          ref={firstItemRef}
          onClick={unavailable ? undefined : onClick}
        >
          <StyledOakIndexBox
            $background={
              unavailable
                ? "bg-neutral-stronger"
                : isLegacy
                  ? "bg-decorative3-subdued"
                  : "bg-decorative3-main"
            }
            $justifyContent={"center"}
            $alignItems={"center"}
            $minWidth="spacing-64"
            $alignSelf="stretch"
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
              {props.title}
            </OakP>
          </OakFlex>
          <OakFlex
            $minWidth="spacing-80"
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
            $minWidth={onSave ? "spacing-100" : "spacing-160"}
          >
            <OakP $whiteSpace="nowrap">{lessonCount}</OakP>

            {!onSave && (
              <OakIcon
                iconName="chevron-right"
                iconWidth="spacing-32"
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
        $pa="spacing-16"
        {...rest}
      >
        <OakFlex $flexDirection="column" $gap="spacing-16" $width="100%">
          <OakFlex
            $gap="spacing-16"
            as={as}
            href={unavailable ? undefined : href}
          >
            <OakFlex
              $background={
                unavailable
                  ? "bg-neutral-stronger"
                  : isLegacy
                    ? "bg-decorative3-subdued"
                    : "bg-decorative3-main"
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
