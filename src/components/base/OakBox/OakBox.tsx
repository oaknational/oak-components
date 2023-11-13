import { MouseEventHandler } from "react";
import styled, { css } from "styled-components";

/**
 * OakBox exposes all the styles that are available styles on a div element.
 */

import {
  colorStyle,
  ColorStyleProps,
  positionStyle,
  PositionStyleProps,
  sizeStyle,
  SizeStyleProps,
  spacingStyle,
  SpacingStyleProps,
  borderStyle,
  BorderStyleProps,
  displayStyle,
  DisplayStyleProps,
  dropShadowStyle,
  DropShadowStyleProps,
  opacityStyle,
  OpacityStyleProps,
  transformStyle,
  TransformStyleProps,
  transitionStyle,
  TransitionStyleProps,
  typographyStyle,
  TypographyStyleProps,
  zIndexStyle,
  ZIndexStyleProps,
} from "@/styles";

// TODO: these are not yet implemented
// import cover, { CoverProps } from "@/styles/utils/coverStyle";
// import customScrollbar from "@/styles/utils/customScrollbarStyle";

type HTMLProps = {
  onClick?: MouseEventHandler;
};

export type OakBoxProps = {
  children?: React.ReactNode;
} & PositionStyleProps &
  SizeStyleProps &
  SpacingStyleProps &
  ColorStyleProps &
  BorderStyleProps &
  DisplayStyleProps &
  DropShadowStyleProps &
  OpacityStyleProps &
  TransformStyleProps &
  TransitionStyleProps &
  TypographyStyleProps &
  ZIndexStyleProps &
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
