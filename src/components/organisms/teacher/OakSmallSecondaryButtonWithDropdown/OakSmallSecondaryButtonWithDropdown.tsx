import React from "react";

import { OakIconName } from "@/components/atoms";
import { OakSmallSecondaryButton } from "@/components/molecules/OakSmallSecondaryButton";
import { OakButtonWithDropdown } from "@/components/molecules/OakButtonWithDropdown";

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
 */
export const OakSmallSecondaryButtonWithDropdown = (
  props: OakSmallSecondaryButtonWithDropdownProps,
) => {
  return (
    <OakButtonWithDropdown
      {...props}
      buttonComponent={OakSmallSecondaryButton}
      dropdownTopSpacing="all-spacing-8"
      flexWidth={["100%"]}
    />
  );
};
