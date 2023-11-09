import { MouseEventHandler } from "react";
import styled, { css } from "styled-components";

/**
 * OakBox exposes all the styles that are available styles on a div element.
 */

import {
  colorStyle,
  ColorProps,
  positionStyle,
  PositionProps,
  sizeStyle,
  SizeProps,
  spacingStyle,
  SpacingProps,
  borderStyle,
  BorderProps,
  displayStyle,
  DisplayProps,
  dropShadowStyle,
  DropShadowProps,
  opacityStyle,
  OpacityProps,
  transformStyle,
  TransformProps,
  transitionStyle,
  TransitionProps,
  typographyStyle,
  TypographyProps,
  zIndexStyle,
  ZIndexProps,
} from "@/styles";

// TODO: these are not yet implemented
// import cover, { CoverProps } from "@/styles/utils/coverStyle";
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
  BorderProps &
  DisplayProps &
  DropShadowProps &
  OpacityProps &
  TransformProps &
  TransitionProps &
  TypographyProps &
  ZIndexProps &
  HTMLProps;

export const oakBoxCss = css<OakBoxProps>`
  ${positionStyle}
  ${sizeStyle}
  ${spacingStyle}
  ${colorStyle}
  ${borderStyle}
  ${displayStyle}
  ${dropShadowStyle}
  ${opacityStyle}
  ${transformStyle}
  ${transitionStyle}
  ${typographyStyle}
  ${zIndexStyle}
  ${(props) =>
    /* onClick might be passed in the useClickableCard pattern */
    props.onClick &&
    css`
      :hover {
        cursor: pointer;
      }
    `}
`;

export const OakBox = styled.div<OakBoxProps>`
  ${oakBoxCss}
`;
