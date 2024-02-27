import React, { HTMLProps, ReactNode, forwardRef } from "react";

import { OakFlex, OakIcon } from "@/components/atoms";

export type OakSortableItemProps = { id: string; children: ReactNode };

export const OakSortableItem = forwardRef<
  HTMLDivElement,
  OakSortableItemProps & HTMLProps<HTMLDivElement>
>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      <OakFlex
        $gap="space-between-s"
        $pa="inner-padding-m"
        $background="bg-primary"
        $alignItems="center"
        $borderRadius="border-radius-m2"
      >
        <OakIcon
          iconName="move-arrows"
          $width="all-spacing-9"
          $height="all-spacing-9"
        />
        <OakFlex $font="heading-6">{children}</OakFlex>
      </OakFlex>
    </div>
  );
});
