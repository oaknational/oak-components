import styled from "styled-components";

import { colorStyle, ColorStyleProps } from "@/styles/utils/colorStyle";
import { marginStyle, MarginStyleProps } from "@/styles/utils/spacingStyle";
import {
  typographyStyle,
  TypographyStyleProps,
} from "@/styles/utils/typographyStyle";

export type OakOLProps = MarginStyleProps &
  ColorStyleProps &
  TypographyStyleProps;

/**
 * Styled `ol` (ordered list) component.
 *
 * ## Usage
 *
 * Use where we have an ordered list to ensure numbers are styled
 *
 * */
export const OakOL = styled.ol<OakOLProps>`
  counter-reset: item;
  padding: 0;

  li {
    display: block;
    counter-increment: item;
    margin: 0;
    padding: 0 0 0 16px;
    text-indent: -16px;
    list-style-type: none;
    line-height: 32px;

    // Portable text generates linebreaks within list items

    br {
      content: "";
      display: block;
      margin-top: 8px;
    }
  }

  & li::before {
    padding-right: 4px;
    content: counter(item) ".";
  }
  a {
    color: ${(props) =>
      props.theme &&
      props.theme.uiColors &&
      props.theme.uiColors["text-link-active"]};
  }
  ${marginStyle}
  ${colorStyle}
  ${typographyStyle}
`;
