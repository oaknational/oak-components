import React from "react";
import styled, { css } from "styled-components";

import { OakFlex } from "@/components/atoms/OakFlex";
import { flexStyle, FlexStyleProps } from "@/styles/utils/flexStyle";
import { paddingStyle, PaddingStyleProps } from "@/styles/utils/spacingStyle";
import { getBreakpoint } from "@/styles/utils/responsiveStyle";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { OakIcon, OakSpan } from "@/components/atoms";

export type MenuItemProps = {
  heading: string;
  subheading?: string;
  href: string;
};

const StyledLink = styled("a")<
  FlexStyleProps & PaddingStyleProps & { isSelected: boolean }
>`
  text-decoration: none;
  display: flex;
  outline: none;

  @media (min-width: ${getBreakpoint("small")}px) {
    border-left: ${(props) =>
      props.isSelected ? "4px solid #222222" : "4px solid transparent"};
    :hover {
      text-decoration: underline;
      border-color: ${(props) =>
        props.isSelected
          ? parseColor("bg-btn-primary-hover")
          : parseColor("bg-decorative1-main")};
    }
  }

  :focus-visible {
    box-shadow:
      ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
    border-color: transparent;
    border-radius: 4px;
  }
  ${flexStyle}
  ${paddingStyle}
`;

export type OakSideMenuNavLinkProps = FlexStyleProps &
  PaddingStyleProps & {
    item: MenuItemProps;
    isSelected: boolean;
    onClick: () => void;
  };

const OakSideMenuNavLinkCss = css<OakSideMenuNavLinkProps>`
  ${flexStyle}
  ${paddingStyle}
`;

const UnstyledComponent = (props: OakSideMenuNavLinkProps) => {
  const { item, isSelected, onClick, ...rest } = props;
  return (
    <StyledLink
      $alignItems={["center", "flex-start"]}
      $columnGap="spacing-16"
      href={item.href}
      $ph={["spacing-0", "spacing-12"]}
      isSelected={isSelected}
      $flexDirection={["row", "column"]}
      onClick={onClick}
      aria-current={isSelected ? "true" : undefined}
      {...rest}
    >
      <OakFlex
        $flexDirection={["row", "column"]}
        $columnGap={["spacing-16", "spacing-4"]}
        $flexWrap="wrap"
      >
        <OakSpan $font="heading-light-7" $color="text-primary">
          {item.heading}
        </OakSpan>
        {item.subheading && (
          <OakSpan
            $font="body-3"
            $color="text-subdued"
            $whiteSpace={"break-spaces"}
          >
            {item.subheading}
          </OakSpan>
        )}
      </OakFlex>
      <OakIcon
        $display={["block", "none"]}
        iconName="chevron-right"
        $width="spacing-24"
        $pl="spacing-12"
      />
    </StyledLink>
  );
};

/**
 *
 * The OakSideMenuNavLink component is a styled link that represents a navigation item in the side menu.
 * It is designed to be used within the OakSideMenuNav component, but can also be used independently.
 * The following callbacks are available for tracking focus events:
 *
 * ### Callbacks
 * - `onClick`: A callback function that is triggered when the link is clicked.
 *
 * ### Props
 * - `item`: An object containing the heading, subheading, and href of the link.
 * - `isSelected`: A boolean indicating whether the link is currently selected.
 * - `onClick`: A callback function that is triggered when the link is clicked.
 */
export const OakSideMenuNavLink = styled(UnstyledComponent)`
  ${OakSideMenuNavLinkCss}
`;
