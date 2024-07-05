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
  Pick<FlexStyleProps, "$flexDirection" | "$alignItems" | "$gap">;

/**
 *
 * OakButtonAsRadioGroup allow users to select a single item from a list of mutually exclusive options (buttons) .
 * OakButtonAsRadioGroup consists of a set of OakButtonsAsRadios. Each radio includes a label and a visual selection indicator. A single radio button within the group can be selected at a time. Users may click or touch a radio button to select it, or use the Tab key to navigate to the group, the arrow keys to navigate within the group, and the Space key to select an option.
 * ## Usage
 *
 * use the callback onChange to get the value of the selected radio button.
 *
 */
export const OakButtonAsRadioGroup = (props: OakButtonAsRadioGroupProps) => {
  const {
    name,
    children,
    label,
    onChange,
    $font = "body-1-bold",
    $gap = "space-between-s",
    disabled,
    value,
    defaultValue = "",
    ...rest
  } = props;

  const [currentValue, setValue] = useState(defaultValue);

  const handleValueUpdated = (newValue: string) => {
    if (value === undefined) {
      setValue(newValue);
    }
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <OakFlex role="radiogroup" $gap={$gap} {...rest}>
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
