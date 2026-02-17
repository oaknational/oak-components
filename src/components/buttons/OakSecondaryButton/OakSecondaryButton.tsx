import React, { ElementType } from "react";

import {
  InternalShadowRectButton,
  InternalShadowRectButtonProps,
} from "@/components/internal-components/InternalShadowRectButton";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";

export type OakSecondaryButtonProps = Omit<
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
export const OakSecondaryButton = <C extends ElementType = "button">({
  element,
  ...rest
}: OakSecondaryButtonProps & PolymorphicPropsWithoutRef<C>) => {
  return (
    <InternalShadowRectButton
      element={element ?? "button"}
      defaultBorderColor="text-primary"
      defaultBackground="bg-btn-secondary"
      defaultTextColor="text-primary"
      hoverBackground="bg-btn-secondary-hover"
      hoverBorderColor="text-primary"
      hoverTextColor="text-primary"
      hoverUnderline={true}
      disabledBackground="bg-btn-secondary-disabled"
      disabledBorderColor="text-disabled"
      disabledTextColor="text-disabled"
      {...rest}
    />
  );
};
