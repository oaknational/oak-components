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
  | "type"
>;

export const OakPrimaryButton = (props: OakPrimaryButtonProps) => {
  return (
    <InternalRectButton
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
