import React from "react";

import { InternalShadowRoundButton } from "@/components/internal-components/InternalShadowRoundButton";

export type OakCloseButtonProps = {
  onClose: () => void;
};

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
  ...rest
}: Readonly<OakCloseButtonProps>) {
  return (
    <InternalShadowRoundButton
      onClick={onClose}
      aria-label="Close"
      defaultIconBackground="transparent"
      defaultIconColor="icon-primary"
      defaultTextColor="transparent"
      hoverTextColor="transparent"
      disabledTextColor="transparent"
      hoverIconBackground="bg-neutral"
      hoverIconColor="icon-primary"
      disabledIconBackground="transparent"
      iconBackgroundSize="spacing-24"
      iconSize="spacing-24"
      iconName="cross"
      hoverDropShadow={null}
      {...rest}
    />
  );
}
