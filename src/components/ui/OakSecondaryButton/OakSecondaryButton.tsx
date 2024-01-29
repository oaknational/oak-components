import React, { ElementType } from "react";

import {
  InternalRectButton,
  InternalRectButtonProps,
} from "@/components/ui/InternalRectButton";
import { PolymorphicPropsWithoutRef } from "@/components/utils/polymorphic";

export type OakSecondaryButtonProps = Omit<
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

export const OakSecondaryButton = <C extends ElementType = "button">({
  as,
  ...rest
}: OakSecondaryButtonProps & PolymorphicPropsWithoutRef<C>) => {
  return (
    <InternalRectButton
      as={as ?? "button"}
      defaultBorderColor="text-primary"
      defaultBackground="bg-btn-secondary"
      defaultTextColor="text-primary"
      hoverBackground="bg-btn-secondary-hover"
      hoverBorderColor="text-primary"
      hoverTextColor="text-primary"
      disabledBackground="bg-btn-secondary-disabled"
      disabledBorderColor="text-disabled"
      disabledTextColor="text-disabled"
      {...rest}
    />
  );
};
