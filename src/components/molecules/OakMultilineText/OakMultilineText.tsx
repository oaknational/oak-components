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
import { OakCombinedSpacingToken } from "@/styles";
import { ResponsiveValues } from "@/styles/utils/responsiveStyle";

// For example you could restyle the OakFlex component by adding the styles to the css template literal below

export type OakMultilineTextProps = {
  /**
   * Maximum number of characters
   */
  charLimit: number;
  /**
   * Placeholder text
   */
  placeholder?: string;
  disabled?: boolean;
  ariaLabel?: string;
  invalidText?: string;
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: (value: string) => void;
  onBlur?: (value: string) => void;
  onError?: (error: string) => void;
  label?: string;
  id: string;
  name: string;
  innerHeight?: ResponsiveValues<OakCombinedSpacingToken>;
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
      id,
      name,
      innerHeight = ["all-spacing-19", "all-spacing-13", "all-spacing-10"],
    }: OakMultilineTextProps,
    ref?: React.Ref<HTMLTextAreaElement>,
  ) => {
    const [charCount, setCharCount] = useState(Number);
    const [showCharCount, setShowCharCount] = useState(Boolean);
    const [internalError, setInternalError] = useState(String);

    const charCountWidth = charLimit > 99 ? "all-spacing-10" : "all-spacing-9";

    const handleFocus = (value: string) => {
      onFocus && onFocus(value);
      setShowCharCount(true);
      setCharCount(value.length);
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
        setInternalError("Please enter " + charLimit + " or fewer characters.");
      }
    };

    return (
      <OakFlex $flexDirection={["column"]} $gap={["space-between-xs", null]}>
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
          onFocus={(e) => handleFocus(e.target.value)}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={(e) => handleBlur(e.target.value)}
          onError={(e) => onError && onError(e.currentTarget.value)}
          maxLength={charLimit}
          placeholder={placeholder}
          disabled={disabled}
          $height={innerHeight}
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
          $overflowX={"scroll"}
          $overflowY={"scroll"}
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
