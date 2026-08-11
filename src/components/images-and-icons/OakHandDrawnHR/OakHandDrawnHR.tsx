import React from "react";
import styled from "styled-components";

import { HandDrawnHRSvg } from "./HandDrawnHRSvg";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { InternalStyledSvgProps } from "@/components/internal-components/InternalStyledSvg";
import { SizeStyleProps } from "@/styles/utils/sizeStyle";
import { SpacingStyleProps } from "@/styles/utils/spacingStyle";

const StyledOakFlex = styled(OakFlex)``;

export type OakHandDrawnHRProps = {
  hrColor?: InternalStyledSvgProps["$fill"];
} & SpacingStyleProps &
  SizeStyleProps;

/**
 * A Drawn HR svg inside a flex container
 *
 * use prop hrColor to change the color of the HR
 *
 * change the sizeProps of the flex container to change the size and dimentions of the HR
 */
export const OakHandDrawnHR = (props: OakHandDrawnHRProps) => {
  const { hrColor, ...flexProps } = props;

  return (
    <StyledOakFlex focusable={false} {...flexProps}>
      <HandDrawnHRSvg $fill={hrColor} />
    </StyledOakFlex>
  );
};
