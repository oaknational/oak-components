import React from "react";
import styled from "styled-components";

import { HandDrawnHRSvg } from "./HandDrawnHRSvg";

import { OakFlex } from "@/components/atoms";
import { InternalStyledSvgProps } from "@/components/atoms/InternalStyledSvg";
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
 * An optional `stroke` and `strokeWidth` can be applied to give the background a border
 */
export const OakHandDrawnHR = (props: OakHandDrawnHRProps) => {
  const { hrColor, ...flexProps } = props;

  return (
    <StyledOakFlex {...flexProps}>
      <HandDrawnHRSvg $fill={hrColor} />
    </StyledOakFlex>
  );
};
