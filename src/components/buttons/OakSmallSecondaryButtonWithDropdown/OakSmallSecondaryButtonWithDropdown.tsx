import React, { ElementType } from "react";

import { OakIconName } from "@/components/images-and-icons";
import { OakSmallSecondaryButton } from "@/components/buttons/OakSmallSecondaryButton";
import { OakButtonWithDropdown } from "@/components/buttons/OakButtonWithDropdown";
import {
  OakSmallPrimaryInvertedButton,
  OakSmallPrimaryInvertedButtonProps,
} from "@/components/buttons/OakSmallPrimaryInvertedButton";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";

export type OakSmallSecondaryButtonWithDropdownProps = {
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
 * A secondary button that allows children to be passed in as a dropdown menu.
 *
 */
export const OakSmallSecondaryButtonWithDropdown = (
  props: OakSmallSecondaryButtonWithDropdownProps,
) => {
  return (
    <OakButtonWithDropdown
      {...props}
      buttonComponent={OakSmallSecondaryButton}
      dropdownTopSpacing="spacing-40"
      flexWidth={["100%"]}
    />
  );
};

OakSmallSecondaryButtonWithDropdown.Divider = (): React.ReactElement => (
  <OakButtonWithDropdown.Divider />
);

OakSmallSecondaryButtonWithDropdown.Item = <C extends ElementType = "button">({
  children,
  element,
  ...rest
}: {
  children: React.ReactNode;
} & OakSmallPrimaryInvertedButtonProps &
  PolymorphicPropsWithoutRef<C>): React.ReactElement => (
  <OakSmallPrimaryInvertedButton
    element="a"
    role="menuitem"
    isTrailingIcon
    {...rest}
  >
    {children}
  </OakSmallPrimaryInvertedButton>
);
