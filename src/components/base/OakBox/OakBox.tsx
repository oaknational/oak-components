import { MouseEventHandler } from "react";
import styled, { css } from "styled-components";

import {
  colorStyle,
  ColorProps,
  positionStyle,
  PositionProps,
  sizeStyle,
  SizeProps,
  spacingStyle,
  SpacingProps,
} from "@/styles";

// TODO: these are not yet implemented
// import border, { BorderProps } from "@/styles/utils/borderStyle";
// import cover, { CoverProps } from "@/styles/utils/coverStyle";
// import display, { DisplayProps } from "@/styles/utils/displayStyle";
// import dropShadow, { DropShadowProps } from "@/styles/utils/dropShadowStyle";
// import opacity, { OpacityProps } from "@/styles/utils/opacityStyle";
// import transform, { TransformProps } from "@/styles/utils/transformStyle";
// import transition, { TransitionProps } from "@/styles/utils/transitionStyle";
// import typography, { TypographyProps } from "@/styles/utils/typographyStyle";
// import zIndex, { ZIndexProps } from "@/styles/utils/zIndexStyle";
// import customScrollbar from "@/styles/utils/customScrollbarStyle";

type HTMLProps = {
  onClick?: MouseEventHandler;
};

export type OakBoxProps = {
  children?: React.ReactNode;
} & PositionProps &
  SizeProps &
  SpacingProps &
  ColorProps &
  HTMLProps;

export const oakBoxCss = css<OakBoxProps>`
  ${positionStyle}
  ${sizeStyle}
  ${spacingStyle}
  ${colorStyle}
  ${(props) =>
    /* onClick might be passed in the useClickableCard pattern */
    props.onClick &&
    css`
      :hover {
        cursor: pointer;
      }
    `}
`;

/**
 * OakBox exposes position, size, spacing, and background props on a div.
 */
export const OakBox = styled.div<OakBoxProps>`
  ${oakBoxCss}
`;
