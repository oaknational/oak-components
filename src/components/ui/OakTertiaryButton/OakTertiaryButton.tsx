import React, { ElementType } from "react";

import { OakRoundIconProps } from "../OakRoundIcon";
import { InternalRoundButton } from "../InternalRoundButton";

import { OakIconName } from "@/components/base";
import { InternalButtonProps } from "@/components/base/InternalButton";
import { PolymorphicPropsWithoutRef } from "@/components/utils/polymorphic";

type OakTertiaryButtonProps = InternalButtonProps & {
  iconBackground?: OakRoundIconProps["$background"];
  iconColorFilter?: OakRoundIconProps["$colorFilter"];
  isTrailingIcon?: boolean;
  iconName?: OakIconName;
};

/**
 * An implementation of InternalRoundButton, its a subtle button with no border and a round icon.
 */

export const OakTertiaryButton = <C extends ElementType = "button">({
  element,
  isTrailingIcon,
  iconName,
  children,
  ...props
}: OakTertiaryButtonProps & PolymorphicPropsWithoutRef<C>) => {
  return (
    <InternalRoundButton
      element={element ?? "button"}
      {...props}
      isTrailingIcon={isTrailingIcon}
      iconName={iconName}
      defaultIconColor={"white"}
      disabledIconColor="white"
      disabledIconBackground="bg-btn-primary-disabled"
      defaultIconBackground="black"
      hoverIconBackground="bg-btn-primary-hover"
      defaultTextColor="text-primary"
      hoverTextColor="bg-btn-primary-hover"
      disabledTextColor="text-disabled"
      iconBackgroundSize={"all-spacing-7"}
      iconSize={"all-spacing-6"}
    >
      {children}
    </InternalRoundButton>
  );
};
