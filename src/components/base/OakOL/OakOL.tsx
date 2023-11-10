import styled from "styled-components";

import {
  OakColorProps,
  colorStyle,
  MarginProps,
  marginStyle,
  typographyStyle,
  OakTypographyCssProps,
} from "@/styles";

export type OakOLProps = MarginProps & OakColorProps & OakTypographyCssProps;

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
