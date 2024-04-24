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

// Converts to styled-components so it can be used in '&:checked:not(:disabled) + ${StyledOakIcon}' to change svg color.
const StyledOakIcon = styled(OakIcon)``;

const StyledInternalCheckBox = styled(InternalCheckBox)`
  position: absolute;
  opacity: 0;
  pointer-events: none;

  &:checked:not(:disabled) + ${StyledOakIcon} {
    filter: ${parseColorFilter("white")};
  }

  &:checked:not(:disabled) {
    border: ${parseBorder("border-solid-l")};
    border-color: ${parseColor("border-primary")};
  }

  &:checked:disabled {
    border: ${parseBorder("border-solid-l")};
    border-color: ${parseColor("text-disabled")};
  }

  @media (hover: hover) {
    &:hover:not(:disabled) {
      background: ${parseColor("bg-primary")};
    }
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

  @media (hover: hover) {
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
  }
`;

export type OakSearchFilterCheckBoxProps = Omit<
  BaseCheckBoxProps,
  "defaultChecked"
> & {
  innerRef?: React.RefObject<HTMLInputElement>;
  displayValue: string;
  icon: OakIconName;
};

/**
 * A checkbox for search filters.
 *
 * Takes a displayValue and icon name to display next to the checkbox, for subject icons 'subject-[subjectSlug]' should be used.
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
 */
export const OakSearchFilterCheckBox = (
  props: OakSearchFilterCheckBoxProps,
) => {
  const { id, value, disabled, innerRef, displayValue, icon, ...rest } = props;

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
    <OakFlex $width={"100%"} $position={"relative"}>
      <StyledFlexBox
        $borderRadius={"border-radius-s"}
        $borderStyle={"solid"}
        $borderColor={"border-neutral-lighter"}
        $background={"white"}
        onClick={handleContainerClick}
        $ph={"inner-padding-s"}
        $pv={"inner-padding-ssx"}
        $gap={"space-between-sssx"}
      >
        <StyledInternalCheckBox
          id={id}
          value={value}
          disabled={disabled}
          ref={inputRef}
          {...rest}
        />
        <StyledOakIcon iconName={icon} />
        <InternalCheckBoxLabelHoverDecor
          htmlFor={id}
          $font={"heading-7"}
          pointerEvents="none"
        >
          {displayValue}
        </InternalCheckBoxLabelHoverDecor>
      </StyledFlexBox>
    </OakFlex>
  );
};
