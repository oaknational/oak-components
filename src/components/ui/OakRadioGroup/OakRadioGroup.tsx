import React, { SetStateAction, createContext } from "react";

import { TypographyStyleProps } from "@/styles/utils/typographyStyle";
import { RadioInputStyleProps } from "@/styles/utils/radioInputStyles";
import { ColorStyleProps } from "@/styles/utils/colorStyle";
import { OakFlex } from "@/components/base";
import { FlexStyleProps } from "@/styles/utils/flexStyle";

export const RadioContext = createContext({
  state: "",
  name: "",
  setState: (state: SetStateAction<string>) => {
    state;
    return;
  },
});

export type OakRadioGroupProps = {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  children: React.ReactNode;
} & TypographyStyleProps &
  ColorStyleProps &
  RadioInputStyleProps &
  FlexStyleProps;

export const OakRadioGroup = (props: OakRadioGroupProps) => {
  const { state, setState, name, children, ...styleProps } = props;

  return (
    <OakFlex {...styleProps}>
      <RadioContext.Provider value={{ state, name, setState }}>
        {" "}
        {children}
      </RadioContext.Provider>
    </OakFlex>
  );
};
