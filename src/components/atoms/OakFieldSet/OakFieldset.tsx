import styled from "styled-components";

import { OakBoxProps } from "../OakBox/OakBox";

/**
 * OakFieldset renders a `fieldset`  component, without default styling.
 * ## Usage
 * Use this component when you want to group form elements such as checkboxes.
 */
export const OakFieldset = styled.fieldset<OakBoxProps>`
  border: 0px;
  margin: 0;
  padding: 0;
  min-width: 0;
`;
