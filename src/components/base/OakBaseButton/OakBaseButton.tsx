import React, { useRef } from "react";
import styled from "styled-components";

import { colorStyle, OakColorProps } from "@/styles/utils/colorStyle";
import { displayStyle, OakDisplayProps } from "@/styles/utils/displayStyle";
import { spacingStyle, OakSpacingProps } from "@/styles/utils/spacingStyle";
import {
  typographyStyle,
  OakTypographyCssProps,
} from "@/styles/utils/typographyStyle";
import {
  borderStyle,
  dropShadowStyle,
  OakBorderProps,
  OakDropShadowProps,
} from "@/styles";

type StyledButtonProps = OakTypographyCssProps &
  OakSpacingProps &
  OakColorProps &
  OakDisplayProps &
  OakBorderProps &
  OakDropShadowProps;

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
      Some text
    </StyledButton>
  );
};
