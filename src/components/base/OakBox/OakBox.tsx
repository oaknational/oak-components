import { MouseEventHandler } from "react";
import styled, { css } from "styled-components";

/**
 * OakBox exposes all the styles that are available styles on a div element.
 */

import {
  colorStyle,
  OakColorProps,
  positionStyle,
  OakPositionProps,
  sizeStyle,
  OakSizeProps,
  spacingStyle,
  SpacingProps,
  borderStyle,
  OakBorderProps,
  displayStyle,
  OakDisplayProps,
  dropShadowStyle,
  OakDropShadowProps,
  opacityStyle,
  OakOpacityProps,
  transformStyle,
  OakTransformProps,
  transitionStyle,
  OakTransitionProps,
  typographyStyle,
  OakTypographyCssProps,
  zIndexStyle,
  OakZIndexProps,
} from "@/styles";

// TODO: these are not yet implemented
// import cover, { CoverProps } from "@/styles/utils/coverStyle";
// import customScrollbar from "@/styles/utils/customScrollbarStyle";

type HTMLProps = {
  onClick?: MouseEventHandler;
};

export type OakBoxProps = {
  children?: React.ReactNode;
} & OakPositionProps &
  OakSizeProps &
  SpacingProps &
  OakColorProps &
  OakBorderProps &
  OakDisplayProps &
  OakDropShadowProps &
  OakOpacityProps &
  OakTransformProps &
  OakTransitionProps &
  OakTypographyCssProps &
  OakZIndexProps &
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
