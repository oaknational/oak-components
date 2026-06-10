import React from "react";
import styled from "styled-components";

import { OakIcon, OakIconProps } from "@/components/images-and-icons/OakIcon";
import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakUiBackgroundToken } from "@/styles";

export type ToastIconProps = {
  iconName: OakIconProps["iconName"];
  iconBackground?: OakUiBackgroundToken | "transparent";
  colorFilter?: OakIconProps["$colorFilter"];
};

const IconBackground = styled(OakBox)`
  top: 6px;
  left: 6px;
`;

export const ToastIcon = ({
  iconName,
  iconBackground = "transparent",
  colorFilter,
}: ToastIconProps) => {
  return (
    <OakBox $position="relative">
      <IconBackground
        $width="spacing-20"
        $height="spacing-20"
        $background={iconBackground}
        $borderRadius="border-radius-circle"
        $position="absolute"
      />
      <OakIcon
        data-testid={`oak-toast-${iconName}-icon`}
        iconName={iconName}
        $colorFilter={colorFilter}
        $width="spacing-32"
        $height="spacing-32"
      />
    </OakBox>
  );
};
