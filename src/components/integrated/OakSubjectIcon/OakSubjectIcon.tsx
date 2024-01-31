import React from "react";

import {
  OakHandDrawnBoxWithIconProps,
  OakHandDrawnCardWithIcon,
  OakPromoTag,
} from "@/components/ui";
import { OakBox } from "@/components/base";

export type OakSubjectIconProps = Pick<
  OakHandDrawnBoxWithIconProps,
  "iconName" | "fill" | "iconColor" | "alt"
> & {
  iconName: `subject-${string}`;
  showPromoTag?: boolean;
};

/**
 * A large illuminated hand-drawn box with a subject icon in the center
 *
 * Accepts an optional `showPromoTag` prop to display a "New" tag in the top left corner
 */
export const OakSubjectIcon = ({
  showPromoTag,
  ...rest
}: OakSubjectIconProps) => {
  return (
    <OakBox $width="fit-content" $height="fit-content" $position="relative">
      <OakHandDrawnCardWithIcon {...rest} />
      {showPromoTag && (
        <OakBox
          $position="absolute"
          $top={["all-spacing-0", "all-spacing-2"]}
          $left={["all-spacing-0", "all-spacing-2"]}
        >
          <OakPromoTag />
        </OakBox>
      )}
    </OakBox>
  );
};
