import React, { useContext } from "react";
import styled from "styled-components";

import { RadioContext } from "../OakRadioGroup/OakRadioGroup";

import { parseColor } from "@/styles/helpers/parseColor";
import { OakColorToken } from "@/styles";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { parseBorder } from "@/styles/helpers/parseBorder";

type CustomRadioInputStyleProps = {
  $inputCheckedColor?: OakColorToken;
  $inputHoverColor?: OakColorToken;
};
// type RadioButtonLableStyleProps = CustomRadioInputStyleProps;

type OakRadioButtonProps = {
  label: string;
  value: string;
  tabIndex?: number;
} & CustomRadioInputStyleProps;

const RadioButtonLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const HiddenRadioButtonInput = styled.input.attrs({
  type: "radio",
})`
  opacity: 0;
  position: absolute;
`;

const VisibleRadioButtonInput = styled.span<CustomRadioInputStyleProps>`
  height: ${parseSpacing("all-spacing-6")};
  width: ${parseSpacing("all-spacing-6")};
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  border: ${parseBorder("border-solid-m")} ${parseColor("black")};

  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  background: ${parseColor("white")};
  justify-content: center;
  cursor: pointer;
  margin-right: ${parseSpacing("all-spacing-4")};
  ${HiddenRadioButtonInput}:focus-visible ~ & {
    box-shadow: ${(props) => `0 0 0 3px ${parseColor(props.$inputHoverColor)}`};
  }

  ${HiddenRadioButtonInput}:checked ~ &::after {
    content: "";
    height: ${parseSpacing("all-spacing-5")};
    width: ${parseSpacing("all-spacing-5")};
    background: ${(props) => parseColor(props.$inputCheckedColor)};
    display: block;
    position: absolute;
    border-radius: 50%;
    border: 2px solid ${parseColor("white")};
  }
`;

export const OakRadioButton = (props: OakRadioButtonProps) => {
  const radioContext = useContext(RadioContext);
  const { currentValue, name, onValueUpdated } = radioContext;
  const { label, value, tabIndex, ...styleProps } = props;
  return (
    <>
      <RadioButtonLabel htmlFor={value} {...styleProps}>
        <HiddenRadioButtonInput
          name={name}
          id={value}
          value={value}
          onChange={onValueUpdated}
          checked={value === currentValue}
          tabIndex={tabIndex}
        />
        <VisibleRadioButtonInput {...styleProps} />
        {label}
      </RadioButtonLabel>
    </>
  );
};

export type OakRadioButtonType = typeof OakRadioButton;
