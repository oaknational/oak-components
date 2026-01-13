import styled from "styled-components";

import { OakBoxProps, oakBoxCss } from "@/components/atoms/OakBox";

/**
 *
 * OakForm extends OakBox by taking the same props and style but applying them to a form element.
 *
 * ## To be deprecated
 * Use `<OakBox as="form">` instead
 *
 * @deprecated Use `<OakBox as="form">` instead
 */
export const OakForm = styled.form<OakBoxProps>`
  ${oakBoxCss}
`;

export type OakFormProps = OakBoxProps;
