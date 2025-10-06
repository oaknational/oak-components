import React, { useState, forwardRef } from "react";
import styled from "styled-components";

import { OakFlex } from "@/components/atoms/OakFlex";
import { OakTextArea, OakTextAreaProps } from "@/components/atoms/OakTextArea";
import { OakSpan, OakLabel, OakIcon, OakP } from "@/components/atoms";
import { parseColor } from "@/styles/helpers/parseColor";
import { OakCombinedSpacingToken } from "@/styles";
import { ResponsiveValues } from "@/styles/utils/responsiveStyle";

// For example you could restyle the OakFlex component by adding the styles to the css template literal below

export type OakMultilineTextProps = {
  /**
   * Height of component
   */
  $height?: ResponsiveValues<OakCombinedSpacingToken>;
  /**
   * Maximum number of characters
   */
  charLimit: number;
  /**
   * Placeholder text
   */
  placeholder?: string;
  $width?: ResponsiveValues<OakCombinedSpacingToken>;
  disabled?: boolean;
  ariaLabel?: string;
  invalidText?: string;
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: (value: string) => void;
  onError?: (error: string) => void;
  label?: string;
} & OakTextAreaProps;

type StyledOakTextAreaProps = {
  isError?: boolean;
} & OakTextAreaProps;

const StyledOakTextArea = styled(OakTextArea)<StyledOakTextAreaProps>`
  &:focus-visible {
    border-color: ${(props) =>
      props.isError ? parseColor("red") : parseColor("border-primary")};
    color: ${parseColor("text-primary")};
  }

  &:hover {
    background: ${parseColor("bg-neutral")};
    border-color: ${parseColor("border-neutral")};
  }
`;

const UnstyledComponent = forwardRef(
  (
    {
      charLimit,
      placeholder,
      disabled,
      invalidText,
      ariaLabel,
      value,
      onChange,
      onFocus,
      onBlur,
      onError,
      label,
      $width,
    }: OakMultilineTextProps,
    ref?: React.Ref<HTMLTextAreaElement>,
  ) => {
    const [charCount, setCharCount] = useState(Number);
    const [showCharCount, setShowCharCount] = useState(Boolean);
    const [internalError, setInternalError] = useState(String);

    const charCountWidth = charLimit > 99 ? "all-spacing-10" : "all-spacing-9";

    const handleFocus = () => {
      onFocus && onFocus();
      setShowCharCount(true);
    };

    const handleBlur = (value: string) => {
      onBlur && onBlur(value);
      setShowCharCount(false);
    };

    const handleChange = (value: string) => {
      onChange && onChange(value);
      const charCount = value.length;
      setCharCount(charCount);
      if (charCount <= charLimit) {
        setInternalError("");
      }
    };

    const handlePaste = (pasteValue: string) => {
      if (pasteValue.length > charLimit - charCount) {
        onError && onError("Character limit exceeded");
        setInternalError("Please enter " + charLimit + " or less characters.");
      }
    };

    return (
      <OakFlex $flexDirection={["column"]} $gap={["space-between-xs", null]}>
        {label && (
          <OakLabel htmlFor="textarea" $font={"body-2-bold"}>
            {label}
          </OakLabel>
        )}
        <StyledOakTextArea
          ref={ref}
          id="textarea"
          value={value}
          onFocus={() => handleFocus()}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={(e) => handleBlur(e.target.value)}
          onError={(e) => onError && onError(e.currentTarget.value)}
          maxLength={charLimit}
          placeholder={placeholder}
          disabled={disabled}
          $height={["all-spacing-19", "all-spacing-13", "all-spacing-10"]}
          aria-label={ariaLabel}
          $background={disabled ? "bg-neutral" : "bg-primary"}
          $color={"text-subdued"}
          $borderRadius={"border-radius-m"}
          $ba={"border-solid-m"}
          $pa={"inner-padding-s"}
          $width={$width}
          $borderColor={
            internalError || invalidText
              ? "border-error"
              : "border-neutral-lighter"
          }
          onPaste={(e) => handlePaste(e.clipboardData.getData("text"))}
          $overflowX={"scroll"}
          $overflowY={"scroll"}
        ></StyledOakTextArea>
        {/* Span is inside OakFlex to stop textarea width changing when charCount changes. */}
        <OakFlex
          $minWidth={[charCountWidth, null]}
          $pa={[null, "inner-padding-ssx"]}
          $position={["relative", null]}
          $flexDirection={"row"}
        >
          {(invalidText || internalError) && (
            <>
              <OakIcon
                iconName="warning"
                $colorFilter={"icon-error"}
                $width={"all-spacing-4"}
                $height={"all-spacing-4"}
                $right={"all-spacing-1"}
              ></OakIcon>
              <OakP
                $font={"body-4"}
                $color={"text-error"}
                aria-label="invalid text message"
              >
                {invalidText ? invalidText : internalError}
              </OakP>
            </>
          )}
          {showCharCount && (
            <OakSpan
              aria-label="character count"
              $font={"body-4"}
              $color={"grey60"}
              $position={["absolute", null]}
              $top={["all-spacing-0", null]}
              $right={["all-spacing-0", null]}
            >
              {charCount}/{charLimit}
            </OakSpan>
          )}
        </OakFlex>
      </OakFlex>
    );
  },
);

/**
 *
 * An implementation of OakTextArea with responsive height. Displays character count (on focus only) that updates on each keystroke.
 *
 *
 * ### Callbacks
 * onFocus: display character count
 *
 * onBlur: hide character count
 *
 * onChange: update character count
 *
 */
export const OakMultilineText = UnstyledComponent;
