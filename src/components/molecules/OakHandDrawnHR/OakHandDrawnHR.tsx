import React from "react";
import styled from "styled-components";

import { HandDrawnHRSvg } from "./HandDrawnHRSvg";

import { OakFlex } from "@/components/atoms";
import { InternalStyledSvgProps } from "@/components/atoms/InternalStyledSvg";
import { SizeStyleProps } from "@/styles/utils/sizeStyle";
import { SpacingStyleProps } from "@/styles/utils/spacingStyle";

const StyledOakFlex = styled(OakFlex)<{ focusable: boolean }>`
  ${(props) => (!props.focusable ? "focusable: false;" : "focusable: true;")}
`;

export type OakHandDrawnHRProps = {
  hrColor?: InternalStyledSvgProps["$fill"];
  focusable?: boolean;
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
  const { hrColor, focusable = true, ...flexProps } = props;

  return (
    <StyledOakFlex focusable={focusable} {...flexProps}>
      <HandDrawnHRSvg $fill={hrColor} />
    </StyledOakFlex>
  );
};
