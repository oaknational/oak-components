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

export type OakViewByTab = "Key stage & year group" | "Strand";

export type OakViewBySwitcherProps = {
  activeTab: OakViewByTab;
  keyStageYearGroupHref?: string;
  strandHref?: string;
  onTabClick?: (tab: OakViewByTab, event: Event) => void;
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

const TABS: OakViewByTab[] = ["Key stage & year group", "Strand"];

const iconByTab: Record<OakViewByTab, OakIconName> = {
  "Key stage & year group": "class-grouping",
  Strand: "strand",
};

// "class-grouping" icon is black; "strand" icon is white.
const iconIsWhiteSource: Record<OakViewByTab, boolean> = {
  "Key stage & year group": false,
  Strand: true,
};

export function OakViewBySwitcher(props: Readonly<OakViewBySwitcherProps>) {
  const { activeTab, keyStageYearGroupHref, strandHref, onTabClick } = props;

  const hrefByTab: Record<OakViewByTab, string | undefined> = {
    "Key stage & year group": keyStageYearGroupHref,
    Strand: strandHref,
  };

  return (
    <OakFlex
      as="nav"
      aria-labelledby="view-by-switcher-label"
      $flexDirection={"column"}
      $alignItems={"flex-start"}
      $gap={"spacing-4"}
      $position={"relative"}
      $height={"spacing-56"}
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
        $height={"spacing-56"}
        $background={"bg-inverted"}
        $borderRadius={"border-radius-circle"}
        $gap={"spacing-8"}
        $pa={"spacing-8"}
        $alignItems={"center"}
        $font={"heading-light-7"}
        $ba={"border-solid-s"}
        $borderColor={"bg-inverted"}
      >
        {TABS.map((label) => {
          const isSelected = activeTab === label;
          const icon = iconByTab[label];
          const href = hrefByTab[label];
          const iconColorFilter =
            iconIsWhiteSource[label] === isSelected
              ? "icon-inverted"
              : "icon-primary";

          return (
            <OakLI
              $listStyle={"none"}
              $width={"100%"}
              $height={"100%"}
              $display={"flex"}
              key={label}
            >
              <StyledTabButton
                element={href ? Link : undefined}
                href={href}
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
                $font={"heading-light-7"}
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
                    $display={["none", "block"]}
                    iconName={icon}
                    $width={"spacing-24"}
                    $height={"spacing-24"}
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
