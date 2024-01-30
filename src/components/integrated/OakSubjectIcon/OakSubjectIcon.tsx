import React from "react";

import {
  OakHandDrawnBoxWithIconProps,
  OakHandDrawnCardWithIcon,
  OakPromoTag,
} from "@/components/ui";
import { OakBox } from "@/components/base";

export type OakSubjectIconProps = {
  iconName: OakHandDrawnBoxWithIconProps["iconName"] & `subject-${string}`;
  fill?: OakHandDrawnBoxWithIconProps["fill"];
  iconColor?: OakHandDrawnBoxWithIconProps["iconColor"];
  showPromoTag?: boolean;
};

/**
 * A large illuminated hand-drawn box with a subject icon in the center
 *
 * Accepts an optional `showPromoTag` prop to display a "New" tag in the top left corner
 */
export const OakSubjectIcon = ({
  showPromoTag,
  fill,
  iconColor,
  iconName,
}: OakSubjectIconProps) => {
  return (
    <OakBox $width="fit-content" $height="fit-content" $position="relative">
      <OakHandDrawnCardWithIcon
        iconName={iconName}
        iconColor={iconColor}
        fill={fill}
      />
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
