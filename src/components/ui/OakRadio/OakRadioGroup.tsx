import React, { createContext } from "react";

import { TypographyStyleProps } from "@/styles/utils/typographyStyle";
import { ColorStyleProps } from "@/styles/utils/colorStyle";
import { OakFlex, OakLabel } from "@/components/base";
import { FlexStyleProps } from "@/styles/utils/flexStyle";

export const RadioContext = createContext({
  state: "",
  name: "",
  setState: (state: string) => {
    state;
    return;
  },
});

export type OakRadioGroupProps = {
  label?: string;
  state: string;
  setState: (state: string) => void;
  name: string;
  children: React.ReactNode;
} & TypographyStyleProps &
  ColorStyleProps &
  FlexStyleProps;

export const OakRadioGroup = (props: OakRadioGroupProps) => {
  const { state, setState, name, children, label, ...styleProps } = props;

  return (
    <OakFlex role="radiogroup" {...styleProps}>
      <OakLabel {...styleProps}>{label}</OakLabel>
      <RadioContext.Provider value={{ state, name, setState }}>
        {" "}
        {children}
      </RadioContext.Provider>
    </OakFlex>
  );
};
