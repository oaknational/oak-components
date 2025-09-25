import React, { useState, forwardRef } from "react";
import styled from "styled-components";

import { OakFlex } from "@/components/atoms/OakFlex";
import { OakTextArea, OakTextAreaProps } from "@/components/atoms/OakTextArea";
import { OakSpan, OakP } from "@/components/atoms";
import { parseColor } from "@/styles/helpers/parseColor";
import { OakCombinedSpacingToken } from "@/styles";
import { ResponsiveValues } from "@/styles/utils/responsiveStyle";

// For example you could restyle the OakFlex component by adding the styles to the css template literal below

export type OakMultilineTextProps = {
  /**
   * Height of component
   */
  $height: ResponsiveValues<OakCombinedSpacingToken>;
  /**
   * Maximum number of characters
   */
  charLimit: number;
  /**
   * Placeholder text
   */
  placeholder?: string;
  disabled: boolean;
  ariaLabel?: string;
  invalid?: boolean;
  invalidText?: string;
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: (value: string) => void;
  onError?: (error: string) => void;
};

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
      invalid,
      invalidText,
      ariaLabel,
      value,
      onChange,
      onFocus,
      onBlur,
      onError,
    }: OakMultilineTextProps,
    ref?: React.Ref<HTMLTextAreaElement>,
  ) => {
    const [charCount, setCharCount] = useState(Number);
    const [showCharCount, setShowCharCount] = useState(Boolean);

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
    };

    const handlePaste = (value: string) => {
      if (value.length > charLimit) {
        onError && onError("Character limit exceeded");
      }
    };

    return (
      <OakFlex
        $flexDirection={["row", "column"]}
        $gap={["space-between-xs", null]}
      >
        <StyledOakTextArea
          ref={ref}
          value={value}
          onFocus={() => handleFocus()}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={(e) => handleBlur(e.target.value)}
          maxLength={charLimit}
          placeholder={placeholder}
          disabled={disabled}
          $height={["all-spacing-19", "all-spacing-13", "all-spacing-10"]}
          aria-label={ariaLabel}
          $background="bg-primary"
          $color={"text-subdued"}
          $borderRadius={"border-radius-m"}
          $ba={"border-solid-m"}
          $pa={"inner-padding-s"}
          $width="100%"
          $borderColor={"border-neutral-lighter"}
          onPaste={(e) => handlePaste(e.clipboardData.getData("text"))}
        ></StyledOakTextArea>
        {/* Span is inside OakFlex to stop textarea width changing when charCount changes. */}
        {showCharCount && (
          <OakFlex
            $minWidth={[charCountWidth, null]}
            $justifyContent={[null, "flex-end"]}
            $pa={[null, "inner-padding-ssx"]}
            $position={["relative", null]}
          >
            <OakSpan
              $textAlign={"right"}
              aria-label="character count"
              $font={"body-3"}
              $color={"grey60"}
              $position={["absolute", null]}
              $top={["all-spacing-0", null]}
              $right={["all-spacing-0", null]}
            >
              {charCount}/{charLimit}
            </OakSpan>
          </OakFlex>
        )}
        {invalid && invalidText && (
          <OakP $font={"body-2"} $color={"text-error"}>
            {invalidText}
          </OakP>
        )}
      </OakFlex>
    );
  },
);

/**
 *
 * Add the description of the component here and it will appear on the story for the component
 * The following callbacks are available for tracking focus events:
 *
 * ### Callbacks
 * make sure to add descriptions and types for any callbacks for the component
 *
 * NB. We must export a styled component for it to be inheritable
 */
export const OakMultilineText = UnstyledComponent;
