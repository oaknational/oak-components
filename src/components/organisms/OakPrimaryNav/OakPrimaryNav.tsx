import React from "react";

import { OakFlex } from "@/components/atoms/OakFlex";
import { OakLI } from "@/components/atoms";
import {
  OakPrimaryNavItem,
  OakPrimaryNavItemProps,
} from "@/components/organisms/OakPrimaryNavItem";

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
