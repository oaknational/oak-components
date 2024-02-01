import React, { ElementType } from "react";

import {
  InternalShadowRectButton,
  InternalShadowRectButtonProps,
} from "@/components/ui/InternalShadowRectButton";
import { PolymorphicPropsWithoutRef } from "@/components/utils/polymorphic";

export type OakPrimaryButtonProps = Omit<
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

export const OakPrimaryButton = <C extends ElementType = "button">({
  element,
  ...rest
}: OakPrimaryButtonProps & PolymorphicPropsWithoutRef<C>) => {
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
      {...rest}
    />
  );
};
