import React, {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  FC,
  forwardRef,
} from "react";
import styled from "styled-components";

import { OakFlex } from "@/components/atoms";
import { parseColor } from "@/styles/helpers/parseColor";

const StyledOakFlex = styled(OakFlex)`
  background-color: ${parseColor("grey20")};
  background-color: color-mix(in lch, ${parseColor("black")} 5%, transparent);

  &[data-over="true"] {
    background-color: ${parseColor("white")};
    background-color: color-mix(
      in lch,
      ${parseColor("white")} 60%,
      transparent
    );
  }
`;

type InternalDroppableHoldingPenProps = {
  /**
   * Indicates whether a draggable is currently being dragged over the droppable
   */
  isOver?: boolean;
};

/**
 * An internal holding pen for multiple draggable items
 *
 * Has no intrinsic drop functionally.
 * It is intended to be used with `useDroppable` from `@dnd-kit/core`
 */
export const InternalDroppableHoldingPen: FC<
  ComponentPropsWithRef<typeof OakFlex>
> = forwardRef<
  HTMLDivElement,
  InternalDroppableHoldingPenProps & ComponentPropsWithoutRef<typeof OakFlex>
>(({ isOver, ...props }, ref) => {
  return (
    <StyledOakFlex
      ref={ref}
      $pa="inner-padding-s"
      $mb="space-between-m2"
      $gap="space-between-xs"
      $borderRadius="border-radius-l"
      $flexWrap="wrap"
      $minHeight="all-spacing-13"
      data-over={isOver}
      {...props}
    />
  );
});
