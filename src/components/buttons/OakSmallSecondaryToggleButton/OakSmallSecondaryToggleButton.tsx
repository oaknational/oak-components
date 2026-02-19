import React, { ElementType } from "react";

import {
  InternalShadowRectButton,
  InternalShadowRectButtonProps,
} from "@/components/internal-components/InternalShadowRectButton";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";
import { OakUiRoleToken } from "@/styles";

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
  iconOverrideToggleOn?: React.ReactNode;
  iconOverrideToggleOff?: React.ReactNode;
  defaultBorderColorToggleOn?: OakUiRoleToken;
  defaultBorderColorToggleOff?: OakUiRoleToken;
  defaultBackgroundToggleOn?: OakUiRoleToken;
  defaultBackgroundToggleOff?: OakUiRoleToken;
  defaultTextColorToggleOn?: OakUiRoleToken;
  defaultTextColorToggleOff?: OakUiRoleToken;
  hoverBackgroundToggleOn?: OakUiRoleToken;
  hoverBackgroundToggleOff?: OakUiRoleToken;
  hoverBorderColorToggleOn?: OakUiRoleToken;
  hoverBorderColorToggleOff?: OakUiRoleToken;
  hoverTextColorToggleOn?: OakUiRoleToken;
  hoverTextColorToggleOff?: OakUiRoleToken;
  disabledBackgroundToggleOn?: OakUiRoleToken;
  disabledBackgroundToggleOff?: OakUiRoleToken;
  disabledBorderColorToggleOn?: OakUiRoleToken;
  disabledBorderColorToggleOff?: OakUiRoleToken;
  disabledTextColorToggleOn?: OakUiRoleToken;
  disabledTextColorToggleOff?: OakUiRoleToken;
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
  defaultBorderColorToggleOn = "bg-btn-primary",
  defaultBorderColorToggleOff = "text-primary",
  defaultBackgroundToggleOn = "bg-btn-primary",
  defaultBackgroundToggleOff = "bg-btn-secondary",
  defaultTextColorToggleOn = "text-inverted",
  defaultTextColorToggleOff = "text-primary",
  hoverBackgroundToggleOn = "bg-btn-primary-hover",
  hoverBackgroundToggleOff = "bg-btn-secondary-hover",
  hoverBorderColorToggleOn = "bg-btn-primary-hover",
  hoverBorderColorToggleOff = "text-primary",
  hoverTextColorToggleOn = "text-inverted",
  hoverTextColorToggleOff = "text-primary",
  disabledBackgroundToggleOn = "bg-btn-primary-disabled",
  disabledBackgroundToggleOff = "bg-btn-secondary-disabled",
  disabledBorderColorToggleOn = "bg-btn-primary-disabled",
  disabledBorderColorToggleOff = "text-disabled",
  disabledTextColorToggleOn = "text-inverted",
  disabledTextColorToggleOff = "text-disabled",
  iconOverrideToggleOn,
  iconOverrideToggleOff,
  ...rest
}: OakSmallSecondaryToggleButtonProps & PolymorphicPropsWithoutRef<C>) => {
  return (
    <InternalShadowRectButton
      element={element ?? "button"}
      defaultBorderColor={
        toggleOn ? defaultBorderColorToggleOn : defaultBorderColorToggleOff
      }
      defaultBackground={
        toggleOn ? defaultBackgroundToggleOn : defaultBackgroundToggleOff
      }
      defaultTextColor={
        toggleOn ? defaultTextColorToggleOn : defaultTextColorToggleOff
      }
      hoverBackground={
        toggleOn ? hoverBackgroundToggleOn : hoverBackgroundToggleOff
      }
      hoverBorderColor={
        toggleOn ? hoverBorderColorToggleOn : hoverBorderColorToggleOff
      }
      hoverTextColor={
        toggleOn ? hoverTextColorToggleOn : hoverTextColorToggleOff
      }
      disabledBackground={
        toggleOn ? disabledBackgroundToggleOn : disabledBackgroundToggleOff
      }
      disabledBorderColor={
        toggleOn ? disabledBorderColorToggleOn : disabledBorderColorToggleOff
      }
      disabledTextColor={
        toggleOn ? disabledTextColorToggleOn : disabledTextColorToggleOff
      }
      font="body-3-bold"
      pv="spacing-4"
      ph="spacing-8"
      loadingSpinnerSize="spacing-20"
      iconGap="spacing-4"
      aria-pressed={toggleOn}
      iconOverride={toggleOn ? iconOverrideToggleOn : iconOverrideToggleOff}
      {...rest}
    />
  );
};
