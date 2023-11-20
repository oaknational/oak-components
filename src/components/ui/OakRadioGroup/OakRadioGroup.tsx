import React, { createContext } from "react";

import { TypographyStyleProps } from "@/styles/utils/typographyStyle";
import { ColorStyleProps } from "@/styles/utils/colorStyle";
import { OakFlex, OakLabel } from "@/components/base";
import { FlexStyleProps } from "@/styles/utils/flexStyle";

type RadioContextType = {
  currentValue: string;
  name: string;
  onValueUpdated?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioContext = createContext<RadioContextType>({
  currentValue: "default",
  name: "default",
});

export type OakRadioGroupProps = {
  label?: string;
  name: string;
  children: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & TypographyStyleProps &
  ColorStyleProps &
  FlexStyleProps;

export const OakRadioGroup = (props: OakRadioGroupProps) => {
  const { name, children, label, onChange, ...styleProps } = props;

  const [value, setValue] = React.useState("");

  const handleValueUpdated = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <OakFlex role="radiogroup" {...styleProps}>
      <OakLabel {...styleProps}>{label}</OakLabel>
      <RadioContext.Provider
        value={{
          currentValue: value,
          name,
          onValueUpdated: handleValueUpdated,
        }}
      >
        {children}
      </RadioContext.Provider>
    </OakFlex>
  );
};
