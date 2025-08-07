import React from "react";

import { OakFlex } from "@/components/atoms";
import { OakPrimaryButton, OakTextInput } from "@/components/molecules";

export interface CaptionSearchProps {
  onSearchClick?: () => void;
}

export const CaptionSearch = ({ onSearchClick }: CaptionSearchProps) => {
  return (
    <OakFlex
      $flexDirection={"column"}
      $color={"text-primary"}
      $background={"white"}
      $pa={"inner-padding-xl"}
      $gap={"space-between-m"}
      $borderRadius={"border-radius-s"}
    >
      <OakFlex $flexDirection={"column"} $gap={"space-between-ssx"}>
        <OakTextInput $height={"all-spacing-6"} />
        <OakPrimaryButton onClick={onSearchClick}>Search</OakPrimaryButton>
      </OakFlex>
    </OakFlex>
  );
};
