import React, { ElementType } from "react";

import { OakIconName } from "@/components/images-and-icons";
import { OakButtonWithDropdown } from "@/components/buttons/OakButtonWithDropdown";
import { OakButton, OakButtonProps } from "@/components/buttons/OakButton";
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

const OakButtonSm = (props: Omit<OakButtonProps, "size">) => (
  <OakButton {...props} size="sm" />
);

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
      buttonComponent={OakButtonSm}
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
} & OakButtonProps &
  PolymorphicPropsWithoutRef<C>): React.ReactElement => (
  <OakButton
    colorScheme="inverted"
    size="sm"
    element="a"
    role="menuitem"
    isTrailingIcon
    {...rest}
  >
    {children}
  </OakButton>
);
