import React, { ElementType, useRef, ComponentPropsWithoutRef } from "react";
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

export type InternalButtonProps<C extends ElementType = "button"> =
  StyledButtonProps & {
    as?: C;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onHovered?: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      duration: number,
    ) => void;
    // children?: React.ReactNode;
    // className?: string;
    // disabled?: boolean;
    // "data-testid"?: string;
    // type?: "button" | "submit" | "reset";
    // form?: string;
  } & ComponentPropsWithoutRef<C>;

const UnstyledInternalButton = (props: InternalButtonProps) => {
  const { onClick, onHovered, as: Component = "button", ...rest } = props;

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
      className={props.className}
      // data-testid={props["data-testid"]}
      // disabled={props.disabled}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // type={props.type ?? "button"}
      // form={props.form}
      {...rest}
    />
  );
};

// NB. We must export a styled component for it to be inheritable
export const InternalButton = styled(UnstyledInternalButton)`
  ${internalButtonCss}
`;
