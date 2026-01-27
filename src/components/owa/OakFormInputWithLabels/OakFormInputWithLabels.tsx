import React from "react";

import { OakFlex } from "@/components/layout-and-structure/OakFlex/OakFlex";
import { OakFormInput } from "@/components/form-elements/OakFormInput/OakFormInput";
import { OakLabel } from "@/components/form-elements/OakLabel";
import { OakP } from "@/components/typography/OakP";

export interface OakFormInputWithLabelsProps {
  /**
   * The label for the input field.
   */
  label: string;
  /**
   * Optional helper text displayed below the label.
   */
  helperText?: string;
  /**
   * Placeholder text for the input field.
   */
  placeholder?: string;
  /**
   * Indicates if the input is invalid (to be used after form submission or validation).
   */
  invalid?: boolean;
  /**
   * Feedback text to display when the input is invalid.
   */
  invalidText?: string;
  /**
   * The value of the input field. Use this in controlled components.
   */

  value?: string;
  /**
   * The initial value of the input field. Use this in controlled components.
   */
  defaultValue?: string;
  /**
   * Disables the input field, preventing user interaction.
   */
  disabled?: boolean;
  /**
   * Optional name of the input field. This is used to identify the field in forms.
   */

  required?: boolean;
  inputName?: string;
  /**
   * Callback function that is called when the input value changes.
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * Callback function that is called when the input is focused initially.
   */
  onInitialFocus?: React.FocusEventHandler<HTMLInputElement>;
  /**
   * Callback function that is called when the input loses focus.
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

export const OakFormInputWithLabels = ({
  label,
  helperText,
  placeholder,
  invalid,
  invalidText,
  value,
  inputName,
  disabled = false,
  required = false,
  defaultValue,
  onChange = () => {},
  onInitialFocus = () => {},
  onBlur = () => {},
}: OakFormInputWithLabelsProps) => {
  const inputId = `input-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <OakFlex $width={"100%"} $flexDirection={"column"} $gap="spacing-8">
      <OakFlex $flexDirection={"column"}>
        <OakLabel $font={"body-2-bold"} htmlFor={inputId}>
          {label}
        </OakLabel>
        {helperText && <OakP $font={"body-3"}>{helperText}</OakP>}
      </OakFlex>
      <OakFormInput
        name={inputName}
        id={inputId}
        placeholder={placeholder}
        invalid={invalid}
        value={value}
        onChange={onChange}
        onInitialFocus={onInitialFocus}
        onBlur={onBlur}
        disabled={disabled}
        aria-describedby={invalid ? `error-${inputId}` : undefined}
        defaultValue={defaultValue}
        required={required}
      />
      {invalid && invalidText && (
        <OakP id={`error-${inputId}`} $font={"body-2"} $color={"text-error"}>
          {invalidText}
        </OakP>
      )}
    </OakFlex>
  );
};
