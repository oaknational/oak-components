import styled from "styled-components";

// import {
//   typographyStyle,
//   TypographyProps,
// } from "@/styles/utils/typographyStyle";

import { OakBox, OakBoxProps } from "@/components/base/OakBox";

// TODO: Implement once typography is implemented
// type TypographyComponent = OakBoxProps & TypographyProps;
export type OakTypographyProps = OakBoxProps;

/**
 * The Typography component sets a typography style context from which children
 * inherit style properties through the cascade.
 * ## Usage
 * This should be the primary component to set a typography context.
 * Use this component whenever you want to style blocks of 'body' text.
 */

// const Typography = styled(OakBox)<TypographyComponent>`
//   ${typography}
// `;

export const OakTypography = styled(OakBox)<OakTypographyProps>``;
