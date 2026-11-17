import React from "react";

import { InternalShadowRoundButton } from "@/components/internal-components/InternalShadowRoundButton";
import { OakAllSpacingToken } from "@/styles/theme/spacing";

export type OakCloseButtonProps = {
  onClose: () => void;
  /**
   * Size of the button and its icon
   *
   * @default spacing-24
   */
  size?: OakAllSpacingToken;
  /**
   * Use `inverted` on dark backgrounds, e.g. a black modal header
   *
   * @default default
   */
  variant?: "default" | "inverted";
};

const variantColours = {
  default: { icon: "icon-primary", hoverBackground: "bg-neutral" },
  inverted: { icon: "icon-inverted", hoverBackground: "bg-btn-primary-hover" },
} as const;

/**
 *
 * An icon button that can be used for closing items such as in navigation menus and modals.
 *
 * Design system: <https://www.figma.com/design/YcWQMMhHPVVmc47cHHEEAl/Oak-Design-Kit?node-id=14493-15312>
 *
 *
 */
export function OakCloseButton({
  onClose,
  size = "spacing-24",
  variant = "default",
  ...rest
}: Readonly<OakCloseButtonProps>) {
  const colours = variantColours[variant];

  return (
    <InternalShadowRoundButton
      onClick={onClose}
      aria-label="Close"
      defaultIconBackground="transparent"
      defaultIconColor={colours.icon}
      defaultTextColor="transparent"
      hoverTextColor="transparent"
      disabledTextColor="transparent"
      hoverIconBackground={colours.hoverBackground}
      hoverIconColor={colours.icon}
      disabledIconBackground="transparent"
      iconBackgroundSize={size}
      iconSize={size}
      iconName="cross"
      hoverDropShadow={null}
      {...rest}
    />
  );
}
