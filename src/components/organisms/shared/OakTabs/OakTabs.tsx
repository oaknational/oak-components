import React from "react";

import { OakBox, OakFlex } from "@/components/atoms";

export type OakTabsProps = {
  sizeVariant: "default" | "compact";
  colourVariant: "black" | "white";
  tabs: Array<string>;
};

export const OakTabs = ({ sizeVariant, colourVariant, tabs }: OakTabsProps) => {
  return (
    <OakFlex
      $height={sizeVariant === "compact" ? "spacing-32" : "spacing-56"}
      $background={colourVariant === "white" ? "white" : "black"}
      $borderRadius={"border-radius-circle"}
      $gap={"spacing-8"}
      $pa={"spacing-8"}
      $alignItems={"center"}
    >
      {tabs.map((tab) => (
        <OakBox
          key={tab}
          $color={colourVariant === "black" ? "white" : "black"}
          $width={"100%"}
          $textAlign={"center"}
        >
          {tab}
        </OakBox>
      ))}
    </OakFlex>
  );
};
