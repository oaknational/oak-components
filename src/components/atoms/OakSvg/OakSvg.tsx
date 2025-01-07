import React, { FC } from "react";
import styled from "styled-components";

import { OakColorToken } from "@/styles";
import { oakBoxCss, OakBoxProps } from "@/components/atoms/OakBox";
// svgs
import { HeaderUnderline } from "@/svgs";

const svgMap = {
  "header-underline": HeaderUnderline,
};

export type OakSvgNames = keyof typeof svgMap;

const StyledSvg = styled.svg<OakBoxProps>`
  ${oakBoxCss};
  transition: all 0.3s ease;
`;

export type OakSvgProps = OakBoxProps & {
  name: OakSvgNames;
  color?: OakColorToken;
};

export const OakSvg: FC<OakSvgProps> = (props) => {
  return (
    <StyledSvg
      aria-hidden={true}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      {...props}
    >
      {props.name === "header-underline" && <HeaderUnderline />}
    </StyledSvg>
  );
};
