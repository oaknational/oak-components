import React from "react";

import { OakFlex } from "@/components/atoms/OakFlex";
import { OakLI } from "@/components/atoms";
import {
  OakPrimaryNavItem,
  OakPrimaryNavItemProps,
} from "@/components/organisms/shared/OakPrimaryNavItem";

export type OakPrimaryNavProps = {
  ariaLabel?: string;
  navItems: OakPrimaryNavItemProps[];
};

/**
 * A row of buttons for navigating between different sections
 *
 * ⚠️ To be deprecated
 */
export const OakPrimaryNav = ({ ariaLabel, navItems }: OakPrimaryNavProps) => {
  return (
    <nav aria-label={ariaLabel}>
      <OakFlex
        as={"ul"}
        $flexDirection={["row"]}
        $gap={"spacing-24"}
        $mh={"spacing-0"}
        $mv={"spacing-0"}
        $ph={"spacing-0"}
      >
        {navItems.map(
          (
            { href, isCurrent, children }: OakPrimaryNavItemProps,
            index: number,
          ) => (
            <OakLI $listStyle={"none"} key={index}>
              <OakPrimaryNavItem href={href} isCurrent={isCurrent}>
                {children}
              </OakPrimaryNavItem>
            </OakLI>
          ),
        )}
      </OakFlex>
    </nav>
  );
};
