import styled, { CSSProperties } from "styled-components";

import { OakLabel, OakLabelProps } from "@/components/form-elements/OakLabel";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { FlexStyleProps } from "@/styles/utils/flexStyle";

export type InternalCheckBoxLabelProps = {
  labelAlignItems?: FlexStyleProps["$alignItems"];
  labelGap?: FlexStyleProps["$gap"];
  disabled?: boolean;
  pointerEvents?: CSSProperties["pointerEvents"];
  "data-testid"?: string;
} & OakLabelProps;

/**
 *
 * Specialised Label Component can be used and extended to create various different versions of CheckboxLabels
 *
 */
export const InternalCheckBoxLabel = styled(
  OakLabel,
)<InternalCheckBoxLabelProps>`
  display: flex;
  align-items: center;
  ${responsiveStyle("gap", (props) => props.labelGap, parseSpacing)}
  ${responsiveStyle("align-items", (props) => props.labelAlignItems)}
`;

export const InternalCheckBoxLabelHoverDecor = styled(InternalCheckBoxLabel)`
  ${(props) => `
    ${props.pointerEvents ? `pointer-events: ${props.pointerEvents};` : ""}
    ${props.disabled ? `pointer-events: none;` : `cursor: pointer;`}
  `}
  @media (hover: hover) {
    &:hover {
      text-decoration: ${(props) => (props.disabled ? "none" : "underline")};
    }
  }
`;
