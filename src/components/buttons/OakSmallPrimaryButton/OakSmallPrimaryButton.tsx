import React, { ElementType } from "react";

import {
  InternalShadowRectButton,
  InternalShadowRectButtonProps,
} from "@/components/internal-components/InternalShadowRectButton";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";

export type OakSmallPrimaryButtonProps = Omit<
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
export const OakSmallPrimaryButton = <C extends ElementType = "button">({
  element,
  ...rest
}: OakSmallPrimaryButtonProps & PolymorphicPropsWithoutRef<C>) => {
  return (
    <InternalShadowRectButton
      element={element ?? "button"}
      defaultBorderColor="bg-btn-primary"
      defaultBackground="bg-btn-primary"
      defaultTextColor="text-inverted"
      hoverBackground="bg-btn-primary-hover"
      hoverBorderColor="bg-btn-primary-hover"
      hoverTextColor="text-inverted"
      disabledBackground="bg-btn-primary-disabled"
      disabledBorderColor="text-disabled"
      disabledTextColor="text-inverted"
      font="body-3-bold"
      pv="spacing-4"
      ph="spacing-8"
      loadingSpinnerSize="spacing-20"
      iconGap="spacing-4"
      {...rest}
    />
  );
};
