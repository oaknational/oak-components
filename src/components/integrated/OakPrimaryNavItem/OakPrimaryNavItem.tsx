import type { UrlObject } from "url";

import React, { ReactNode } from "react";
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
  children: ReactNode;
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
  children,
}: OakPrimaryNavItemProps) => {
  return isCurrent ? (
    <OakPrimaryButtonWithoutPointerEvents
      element={"span"}
      aria-current={"page"}
    >
      {children}
    </OakPrimaryButtonWithoutPointerEvents>
  ) : (
    <OakPrimaryInvertedButton
      element={Link}
      href={href}
      shallow={shallow}
      isTrailingIcon={true}
    >
      {children}
    </OakPrimaryInvertedButton>
  );
};
