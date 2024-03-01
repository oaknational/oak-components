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

type OakDraggableProps = {
  /**
   * Whether the item is currently being dragged
   */
  isDragging?: boolean;
  /**
   * Present the element in a subdued state
   */
  isDisabled?: boolean;
};

const StyledDraggable = styled(OakBox)`
  border-bottom: ${parseBorder("border-solid-xl")} ${parseColor("transparent")};
  cursor: grab;
  outline: none;

  @media (hover: hover) {
    &:hover:not([data-dragging="true"]):not([data-disabled="true"]) {
      background-color: ${parseColor("bg-decorative1-subdued")};
      box-shadow: ${parseDropShadow("drop-shadow-standard")};
      border-bottom: ${parseBorder("border-solid-xl")}
        ${parseColor("border-primary")};
    }
  }

  &:focus-visible:not([data-dragging="true"]):not([data-disabled="true"]) {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }

  &[data-dragging="true"] {
    cursor: move;
    background-color: ${parseColor("bg-decorative1-main")};
    border: ${parseBorder("border-solid-xl")} ${parseColor("border-primary")};
    box-shadow: ${parseDropShadow("drop-shadow-lemon")},
      ${parseDropShadow("drop-shadow-grey")};
  }

  &[data-disabled="true"] {
    cursor: default;
    background-color: ${parseColor("bg-neutral")};
    color: ${parseColor("text-disabled")};
  }
`;

const StyledFlex = styled(OakFlex)`
  margin-block: -${parseSpacing("space-between-ssx")};
`;

/**
 * The component has no intrinsic draggable functionality.
 * It is intended to be used with `useDraggable` from `@dnd-kit/core`
 */
export const OakDraggable: FC<
  ComponentPropsWithRef<OakDraggableProps & typeof OakBox>
> = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<OakDraggableProps & typeof OakBox>
>(({ children, isDragging, isDisabled, ...props }, ref) => {
  return (
    <StyledDraggable
      ref={ref}
      $pv="inner-padding-l"
      $ph="inner-padding-s"
      $background="bg-primary"
      $borderRadius="border-radius-m2"
      $minHeight="all-spacing-10"
      data-dragging={isDragging}
      data-disabled={isDisabled}
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
    </StyledDraggable>
  );
});
