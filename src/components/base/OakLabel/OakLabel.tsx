import styled from "styled-components";

import {
  TypographyStyleProps,
  typographyStyle,
} from "@/styles/utils/typographyStyle";

export type OakLabelProps = TypographyStyleProps;
/**
 * Label renders a `label` element, exposing all the typography props.
 * ## Usage
 * Use this component when you want to apply styles to a label, likely within
 * a form.
 */
export const OakLabel = styled.label<OakLabelProps>`
  ${typographyStyle}
`;
