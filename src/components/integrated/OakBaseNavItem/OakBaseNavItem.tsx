import type { UrlObject } from "url";

import React from "react";
import Link from "next/link";

import {
  OakPrimaryButton,
  OakPrimaryButtonProps,
} from "@/components/ui/OakPrimaryButton";
import {
  OakPrimaryInvertedButton,
  OakPrimaryInvertedButtonProps,
} from "@/components/ui/OakPrimaryInvertedButton";

type Url = string | UrlObject;

export type OakBaseNavItemProps = {
  href: Url;
  isCurrent: boolean;
  shallow: boolean;
  label: string;
} & OakPrimaryButtonProps &
  OakPrimaryInvertedButtonProps;

/**
 *
 * A specific implementation of OakPrimaryButton and OakPrimaryInvertedButton
 *
 */

export const OakBaseNavItem = ({
  href,
  isCurrent,
  shallow,
  label,
  ...rest
}: OakBaseNavItemProps) => {
  return isCurrent ? (
    <OakPrimaryButton
      element={Link}
      href={href}
      shallow={shallow}
      iconName={undefined}
      role={"link"}
      aria-label={label}
      aria-disabled={isCurrent}
      width={"100%"}
      {...rest}
    >
      {label}
    </OakPrimaryButton>
  ) : (
    <OakPrimaryInvertedButton
      element={Link}
      href={href}
      shallow={shallow}
      iconName={undefined}
      isTrailingIcon={true}
      role={"link"}
      aria-label={label}
      aria-disabled={isCurrent}
      width={"100%"}
      {...rest}
    >
      {label}
    </OakPrimaryInvertedButton>
  );
};
