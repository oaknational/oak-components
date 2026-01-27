import React from "react";
import styled from "styled-components";

import { HandDrawnFocusUnderlineSvg } from "./SubHandDrawnFocusUnderline";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { InternalStyledSvgProps } from "@/components/internal-components/InternalStyledSvg";
import { SizeStyleProps } from "@/styles/utils/sizeStyle";
import { SpacingStyleProps } from "@/styles/utils/spacingStyle";

const StyledOakFlex = styled(OakFlex)``;

export type OakHandDrawnFocusUnderlineProps = {
  FocusUnderlineColor?: InternalStyledSvgProps["$fill"];
} & SpacingStyleProps &
  SizeStyleProps;

/**
 * A Drawn FocusUnderline svg inside a flex container
 *
 * use prop FocusUnderlineColor to change the color of the FocusUnderline
 *
 * change the sizeProps of the flex container to change the size and dimentions of the FocusUnderline
 */
export const OakHandDrawnFocusUnderline = (
  props: OakHandDrawnFocusUnderlineProps,
) => {
  const { FocusUnderlineColor, ...flexProps } = props;

  return (
    <StyledOakFlex {...flexProps}>
      <HandDrawnFocusUnderlineSvg $fill={FocusUnderlineColor} />
    </StyledOakFlex>
  );
};
