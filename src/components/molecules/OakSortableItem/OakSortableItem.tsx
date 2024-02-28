import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import styled from "styled-components";

import { OakFlex, OakIcon } from "@/components/atoms";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseBorder } from "@/styles/helpers/parseBorder";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

type OakSortableItemProps = { isActive?: boolean; isGhost?: boolean };

const StyledSortableItem = styled(OakFlex)`
  border-bottom: ${parseBorder("border-solid-xl")} ${parseColor("transparent")};
  cursor: grab;

  @media (hover: hover) {
    &:hover:not([data-active="true"]):not([data-ghost="true"]) {
      background-color: ${parseColor("bg-decorative1-subdued")};
      box-shadow: ${parseDropShadow("drop-shadow-standard")};
      border-bottom: ${parseBorder("border-solid-xl")}
        ${parseColor("border-primary")};
    }
  }

  &[data-active="true"] {
    cursor: move;
    background-color: ${parseColor("bg-decorative1-main")};
    border: ${parseBorder("border-solid-xl")} ${parseColor("border-primary")};
    box-shadow: ${parseDropShadow("drop-shadow-lemon")},
      ${parseDropShadow("drop-shadow-grey")};
  }

  &[data-ghost="true"] {
    cursor: default;
    background-color: ${parseColor("bg-neutral")};
    color: ${parseColor("text-disabled")};
  }
`;

export const OakSortableItem = forwardRef<
  HTMLDivElement,
  OakSortableItemProps & ComponentPropsWithoutRef<typeof OakFlex>
>(({ children, ...props }, ref) => {
  return (
    <StyledSortableItem
      ref={ref}
      $gap="space-between-s"
      $pv="inner-padding-l"
      $ph="inner-padding-s"
      $background="bg-primary"
      $alignItems="center"
      $borderRadius="border-radius-m2"
      $minHeight="all-spacing-13"
      data-active={props.isActive}
      data-ghost={props.isGhost}
      {...props}
    >
      <OakIcon
        iconName="move-arrows"
        $width="all-spacing-7"
        $height="all-spacing-7"
        alt=""
      />
      <OakFlex $font="heading-6">{children}</OakFlex>
    </StyledSortableItem>
  );
});