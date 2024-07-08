import React, { useContext } from "react";

import { OakSecondaryButton } from "@/components/molecules/OakSecondaryButton";
import { RadioContext } from "@/components/molecules/OakButtonAsRadioGroup/OakButtonAsRadioGroup";
import { OakPrimaryButton } from "@/components/molecules/OakPrimaryButton";

export type OakSecondaryButtonAsRadioProps = {
  children?: React.ReactNode;
  value: string;
};

/**
 *
 * To be used as a child of OakButtonAsRadioGroup.
 * Highlights when the value matches the current value of the group.
 * Changes the current value of the group when clicked.
 *
 * ## Usage
 *
 * See OakButtonAsRadioGroup.
 *
 */

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
      aria-checked={checked}
      onClick={() => onValueUpdated && onValueUpdated(value)}
    >
      {children}
    </OakSecondaryButton>
  );
};
