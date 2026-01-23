import React, {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  FC,
  forwardRef,
  useLayoutEffect,
  useState,
} from "react";
import styled from "styled-components";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakBox } from "@/components/layout-and-structure/OakBox";
import { parseColor } from "@/styles/helpers/parseColor";

const StyledOakBox = styled(OakBox)`
  background-color: ${parseColor("bg-neutral")};
  background-color: color-mix(
    in lch,
    ${parseColor("bg-inverted")} 5%,
    transparent
  );

  &[data-over="true"] {
    background-color: ${parseColor("bg-primary")};
    background-color: color-mix(
      in lch,
      ${parseColor("bg-primary")} 60%,
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
>(({ isOver, children, ...props }, ref) => {
  const [domContent, setContentBox] = useState<HTMLDivElement | null>(null);
  const [minHeight, setMinHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (!domContent) {
      return;
    }

    // Prevents the holding area from shrinking when an item is removed
    // avoiding layout shift
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setMinHeight((currentHeight) =>
          Math.max(entry.borderBoxSize[0]?.blockSize ?? 0, currentHeight),
        );
      }
    });

    observer.observe(domContent);

    // Reset min height when the window is resized so that the holding pen can shrink
    function resetMinHeight() {
      setMinHeight(0);
    }
    window.addEventListener("resize", resetMinHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resetMinHeight);
    };
  }, [domContent]);

  return (
    <StyledOakBox
      ref={ref}
      $mb="spacing-32"
      $borderRadius="border-radius-l"
      data-over={isOver}
      style={{ minHeight: minHeight === 0 ? "auto" : minHeight }}
      {...props}
    >
      <OakFlex
        $alignItems="flex-start"
        $minHeight="spacing-80"
        $pa="spacing-12"
        $gap="spacing-12"
        $flexWrap="wrap"
        ref={setContentBox}
      >
        {children}
      </OakFlex>
    </StyledOakBox>
  );
});
