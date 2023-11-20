import React, { useContext } from "react";
import styled from "styled-components";

import { RadioContext } from "../OakRadioGroup/OakRadioGroup";

import { parseColor } from "@/styles/helpers/parseColor";
import { RadioInputStyleProps } from "@/styles/utils/radioInputStyles";
import { flexStyle } from "@/styles/utils/flexStyle";
import { OakFlexProps } from "@/components/base";

type CustomRadioInputStyleProps = RadioInputStyleProps;
type RadioButtonLableStyleProps = OakFlexProps & CustomRadioInputStyleProps;

type OakRadioButtonProps = {
  label: string;
  value: string;
  tabIndex?: number;
} & RadioButtonLableStyleProps;

const RadioButtonLabel = styled.label<RadioButtonLableStyleProps>`
  cursor: pointer;
  ${flexStyle}
`;

const RadioButtonInput = styled.input.attrs({
  type: "radio",
})`
  opacity: 0;
`;

const CustomRadioButton = styled.span<CustomRadioInputStyleProps>`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  border: 2px solid ${parseColor("black")};

  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  background: white;
  justify-content: center;
  cursor: pointer;
  margin-right: 16px;
  &:hover {
    box-shadow: 0 0 0 3px ${parseColor("lemon")};
  }
  ${RadioButtonLabel}:hover {
    box-shadow: 0 0 0 3px ${parseColor("lemon")};
  }

  ${RadioButtonInput}:checked ~ &::after {
    content: "";
    height: 20px;
    width: 20px;
    background: ${(props) => parseColor(props.$inputCheckedColor)};
    display: block;
    position: absolute;
    border-radius: 50%;
    border: 2px solid ${parseColor("white")};
    box-shadow: 0 0 0 3px ${parseColor("lemon")};
  }

  ${RadioButtonInput}:focus ~ &::after {
    content: "";
    height: 20px;
    width: 20px;
    background: ${(props) => parseColor(props.$inputCheckedColor)};
    display: block;
    position: absolute;
    border-radius: 50%;
    border: 2px solid ${parseColor("white")};
    box-shadow: 0 0 0 3px ${parseColor("lemon")};
  }
`;

export const OakRadioButton = (props: OakRadioButtonProps) => {
  const { state, name, setState } = useContext(RadioContext);
  const { label, value, tabIndex, ...styleProps } = props;
  return (
    <RadioButtonLabel htmlFor={value} {...styleProps}>
      <RadioButtonInput
        name={name}
        id={value}
        value={value}
        onChange={(e) => setState(e.target.value)}
        checked={value === state}
        tabIndex={tabIndex}
      />
      <CustomRadioButton {...styleProps} />
      {label}
    </RadioButtonLabel>
  );
};

export type OakRadioButtonType = typeof OakRadioButton;
