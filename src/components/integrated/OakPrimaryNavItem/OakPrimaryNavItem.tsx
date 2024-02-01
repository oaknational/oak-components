import type { UrlObject } from "url";

import React from "react";
import Link from "next/link";
import styled from "styled-components";

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
  isCurrent?: boolean;
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

const OakPrimaryButtonWithoutPointerEvents = styled(OakPrimaryButton)`
  pointer-events: none;
`;

export const OakPrimaryNavItem = ({
  href,
  isCurrent = false,
  shallow = true,
  label,
}: OakPrimaryNavItemProps) => {
  return isCurrent ? (
    <OakPrimaryButtonWithoutPointerEvents
      element={"span"}
      aria-current={"page"}
    >
      {label}
    </OakPrimaryButtonWithoutPointerEvents>
  ) : (
    <OakPrimaryInvertedButton
      element={Link}
      href={href}
      shallow={shallow}
      isTrailingIcon={true}
    >
      {label}
    </OakPrimaryInvertedButton>
  );
};
