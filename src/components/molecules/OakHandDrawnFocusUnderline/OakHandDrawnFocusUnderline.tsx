import React from "react";
import styled from "styled-components";

import { HandDrawnFocusUnderlineSvg } from "./SubHandDrawnFocusUnderline";

import { OakFlex } from "@/components/atoms";
import { InternalStyledSvgProps } from "@/components/atoms/InternalStyledSvg";
import { SizeStyleProps } from "@/styles/utils/sizeStyle";
import { SpacingStyleProps } from "@/styles/utils/spacingStyle";

const StyledOakFlex = styled(OakFlex)``;

export type OakHandDrawnFocusUnderlineProps = {
  fill?: InternalStyledSvgProps["$fill"];
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
  const { fill, ...flexProps } = props;

  return (
    <StyledOakFlex {...flexProps}>
      <HandDrawnFocusUnderlineSvg $fill={fill} />
    </StyledOakFlex>
  );
};
