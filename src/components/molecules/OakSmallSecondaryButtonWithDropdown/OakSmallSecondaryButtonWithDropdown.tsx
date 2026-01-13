import React, { ElementType } from "react";

import { OakIconName } from "@/components/atoms";
import { OakSmallSecondaryButton } from "@/components/molecules/OakSmallSecondaryButton";
import { OakButtonWithDropdown } from "@/components/molecules/OakButtonWithDropdown";
import {
  OakSmallPrimaryInvertedButton,
  OakSmallPrimaryInvertedButtonProps,
} from "@/components/molecules/OakSmallPrimaryInvertedButton";
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
 * ## To be merged 🔀
 * This component will become a variant of `OakButtonWithDropdown`
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
