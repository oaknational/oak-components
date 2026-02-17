import React, { ElementType } from "react";

import { OakRoundIconProps } from "@/components/images-and-icons/OakRoundIcon";
import { InternalShadowRoundButton } from "@/components/internal-components/InternalShadowRoundButton";
import { OakIconName } from "@/components/images-and-icons/OakIcon";
import { InternalButtonProps } from "@/components/internal-components/InternalButton";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";

type OakTertiaryInvertedButtonProps = InternalButtonProps & {
  iconBackground?: OakRoundIconProps["$background"];
  iconColorFilter?: OakRoundIconProps["$colorFilter"];
  isTrailingIcon?: boolean;
  iconName?: OakIconName;
};

/**
 * An implementation of InternalShadowRoundButton, its a subtle button with no border and a round icon.
 *
 * ⚠️ Deprecated - use `<OakButton />` instead
 * @deprecated Use `<OakButton />` instead
 */
export const OakTertiaryInvertedButton = <C extends ElementType = "button">({
  element,
  isTrailingIcon,
  iconName,
  children,
  ...props
}: OakTertiaryInvertedButtonProps & PolymorphicPropsWithoutRef<C>) => {
  return (
    <InternalShadowRoundButton
      element={element ?? "button"}
      {...props}
      isTrailingIcon={isTrailingIcon}
      iconName={iconName}
      defaultIconColor={"text-primary"}
      disabledIconColor="icon-disabled"
      disabledIconBackground="bg-btn-secondary-disabled"
      defaultIconBackground="bg-btn-secondary"
      defaultIconBorderColor="bg-btn-primary"
      disabledIconBorderColor="border-neutral"
      hoverIconBackground="bg-btn-secondary"
      defaultTextColor="text-primary"
      hoverTextColor="text-subdued"
      disabledTextColor="text-disabled"
      iconBackgroundSize={"spacing-32"}
      iconSize={"spacing-24"}
    >
      {children}
    </InternalShadowRoundButton>
  );
};
