import styled from "styled-components";

import { OakBoxProps, oakBoxCss } from "../OakBox";

/**
 *
 * Inherit everything from OakBox, but change the element to a form.
 *
 * @deprecated Use `<OakBox as="form">` instead
 */
export const OakForm = styled.form<OakBoxProps>`
  ${oakBoxCss}
`;

export type OakFormProps = OakBoxProps;
