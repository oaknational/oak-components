import React, { createContext, useState } from "react";
import styled from "styled-components";

import { TypographyStyleProps } from "@/styles/utils/typographyStyle";
import { ColorStyleProps } from "@/styles/utils/colorStyle";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakBox } from "@/components/layout-and-structure/OakBox";
import { FlexStyleProps } from "@/styles/utils/flexStyle";

const DisplayContentsLegend = styled("legend")`
  display: contents;
`;

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
  FlexStyleProps;

/**
 *
 * OakRadioGroup allow users to select a single item from a list of mutually exclusive options .
 * OakRadioGroup consists of a set of OakRadioButtons, and a label. Each radio includes a label and a visual selection indicator. A single radio button within the group can be selected at a time. Users may click or touch a radio button to select it, or use the Tab key to navigate to the group, the arrow keys to navigate within the group, and the Space key to select an option.
 * ## Usage
 *
 * use the callback onChange to get the value of the selected radio button.
 *
 */
export const OakRadioGroup = (props: OakRadioGroupProps) => {
  const {
    name,
    children,
    label,
    onChange,
    $font = "body-1-bold",
    $gap = "spacing-16",
    disabled,
    value,
    defaultValue = "",
    ...rest
  } = props;

  const [currentValue, setCurrentValue] = useState(defaultValue);

  const handleValueUpdated = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) {
      setCurrentValue(event.target.value);
    }
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <OakFlex
      as="fieldset"
      $gap={$gap}
      $flexDirection={"column"}
      $borderStyle={"none"}
      $pa="spacing-0"
      $ma="spacing-0"
      {...rest}
    >
      {label && (
        <DisplayContentsLegend>
          <OakBox $font={$font}>{label}</OakBox>
        </DisplayContentsLegend>
      )}
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
