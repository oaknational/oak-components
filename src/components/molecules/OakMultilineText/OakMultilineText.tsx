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
  ariaLabel?: string;
  /**
   * Display errors passed in as a prop
   */
  errors?: Array<string>;
  label?: string;
  onTextAreaChange?: (input: string) => void;
  onTextAreaBlur?: (input: string) => void;
} & Omit<OakTextAreaProps, "onChange" | "onBlur" | "$width" | "value">;

type StyledOakTextAreaProps = {
  isError?: boolean;
} & OakTextAreaProps;

const StyledOakTextArea = styled(OakTextArea)<StyledOakTextAreaProps>`
  &:focus-visible {
    border-color: ${(props) =>
      props.isError ? parseColor("icon-error") : parseColor("border-primary")};
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
      errors,
      ariaLabel,
      initialValue,
      onTextAreaChange,
      onTextAreaBlur,
      onFocus,
      label,
      id,
      name,
      $height = ["spacing-240", "spacing-80", "spacing-56"],
      $overflowX = [null, null, "auto"],
      $overflowY = ["auto", "auto", null],
      $whiteSpace = ["wrap", "wrap", "nowrap"],
      ...textAreaProps
    }: OakMultilineTextProps,
    ref?: React.Ref<HTMLTextAreaElement>,
  ) => {
    const [showCharCount, setShowCharCount] = useState(false);
    const [userText, setUserText] = useState(initialValue);
    const charCount = userText?.length ?? 0;

    const charCountWidth = charLimit > 99 ? "spacing-56" : "spacing-48";

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      onFocus?.(e);
      setShowCharCount(true);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setUserText(e.target.value);
      onTextAreaBlur?.(e.target.value);
      setShowCharCount(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setUserText(e.target.value);
      onTextAreaChange?.(e.target.value);
    };

    return (
      <OakFlex
        $flexDirection={["column"]}
        $gap={["spacing-12", null]}
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
          $pa={"spacing-12"}
          $borderColor={
            errors && errors?.length > 0
              ? "border-error"
              : "border-neutral-lighter"
          }
          $height={$height}
          $overflowX={$overflowX}
          $overflowY={$overflowY}
          $whiteSpace={$whiteSpace}
          $width={"100%"}
          aria-describedby={`${name}-invalid-error`}
          {...textAreaProps}
        ></StyledOakTextArea>
        {/* Span is inside OakFlex to stop textarea width changing when charCount changes. */}
        <OakGrid
          $minWidth={[charCountWidth, null]}
          $pb={["spacing-20"]}
          $position={["relative", null]}
        >
          {errors && errors.length > 0 && (
            <OakGridArea $colSpan={10} $position={"relative"}>
              <OakFlex
                $flexDirection={"row"}
                $position={"absolute"}
                $top={"spacing-0"}
                $left={"spacing-0"}
              >
                <OakIcon
                  iconName="warning"
                  $colorFilter={"icon-error"}
                  $width={"spacing-16"}
                  $height={"spacing-16"}
                ></OakIcon>
                <OakSpan
                  $overflowY={"auto"}
                  $overflowX={"auto"}
                  $font={"body-4"}
                  $color={"text-error"}
                  id={`${name}-invalid-error`}
                  $pl={"spacing-4"}
                >
                  {errors.join(". ")}
                </OakSpan>
              </OakFlex>
            </OakGridArea>
          )}

          <OakGridArea $colSpan={2}>
            {showCharCount && (
              <OakSpan
                aria-label="character count"
                $font={"body-4"}
                $color={"text-subdued"}
                $position={["absolute", null]}
                $top={["spacing-0", null]}
                $right={["spacing-0", null]}
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
 * - Displays errors passed in as a prop
 * - Displays and updates character count on focus only
 * - Passes stored text to onTextAreaChange and onTextAreaBlur callbacks
 *
 *
 * ### Callbacks
 *
 * onTextAreaBlur
 * onTextAreaChange
 * onFocus: display character count
 *
 * ### Notes
 *  - Current method of clearing the component is to reset its key in the parent component
 *  - useImperativeHandle could be used to expose a clear method
 */
export const OakMultilineText = UnstyledComponent;
