import React, { ComponentType, FC } from "react";
import styled from "styled-components";

import { OakColorToken } from "@/styles";
import {
  oakBoxCss,
  OakBoxProps,
} from "@/components/layout-and-structure/OakBox";

const StyledSvg = styled.svg<OakBoxProps>`
  ${oakBoxCss};
  transition: all 0.3s ease;
`;

export type OakSvgProps = OakBoxProps & {
  /**
   * The name of the svg to render
   * Accepts an svg name token from the svgMap
   */
  svg: ComponentType<React.SVGProps<SVGSVGElement>>;
  color?: OakColorToken;
};

/**
 * This is component used for rendering SVGs that don't belong to be rendered with OakIcon component
 * ie. UI elements that are not icons/illustratons but are part of the design system (underline, etc)
 */
export const OakSvg: FC<OakSvgProps> = ({ svg: Svg, ...props }) => {
  return (
    <StyledSvg
      aria-hidden={true}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      {...props}
    >
      <Svg {...props} />
    </StyledSvg>
  );
};
