import React, { ElementType } from "react";

import { OakRoundIconProps } from "@/components/molecules/OakRoundIcon";
import {
  InternalShadowRoundButton,
  InternalShadowRoundButtonProps,
} from "@/components/molecules/InternalShadowRoundButton";
import { OakIconName } from "@/components/atoms";
import { InternalButtonProps } from "@/components/atoms/InternalButton";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";

type OakTertiaryButtonProps = InternalButtonProps & {
  iconBackground?: OakRoundIconProps["$background"];
  iconColorFilter?: OakRoundIconProps["$colorFilter"];
  isTrailingIcon?: boolean;
  iconName?: OakIconName;
};

/**
 * An implementation of InternalShadowRoundButton, its a subtle button with no border and a round icon.
 */
export const OakTertiaryButton = <C extends ElementType = "button">({
  element,
  isTrailingIcon,
  iconName,
  children,
  ...props
}: OakTertiaryButtonProps &
  Partial<InternalShadowRoundButtonProps> &
  PolymorphicPropsWithoutRef<C>) => {
  return (
    <InternalShadowRoundButton
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
    </InternalShadowRoundButton>
  );
};
