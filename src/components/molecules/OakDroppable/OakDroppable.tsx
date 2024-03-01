import React, {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  FC,
  ReactNode,
  forwardRef,
} from "react";
import styled from "styled-components";

import { OakBox } from "@/components/atoms";
import { parseBorder } from "@/styles/helpers/parseBorder";
import { parseColor } from "@/styles/helpers/parseColor";

export type OakDroppableProps = {
  /**
   * Indicates whether a draggable is currently being dragged over the droppable
   */
  isOver?: boolean;
  children?: ReactNode;
};

const StyledBox = styled(OakBox)`
  outline: ${parseBorder("border-solid-l")} ${parseColor("border-primary")};
  outline-style: dashed;

  @media (hover: hover) {
    &:hover {
      background-color: ${parseColor("bg-primary")};
    }
  }
`;

/**
 * A drop zone for a draggable
 *
 * Has no intrinsic drop functionality.
 * It is intended to be used with `useDraggable` from `@dnd-kit/core`
 */
export const OakDroppable: FC<
  OakDroppableProps & ComponentPropsWithRef<typeof OakBox>
> = forwardRef<
  HTMLDivElement,
  OakDroppableProps & ComponentPropsWithoutRef<typeof OakBox>
>(({ children, isOver, ...props }, ref) => {
  return (
    <OakBox
      ref={ref}
      $background="bg-decorative2-subdued"
      $pa="inner-padding-m"
      $borderRadius="border-radius-m"
      {...props}
    >
      <StyledBox
        $background={isOver ? "bg-primary" : "bg-neutral"}
        $pa="inner-padding-ssx"
        $borderRadius="border-radius-m"
        $width="100%"
        $minHeight="all-spacing-11"
      >
        {children}
      </StyledBox>
    </OakBox>
  );
});
