import React, { ElementType } from "react";

import {
  InternalShadowIconButton,
  InternalShadowIconButtonProps,
} from "@/components/internal-components/InternalShadowIconButton";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";

export type OakSmallTertiaryInvertedButtonProps = Omit<
  InternalShadowIconButtonProps,
  | "defaultBorderColor"
  | "defaultTextColor"
  | "hoverTextColor"
  | "disabledTextColor"
  | "iconSize"
>;

/**
 *
 * A specific implementation of InternalShadowIconButton
 *
 */
export const OakSmallTertiaryInvertedButton = <
  C extends ElementType = "button",
>({
  element,
  ...rest
}: OakSmallTertiaryInvertedButtonProps & PolymorphicPropsWithoutRef<C>) => {
  return (
    <InternalShadowIconButton
      element={element ?? "button"}
      defaultTextColor="text-primary"
      hoverTextColor="text-primary"
      disabledTextColor="text-disabled"
      disabledIconColor="text-disabled"
      {...rest}
    />
  );
};
