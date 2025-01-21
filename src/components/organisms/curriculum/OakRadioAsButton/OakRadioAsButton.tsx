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
} & ( // This ensures that either aria-labelledby or aria-label are provided, but not both
    | { "aria-labelledby": string; "aria-label"?: never }
    | { "aria-labelledby"?: never; "aria-label": string }
  );

/**
 * A radio input styled as a button, to be used within <RadioGroup/>
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
    "aria-labelledby": ariaLabelledBy,
    "aria-label": ariaLabel,
    ...rest
  } = props;
  const { name } = useContext(RadioContext);

  const defaultRef = useRef<HTMLInputElement>(null);
  const inputRef = innerRef ?? defaultRef;

  const handleContainerClick = () => {
    inputRef.current?.click();
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
        role="radiogroup"
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabel}
      >
        <StyledInternalRadio
          id={id}
          value={value}
          disabled={disabled}
          ref={inputRef}
          {...rest}
          name={name}
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
