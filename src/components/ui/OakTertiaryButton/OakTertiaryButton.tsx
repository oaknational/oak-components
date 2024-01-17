import React from "react";

import { OakRoundIconProps } from "../OakRoundIcon";
import { InternalRoundButton } from "../InternalRoundButton";

import { OakIconName } from "@/components/base";
import { InternalButtonProps } from "@/components/base/InternalButton";

type OakTertiaryButtonProps = InternalButtonProps & {
  iconBackground?: OakRoundIconProps["$background"];
  iconColorFilter?: OakRoundIconProps["$colorFilter"];
  isTrailingIcon?: boolean;
  iconName?: OakIconName;
};

/**
 * A subtle button with no border and a round icon.
 */

export const OakTertiaryButton = ({
  isTrailingIcon,
  iconName,
  children,
  disabled,
  ...props
}: OakTertiaryButtonProps) => {
  return (
    <InternalRoundButton
      {...props}
      disabled={disabled}
      isTrailingIcon={isTrailingIcon}
      iconName={iconName}
      defaultIconColor={"white"}
      defaultIconBackground="black"
      defaultTextColor="text-primary"
      hoverTextColor="text-primary"
      disabledIconBackground="bg-btn-primary-disabled"
      disabledTextColor="text-disabled"
      disabledIconColor="white"
    >
      {children}
    </InternalRoundButton>
  );
};
