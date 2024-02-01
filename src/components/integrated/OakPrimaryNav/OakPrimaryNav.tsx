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
          ({ href, isCurrent, label, ...rest }: OakPrimaryNavItemProps) => (
            <OakLI $listStyle={"none"} key={label}>
              <OakPrimaryNavItem
                href={href}
                isCurrent={isCurrent}
                label={label}
                {...rest}
              />
            </OakLI>
          ),
        )}
      </OakFlex>
    </nav>
  );
};
