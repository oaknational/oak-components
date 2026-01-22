import React, { useContext, useId, useRef } from "react";
import styled from "styled-components";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakIcon, OakIconName } from "@/components/images-and-icons/OakIcon";
import { InternalCheckBoxLabelHoverDecor } from "@/components/internal-components/InternalCheckBoxLabel";
import {
  BaseRadioProps,
  InternalRadio,
} from "@/components/internal-components/InternalRadio/InternalRadio";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { parseColorFilter } from "@/styles/helpers/parseColorFilter";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { RadioContext } from "@/components/form-elements/OakRadioGroup/OakRadioGroup";
import { OakCombinedColorToken, OakUiRoleToken } from "@/styles";
import { InternalRadioWrapper } from "@/components/internal-components/InternalRadioWrapper";
import { OakScreenReader } from "@/components/messaging-and-feedback/OakScreenReader";
import { SizeStyleProps } from "@/styles/utils/sizeStyle";

type DecorativeBackgroundMain = Extract<
  OakCombinedColorToken,
  `bg-decorative${number}-main`
>;
type DecorativeColorScheme =
  DecorativeBackgroundMain extends `bg-${infer N}-main` ? N : never;
type OakRadioAsButtonColorScheme =
  | DecorativeColorScheme
  | "primary"
  | "transparent";

// Converted to styled-component so it can be used in '&:checked:not(:disabled) + ${StyledOakIcon}' to change svg color.
// Negate the whole component's padding-block so to that the icon variant fits the min-height of 40px.
// Ensures the padding appears when label is multi line.
// 32 (icon height) + 8 (padding-block) + 2 (borders) = 42
const StyledOakIcon = styled(OakIcon)`
  margin-block: -${parseSpacing("spacing-4")};
`;

const StyledFlexBox = styled(OakFlex)<{
  $colorSchemeTokens: ColorSchemeTokens;
  $keepIconColor?: boolean;
}>`
  cursor: pointer;
  background-color: ${(props) =>
    parseColor(props.$colorSchemeTokens.background)};
  border-color: ${(props) => parseColor(props.$colorSchemeTokens.borderColor)};
  color: ${parseColor("text-primary")};

  &:has(input:disabled) {
    pointer-events: none;
    cursor: none;
    background-color: ${(props) =>
      parseColor(props.$colorSchemeTokens.disabledBackground)};
    border-color: ${(props) =>
      parseColor(props.$colorSchemeTokens.disabledBorderColor)};
    color: ${parseColor("text-disabled")};
  }

  &:hover:has(input:not(:disabled)) ${InternalCheckBoxLabelHoverDecor} {
    text-decoration: underline;
  }

  &:hover:has(input:not(:disabled)) {
    background-color: ${(props) =>
      parseColor(props.$colorSchemeTokens.hoverBackground)};
  }

  &:focus-within {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }

  &:has(input:checked:not(:disabled)) {
    background-color: ${parseColor("bg-inverted")};
    color: ${parseColor("text-inverted")};
  }

  &:has(input:checked:not(:disabled)) ${StyledOakIcon} {
    filter: ${(props) =>
      props.$keepIconColor ? "none" : parseColorFilter("white")};
  }
`;

type ColorSchemeTokens = {
  background: OakUiRoleToken;
  hoverBackground: OakUiRoleToken;
  borderColor: OakUiRoleToken;
  disabledBackground: OakUiRoleToken;
  disabledBorderColor: OakUiRoleToken;
};

const getColorSchemeTokens = (
  colorScheme: OakRadioAsButtonColorScheme,
): ColorSchemeTokens => {
  switch (colorScheme) {
    case "primary":
      return {
        background: "bg-primary",
        hoverBackground: "bg-neutral",
        borderColor: "border-neutral-lighter",
        disabledBackground: "bg-btn-secondary-disabled",
        disabledBorderColor: "border-neutral-lighter",
      };
    case "transparent":
      return {
        background: "transparent",
        hoverBackground: "transparent",
        borderColor: "transparent",
        disabledBackground: "transparent",
        disabledBorderColor: "transparent",
      };
    default:
      return {
        background: `bg-${colorScheme}-main`,
        hoverBackground: `bg-${colorScheme}-very-subdued`,
        borderColor: `border-${colorScheme}`,
        disabledBackground: "bg-btn-secondary-disabled",
        disabledBorderColor: "border-neutral-lighter",
      };
  }
};

