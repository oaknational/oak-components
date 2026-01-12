import React, { ElementType } from "react";

import {
  OakPrimaryInvertedButton,
  OakPrimaryInvertedButtonProps,
} from "@/components/molecules/OakPrimaryInvertedButton";
import { OakIconName } from "@/components/atoms";
import { OakSecondaryButton } from "@/components/molecules/OakSecondaryButton";
import { OakButtonWithDropdown } from "@/components/molecules/OakButtonWithDropdown";
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
      buttonComponent={OakSecondaryButton}
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
} & OakPrimaryInvertedButtonProps &
  PolymorphicPropsWithoutRef<C>): React.ReactElement => (
  <OakPrimaryInvertedButton
    element="a"
    role="menuitem"
    isTrailingIcon
    {...rest}
  >
    {children}
  </OakPrimaryInvertedButton>
);
