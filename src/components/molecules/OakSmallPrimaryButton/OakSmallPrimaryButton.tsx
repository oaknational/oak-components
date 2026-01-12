import React, { ElementType } from "react";

import {
  InternalShadowRectButton,
  InternalShadowRectButtonProps,
} from "@/components/molecules/InternalShadowRectButton";
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
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
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
