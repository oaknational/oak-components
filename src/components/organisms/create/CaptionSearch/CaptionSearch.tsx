import React from "react";

import { OakFlex, OakHeading, OakP } from "@/components/atoms";
import { OakTextInput } from "@/components/molecules";

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
        <OakFlex $flexDirection={"column"}>
          {/* Move this to OakFormInputWithLabels */}
          <OakHeading tag="h2" $font={"body-2-bold"}>
            Caption ID
          </OakHeading>
          <OakP $font={"body-3"}>
            Search single or multiple caption IDs by adding comma.
          </OakP>
        </OakFlex>
        <OakTextInput $height={"all-spacing-6"} />
      </OakFlex>
    </OakFlex>
  );
};
