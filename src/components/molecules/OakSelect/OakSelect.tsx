import React, { ChangeEventHandler, ReactNode } from "react";
import styled from "styled-components";

import { NativeSelect } from "./NativeSelect";

import { OakFlex, OakIcon } from "@/components/atoms";
import { OakCombinedColorToken, OakDropShadowToken } from "@/styles";
import { DisplayStyleProps } from "@/styles/utils/displayStyle";

export const IconUp = styled(OakFlex)`
  user-select: none;
`;

export const IconDown = styled(OakFlex)`
  user-select: none;
`;

const StyledWrapper = styled(OakFlex)`
  select ~ ${IconDown} {
    display: block;
  }

  select:open ~ ${IconDown} {
    display: none;
  }

  select ~ ${IconUp} {
    display: none;
  }

  select:open ~ ${IconUp} {
    display: block;
  }
`;

export type OakSelectProps = {
  id?: string;
  children: ReactNode;
  /**
   * Disables user input and updates the appearance accordingly.
   */
  disabled?: boolean;
  /**
   * Makes the input read-only. Preventing the user from changing the value.
   */
  readOnly?: boolean;
  /**
   * Sets the value. Use this in controlled components;
   */
  value?: string;
  /**
   * Used to target the input element in tests.
   */
  "data-testid"?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  /**
   * Alters the appearance of the input field to indicate whether the input is valid or invalid.
   */
  validity?: "valid" | "invalid";
  /**
   * Give the field a highlight to draw attention to it
   */
  isHighlighted?: boolean;
  validBorderColor?: OakCombinedColorToken;
  invalidBorderColor?: OakCombinedColorToken;
  validIconColor?: OakCombinedColorToken;
  invalidIconColor?: OakCombinedColorToken;
  color?: OakCombinedColorToken;
  hoverBackground?: OakCombinedColorToken;
  background?: OakCombinedColorToken;
  borderColor?: OakCombinedColorToken;
  focusRingDropShadows?: OakDropShadowToken[];
  disabledBackgroundColor?: OakCombinedColorToken;
  readOnlyBorderColor?: OakCombinedColorToken;
  disabledColor?: OakCombinedColorToken;
  readOnlyColor?: OakCombinedColorToken;
  highlightBackgroundColor?: OakCombinedColorToken;
  $display?: DisplayStyleProps["$display"];
  name?: HTMLSelectElement["name"];
};

export function OakSelect({
  id,
  borderColor = "border-primary",
  readOnlyBorderColor = "border-neutral",
  focusRingDropShadows = [
    "drop-shadow-centered-lemon",
    "drop-shadow-centered-grey",
  ],
  background = "bg-primary",
  hoverBackground = "bg-neutral",
  disabledBackgroundColor = "bg-neutral",
  highlightBackgroundColor = "bg-decorative5-main",
  color = "text-primary",
  disabledColor = "text-disabled",
  readOnlyColor = "text-subdued",
  validity,
  validBorderColor = "border-success",
  invalidBorderColor = "border-error",
  isHighlighted = false,
  $display = "inline-block",
  children,
  name,
  onChange,
  ...props
}: Readonly<OakSelectProps>) {
  let finalBackgroundColor = background;
  let finalBorderColor = borderColor;
  let finalReadOnlyBorderColor = readOnlyBorderColor;

  switch (true) {
    case validity === "valid":
      finalBorderColor = validBorderColor;
      finalReadOnlyBorderColor = validBorderColor;
      break;
    case validity === "invalid":
      finalBorderColor = invalidBorderColor;
      finalReadOnlyBorderColor = invalidBorderColor;
      break;
    case isHighlighted:
      finalBackgroundColor = highlightBackgroundColor;
      break;
  }

  return (
    <StyledWrapper
      $display={$display}
      $position={"relative"}
      $alignItems="center"
      $gap="spacing-16"
    >
      <NativeSelect
        key={props.value}
        $pa={"spacing-16"}
        $background={finalBackgroundColor}
        $borderColor={finalBorderColor}
        $pr={"spacing-56"}
        $focusRingDropShadows={focusRingDropShadows}
        $ba="border-solid-m"
        disabled={!!props.disabled}
        $borderRadius="border-radius-s"
        $hoverBackground={hoverBackground}
        $disabledBackgroundColor={disabledBackgroundColor}
        $readOnlyBorderColor={finalReadOnlyBorderColor}
        $disabledColor={disabledColor}
        $readOnlyColor={readOnlyColor}
        $color={color}
        $disabled={!!props.disabled}
        $readOnly={!!props.readOnly}
        id={id}
        name={name}
        onChange={onChange}
      >
        <button>
          <selectedcontent></selectedcontent>
        </button>
        {children}
      </NativeSelect>
      <IconUp
        $position={"absolute"}
        $top={"spacing-0"}
        $bottom={"spacing-0"}
        $right={"spacing-12"}
        $pointerEvents={"none"}
        $alignContent={"center"}
      >
        <OakIcon iconName="chevron-up" />
      </IconUp>
      <IconDown
        $position={"absolute"}
        $top={"spacing-0"}
        $bottom={"spacing-0"}
        $right={"spacing-12"}
        $pointerEvents={"none"}
        $alignContent={"center"}
      >
        <OakIcon iconName="chevron-down" />
      </IconDown>
    </StyledWrapper>
  );
}
