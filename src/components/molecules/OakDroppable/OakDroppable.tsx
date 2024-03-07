import React, {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  FC,
  ReactNode,
  forwardRef,
} from "react";
import styled from "styled-components";

import { OakBox, OakFlex } from "@/components/atoms";
import { parseBorder } from "@/styles/helpers/parseBorder";
import { parseColor } from "@/styles/helpers/parseColor";

export type OakDroppableProps = {
  /**
   * Indicates whether a draggable is currently being dragged over the droppable
   */
  isOver?: boolean;
  /**
   * A slot for a label to be displayed to the RHS of the droppable
   *
   * useful for giving the user a hint about what to drop
   */
  labelSlot?: ReactNode;
  /**
   * A slot for the draggable that is currently occupying the droppable
   */
  children?: ReactNode;
};

const StyledFlex = styled(OakFlex)`
  outline: ${parseBorder("border-solid-l")} ${parseColor("border-primary")};
  outline-style: dashed;
`;

/**
 * A drop zone for a draggable
 *
 * Has no intrinsic drop functionality.
 * It is intended to be used with `useDraggable` from `@dnd-kit/core`
 */
export const OakDroppable: FC<
  OakDroppableProps & ComponentPropsWithRef<typeof OakFlex>
> = forwardRef<
  HTMLDivElement,
  OakDroppableProps & ComponentPropsWithoutRef<typeof OakFlex>
>(({ children, labelSlot, isOver, ...props }, ref) => {
  return (
    <OakFlex
      ref={ref}
      $background={isOver ? "bg-decorative2-main" : "bg-decorative2-subdued"}
      $pa="inner-padding-m"
      $borderRadius="border-radius-l"
      $gap="space-between-s"
      $flexDirection={["column", "row", "row"]}
      {...props}
    >
      <StyledFlex
        $background={isOver ? "bg-primary" : "bg-neutral"}
        $pa="inner-padding-ssx"
        $borderRadius="border-radius-m2"
        $minHeight="all-spacing-11"
        $flexBasis="100%"
      >
        <OakBox $width="100%">{children}</OakBox>
      </StyledFlex>
      {labelSlot && (
        <OakFlex
          $background={isOver ? "bg-primary" : "bg-decorative2-very-subdued"}
          $borderRadius="border-radius-m2"
          $alignItems="center"
          $font="body-1"
          $ph="inner-padding-l"
          $minHeight="all-spacing-10"
          $pv="inner-padding-ssx"
          $flexBasis="100%"
          $width="100%"
          $alignSelf="center"
        >
          {labelSlot}
        </OakFlex>
      )}
    </OakFlex>
  );
});
