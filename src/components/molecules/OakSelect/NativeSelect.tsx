import styled, { css } from "styled-components";

import { OakUiRoleToken, OakDropShadowToken } from "@/styles";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { borderStyle, BorderStyleProps } from "@/styles/utils/borderStyle";
import { paddingStyle, SpacingStyleProps } from "@/styles/utils/spacingStyle";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { colorStyle, ColorStyleProps } from "@/styles/utils/colorStyle";

export const NativeSelect = styled("select")<
  SpacingStyleProps &
    ColorStyleProps &
    BorderStyleProps & {
      $focusRingDropShadows: OakDropShadowToken[];
      $hoverBackground?: OakUiRoleToken;
      $readOnly?: boolean;
      $readOnlyBorderColor?: OakUiRoleToken;
      $readOnlyColor?: OakUiRoleToken;
      $disabledBackgroundColor?: OakUiRoleToken;
      $disabledColor?: OakUiRoleToken;
      $disabled?: boolean;
    }
>`
  border: none;
  outline: none;
  width: 100%;

  appearance: none;
  appearance: base-select;

  ${(props) =>
    !props.$readOnly &&
    css`
      @media (hover: hover) {
        &:hover:not(:focus-within) {
          background: ${parseColor(props.$hoverBackground)};
        }
      }
    `}

  ${(props) =>
    props.$readOnly &&
    css`
      border-color: ${parseColor(props.$readOnlyBorderColor)};
      color: ${parseColor(props.$readOnlyColor)};
    `}

  ${(props) =>
    props.$disabled &&
    css`
      background: ${parseColor(props.$disabledBackgroundColor)};
      color: ${parseColor(props.$disabledColor)};
      &:hover {
        cursor: not-allowed;
      }
    `}

  border-radius: ${parseBorderRadius("border-radius-s")};

  &:focus {
    box-shadow: ${(props) =>
      props.$focusRingDropShadows
        .map((dropShadow) => parseDropShadow(dropShadow))
        .join(",")};
  }

  &::picker(select) {
    appearance: none;
    appearance: base-select;
    border-bottom-left-radius: ${parseBorderRadius("border-radius-s")};
    border-bottom-right-radius: ${parseBorderRadius("border-radius-s")};
    overflow: visible;
    ${borderStyle};
    ${colorStyle};
    border-top: none;
  }

  ::picker(select) {
    top: calc(anchor(bottom) - 2px);
    left: anchor(0);
  }

  ::picker-icon {
    display: none;
  }

  ${paddingStyle};
  ${borderStyle};
  ${colorStyle};

  &:open {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;

    ::picker(select) {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
  }
`;
