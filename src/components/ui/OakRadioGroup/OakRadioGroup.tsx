import React, { createContext, useState } from "react";

import { TypographyStyleProps } from "@/styles/utils/typographyStyle";
import { ColorStyleProps } from "@/styles/utils/colorStyle";
import { OakFlex, OakLabel } from "@/components/base";
import { FlexStyleProps } from "@/styles/utils/flexStyle";

type RadioContextType = {
  currentValue: string;
  name: string;
  disabled?: boolean;
  onValueUpdated?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioContext = createContext<RadioContextType>({
  currentValue: "default",
  name: "default",
});

export type OakRadioGroupProps = {
  label?: string;
  name: string;
  disabled?: boolean;
  children: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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

export const OakRadioGroup = (props: OakRadioGroupProps) => {
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

  const handleValueUpdated = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) {
      setValue(event.target.value);
    }
    if (onChange) {
      onChange(event);
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
