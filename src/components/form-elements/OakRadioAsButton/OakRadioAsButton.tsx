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
const StyledOakIcon = styled(OakIcon)``;

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

type OakRadioAsButtonProps = Omit<
  BaseRadioProps,
  "defaultChecked" | "id" | "checked" | "variant" | "icon"
> & {
  value?: HTMLInputElement["value"];
  innerRef?: React.RefObject<HTMLInputElement>;
  displayValue: string;
  keepIconColor?: boolean;
  disabled?: HTMLInputElement["disabled"];
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
        variant: "with-icon";
        icon: OakIconName;
      }
    | {
        /**
         * Controls the appearance of the component.
         *
         * - `"default"`: Displays as a button
         * - `"with-icon"`: Displays an icon alongside the label
         * - `"with-radio"`: Displays a radio button
         *
         * @default `"default"`
         */
        variant?: "default" | "with-radio";
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

  const {
    icon: _icon,
    variant: _variant,
    ...restWithoutVariantProps
  } = rest as typeof rest & {
    icon?: OakIconName;
  };

  const radio = (
    <InternalRadioWrapper
      radioBorderColor="border-neutral"
      radioOuterSize="spacing-20"
      size="spacing-20"
      disableFocusRing
      internalRadio={
        <InternalRadio
          {...restWithoutVariantProps}
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
      $minHeight={"spacing-32"}
      $boxSizing="content-box"
      onClick={handleContainerClick}
    >
      {rest.variant === "with-radio" ? (
        radio
      ) : (
        <OakScreenReader>{radio}</OakScreenReader>
      )}
      {rest.variant === "with-icon" && (
        <StyledOakIcon alt="" iconName={rest.icon} />
      )}
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
