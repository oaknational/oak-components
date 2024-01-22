import React from "react";

import {
  InternalRectButton,
  InternalRectButtonProps,
} from "@/components/ui/InternalRectButton";

export type OakSecondaryButtonProps = Pick<
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
  | "width"
  | "maxWidth"
  | "form"
>;

export const OakSecondaryButton = (props: OakSecondaryButtonProps) => {
  return (
    <InternalRectButton
      defaultBorderColor="text-primary"
      defaultBackground="bg-btn-secondary"
      defaultTextColor="text-primary"
      hoverBackground="bg-btn-secondary-hover"
      hoverBorderColor="text-primary"
      hoverTextColor="text-primary"
      disabledBackground="bg-btn-secondary-disabled"
      disabledBorderColor="text-disabled"
      disabledTextColor="text-disabled"
      {...props}
    />
  );
};