export type OakRadioAsButtonProps = Omit<
  BaseRadioProps,
  "defaultChecked" | "id" | "checked"
> & {
  innerRef?: React.RefObject<HTMLInputElement>;
  displayValue: string;
  keepIconColor?: boolean;
  disabled?: HTMLInputElement["disabled"];
  value?: HTMLInputElement["value"];
  "aria-labelledby"?: React.AriaAttributes["aria-labelledby"];
  "aria-label"?: React.AriaAttributes["aria-label"];
  /**
   * Sets the color scheme of the component.
   * Defaults to `"primary"`.
   */
  colorScheme?: OakRadioAsButtonColorScheme;
  width?: SizeStyleProps["$width"];
} & (
    | {
        /**
         * Controls whether this component displays an icon alongside the label.
         * Defaults to `"icon"` for backwards compatibility.
         */
        variant?: "icon";
        icon?: OakIconName;
      }
    | {
        variant: "radio";
        icon?: never;
      }
  );

/**
 * A radio input styled as a button, to be used within `<OakRadioGroup/>`.
 */
export const OakRadioAsButton = (props: OakRadioAsButtonProps) => {
  const id = useId();
  const {
    value,
    disabled,
    innerRef,
    displayValue,
    onChange,
    variant = "icon",
    icon,
    keepIconColor,
    colorScheme = "primary",
    width,
    ...rest
  } = props;

  const { name, onValueUpdated, currentValue } = useContext(RadioContext);
  const defaultRef = useRef<HTMLInputElement>(null);
  const inputRef = innerRef ?? defaultRef;

  const handleContainerClick = (
    e:
      | React.MouseEvent<HTMLDivElement>
      | React.MouseEvent<HTMLInputElement>
      | React.MouseEvent<HTMLLabelElement>,
  ) => {
    const el = e.target as HTMLInputElement;

    if (!el.isEqualNode(inputRef.current)) {
      inputRef.current?.click();
    }
  };

  const isChecked = currentValue === value;
  const colorSchemeTokens = getColorSchemeTokens(colorScheme);

  const radio = (
    <InternalRadioWrapper
      radioBorderColor="border-neutral"
      radioOuterSize="spacing-20"
      size="spacing-20"
      disableFocusRing
      internalRadio={
        <InternalRadio
          {...rest}
          id={id}
          value={value}
          disabled={disabled}
          ref={inputRef}
          onChange={(e) => {
            onValueUpdated?.(e);
            onChange?.(e);
          }}
          name={name}
          checked={isChecked}
        />
      }
    />
  );

  return (
    <StyledFlexBox
      $borderRadius={"border-radius-s"}
      $ba="border-solid-s"
      $pv={"spacing-4"}
      $ph={"spacing-12"}
      $gap={"spacing-8"}
      $alignItems={"center"}
      $keepIconColor={keepIconColor}
      $colorSchemeTokens={colorSchemeTokens}
      $width={width ?? "fit-content"}
      $minHeight={"spacing-40"}
      onClick={handleContainerClick}
    >
      {variant === "radio" ? radio : <OakScreenReader>{radio}</OakScreenReader>}
      {variant === "icon" && icon && <StyledOakIcon alt="" iconName={icon} />}
      <InternalCheckBoxLabelHoverDecor
        pointerEvents="none"
        htmlFor={id}
        $font={"heading-7"}
        disabled={disabled}
      >
        {displayValue}
      </InternalCheckBoxLabelHoverDecor>
    </StyledFlexBox>
  );
};
