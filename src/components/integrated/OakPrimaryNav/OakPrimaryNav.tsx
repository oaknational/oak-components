import React from "react";

import { OakFlex } from "@/components/base/OakFlex";
import { OakLI } from "@/components/base";
import {
  OakPrimaryNavItem,
  OakPrimaryNavItemProps,
} from "@/components/integrated/OakPrimaryNavItem";

export type OakPrimaryNavProps = {
  ariaLabel?: string;
  navItems: OakPrimaryNavItemProps[];
};

export const OakPrimaryNav = ({ ariaLabel, navItems }: OakPrimaryNavProps) => {
  return (
    <nav aria-label={ariaLabel}>
      <OakFlex
        as={"ul"}
        $flexDirection={["row"]}
        $gap={"space-between-m"}
        $mh={"space-between-none"}
        $mv={"space-between-none"}
        $ph={"inner-padding-none"}
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
