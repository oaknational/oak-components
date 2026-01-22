import React from "react";
import styled from "styled-components";

import { OakFlex } from "@/components/atoms";
import { InternalButton } from "@/components/atoms/InternalButton";
import { OakCombinedColorToken } from "@/styles";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { ResponsiveValues } from "@/styles/utils/responsiveStyle";

export type OakTabsProps<T extends string> = {
  sizeVariant: ResponsiveValues<"default" | "compact">;
  colorVariant: "black" | "white";
  tabs: Array<T>;
  activeTab: T;
  onTabClick: (tab: T) => void;
};

const StyledTabButton = styled(InternalButton)<{
  $hoverColor: OakCombinedColorToken;
  $hoverBackground: OakCombinedColorToken;
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
    .focus-outline {
      box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")};
    }
  }
`;

export function OakTabs<T extends string>(props: Readonly<OakTabsProps<T>>) {
  const { colorVariant, sizeVariant, tabs, activeTab, onTabClick } = props;
  const backgroundColor = colorVariant === "black" ? "bg-icon" : "bg-primary";
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
        const isSelected = activeTab === tab;

        return (
          <StyledTabButton
            key={tab}
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
            onClick={() => onTabClick(tab)}
          >
            <OakFlex
              className="focus-outline"
              $width={"100%"}
              $height={"100%"}
              $borderRadius={"border-radius-circle"}
              $pa={"spacing-4"}
              $alignItems={"center"}
              $justifyContent={"center"}
              $whiteSpace={"nowrap"}
            >
              {tab}
            </OakFlex>
          </StyledTabButton>
        );
      })}
    </OakFlex>
  );
}
