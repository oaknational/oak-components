import React, { useRef } from "react";
import styled, { css } from "styled-components";

import { OakBorderRadiusToken, OakCombinedColorToken } from "@/styles";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { BorderStyleProps, borderStyle } from "@/styles/utils/borderStyle";
import { ColorStyleProps, colorStyle } from "@/styles/utils/colorStyle";
import { SizeStyleProps, sizeStyle } from "@/styles/utils/sizeStyle";
import { SpacingStyleProps, spacingStyle } from "@/styles/utils/spacingStyle";

/**
 *
 * Extra decor styles for the checkbox can be created here and then added to SubStyledCheckBoxDecor
 *
 */

export type SubBaseCheckBoxProps = {
  id: string;
  disabled?: boolean;
  value: string;
  defaultChecked?: boolean;
  onHovered?: (value: string, id: string, duration: number) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  "data-testid"?: string;
};

type StyledCheckBoxProps = SubBaseCheckBoxProps &
  ColorStyleProps &
  SpacingStyleProps &
  BorderStyleProps &
  SizeStyleProps & {
    $checkedBackground: OakCombinedColorToken | null;
  };

type HoverProps = {
  $hoverBorderRadius: OakBorderRadiusToken;
};

const StyledCheckBox = styled.input.attrs({
  type: "checkbox",
})<StyledCheckBoxProps>`
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  margin: 0;
  outline: none;
  ${borderStyle}
  ${colorStyle}
  ${spacingStyle}
  ${sizeStyle}

  &:checked {
    ${(props) => css`
      background: ${parseColor(props.$checkedBackground)};
    `};
  }

  &:disabled {
    pointer-events: none;
  }
`;

StyledCheckBox.defaultProps = {
  $borderRadius: "border-radius-xs",
  $ba: "border-solid-m",
  $borderColor: "text-primary",
  $checkedBackground: "text-primary",
};

const StyledCheckBoxHover = styled(StyledCheckBox)<
  StyledCheckBoxProps & HoverProps
>`
  /* @media wrapper is required to prevent hover effect on iOS Safari */

  @media (hover: hover) {
    &:hover:not(&:checked):not(&:disabled)::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 60%;
      height: 60%;
      transform: translate(-50%, -50%);
      border-radius: ${(props) => css`
        ${parseBorderRadius(props.$hoverBorderRadius)}
      `};
      background: ${(props) => css`
        ${parseColor(props.$checkedBackground)}
      `};
    }
  }
`;

StyledCheckBoxHover.defaultProps = {
  $hoverBorderRadius: "border-radius-xs",
};

const focusStyle = css`
  &:focus-visible {
    box-shadow: ${parseDropShadow("drop-shadow-centered-yellow")};
  }
`;

export const SubStyledCheckBoxFocus = styled(
  StyledCheckBox,
)<StyledCheckBoxProps>`
  ${focusStyle}
`;

export const SubStyledCheckBoxHoverFocus = styled(StyledCheckBoxHover)<
  StyledCheckBoxProps & HoverProps
>`
  ${focusStyle}
`;

export type SubStyledCheckBoxDecor = "focus" | "hover" | "hover-focus" | "none";

export type SubStyledCheckBoxProps = {
  decor?: SubStyledCheckBoxDecor;
} & StyledCheckBoxProps &
  HoverProps;

export const SubStyledCheckBox = (props: SubStyledCheckBoxProps) => {
  const { decor = "none", onHovered, ...rest } = props;

  const hoverStart = useRef(Date.now());

  const handleMouseEnter = () => {
    hoverStart.current = Date.now();
  };

  const handleMouseLeave = () => {
    const delta = Date.now() - hoverStart.current;
    if (onHovered) {
      onHovered(props.value, props.id, delta);
    }
  };

  switch (decor) {
    case "focus":
      return (
        <SubStyledCheckBoxFocus
          name={props.id}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...rest}
        />
      );
    case "hover":
      return (
        <StyledCheckBoxHover
          name={props.id}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...rest}
        />
      );
    case "hover-focus":
      return (
        <SubStyledCheckBoxHoverFocus
          name={props.id}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...rest}
        />
      );
    default:
      return (
        <StyledCheckBox
          name={props.id}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...rest}
        />
      );
  }
};
