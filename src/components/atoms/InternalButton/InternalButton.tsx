import React, { ElementType, useRef } from "react";
import styled, { css } from "styled-components";

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
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";

type StyledButtonProps = TypographyStyleProps &
  SpacingStyleProps &
  ColorStyleProps &
  DisplayStyleProps &
  BorderStyleProps &
  DropShadowStyleProps & {
    isLoading?: boolean;
  };

const internalButtonCss = css<StyledButtonProps>`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  text-align: left;
  font-family: unset;
  outline: none;
  ${typographyStyle}
  ${colorStyle}
  ${spacingStyle}
  ${displayStyle}
  ${borderStyle}
  ${dropShadowStyle}
  &:disabled {
    pointer-events: none;
    cursor: default;
  }
`;

export type InternalButtonProps = StyledButtonProps & {
  onHovered?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    duration: number,
  ) => void;
};

const UnstyledInternalButton = <C extends ElementType = "button">(
  props: InternalButtonProps & PolymorphicPropsWithoutRef<C>,
) => {
  const { onClick, onHovered, element: Component = "button", ...rest } = props;

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
    <Component
      {...rest}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

// NB. We must export a styled component for it to be inheritable
export const InternalButton = styled(UnstyledInternalButton)`
  ${internalButtonCss}
`;
