import React, { ElementType } from "react";

import {
  InternalShadowRectButton,
  InternalShadowRectButtonProps,
} from "@/components/internal-components/InternalShadowRectButton";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";

export type OakSmallPrimaryInvertedButtonProps = Omit<
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
>;

/**
 *
 * A specific implementation of InternalRectButton
 *
 * ⚠️ Deprecated - use `<OakButton />` instead
 * @deprecated Use `<OakButton />` instead
 */
export const OakSmallPrimaryInvertedButton = <
  C extends ElementType = "button",
>({
  element,
  ...rest
}: OakSmallPrimaryInvertedButtonProps & PolymorphicPropsWithoutRef<C>) => {
  return (
    <InternalShadowRectButton
      element={element ?? "button"}
      defaultBorderColor="bg-btn-secondary"
      defaultBackground="bg-btn-secondary"
      defaultTextColor="text-primary"
      hoverBackground="bg-btn-secondary-hover"
      hoverBorderColor="bg-btn-secondary-hover"
      hoverTextColor="text-primary"
      disabledBackground="bg-btn-secondary"
      disabledBorderColor="bg-btn-secondary"
      disabledTextColor="text-disabled"
      hoverShadow={null}
      font="body-3-bold"
      pv="spacing-4"
      ph="spacing-8"
      loadingSpinnerSize="spacing-20"
      iconGap="spacing-4"
      {...rest}
    />
  );
};
