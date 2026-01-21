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
import { parseBorder } from "@/styles/helpers/parseBorder";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { parseColorFilter } from "@/styles/helpers/parseColorFilter";
import { RadioContext } from "@/components/form-elements/OakRadioGroup/OakRadioGroup";
import { OakCombinedColorToken, OakUiRoleToken } from "@/styles";

// Converted to styled-component so it can be used in '&:checked:not(:disabled) + ${StyledOakIcon}' to change svg color.
const StyledOakIcon = styled(OakIcon)``;

const StyledInternalRadio = styled(InternalRadio)<{
  $keepIconColor?: boolean;
}>`
  position: absolute;
  opacity: 0;
  pointer-events: none;

  &:checked:not(:disabled) + ${StyledOakIcon} {
    filter: ${(props) =>
      props.$keepIconColor ? "none" : parseColorFilter("white")};
  }

  &:checked:not(:disabled) {
    border: ${parseBorder("border-solid-l")};
    border-color: ${parseColor("border-primary")};
  }

  &:checked:disabled {
    border: ${parseBorder("border-solid-l")};
    border-color: ${parseColor("text-disabled")};
  }

  &:hover:not(:disabled) {
    background: ${parseColor("bg-primary")};
  }
`;

const StyledFlexBox = styled(OakFlex)<{ $hoverBackground: OakUiRoleToken }>`
  &:has(input:not(:disabled)) {
    cursor: pointer;
  }

  &:has(input:disabled) {
    pointer-events: none;
    cursor: none;

    background-color: transparent;
    border-color: transparent;
    color: ${parseColor("text-disabled")};
  }

  &:hover:has(input:not(:disabled)) ${InternalCheckBoxLabelHoverDecor} {
    text-decoration: underline;
  }

  &:hover:has(input:not(:disabled)) {
    background-color: ${(props) => parseColor(props.$hoverBackground)};
  }

  &:focus-within {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }

  &:has(input:checked:not(:disabled)) {
    background-color: ${parseColor("bg-inverted")};
    color: ${parseColor("text-inverted")};
  }
`;

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

const pickBackgroundToken = (
  colorScheme: OakRadioAsButtonColorScheme,
): OakUiRoleToken => {
  if (colorScheme === "transparent") {
    return "transparent";
  }

  if (colorScheme === "primary") {
    return "bg-primary";
  }

  return `bg-${colorScheme}-main`;
};

const pickHoverBackgroundToken = (
  colorScheme: OakRadioAsButtonColorScheme,
): OakUiRoleToken => {
  if (colorScheme === "primary" || colorScheme === "transparent") {
    return "bg-neutral";
  }

  return `bg-${colorScheme}-very-subdued`;
};

const pickBorderColorToken = (
  colorScheme: OakRadioAsButtonColorScheme,
): OakUiRoleToken => {
  if (colorScheme === "primary" || colorScheme === "transparent") {
    return "border-neutral-lighter";
  }

  return `border-${colorScheme}`;
};

export type OakRadioAsButtonProps = Omit<
  BaseRadioProps,
  "defaultChecked" | "id" | "checked"
> & {
  innerRef?: React.RefObject<HTMLInputElement>;
  displayValue: string;
  icon?: OakIconName;
  keepIconColor?: boolean;
  disabled?: HTMLInputElement["disabled"];
  value?: HTMLInputElement["value"];
  "aria-labelledby"?: React.AriaAttributes["aria-labelledby"];
  "aria-label"?: React.AriaAttributes["aria-label"];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  colorScheme?: OakRadioAsButtonColorScheme;
};

/**
 * A radio input styled as a button, to be used within `<OakRadioGroup/>` this is
 * the radio inputs version of `<OakSearchFilterCheckBox/>`
 *
 * ## To be refactored 🔀
 * This component will be refactored to have more variants
 *
 * ## Events
 * The following callbacks are available for tracking focus events:
 *
 * ### onChange
 *  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
 *
 * ### onFocus
 *   onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onBlur
 *    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onHovered
 *  `onHovered?: (id, value, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 *
 */
export const OakRadioAsButton = (props: OakRadioAsButtonProps) => {
  const id = useId();
  const {
    value,
    disabled,
    innerRef,
    displayValue,
    icon,
    onChange,
    keepIconColor,
    colorScheme = "primary",
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

  return (
    <OakFlex $minHeight={"spacing-40"} $position={"relative"}>
      <StyledFlexBox
        $borderRadius={"border-radius-s"}
        $borderColor={pickBorderColorToken(colorScheme)}
        $ba="border-solid-s"
        $background={pickBackgroundToken(colorScheme)}
        $hoverBackground={pickHoverBackgroundToken(colorScheme)}
        onClick={handleContainerClick}
        $ph={"spacing-12"}
        $pv={"spacing-4"}
        $gap={"spacing-4"}
      >
        <StyledInternalRadio
          {...rest}
          $keepIconColor={keepIconColor}
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
        {icon && <StyledOakIcon alt="" iconName={icon} />}
        <InternalCheckBoxLabelHoverDecor
          pointerEvents="none"
          htmlFor={id}
          $font={"heading-7"}
          disabled={disabled}
        >
          {displayValue}
        </InternalCheckBoxLabelHoverDecor>
      </StyledFlexBox>
    </OakFlex>
  );
};
