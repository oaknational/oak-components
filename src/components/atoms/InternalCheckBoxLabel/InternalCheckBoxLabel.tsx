import styled, { css } from "styled-components";

import { OakLabel, OakLabelProps } from "@/components/atoms";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { FlexStyleProps } from "@/styles/utils/flexStyle";

export type InternalCheckBoxLabelProps = {
  labelAlignItems?: FlexStyleProps["$alignItems"];
  labelGap?: FlexStyleProps["$gap"];
  disabled?: boolean;
  "data-testid"?: string;
} & OakLabelProps;

export const InternalCheckBoxLabel = styled(
  OakLabel,
)<InternalCheckBoxLabelProps>`
  display: flex;
  align-items: center;
  ${responsiveStyle("gap", (props) => props.labelGap, parseSpacing)}
  ${responsiveStyle("align-items", (props) => props.labelAlignItems)}
`;

export const InternalCheckBoxLabelHoverDecor = styled(InternalCheckBoxLabel)`
  ${(props) =>
    props.disabled
      ? css`
          pointer-events: none;
        `
      : css`
          cursor: pointer;
        `}
  @media (hover: hover) {
    &:hover {
      text-decoration: ${(props) => (props.disabled ? "none" : "underline")};
    }
  }
`;
