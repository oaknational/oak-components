import React from "react";

import {
  OakHandDrawnBoxWithIconProps,
  OakHandDrawnCardWithIcon,
  OakPromoTag,
} from "@/components/molecules";
import { OakBox } from "@/components/atoms";

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
          $top={["spacing-0", "spacing-8"]}
          $left={["spacing-0", "spacing-8"]}
        >
          <OakPromoTag />
        </OakBox>
      )}
    </OakBox>
  );
};
