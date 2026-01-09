import React, { ElementType } from "react";

import {
  InternalShadowIconButton,
  InternalShadowIconButtonProps,
} from "@/components/molecules/InternalShadowIconButton";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";

export type OakSmallTertiaryInvertedButtonProps = Omit<
  InternalShadowIconButtonProps,
  | "defaultBorderColor"
  | "defaultTextColor"
  | "hoverTextColor"
  | "disabledTextColor"
  | "iconSize"
>;

/**
 *
 * A specific implementation of InternalShadowIconButton
 *
 * ## To be merged 🔀
 * This component will become a variant of `OakButton` component
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
export const OakSmallTertiaryInvertedButton = <
  C extends ElementType = "button",
>({
  element,
  ...rest
}: OakSmallTertiaryInvertedButtonProps & PolymorphicPropsWithoutRef<C>) => {
  return (
    <InternalShadowIconButton
      element={element ?? "button"}
      defaultTextColor="text-primary"
      hoverTextColor="text-primary"
      disabledTextColor="text-disabled"
      disabledIconColor="text-disabled"
      {...rest}
    />
  );
};
