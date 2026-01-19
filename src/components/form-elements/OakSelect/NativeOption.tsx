import styled from "styled-components";

import { NativeOptGroup } from "./NativeOptGroup";

import { OakDropShadowToken } from "@/styles";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { paddingStyle, PaddingStyleProps } from "@/styles/utils/spacingStyle";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import {
  parseFontSize,
  parseFontWeight,
} from "@/styles/helpers/parseTypography";
import { colorStyle } from "@/styles/utils/colorStyle";

export const NativeOption = styled("option")<
  PaddingStyleProps & {
    $focusRingDropShadows?: OakDropShadowToken[];
    $asDefault?: boolean;
  }
>`
  cursor: pointer;
  border: none;
  color: ${parseColor("text-primary")};
  outline: none;
  font: ${(props) =>
    parseFontSize(props.$asDefault ? "body-2" : "body-2-bold")};
  font-weight: ${(props) =>
    parseFontWeight(props.$asDefault ? "body-2" : "body-2-bold")};
  border-radius: ${parseBorderRadius("border-radius-xs")};

  &:focus {
    box-shadow: ${(props) =>
      props.$focusRingDropShadows
        ?.map((dropShadow) => parseDropShadow(dropShadow))
        .join(",") ?? "none"};
  }

  &:disabled {
    background: ${parseColor("bg-neutral-stronger")};
    color: ${parseColor("text-subdued")};
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    background: initial;
  }

  &::checkmark {
    display: none;
  }

  ${NativeOptGroup} & {
    padding-left: ${parseSpacing("spacing-32")};
  }

  ${paddingStyle};
  ${colorStyle};
`;
