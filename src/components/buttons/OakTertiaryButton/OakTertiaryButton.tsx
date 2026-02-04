import React, { ElementType } from "react";

import { OakRoundIconProps } from "@/components/images-and-icons/OakRoundIcon";
import {
  InternalShadowRoundButton,
  InternalShadowRoundButtonProps,
} from "@/components/internal-components/InternalShadowRoundButton";
import { OakIconName } from "@/components/images-and-icons/OakIcon";
import { InternalButtonProps } from "@/components/internal-components/InternalButton";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";

type OakTertiaryButtonProps = InternalButtonProps & {
  iconBackground?: OakRoundIconProps["$background"];
  iconColorFilter?: OakRoundIconProps["$colorFilter"];
  isTrailingIcon?: boolean;
  iconName?: OakIconName;
};

/**
 * An implementation of InternalShadowRoundButton, its a subtle button with no border and a round icon.
 *
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
      defaultIconColor={"icon-inverted"}
      disabledIconColor="icon-inverted"
      disabledIconBackground="bg-btn-primary-disabled"
      defaultIconBackground="icon-primary"
      hoverIconBackground="bg-btn-primary-hover"
      defaultTextColor="text-primary"
      hoverTextColor="bg-btn-primary-hover"
      disabledTextColor="text-disabled"
      iconBackgroundSize={"spacing-32"}
      iconSize={"spacing-24"}
    >
      {children}
    </InternalShadowRoundButton>
  );
};
