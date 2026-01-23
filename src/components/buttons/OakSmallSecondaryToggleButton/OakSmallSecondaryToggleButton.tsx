import React, { ElementType } from "react";

import {
  InternalShadowRectButton,
  InternalShadowRectButtonProps,
} from "@/components/internal-components/InternalShadowRectButton";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";

export type OakSmallSecondaryToggleButtonProps = Omit<
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
> & {
  toggleOn?: boolean;
};

/**
 *
 * A specific implementation of InternalRectButton which can be displayed in two different states using the toggleOn prop
 *
 * This button does not manage its own state but could be adapted to do so at some point in the future
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
export const OakSmallSecondaryToggleButton = <
  C extends ElementType = "button",
>({
  element,
  toggleOn,
  ...rest
}: OakSmallSecondaryToggleButtonProps & PolymorphicPropsWithoutRef<C>) => {
  const defaultBorderColor = toggleOn ? "bg-btn-primary" : "text-primary";
  const defaultBackground = toggleOn ? "bg-btn-primary" : "bg-btn-secondary";
  const defaultTextColor = toggleOn ? "text-inverted" : "text-primary";
  const hoverBackground = toggleOn
    ? "bg-btn-primary-hover"
    : "bg-btn-secondary-hover";
  const hoverBorderColor = toggleOn ? "bg-btn-primary-hover" : "text-primary";
  const hoverTextColor = toggleOn ? "text-inverted" : "text-primary";
  const disabledBackground = toggleOn
    ? "bg-btn-primary-disabled"
    : "bg-btn-secondary-disabled";

  const disabledTextColor = toggleOn ? "text-inverted" : "text-disabled";

  return (
    <InternalShadowRectButton
      element={element ?? "button"}
      defaultBorderColor={defaultBorderColor}
      defaultBackground={defaultBackground}
      defaultTextColor={defaultTextColor}
      hoverBackground={hoverBackground}
      hoverBorderColor={hoverBorderColor}
      hoverTextColor={hoverTextColor}
      disabledBackground={disabledBackground}
      disabledBorderColor="text-disabled"
      disabledTextColor={disabledTextColor}
      font="body-3-bold"
      pv="spacing-4"
      ph="spacing-8"
      loadingSpinnerSize="spacing-20"
      iconGap="spacing-4"
      aria-pressed={toggleOn}
      {...rest}
    />
  );
};
