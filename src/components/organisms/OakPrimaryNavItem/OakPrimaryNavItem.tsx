import type { UrlObject } from "url";

import React, { ReactNode } from "react";
import Link from "next/link";
import styled from "styled-components";

import {
  OakPrimaryButton,
  OakPrimaryButtonProps,
} from "@/components/molecules/OakPrimaryButton";
import {
  OakPrimaryInvertedButton,
  OakPrimaryInvertedButtonProps,
} from "@/components/molecules/OakPrimaryInvertedButton";

type Url = string | UrlObject;

export type OakPrimaryNavItemProps = {
  href: Url;
  isCurrent?: boolean;
  shallow?: boolean;
  children: ReactNode;
} & OakPrimaryButtonProps &
  OakPrimaryInvertedButtonProps;

const OakPrimaryButtonWithoutPointerEvents = styled(OakPrimaryButton)`
  pointer-events: none;
`;

/**
 *
 * A specific implementation of OakPrimaryButton and OakPrimaryInvertedButton rendering
 * relevant view depending on isCurrent prop
 *
 */
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
