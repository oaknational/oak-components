import React, { FC } from "react";
import styled from "styled-components";

import { OakColorToken } from "@/styles";
import { oakBoxCss, OakBoxProps } from "@/components/atoms/OakBox";
import {
  HeaderUnderline,
  Underline,
  HorizontalRule,
  Underline3,
  ButtonBorderTop,
  ButtonBorderBottom,
  ButtonBorderLeft,
  ButtonBorderRight,
  IconBackground,
} from "@/svgs";

/**
 * Map of the svg names to the actual svg components
 * Only components that are used in the OakSvg component should be added here
 * Should be used only in cases where OakIcon can't be used and if this list grows much bigger in the future we should consider refactoring
 */
const svgMap = {
  "header-underline": HeaderUnderline,
  underline: Underline,
  "horizontal-rule": HorizontalRule,
  "underline-3": Underline3,
  "button-border-top": ButtonBorderTop,
  "button-border-bottom": ButtonBorderBottom,
  "button-border-left": ButtonBorderLeft,
  "button-border-right": ButtonBorderRight,
  "icon-background": IconBackground,
};

export type OakSvgNames = keyof typeof svgMap;

const StyledSvg = styled.svg<OakBoxProps>`
  ${oakBoxCss};
  transition: all 0.3s ease;
`;

export type OakSvgProps = OakBoxProps & {
  /**
   * The name of the svg to render
   * Accepts an svg name token from the svgMap
   */
  name: OakSvgNames;
  color?: OakColorToken;
};

/**
 * This is component used for rendering SVGs that don't belong to be rendered with OakIcon component
 * ie. UI elements that are not icons/illustratons but are part of the design system (underline, etc)
 */
export const OakSvg: FC<OakSvgProps> = (props) => {
  const getSvgByName = (name: OakSvgNames) => {
    const SvgComponent = svgMap[name];
    return <SvgComponent />;
  };

  return (
    <StyledSvg
      aria-hidden={true}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      {...props}
    >
      {getSvgByName(props.name)}
    </StyledSvg>
  );
};
