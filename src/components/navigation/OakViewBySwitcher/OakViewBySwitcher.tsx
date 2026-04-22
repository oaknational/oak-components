import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { parseColor } from "@/styles/helpers/parseColor";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { InternalButton } from "@/components/internal-components/InternalButton";
import { OakFlex } from "@/components/layout-and-structure";
import { OakUiRoleToken } from "@/styles";
import { OakLI, OakUL } from "@/components/typography";
import { OakIcon, OakIconName } from "@/components/images-and-icons/OakIcon";
import { OakJauntyAngleLabel } from "@/components/form-elements/OakJauntyAngleLabel";

export type OakViewByTabItem<T extends string = string> = {
  label: T;
  icon: OakIconName;
} & ({ type: "button" } | { type: "link"; href: string });

export type OakViewBySwitcherProps<T extends string = string> = {
  tabs: Array<OakViewByTabItem<T>>;
  activeTab: T;
  sizeVariant?: "default" | "compact";
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

export function OakViewBySwitcher<T extends string>(
  props: Readonly<OakViewBySwitcherProps<T>>,
) {
  const { tabs, activeTab, sizeVariant = "default", onTabClick } = props;
  const isCompact = sizeVariant === "compact";
  const listHeight = isCompact ? "spacing-40" : "spacing-56";

  return (
    <OakFlex
      as="nav"
      aria-labelledby="view-by-switcher-label"
      $flexDirection={"column"}
      $alignItems={"flex-start"}
      $gap={"spacing-4"}
      $position={"relative"}
      $height={listHeight}
      $maxWidth={"spacing-360"}
    >
      <OakJauntyAngleLabel
        id="view-by-switcher-label"
        label={"View by"}
        $background={"bg-decorative5-main"}
        $color={"text-primary"}
        $position={"absolute"}
        $zIndex={"in-front"}
        $top={"-18px"}
        $left={"16.5px"}
        $font={"heading-7"}
        $borderRadius={"border-radius-square"}
      />

      <OakUL
        $display={"flex"}
        $height={listHeight}
        $background={"bg-inverted"}
        $borderRadius={"border-radius-circle"}
        $gap={"spacing-8"}
        $pa={"spacing-8"}
        $alignItems={"center"}
        $font={isCompact ? "body-3" : "heading-light-7"}
        $ba={"border-solid-s"}
        $borderColor={"bg-inverted"}
      >
        {tabs.map((tab) => {
          const { label, type, icon } = tab;
          const isSelected = activeTab === label;
          const iconColorFilter = isSelected ? "icon-primary" : "icon-inverted";

          return (
            <OakLI
              $listStyle={"none"}
              $width={"100%"}
              $height={"100%"}
              $display={"flex"}
              key={label}
            >
              <StyledTabButton
                element={type === "link" ? Link : undefined}
                href={type === "link" ? tab.href : undefined}
                aria-current={isSelected ? "true" : undefined}
                $background={isSelected ? "bg-primary" : "bg-inverted"}
                $color={isSelected ? "text-primary" : "text-inverted"}
                $hoverColor={isSelected ? "text-primary" : "text-inverted"}
                $hoverBackground={
                  isSelected ? "bg-primary" : "bg-btn-primary-hover"
                }
                $ba="border-solid-s"
                $borderColor={isSelected ? "bg-primary" : "bg-inverted"}
                onClick={(event: Event) => onTabClick?.(label, event)}
                $font={isCompact ? "body-3" : "heading-light-7"}
              >
                <StyledFocusOutline
                  $width={"100%"}
                  $height={"100%"}
                  $borderRadius={"border-radius-circle"}
                  $pa={"spacing-8"}
                  $alignItems={"center"}
                  $justifyContent={"center"}
                  $whiteSpace={"nowrap"}
                  $gap={"spacing-4"}
                >
                  <OakIcon
                    $display={"block"}
                    iconName={icon}
                    $width={isCompact ? "spacing-20" : "spacing-24"}
                    $height={isCompact ? "spacing-20" : "spacing-24"}
                    $colorFilter={iconColorFilter}
                  />
                  {label}
                </StyledFocusOutline>
              </StyledTabButton>
            </OakLI>
          );
        })}
      </OakUL>
    </OakFlex>
  );
}
