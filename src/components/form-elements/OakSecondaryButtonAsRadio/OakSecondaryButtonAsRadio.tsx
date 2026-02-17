import React, { useContext } from "react";

import { RadioContext } from "@/components/form-elements/OakButtonAsRadioGroup/OakButtonAsRadioGroup";
import { OakButton } from "@/components/buttons/OakButton";

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
    <OakButton variant="primary" role="radio" aria-checked={checked}>
      {children}
    </OakButton>
  ) : (
    <OakButton
      variant="secondary"
      role="radio"
      aria-checked={checked}
      onClick={() => onValueUpdated?.(value)}
    >
      {children}
    </OakButton>
  );
};
