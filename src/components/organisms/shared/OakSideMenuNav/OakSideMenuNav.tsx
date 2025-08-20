import React, { useState } from "react";
import styled from "styled-components";

import {
  MenuItemProps,
  OakSideMenuNavLink,
} from "@/components/organisms/shared/OakSideMenuNavLink";
import {
  OakAnchorTarget,
  OakFlex,
  OakHeading,
  OakLI,
  OakUL,
} from "@/components/atoms";

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
        $background={["bg-decorative1-subdued", "white"]}
        $pa={["inner-padding-xl4", "inner-padding-none"]}
        $gap="space-between-s"
      >
        <OakHeading
          tag="h2"
          $font="heading-light-7"
          $color="text-subdued"
          id="side-menu-header"
        >
          {heading}
        </OakHeading>
        <OakUL
          $reset
          $display="flex"
          $gap="space-between-s"
          $flexDirection="column"
        >
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
