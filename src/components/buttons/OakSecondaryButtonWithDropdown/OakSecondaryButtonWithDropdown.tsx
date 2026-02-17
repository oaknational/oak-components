import React, { ElementType } from "react";

import { OakButton, OakButtonProps } from "@/components/buttons/OakButton";
import { OakIconName } from "@/components/images-and-icons/OakIcon";
import { OakButtonWithDropdown } from "@/components/buttons/OakButtonWithDropdown";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";

export type OakSecondaryButtonWithDropdownProps = {
  primaryActionText: string;
  primaryActionIcon?: OakIconName;
  onPrimaryAction?: () => void;
  children?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  leadingButtonIcon?: React.ReactNode;
  ariaDescription?: string;
  "data-testid"?: string;
};

/**
 * A secondary button that takes custom menu items or .Item and .Divider compound components as children.
 *
 */
export const OakSecondaryButtonWithDropdown = (
  props: OakSecondaryButtonWithDropdownProps,
) => {
  return (
    <OakButtonWithDropdown
      {...props}
      buttonComponent={OakButton}
      dropdownTopSpacing="spacing-56"
    />
  );
};

OakSecondaryButtonWithDropdown.Divider = (): React.ReactElement => (
  <OakButtonWithDropdown.Divider />
);

OakSecondaryButtonWithDropdown.Item = <C extends ElementType = "button">({
  children,
  element,
  ...rest
}: {
  children: React.ReactNode;
} & OakButtonProps &
  PolymorphicPropsWithoutRef<C>): React.ReactElement => (
  <OakButton element="a" role="menuitem" isTrailingIcon {...rest}>
    {children}
  </OakButton>
);
