import React, { useRef } from "react";
import styled from "styled-components";

import { colorStyle, ColorStyleProps } from "@/styles/utils/colorStyle";
import { displayStyle, DisplayStyleProps } from "@/styles/utils/displayStyle";
import { spacingStyle, SpacingStyleProps } from "@/styles/utils/spacingStyle";
import {
  typographyStyle,
  TypographyStyleProps,
} from "@/styles/utils/typographyStyle";
import {
  dropShadowStyle,
  DropShadowStyleProps,
} from "@/styles/utils/dropShadowStyle";
import { borderStyle, BorderStyleProps } from "@/styles/utils/borderStyle";

type StyledButtonProps = TypographyStyleProps &
  SpacingStyleProps &
  ColorStyleProps &
  DisplayStyleProps &
  BorderStyleProps &
  DropShadowStyleProps;

const StyledButton = styled.button<StyledButtonProps>`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  text-align: left;
  font-family: unset;
  ${typographyStyle}
  ${colorStyle}
  ${spacingStyle}
  ${displayStyle}
  ${borderStyle}
  ${dropShadowStyle}
`;

export type OakBaseButtonProps = StyledButtonProps & {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onHovered?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    duration: number,
  ) => void;
  children?: React.ReactNode;
};

export const OakBaseButton = (props: OakBaseButtonProps) => {
  const { onClick, onHovered, ...rest } = props;

  const hoverStart = useRef(Date.now());

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  const handleMouseEnter = () => {
    hoverStart.current = Date.now();
    console.log("handleMouseEnter", hoverStart.current);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
    const delta = Date.now() - hoverStart.current;
    if (onHovered) {
      onHovered(event, delta);
    }
  };

  return (
    <StyledButton
      {...rest}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.children}
    </StyledButton>
  );
};
