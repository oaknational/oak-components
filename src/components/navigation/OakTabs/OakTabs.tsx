import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { parseColor } from "@/styles/helpers/parseColor";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { ResponsiveValues } from "@/styles/utils/responsiveStyle";
import { InternalButton } from "@/components/internal-components/InternalButton";
import { OakFlex } from "@/components/layout-and-structure";
import { OakUiRoleToken } from "@/styles";

type Tab<T> = {
  label: T;
} & ({ type: "button" } | { type: "link"; href: string });

export type OakTabsProps<T extends string> = {
  sizeVariant: ResponsiveValues<"default" | "compact">;
  colorVariant: "black" | "white";
  /**
   * A list of the tabs to be rendered.
   * Accepts a `label` and a `type` property for each tab. If the type is `link` then a `href` is required.
   */
  tabs: Array<Tab<T>>;
  activeTab: T;
  /**
   * Optional callback fn for the tab buttons.
   *
   */
  onTabClick?: (tab: T, event: Event) => void;
};

const StyledFocusOutline = styled(OakFlex)``;

const StyledTabButton = styled(InternalButton)<{
  $hoverColor: OakUiRoleToken;
  $hoverBackground: OakUiRoleToken;
}>`
  width: 100%;
  height: 100%;
  border-radius: ${parseBorderRadius("border-radius-circle")};
  &:hover {
    color: ${(props) => parseColor(props.$hoverColor)};
    background: ${(props) => parseColor(props.$hoverBackground)};
  }
  &:focus-visible:not(&:active) {
    box-shadow: ${parseDropShadow("drop-shadow-centered-grey")};
    ${StyledFocusOutline} {
      box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")};
    }
  }
`;

export function OakTabs<T extends string>(props: Readonly<OakTabsProps<T>>) {
  const { colorVariant, sizeVariant, tabs, activeTab, onTabClick } = props;
  const backgroundColor =
    colorVariant === "black" ? "bg-inverted" : "bg-primary";
  const textColor = colorVariant === "black" ? "text-inverted" : "text-primary";
  const hoverBackground =
    colorVariant === "black" ? "bg-btn-primary-hover" : "bg-neutral-stronger";
  const hoverText = colorVariant === "black" ? "text-inverted" : "text-primary";

  return (
    <OakFlex
      $height={sizeVariant === "compact" ? "spacing-40" : "spacing-56"}
      $background={backgroundColor}
      $borderRadius={"border-radius-circle"}
      $gap={"spacing-8"}
      $pa={"spacing-8"}
      $alignItems={"center"}
      $font={sizeVariant === "compact" ? "body-3" : "heading-light-7"}
      $ba={"border-solid-s"}
      $borderColor={
        colorVariant === "white" ? "border-neutral-lighter" : backgroundColor
      }
    >
      {tabs.map((tab) => {
        const { label, type } = tab;
        const isSelected = activeTab === label;

        return (
          <StyledTabButton
            element={type === "link" ? Link : undefined}
            href={type === "link" ? tab.href : undefined}
            key={label}
            $background={isSelected ? "bg-decorative1-main" : backgroundColor}
            $color={isSelected ? "text-primary" : textColor}
            $hoverColor={isSelected ? "text-primary" : hoverText}
            $hoverBackground={
              isSelected ? "bg-decorative1-main" : hoverBackground
            }
            $ba="border-solid-s"
            $borderColor={
              isSelected ? "border-decorative1-stronger" : backgroundColor
            }
            onClick={(event: Event) => {
              if (onTabClick) {
                onTabClick(label, event);
              }
            }}
          >
            <StyledFocusOutline
              $width={"100%"}
              $height={"100%"}
              $borderRadius={"border-radius-circle"}
              $pa={"spacing-4"}
              $alignItems={"center"}
              $justifyContent={"center"}
              $whiteSpace={"nowrap"}
            >
              {label}
            </StyledFocusOutline>
          </StyledTabButton>
        );
      })}
    </OakFlex>
  );
}
