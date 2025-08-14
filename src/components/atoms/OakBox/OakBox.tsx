import { MouseEventHandler } from "react";
import styled, { css } from "styled-components";

/**
 * OakBox exposes all the styles that are available styles on a div element.
 */

import { colorStyle, ColorStyleProps } from "@/styles/utils/colorStyle";
import {
  positionStyle,
  PositionStyleProps,
} from "@/styles/utils/positionStyle";
import { sizeStyle, SizeStyleProps } from "@/styles/utils/sizeStyle";
import { spacingStyle, SpacingStyleProps } from "@/styles/utils/spacingStyle";
import { borderStyle, BorderStyleProps } from "@/styles/utils/borderStyle";
import { displayStyle, DisplayStyleProps } from "@/styles/utils/displayStyle";
import {
  dropShadowStyle,
  DropShadowStyleProps,
} from "@/styles/utils/dropShadowStyle";
import { opacityStyle, OpacityStyleProps } from "@/styles/utils/opacityStyle";
import {
  transformStyle,
  TransformStyleProps,
} from "@/styles/utils/transformStyle";
import {
  transitionStyle,
  TransitionStyleProps,
} from "@/styles/utils/transitionStyle";
import {
  typographyStyle,
  TypographyStyleProps,
} from "@/styles/utils/typographyStyle";
import { zIndexStyle, ZIndexStyleProps } from "@/styles/utils/zIndexStyle";

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
      &:hover {
        cursor: pointer;
      }
    `}
`;

/**
 * OakBox exposes all the styles that are available styles on a div tag. These include:
 * - color
 * - size
 * - display
 * - spacing
 * - position
 * - border
 * - opacity
 * - z-index
 * - typography
 * - transition
 * - transform
 * - drop-shadow
 *
 */
export const OakBox = styled.div<OakBoxProps>`
  ${oakBoxCss}
`;
