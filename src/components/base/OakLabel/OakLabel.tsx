import styled from "styled-components";

import {
  TypographyProps,
  typographyStyle,
} from "@/styles/utils/typographyStyle";

export type OakLabelProps = TypographyProps;
/**
 * Label renders a `label` element, exposing all the typography props.
 * ## Usage
 * Use this component when you want to apply styles to a label, likely within
 * a form.
 */
const OakLabel = styled.label<OakLabelProps>`
  ${typographyStyle}
`;

export default OakLabel;
