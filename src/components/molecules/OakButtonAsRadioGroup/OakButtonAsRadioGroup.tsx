import React, { createContext, useState } from "react";

import { TypographyStyleProps } from "@/styles/utils/typographyStyle";
import { ColorStyleProps } from "@/styles/utils/colorStyle";
import { OakFlex, OakLabel } from "@/components/atoms";
import { FlexStyleProps } from "@/styles/utils/flexStyle";

type RadioContextType = {
  currentValue: string;
  name: string;
  disabled?: boolean;
  onValueUpdated?: (value: string) => void;
};

export const RadioContext = createContext<RadioContextType>({
  currentValue: "default",
  name: "default",
});

export type OakButtonAsRadioGroupProps = {
  label?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  name: string;
  disabled?: boolean;
  children: React.ReactNode;
  onChange?: (value: string) => void;
  /**
   * Sets the value of the radio group
   * for use as a controlled component
   */
  value?: string;
  /**
   * Sets the initial value of the radio group
   * for use as an uncontrolled component
   */
  defaultValue?: string;
} & Pick<TypographyStyleProps, "$font"> &
  ColorStyleProps &
  Pick<
    FlexStyleProps,
    "$flexDirection" | "$alignItems" | "$gap" | "$flexWrap" | "$justifyContent"
  >;

/**
 *
 * A react context supporting a list of mutually exclusive options rendered as buttons.
 *
 * ## Usage
 *
 * the nested items should be OakSecondaryButtonAsRadio or implement the same logic.
 * use the callback onChange to get the value of the clicked button.
 *
 */

export const OakButtonAsRadioGroup = (props: OakButtonAsRadioGroupProps) => {
  const {
    name,
    children,
    label,
    ariaLabel,
    ariaLabelledby,
    onChange,
    $font = "body-1-bold",
    $gap = "spacing-16",
    disabled,
    value,
    defaultValue = "",
    ...rest
  } = props;

  const [currentValue, setValue] = useState(defaultValue);

  if (!label && !ariaLabel && !ariaLabelledby) {
    throw new Error(
      "OakButtonAsRadioGroup: At least one of label, ariaLabel or ariaLabelledby is required",
    );
  }

  const handleValueUpdated = (newValue: string) => {
    if (value === undefined) {
      setValue(newValue);
    }
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <OakFlex
      role="radiogroup"
      $gap={$gap}
      {...rest}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
    >
      {label && <OakLabel $font={$font}>{label}</OakLabel>}
      <RadioContext.Provider
        value={{
          currentValue: value ?? currentValue,
          name,
          disabled: disabled,
          onValueUpdated: handleValueUpdated,
        }}
      >
        {children}
      </RadioContext.Provider>
    </OakFlex>
  );
};
