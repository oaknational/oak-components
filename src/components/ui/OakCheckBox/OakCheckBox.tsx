import React, { FC } from "react";
import styled from "styled-components";

export type CheckboxProps = {
  disabled: boolean;
};
type ScreenReaderCheckboxProps = {
  disabled: boolean;
};

const ScreenReaderCheckbox = styled.input.attrs({
  type: "checkbox",
})<ScreenReaderCheckboxProps>`
  cursor: ${(props) => !props.disabled && "pointer"};
`;

export const OakCheckbox: FC<CheckboxProps> = (props) => {
  const { disabled } = props;
  return (
    <div>
      <ScreenReaderCheckbox disabled={disabled} />
    </div>
  );
};
