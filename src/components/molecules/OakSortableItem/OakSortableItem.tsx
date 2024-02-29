import React, {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  FC,
  forwardRef,
} from "react";
import styled from "styled-components";

import { OakBox, OakFlex, OakIcon } from "@/components/atoms";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseBorder } from "@/styles/helpers/parseBorder";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

type OakSortableItemProps = {
  /**
   * Whether the item is currently being dragged
   */
  isActive?: boolean;
  /**
   * Present the element in a subdued state
   */
  isGhost?: boolean;
};

const StyledSortableItem = styled(OakBox)`
  border-bottom: ${parseBorder("border-solid-xl")} ${parseColor("transparent")};
  cursor: grab;
  touch-action: none;

  @media (hover: hover) {
    &:hover:not([data-active="true"]):not([data-ghost="true"]) {
      background-color: ${parseColor("bg-decorative1-subdued")};
      box-shadow: ${parseDropShadow("drop-shadow-standard")};
      border-bottom: ${parseBorder("border-solid-xl")}
        ${parseColor("border-primary")};
    }
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
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

const StyledFlex = styled(OakFlex)`
  margin-block: -${parseSpacing("space-between-ssx")};
`;

/**
 * A sortable list of items with drag and drop functionality
 *
 * Items can be dragged over named slots altering the order of items
 */
export const OakSortableItem: FC<
  ComponentPropsWithRef<OakSortableItemProps & typeof OakBox>
> = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<OakSortableItemProps & typeof OakBox>
>(({ children, ...props }, ref) => {
  return (
    <StyledSortableItem
      ref={ref}
      $pv="inner-padding-l"
      $ph="inner-padding-s"
      $background="bg-primary"
      $borderRadius="border-radius-m2"
      $minHeight="all-spacing-10"
      data-active={props.isActive}
      data-ghost={props.isGhost}
      {...props}
    >
      <StyledFlex $gap="space-between-s" $alignItems="center">
        <OakIcon
          iconName="move-arrows"
          $width="all-spacing-7"
          $height="all-spacing-7"
          alt=""
        />
        <OakFlex $font="body-1-bold">{children}</OakFlex>
      </StyledFlex>
    </StyledSortableItem>
  );
});
