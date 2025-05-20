import React, { useState } from "react";
import styled from "styled-components";

import {
  OakFlex,
  OakHeading,
  OakIcon,
  OakLI,
  OakSpan,
  OakUL,
} from "@/components/atoms";
import { flexStyle, FlexStyleProps } from "@/styles/utils/flexStyle";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { paddingStyle, PaddingStyleProps } from "@/styles/utils/spacingStyle";
import { parseColor } from "@/styles/helpers/parseColor";
import { getBreakpoint } from "@/styles/utils/responsiveStyle";

const StyledNav = styled.nav`
  outline: none;
`;

const StyledLink = styled("a")<
  FlexStyleProps & PaddingStyleProps & { isSelected: boolean }
>`
  text-decoration: none;
  display: flex;
  outline: none;

  @media (min-width: ${getBreakpoint("small")}px) {
    border-left: ${(props) =>
      props.isSelected ? "4px solid black" : "4px solid transparent"};
    :hover {
      text-decoration: underline;
      border-color: ${(props) =>
        props.isSelected
          ? parseColor("bg-btn-primary-hover")
          : parseColor("bg-decorative1-main")};
    }
  }

  :focus-visible {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
    border-color: transparent;
    border-radius: 4px;
  }

  ${flexStyle}
  ${paddingStyle}
`;

type MenuItemProps = {
  heading: string;
  subheading?: string;
  href: string;
};

export type OakSideMenuNavProps = {
  heading: string;
  menuItems: MenuItemProps[];
};

export const OakSideMenuNav = (props: OakSideMenuNavProps) => {
  const { heading, menuItems } = props;
  const [selectedHref, setSelectedHref] = useState<string | null>(null);

  return (
    <StyledNav aria-label="side navigation">
      <OakFlex
        $flexDirection="column"
        $background={["bg-decorative1-subdued", "white"]}
        $pa={["inner-padding-xl4", "inner-padding-none"]}
        $gap="space-between-s"
      >
        <OakHeading tag="h4" $font="heading-light-7" $color="text-subdued">
          {heading}
        </OakHeading>
        <OakUL
          $reset
          $display="flex"
          $gap="space-between-s"
          $flexDirection="column"
        >
          {menuItems.map((item) => (
            <OakLI key={item.heading}>
              <StyledLink
                $alignItems={["center", "flex-start"]}
                $gap="space-between-s"
                $rowGap="space-between-none"
                href={item.href}
                $ph={["inner-padding-none", "inner-padding-s"]}
                isSelected={selectedHref === item.href}
                $flexDirection={["row", "column"]}
                onClick={() => setSelectedHref(item.href)}
                aria-current={selectedHref === item.href ? "true" : undefined}
              >
                <OakSpan $font="heading-light-7">{item.heading}</OakSpan>
                {item.subheading && (
                  <OakSpan $font="body-3" $color="text-subdued">
                    {item.subheading}
                  </OakSpan>
                )}
                <OakIcon
                  $display={["block", "none"]}
                  iconName="chevron-right"
                  $width="all-spacing-6"
                />
              </StyledLink>
            </OakLI>
          ))}
        </OakUL>
      </OakFlex>
    </StyledNav>
  );
};
