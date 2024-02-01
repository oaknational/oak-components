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

export type OakPrimaryNavItemProps = {
  href: Url;
  isCurrent: boolean;
  shallow?: boolean;
  label: string;
} & OakPrimaryButtonProps &
  OakPrimaryInvertedButtonProps;

/**
 *
 * A specific implementation of OakPrimaryButton and OakPrimaryInvertedButton rendering
 * relevant view depending on isCurrent prop
 *
 */

export const OakPrimaryNavItem = ({
  href,
  isCurrent,
  shallow = true,
  label,
  ...rest
}: OakPrimaryNavItemProps) => {
  return isCurrent ? (
    <OakPrimaryButton
      element={Link}
      href={href}
      shallow={shallow}
      aria-label={label}
      aria-disabled={isCurrent}
      aria-current={"page"}
      {...rest}
    >
      {label}
    </OakPrimaryButton>
  ) : (
    <OakPrimaryInvertedButton
      element={Link}
      href={href}
      shallow={shallow}
      isTrailingIcon={true}
      aria-label={label}
      aria-disabled={isCurrent}
      {...rest}
    >
      {label}
    </OakPrimaryInvertedButton>
  );
};
