import styled from "styled-components";

import { OakTypographyProps } from "../OakTypography";

import { OakColorProps, MarginProps, colorStyle, marginStyle } from "@/styles";
import { typographyStyle } from "@/styles/utils/typographyStyle";

export type OakPProps = MarginProps & OakTypographyProps & OakColorProps;

/**
 * Styled `p` (paragraph) component.
 * ## Usage
 * In general, using a `p` as a descendant of `<Body>` should suffice.
 * However, if you want different styles for a particular paragraph,
 * you can use this component to apply additional styles.
 */
export const OakP = styled.p<OakPProps>`
  ${typographyStyle}
  ${colorStyle}
  ${marginStyle}

  a {
    color: ${(props) =>
      props.theme &&
      props.theme.uiColors &&
      props.theme.uiColors["text-link-active"]};
  }
`;
