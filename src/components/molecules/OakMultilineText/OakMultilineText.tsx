import React, { useState, forwardRef } from "react";
import styled from "styled-components";

import { OakFlex } from "@/components/atoms/OakFlex";
import { OakTextArea, OakTextAreaProps } from "@/components/atoms/OakTextArea";
import {
  OakSpan,
  OakLabel,
  OakIcon,
  OakGrid,
  OakGridArea,
} from "@/components/atoms";
import { parseColor } from "@/styles/helpers/parseColor";

export type OakMultilineTextProps = {
  /**
   * Maximum number of characters
   */
  charLimit: number;
  /**
   * Whether to allow carriage return (new line) when the Enter key is pressed and in clipboard pastes.
   */
  allowCarriageReturn?: boolean;
  allowLeadingTrailingSpaces?: boolean;
  ariaLabel?: string;
  /**
   * Display an error
   */
  invalidText?: string;
  label?: string;
  /**
   * Callback for internally handled errors (e.g. character limit exceeded)
   */
  onError?: (error: string) => void;
  onTextAreaChange?: (input: string) => void;
} & Omit<OakTextAreaProps, "onChange" | "onError" | "$width">;

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
      onTextAreaChange,
      onFocus,
      onBlur,
      onError,
      label,
      id,
      name,
      $height = ["all-spacing-19", "all-spacing-13", "all-spacing-10"],
      $overflowX = [null, null, "scroll"],
      $overflowY = ["scroll", "scroll", null],
      $whiteSpace = ["wrap", "wrap", "nowrap"],
      allowCarriageReturn = false,
      allowLeadingTrailingSpaces = false,
      ...textAreaProps
    }: OakMultilineTextProps,
    ref?: React.Ref<HTMLTextAreaElement>,
  ) => {
    const [charCount, setCharCount] = useState(Number);
    const [showCharCount, setShowCharCount] = useState(Boolean);
    const [internalError, setInternalError] = useState(String);

    const charCountWidth = charLimit > 99 ? "all-spacing-10" : "all-spacing-9";

    const sanitizeInput = (input: string, trim: boolean = false) => {
      let output = input;
      if (trim) {
        output = output.trim();
      }
      if (!allowCarriageReturn) {
        output = output.replace(/[\r\n]+/gm, " ");
      }

      if (output !== input) {
        onError?.("Forbidden characters in input");
        setInternalError(
          "Carriage returns or leading/trailing spaces have been removed",
        );
      }

      return output;
    };

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      onFocus?.(e);
      setShowCharCount(true);
      setCharCount(e.target.value.length);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      onBlur?.(e);
      onTextAreaChange?.(
        sanitizeInput(e.target.value, !allowLeadingTrailingSpaces),
      );
      setShowCharCount(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const sanitizedValue = sanitizeInput(e.target.value);
      onTextAreaChange && onTextAreaChange(sanitizedValue);
      const charCount = sanitizedValue.length;
      setCharCount(charCount);
      if (charCount <= charLimit) {
        setInternalError("");
      }
    };

    const handlePaste = (pasteValue: string) => {
      if (pasteValue.length > charLimit - charCount) {
        onError?.("Character limit exceeded");
        setInternalError(
          "Character limit exceeded: input has been trimmed to " +
            charLimit +
            " characters.",
        );
        return;
      }
    };

    const onEnterPressed = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !allowCarriageReturn) {
        e.preventDefault();
      }
    };

    return (
      <OakFlex
        $flexDirection={["column"]}
        $gap={["space-between-xs", null]}
        $width={"100%"}
      >
        {label && (
          <OakLabel htmlFor={id} $font={"body-2-bold"}>
            {label}
          </OakLabel>
        )}
        <StyledOakTextArea
          ref={ref}
          id={id}
          name={name}
          value={value}
          onKeyDown={(e) => onEnterPressed(e)}
          onFocus={handleFocus}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength={charLimit}
          placeholder={placeholder}
          disabled={disabled}
          aria-label={ariaLabel}
          $background={disabled ? "bg-neutral" : "bg-primary"}
          $color={"text-subdued"}
          $borderRadius={"border-radius-m"}
          $ba={"border-solid-m"}
          $pa={"inner-padding-s"}
          $borderColor={
            internalError || invalidText
              ? "border-error"
              : "border-neutral-lighter"
          }
          onPaste={(e) => handlePaste(e.clipboardData.getData("text"))}
          $height={$height}
          $overflowX={$overflowX}
          $overflowY={$overflowY}
          $whiteSpace={$whiteSpace}
          $width={"100%"}
          {...textAreaProps}
        ></StyledOakTextArea>
        {/* Span is inside OakFlex to stop textarea width changing when charCount changes. */}
        <OakGrid
          $minWidth={[charCountWidth, null]}
          $pb={["inner-padding-l"]}
          $position={["relative", null]}
        >
          {(invalidText || internalError) && (
            <OakGridArea $colSpan={10} $position={"relative"}>
              <OakFlex
                $flexDirection={"row"}
                $position={"absolute"}
                $top={"all-spacing-0"}
                $left={"all-spacing-0"}
              >
                <OakIcon
                  iconName="warning"
                  $colorFilter={"icon-error"}
                  $width={"all-spacing-4"}
                  $height={"all-spacing-4"}
                  $right={"all-spacing-1"}
                ></OakIcon>
                <OakSpan
                  $overflowY={"scroll"}
                  $overflowX={"scroll"}
                  $font={"body-4"}
                  $color={"text-error"}
                  aria-label="invalid text message"
                >
                  {invalidText ? invalidText : internalError}
                </OakSpan>
              </OakFlex>
            </OakGridArea>
          )}

          <OakGridArea $colSpan={2}>
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
          </OakGridArea>
        </OakGrid>
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
