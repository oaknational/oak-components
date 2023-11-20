import React from "react";

import {
  InternalRectButton,
  InternalRectButtonProps,
} from "@/components/ui/InternalRectButton";

export type OakPrimaryButtonProps = Pick<
  InternalRectButtonProps,
  | "children"
  | "className"
  | "data-testid"
  | "onClick"
  | "onHovered"
  | "disabled"
  | "isLoading"
  | "iconName"
  | "isTrailingIcon"
>;

export const OakPrimaryButton = (props: OakPrimaryButtonProps) => {
  return (
    <InternalRectButton
      $background="white"
      $color="black"
      $ba="border-solid-m"
      defaultBorderColor="bg-btn-primary"
      defaultBackground="bg-btn-primary"
      defaultTextColor="text-inverted"
      hoverBackground="bg-btn-primary-hover"
      hoverBorderColor="bg-btn-primary-hover"
      hoverTextColor="text-inverted"
      disabledBackground="bg-btn-primary-disabled"
      disabledBorderColor="text-disabled"
      disabledTextColor="text-inverted"
      {...props}
    />
  );
};
