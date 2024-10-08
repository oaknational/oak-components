import styled from "styled-components";

import { OakBoxProps, oakBoxCss } from "@/components/atoms/OakBox";
export type OakFieldsetProps = OakBoxProps;
/**
 * OakFieldset renders a custom `fieldset` component, removes default styling of fieldset.
  color, opacity, margin, padding, border and typography styles can be passed in also.
 */
export const OakFieldset = styled.fieldset<OakFieldsetProps>`
  border: 0;
  margin: 0;
  padding: 0;
  ${oakBoxCss};
`;
