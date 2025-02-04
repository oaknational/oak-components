import React, { useContext, useId, useRef } from "react";
import styled from "styled-components";

import { OakFlex, OakIcon, OakIconName } from "@/components/atoms";
import { InternalCheckBoxLabelHoverDecor } from "@/components/atoms/InternalCheckBoxLabel";
import {
  BaseRadioProps,
  InternalRadio,
} from "@/components/atoms/InternalRadio/InternalRadio";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseBorder } from "@/styles/helpers/parseBorder";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { parseColorFilter } from "@/styles/helpers/parseColorFilter";
import { RadioContext } from "@/components/molecules/OakRadioGroup/OakRadioGroup";

// Converted to styled-component so it can be used in '&:checked:not(:disabled) + ${StyledOakIcon}' to change svg color.
const StyledOakIcon = styled(OakIcon)``;

const StyledInternalRadio = styled(InternalRadio)<{
  keepIconColor?: boolean;
}>`
  position: absolute;
  opacity: 0;
  pointer-events: none;

  &:checked:not(:disabled) + ${StyledOakIcon} {
    filter: ${(props) =>
      props.keepIconColor ? "none" : parseColorFilter("white")};
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

const StyledFlexBox = styled(OakFlex)`
  &:has(input:not(:disabled)) {
    cursor: pointer;
  }

  &:has(input:disabled) {
    pointer-events: none;
    cursor: none;
  }

  &:hover:has(input:not(:disabled)) ${InternalCheckBoxLabelHoverDecor} {
    text-decoration: underline;
  }

  &:hover:has(input:not(:disabled)) {
    background-color: ${parseColor("bg-neutral")};
  }

  &:focus-within {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }

  &:has(input:checked:not(:disabled)) {
    background-color: ${parseColor("black")};
    color: ${parseColor("white")};
  }
`;

export type OakRadioAsButtonProps = Omit<
  BaseRadioProps,
  "defaultChecked" | "id"
> & {
  innerRef?: React.RefObject<HTMLInputElement>;
  displayValue: string;
  icon?: OakIconName;
  keepIconColor?: boolean;
  disabled?: HTMLInputElement["disabled"];
  checked?: HTMLInputElement["checked"];
  value?: HTMLInputElement["value"];
  "aria-labelledby"?: React.AriaAttributes["aria-labelledby"];
  "aria-label"?: React.AriaAttributes["aria-label"];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * A radio input styled as a button, to be used within `<OakRadioGroup/>` this is
 * the radio inputs version of `<OakSearchFilterCheckBox/>`
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
  const { value, disabled, innerRef, displayValue, icon, onChange, ...rest } =
    props;
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

  return (
    <OakFlex $minHeight={"all-spacing-8"} $position={"relative"}>
      <StyledFlexBox
        $borderRadius={"border-radius-s"}
        $borderColor={"border-neutral-lighter"}
        $ba="border-solid-s"
        $background={"white"}
        onClick={handleContainerClick}
        $ph={"inner-padding-s"}
        $pv={"inner-padding-ssx"}
        $gap={"space-between-sssx"}
      >
        <StyledInternalRadio
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
          checked={currentValue === value}
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
