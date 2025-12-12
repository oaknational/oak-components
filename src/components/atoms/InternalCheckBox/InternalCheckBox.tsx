import React, { forwardRef, useRef } from "react";
import styled, { css } from "styled-components";

import { OakBorderRadiusToken, OakUiRoleToken } from "@/styles";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { BorderStyleProps, borderStyle } from "@/styles/utils/borderStyle";
import { ColorStyleProps, colorStyle } from "@/styles/utils/colorStyle";
import { SizeStyleProps, sizeStyle } from "@/styles/utils/sizeStyle";
import { SpacingStyleProps, spacingStyle } from "@/styles/utils/spacingStyle";

/**
 *
 * These components can be used with InternalCheckBoxWrapper which allows for customisable icons
 *
 * Several flavours of checkbox are created here:
 *  - Default
 *  - Hover decorations
 *  - Focus decorations
 *  - Hover + Focus decorations
 *
 * As they are styled components they can be further customised in implementation. Alternatively additional
 * components can be created here.
 *
 */

export type BaseCheckBoxProps = {
  id: string;
  disabled?: boolean;
  value: string;
  name?: string;
  /**
   * Uncontrolled checked state
   */
  defaultChecked?: boolean;
  /**
   * Controlled checked state
   */
  checked?: boolean;
  onHovered?: (value: string, id: string, duration: number) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "data-testid"?: string;
};

const BaseCheckBox = forwardRef(
  (props: BaseCheckBoxProps, ref?: React.Ref<HTMLInputElement>) => {
    const { onHovered, ...rest } = props;

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

    return (
      <input
        ref={ref}
        type="checkbox"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        name={props.id}
        {...rest}
      />
    );
  },
);

type StyledBaseCheckBoxProps = BaseCheckBoxProps &
  ColorStyleProps &
  SpacingStyleProps &
  BorderStyleProps &
  SizeStyleProps & {
    $checkedBackground?: OakUiRoleToken | null;
    $checkedBorderColor?: OakUiRoleToken;
    $uncheckedBorderColor?: OakUiRoleToken;
  };

type HoverBaseCheckBoxProps = {
  $hoverBorderRadius: OakBorderRadiusToken;
};

/**
 *
 * These components can be used with InternalCheckBoxWrapper which allows for customisable icons
 *
 * Several flavours of checkbox are created here:
 *  - Default
 *  - Hover decorations
 *  - Focus decorations
 *  - Hover + Focus decorations
 *
 * NB. Hover decorations must be wrapped in a box with position relative to allow for the hover effect to work
 *
 * As they are styled components they can be further customised in implementation. Alternatively additional
 * components can be created here.
 *
 *
 * ## Events
 * The following callbacks are available for tracking focus events:
 *
 * ### onChange
 * onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
 *
 * ### onFocus
 *   onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onBlur
 *    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onHovered
 *  `onHovered?: (id, value, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 *
 *
 */
export const InternalCheckBox = styled(BaseCheckBox)<StyledBaseCheckBoxProps>`
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

  border-color: ${(props) => parseColor(props.$uncheckedBorderColor)};

  &:checked {
    ${(props) => css`
      background: ${parseColor(props.$checkedBackground)};
      border-color: ${parseColor(props.$checkedBorderColor)};
    `};
  }

  &:disabled {
    pointer-events: none;
  }

  @media (hover: hover) {
    &:hover:not(:disabled) {
      border-color: ${(props) => parseColor(props.$checkedBackground)};
    }
  }
`;

InternalCheckBox.defaultProps = {
  $borderRadius: "border-radius-xs",
  $ba: "border-solid-m",
  $borderColor: "text-primary",
  $checkedBackground: "text-primary",
};

export const InternalCheckBoxHover = styled(InternalCheckBox)<
  StyledBaseCheckBoxProps & HoverBaseCheckBoxProps
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
      border-radius: ${(props) => parseBorderRadius(props.$hoverBorderRadius)};
      background: ${(props) => parseColor(props.$checkedBackground)};
    }
  }
`;

InternalCheckBoxHover.defaultProps = {
  $hoverBorderRadius: "border-radius-xs",
};

const focusStyle = css`
  &:focus-visible {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")};
  }
`;

export const InternalCheckBoxFocus = styled(
  InternalCheckBox,
)<StyledBaseCheckBoxProps>`
  ${focusStyle}
`;

export const InternalCheckBoxHoverFocus = styled(InternalCheckBoxHover)<
  StyledBaseCheckBoxProps & HoverBaseCheckBoxProps
>`
  ${focusStyle}
`;
