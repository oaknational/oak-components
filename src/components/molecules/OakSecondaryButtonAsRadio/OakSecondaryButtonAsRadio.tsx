import React, { useContext } from "react";

import { OakSecondaryButton } from "@/components/molecules/OakSecondaryButton";
import { RadioContext } from "@/components/molecules/OakButtonAsRadioGroup/OakButtonAsRadioGroup";
import { OakPrimaryButton } from "@/components/molecules/OakPrimaryButton";

export type OakSecondaryButtonAsRadioProps = {
  children?: React.ReactNode;
  value: string;
};

export const OakSecondaryButtonAsRadio = ({
  children,
  value,
}: OakSecondaryButtonAsRadioProps) => {
  const radioContext = useContext(RadioContext);
  const { currentValue, onValueUpdated } = radioContext;
  const checked = currentValue === value;

  return checked ? (
    <OakPrimaryButton role="radio" aria-checked={checked}>
      {children}
    </OakPrimaryButton>
  ) : (
    <OakSecondaryButton
      role="radio"
      onClick={() => onValueUpdated && onValueUpdated(value)}
    >
      {children}
    </OakSecondaryButton>
  );
};
