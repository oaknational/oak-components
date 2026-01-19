import React, { useState } from "react";
import styled from "styled-components";

import {
  MenuItemProps,
  OakSideMenuNavLink,
} from "@/components/owa/OakSideMenuNavLink";
import { OakAnchorTarget } from "@/components/navigation/OakAnchorTarget";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakHeading } from "@/components/typography/OakHeading";
import { OakLI } from "@/components/typography/OakLI";
import { OakUL } from "@/components/typography/OakUL";

const StyledNav = styled.nav`
  outline: none;
`;

export type OakSideMenuNavProps = {
  heading: string;
  menuItems: MenuItemProps[];
  anchorTargetId: string;
};

export const OakSideMenuNav = (props: OakSideMenuNavProps) => {
  const { heading, menuItems, anchorTargetId } = props;
  const [selectedHref, setSelectedHref] = useState<string | null>(null);

  return (
    <StyledNav aria-labelledby="side-menu-header">
      <OakAnchorTarget id={anchorTargetId} />
      <OakFlex
        $flexDirection="column"
        $background={["bg-decorative1-subdued", "bg-primary"]}
        $pa={["spacing-48", "spacing-0"]}
        $gap="spacing-16"
      >
        <OakHeading
          tag="h2"
          $font="heading-light-7"
          $color="text-subdued"
          id="side-menu-header"
        >
          {heading}
        </OakHeading>
        <OakUL $reset $display="flex" $gap="spacing-16" $flexDirection="column">
          {menuItems.map((item) => (
            <OakLI key={item.href}>
              <OakSideMenuNavLink
                item={item}
                isSelected={selectedHref === item.href}
                onClick={() => setSelectedHref(item.href)}
              />
            </OakLI>
          ))}
        </OakUL>
      </OakFlex>
    </StyledNav>
  );
};
