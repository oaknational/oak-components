import React, { ElementType } from "react";

import {
  InternalRectButton,
  InternalRectButtonProps,
} from "@/components/ui/InternalRectButton";
import { PolymorphicPropsWithoutRef } from "@/components/utils/polymorphic";

export type OakPrimaryButtonProps = Omit<
  InternalRectButtonProps,
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
    <InternalRectButton
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
