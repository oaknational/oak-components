import React, { useContext } from "react";
import styled, { css } from "styled-components";

import { RadioContext } from "@/components/ui/OakRadioGroup/OakRadioGroup";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { parseBorder } from "@/styles/helpers/parseBorder";
import { FlexStyleProps } from "@/styles/utils/flexStyle";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";
import {
  OakBox,
  OakBoxProps,
  OakFlex,
  OakFlexProps,
  OakLabel,
  OakLabelProps,
} from "@/components/base";

type RadioButtonLabelProps = {
  $labelAlignItems?: FlexStyleProps["$alignItems"];
  $labelGap?: FlexStyleProps["$gap"];
  disabled?: boolean;
} & OakLabelProps;

const RadioButtonLabel = styled(OakLabel)<RadioButtonLabelProps>`
  ${(props) =>
    !props.disabled &&
    css`
      cursor: pointer;
    `}

  display: flex;
  ${responsiveStyle("gap", (props) => props.$labelGap, parseSpacing)}
  ${responsiveStyle("align-items", (props) => props.$labelAlignItems)}
`;

const HiddenRadioButtonInput = styled.input.attrs({
  type: "radio",
})`
  position: absolute;
  opacity: 0;
  ${(props) =>
    !props.disabled &&
    css`
      cursor: pointer;
    `}
`;

type VisibleRadioButtonInputProps = OakFlexProps & {
  disabled?: boolean;
};

const VisibleRadioButtonInput = styled(OakFlex)<VisibleRadioButtonInputProps>`

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

  ${HiddenRadioButtonInput}:checked ~ &::after {
    content: "";
    height: ${parseSpacing("all-spacing-4")};
    width: ${parseSpacing("all-spacing-4")};
    background: ${parseColor("black")};
    lay: block;
    position: absolute;
    border-radius: 50%;
    border: ${parseBorder("border-solid-m")} ${parseColor("white")};
  }
      
`;

// This is a hack to force React to rerender when the disabled prop is changed. Otherwise the pseudo element is not updated.
const DisabledVisibleRadioButtonInput = styled(VisibleRadioButtonInput)`
  ${HiddenRadioButtonInput}:checked ~ &::after {
    content: "";
    height: ${parseSpacing("all-spacing-4")};
    width: ${parseSpacing("all-spacing-4")};
    background: ${parseColor("bg-btn-primary-disabled")};
    lay: block;
    position: absolute;
    border-radius: 50%;
    border: ${parseBorder("border-solid-m")} ${parseColor("white")};
  }
`;

type OakRadioButtonProps = {
  id: string;
  label: string;
  value: string;
  tabIndex?: number;
  "data-testid"?: string;
  disabled?: boolean;
} & OakBoxProps &
  RadioButtonLabelProps;

export const OakRadioButton = (props: OakRadioButtonProps) => {
  const radioContext = useContext(RadioContext);
  const { currentValue, name, onValueUpdated } = radioContext;
  const {
    id,
    label,
    value,
    tabIndex,
    disabled,
    $labelGap = "space-between-ssx",
    $labelAlignItems = "center",
    $font = "body-1",
    "data-testid": dataTestId,
    ...rest
  } = props;

  const anyDisabled = disabled || radioContext.disabled;

  return (
    <OakBox {...rest}>
      <RadioButtonLabel
        htmlFor={id}
        $labelAlignItems={$labelAlignItems}
        $labelGap={$labelGap}
        $font={$font}
        data-testid={dataTestId}
        disabled={anyDisabled}
      >
        <HiddenRadioButtonInput
          name={name}
          id={id}
          value={value}
          onChange={onValueUpdated}
          checked={value === currentValue}
          tabIndex={tabIndex}
          disabled={anyDisabled}
        />
        {!anyDisabled ? (
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
        ) : (
          <DisabledVisibleRadioButtonInput
            $height={"all-spacing-6"}
            $width={"all-spacing-6"}
            $borderRadius={"border-radius-l"}
            $ba={"border-solid-m"}
            $borderColor={"bg-btn-primary-disabled"}
            $flexGrow={0}
            $flexShrink={0}
            $alignItems={"center"}
            $justifyContent={"center"}
            $background={"white"}
          />
        )}
        {label}
      </RadioButtonLabel>
    </OakBox>
  );
};

export type OakRadioButtonType = typeof OakRadioButton;
