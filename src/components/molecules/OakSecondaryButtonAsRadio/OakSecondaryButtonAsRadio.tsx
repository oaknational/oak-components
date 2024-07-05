import React, { useContext } from "react";

import { OakSecondaryButton } from "@/components/molecules/OakSecondaryButton";
import { RadioContext } from "@/components/molecules/OakButtonAsRadioGroup/OakButtonAsRadioGroup";
import { InternalShadowRectButton } from "@/components/molecules/InternalShadowRectButton";

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
    <InternalShadowRectButton
      role="radio"
      defaultBorderColor="bg-btn-primary"
      defaultBackground="bg-btn-primary"
      defaultTextColor="text-inverted"
      hoverBackground="bg-btn-primary-hover"
      hoverBorderColor="bg-btn-primary-hover"
      hoverTextColor="text-inverted"
      disabledBackground="bg-btn-primary"
      disabledBorderColor="bg-btn-primary"
      disabledTextColor="text-inverted"
      disabled
      aria-checked={checked}
    >
      {children}
    </InternalShadowRectButton>
  ) : (
    <OakSecondaryButton
      role="radio"
      onClick={() => onValueUpdated && onValueUpdated(value)}
    >
      {children}
    </OakSecondaryButton>
  );
};
