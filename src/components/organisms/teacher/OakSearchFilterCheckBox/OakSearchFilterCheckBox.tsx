import React, { useRef } from "react";
import styled from "styled-components";

import { OakFlex, OakIcon, OakIconName } from "@/components/atoms";
import { InternalCheckBoxLabelHoverDecor } from "@/components/atoms/InternalCheckBoxLabel";
import {
  BaseCheckBoxProps,
  InternalCheckBox,
} from "@/components/atoms/InternalCheckBox/InternalCheckBox";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseBorder } from "@/styles/helpers/parseBorder";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { parseColorFilter } from "@/styles/helpers/parseColorFilter";

// Converted to styled-component so it can be used in '&:checked:not(:disabled) + ${StyledOakIcon}' to change svg color.
const StyledOakIcon = styled(OakIcon)``;

const StyledInternalCheckBox = styled(InternalCheckBox)<{
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
    background-color: ${parseColor("bg-inverted")};
    color: ${parseColor("text-inverted")};
  }
`;

export type OakSearchFilterCheckBoxProps = Omit<
  BaseCheckBoxProps,
  "defaultChecked"
> & {
  innerRef?: React.RefObject<HTMLInputElement>;
  displayValue: string;
  icon?: OakIconName;
  keepIconColor?: boolean;
};

/**
 * A checkbox for search filters.
 *
 * Takes a displayValue and optional icon, for subject icons 'subject-[subjectSlug]' should be used.
 *
 * ## Events
 * The following callbacks are available for tracking focus events:
 *
 * ### onChange
 * onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
export const OakSearchFilterCheckBox = (
  props: OakSearchFilterCheckBoxProps,
) => {
  const {
    id,
    value,
    disabled,
    innerRef,
    displayValue,
    icon,
    keepIconColor,
    ...rest
  } = props;

  const defaultRef = useRef<HTMLInputElement>(null);
  const inputRef = innerRef ?? defaultRef;

  const handleContainerClick = (
    e:
      | React.MouseEvent<HTMLDivElement>
      | React.MouseEvent<HTMLInputElement>
      | React.MouseEvent<HTMLLabelElement>,
  ) => {
    const inputId = (e.target as HTMLInputElement).id;

    if (inputId !== id) {
      inputRef.current?.click();
    }
  };

  return (
    <OakFlex $minHeight={"spacing-40"} $position={"relative"}>
      <StyledFlexBox
        $borderRadius={"border-radius-s"}
        $borderColor={"border-neutral-lighter"}
        $ba="border-solid-s"
        $background={"bg-primary"}
        onClick={handleContainerClick}
        $ph={"spacing-12"}
        $pv={"spacing-4"}
        $gap={"spacing-4"}
      >
        <StyledInternalCheckBox
          id={id}
          value={value}
          disabled={disabled}
          ref={inputRef}
          $keepIconColor={keepIconColor}
          {...rest}
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
