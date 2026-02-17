import React, { ElementType } from "react";

import {
  InternalShadowRectButton,
  InternalShadowRectButtonProps,
} from "@/components/internal-components/InternalShadowRectButton";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";

export type OakSmallSecondaryButtonProps = Omit<
  InternalShadowRectButtonProps,
  | "defaultBorderColor"
  | "defaultBackground"
  | "defaultTextColor"
  | "hoverBackground"
  | "hoverBorderColor"
  | "hoverTextColor"
  | "disabledBackground"
  | "disabledBorderColor"
  | "disabledTextColor"
  | "pv"
  | "ph"
  | "font"
>;

/**
 *
 * A specific implementation of InternalRectButton
 *
 * ⚠️ Deprecated - use `<OakButton />` instead
 * @deprecated Use `<OakButton />` instead
 */
export const OakSmallSecondaryButton = <C extends ElementType = "button">({
  element,
  ...rest
}: OakSmallSecondaryButtonProps & PolymorphicPropsWithoutRef<C>) => {
  return (
    <InternalShadowRectButton
      element={element ?? "button"}
      defaultBorderColor="text-primary"
      defaultBackground="bg-btn-secondary"
      defaultTextColor="text-primary"
      hoverBackground="bg-btn-secondary-hover"
      hoverBorderColor="text-primary"
      hoverTextColor="text-primary"
      disabledBackground="bg-btn-secondary-disabled"
      disabledBorderColor="text-disabled"
      disabledTextColor="text-disabled"
      font="body-3-bold"
      pv="spacing-4"
      ph="spacing-8"
      loadingSpinnerSize="spacing-24"
      iconGap="spacing-4"
      {...rest}
    />
  );
};
