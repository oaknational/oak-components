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
    ...rest
  } = props;

  const [value, setValue] = useState("");

  const handleValueUpdated = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <OakFlex role="radiogroup" $gap={$gap} {...rest}>
      <OakLabel $font={$font}>{label}</OakLabel>
      <RadioContext.Provider
        value={{
          currentValue: value,
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
