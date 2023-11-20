import React, { useContext } from "react";
import styled from "styled-components";

import { RadioContext } from "../OakRadioGroup/OakRadioGroup";

import { parseColor } from "@/styles/helpers/parseColor";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { parseBorder } from "@/styles/helpers/parseBorder";
import { FlexStyleProps, flexStyle } from "@/styles/utils/flexStyle";
import {
  OakBoxProps,
  OakFlex,
  OakLabel,
  OakLabelProps,
  oakBoxCss,
} from "@/components/base";
import { DisplayStyleProps } from "@/styles/utils/displayStyle";
import { ColorStyleProps, colorStyle } from "@/styles/utils/colorStyle";

type VisibleRadioInputStyleProps = FlexStyleProps;

type RadioButtonLabelProps = Pick<FlexStyleProps, "$gap" | "$alignItems"> &
  Pick<OakLabelProps, "$font"> &
  DisplayStyleProps &
  ColorStyleProps;

type HiddenRadioInputStyleProps = Pick<OakBoxProps, "$opacity" | "$position">;

type OakRadioButtonProps = {
  label: string;
  value: string;
  tabIndex?: number;
} & VisibleRadioInputStyleProps &
  RadioButtonLabelProps;

const RadioButtonLabel = styled(OakLabel)<RadioButtonLabelProps>`
  cursor: pointer;
  ${flexStyle}
  ${colorStyle}
`;

const HiddenRadioButtonInput = styled.input.attrs({
  type: "radio",
})<HiddenRadioInputStyleProps>`
  ${oakBoxCss}
`;

const VisibleRadioButtonInput = styled(OakFlex)<VisibleRadioInputStyleProps>`
 
  ${HiddenRadioButtonInput}:focus-visible ~ &::before {
    content: "";
    height: ${parseSpacing("all-spacing-7")};
    width: ${parseSpacing("all-spacing-7")};
    background: "transparent"
    display: block;
    position: absolute;
    border-radius: 50%;
    border: ${parseBorder("border-solid-m")} ${parseColor("grey60")};
    box-shadow: ${`inset 0 0 0 0.13rem ${parseColor("lemon")}`};
  }
  }
  ${HiddenRadioButtonInput}:checked ~ &::after {
    content: "";
    height: ${parseSpacing("all-spacing-4")};
    width: ${parseSpacing("all-spacing-4")};
    background: ${parseColor("black")};
    display: block;
    position: absolute;
    border-radius: 50%;
    border: ${parseBorder("border-solid-m")} ${parseColor("white")};
  }
`;

export const OakRadioButton = (props: OakRadioButtonProps) => {
  const radioContext = useContext(RadioContext);
  const { currentValue, name, onValueUpdated } = radioContext;
  const {
    label,
    value,
    tabIndex,
    $gap = "space-between-ssx",
    $font = "body-1",
    $color = "black",
    $background,
  } = props;
  return (
    <RadioButtonLabel
      htmlFor={value}
      $gap={$gap}
      $font={$font}
      $display={"flex"}
      $alignItems={"center"}
      $color={$color}
      $background={$background}
    >
      <HiddenRadioButtonInput
        name={name}
        id={value}
        value={value}
        onChange={onValueUpdated}
        checked={value === currentValue}
        tabIndex={tabIndex}
        $opacity={"transparent"}
        $position={"absolute"}
      />
      <VisibleRadioButtonInput
        $height={"all-spacing-6"}
        $width={"all-spacing-6"}
        $borderRadius={"border-radius-l"}
        $ba={"border-solid-m"}
        $borderColor={"black"}
        $flexGrow={0}
        $flexShrink={0}
        $alignItems={"center"}
        $justifyContent={"center"}
        $background={"white"}
      />
      {label}
    </RadioButtonLabel>
  );
};

export type OakRadioButtonType = typeof OakRadioButton;
