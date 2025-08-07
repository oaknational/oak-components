import React from "react";

import { InternalShadowRoundButton } from "@/components/molecules/InternalShadowRoundButton";

export type OakCloseButtonProps = {
  onClose: () => void;
};

/**
 *
 * An icon button that can be used for closing items such as in navigation menus and modals.
 *
 * Design system: <https://www.figma.com/design/YcWQMMhHPVVmc47cHHEEAl/Oak-Design-Kit?node-id=14493-15312>
 *
 */
export function OakCloseButton({ onClose, ...rest }: OakCloseButtonProps) {
  return (
    <InternalShadowRoundButton
      onClick={onClose}
      aria-label="Close"
      defaultIconBackground="transparent"
      defaultIconColor="black"
      defaultTextColor="transparent"
      hoverTextColor="transparent"
      disabledTextColor="transparent"
      hoverIconBackground="bg-neutral"
      hoverIconColor="black"
      disabledIconBackground="transparent"
      iconBackgroundSize="all-spacing-6"
      iconSize="all-spacing-6"
      iconName="cross"
      hoverDropShadow={null}
      {...rest}
    />
  );
}
