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
   * Set the textarea text on first render
   */
  initialValue?: string;
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
  onTextAreaBlur?: (input: string) => void;
} & Omit<
  OakTextAreaProps,
  "onChange" | "onBlur" | "onError" | "$width" | "value"
>;

type StyledOakTextAreaProps = {
  isError?: boolean;
} & OakTextAreaProps;

const StyledOakTextArea = styled(OakTextArea)<StyledOakTextAreaProps>`
  &:focus-visible {
    border-color: ${(props) =>
      props.isError ? parseColor("red") : parseColor("border-primary")};
  }

  &:hover {
    background: ${parseColor("bg-btn-secondary-hover")};
    border-color: ${parseColor("border-neutral")};
  }

  ::placeholder {
    color: ${parseColor("text-subdued")};
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
      initialValue,
      onTextAreaChange,
      onTextAreaBlur,
      onFocus,
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
    const [showCharCount, setShowCharCount] = useState(false);
    const [internalErrors, setInternalErrors] = useState<string[]>([]);
    const [userText, setUserText] = useState(initialValue);
    const charCount = userText?.length ?? 0;

    const charCountWidth = charLimit > 99 ? "all-spacing-10" : "all-spacing-9";

    const updateInternalErrors = (error: string) => {
      if (!internalErrors.includes(error)) {
        setInternalErrors((errors) => [...errors, error]);
      }
    };

    const sanitizeInput = (input: string, trim: boolean = false) => {
      let output = input;
      if (trim) {
        const temp = output.trim();
        if (output !== temp) {
          output = temp;
          const errorMessage = "Leading or trailing spaces have been removed";
          onError?.(errorMessage);
          updateInternalErrors(errorMessage);
        }
      }
      if (!allowCarriageReturn) {
        const temp = output.replace(/[\r\n]+/gm, " ");
        if (output !== temp) {
          output = temp;
          const errorMessage = "Carriage returns have been removed";
          onError?.(errorMessage);
          updateInternalErrors(errorMessage);
        }
      }

      return output;
    };

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      onFocus?.(e);
      setShowCharCount(true);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      const sanitizedValue = sanitizeInput(
        e.target.value,
        !allowLeadingTrailingSpaces,
      );
      setUserText(sanitizedValue);
      onTextAreaBlur?.(sanitizedValue);
      setShowCharCount(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const sanitizedValue = sanitizeInput(e.target.value);
      setUserText(sanitizedValue);
      onTextAreaChange?.(sanitizedValue);
    };

    const handlePaste = (pasteValue: string) => {
      setInternalErrors([]);
      // The text area automatically trims the pasted text to the maxLength (charLimit) so we need to check here if the new value exceeds charLimit and record the error
      const newValue = (userText ?? "") + pasteValue;
      if (newValue.length > charLimit) {
        const errorMessage = `Character limit exceeded: input has been trimmed to ${charLimit} characters`;
        onError?.(errorMessage);
        updateInternalErrors(errorMessage);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      setInternalErrors([]);
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
          value={userText}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength={charLimit}
          placeholder={placeholder}
          disabled={disabled}
          aria-label={ariaLabel}
          $background={disabled ? "bg-neutral" : "bg-primary"}
          $color={"text-primary"}
          $borderRadius={"border-radius-m"}
          $ba={"border-solid-m"}
          $pa={"inner-padding-s"}
          $borderColor={
            internalErrors.length > 0 || invalidText
              ? "border-error"
              : "border-neutral-lighter"
          }
          onPaste={(e) => handlePaste(e.clipboardData.getData("text"))}
          $height={$height}
          $overflowX={$overflowX}
          $overflowY={$overflowY}
          $whiteSpace={$whiteSpace}
          $width={"100%"}
          aria-describedby="multiline-text-invalid-error"
          {...textAreaProps}
        ></StyledOakTextArea>
        {/* Span is inside OakFlex to stop textarea width changing when charCount changes. */}
        <OakGrid
          $minWidth={[charCountWidth, null]}
          $pb={["inner-padding-l"]}
          $position={["relative", null]}
        >
          {(invalidText || internalErrors.length > 0) && (
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
                ></OakIcon>
                <OakSpan
                  $overflowY={"scroll"}
                  $overflowX={"scroll"}
                  $font={"body-4"}
                  $color={"text-error"}
                  id="multiline-text-invalid-error"
                  $pl={"inner-padding-ssx"}
                >
                  {invalidText ? invalidText : internalErrors.join(". ")}
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
 * This component wraps OakTextArea and provides the following functionality
 * - Manages its own state
 * - Displays errors for character limit exceeded (on paste), leading/trailing spaces removed, carriage returns removed
 * - Displays and updates character count on focus only
 * - Prevents carriage returns (Enter key and pasted text) when allowCarriageReturn is false
 * - Passes stored text to onTextAreaChange and onTextAreaBlur callbacks
 *
 *
 * ### Callbacks
 *
 * onTextAreaBlur
 * onTextAreaChange
 * onFocus: display character count
 * onError: returns error messages for internally handled errors
 *
 * ### Notes
 *  - Current method of clearing the component is to reset its key in the parent component
 *  - useImperativeHandle could be used to expose a clear method
 */
export const OakMultilineText = UnstyledComponent;
