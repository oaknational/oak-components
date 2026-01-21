import React from "react";
import styled from "styled-components";

import { OakFlex } from "@/components/atoms";
import { InternalButton } from "@/components/atoms/InternalButton";
import { OakCombinedColorToken } from "@/styles";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

type ColorVariant = "black" | "white";
export type OakTabsProps = {
  sizeVariant: "default" | "compact";
  colorVariant: ColorVariant;
  tabs: Array<string>;
  activeTab: string;
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
  &:focus-within {
    box-shadow: ${parseDropShadow("drop-shadow-centered-grey")};
    .focus-outline {
      box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")};
    }
  }
`;

export const OakTabs = ({
  sizeVariant,
  colorVariant,
  tabs,
  activeTab,
}: OakTabsProps) => {
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
    >
      {tabs.map((tab) => {
        const isSelected = activeTab === tab;

        return (
          <StyledTabButton
            key={tab}
            $background={isSelected ? "bg-decorative1-main" : backgroundColor}
            $color={isSelected ? "text-primary" : textColor}
            $hoverColor={hoverText}
            $hoverBackground={hoverBackground}
          >
            <OakFlex
              className="focus-outline"
              $width={"100%"}
              $height={"100%"}
              $borderRadius={"border-radius-circle"}
              $pa={"spacing-4"}
              $alignItems={"center"}
              $justifyContent={"center"}
            >
              {tab}
            </OakFlex>
          </StyledTabButton>
        );
      })}
    </OakFlex>
  );
};
