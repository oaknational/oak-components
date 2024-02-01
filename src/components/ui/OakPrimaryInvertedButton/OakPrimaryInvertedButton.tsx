import React, { ElementType } from "react";

import {
  InternalShadowRectButton,
  InternalShadowRectButtonProps,
} from "@/components/ui/InternalShadowRectButton";
import { PolymorphicPropsWithoutRef } from "@/components/utils/polymorphic";

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

export type OakPrimaryInvertedButtonProps = Omit<
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

export const OakPrimaryInvertedButton = <C extends ElementType = "button">({
  element,
  ...rest
}: OakPrimaryInvertedButtonProps & PolymorphicPropsWithoutRef<C>) => {
  return (
    <InternalShadowRectButton
      element={element ?? "button"}
      defaultBorderColor="bg-btn-secondary"
      defaultBackground="bg-btn-secondary"
      defaultTextColor="text-primary"
      hoverBackground="bg-btn-secondary"
      hoverBorderColor="bg-btn-secondary"
      hoverTextColor="text-primary"
      disabledBackground="bg-btn-secondary"
      disabledBorderColor="bg-btn-secondary"
      disabledTextColor="text-disabled"
      hoverShadow={null}
      {...rest}
    />
  );
};
