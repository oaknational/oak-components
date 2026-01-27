import styled from "styled-components";

import {
  typographyStyle,
  TypographyStyleProps,
} from "@/styles/utils/typographyStyle";
import { OakBox, OakBoxProps } from "@/components/layout-and-structure/OakBox";

export type OakTypographyProps = OakBoxProps & TypographyStyleProps;

/**
 * The Typography component sets a typography style context from which children
 * inherit style properties through the cascade.
 * ## Usage
 * This should be the primary component to set a typography context.
 * Use this component whenever you want to style blocks of 'body' text.
 */
export const OakTypography = styled(OakBox)<OakTypographyProps>`
  ${typographyStyle}
`;
