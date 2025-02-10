import React from "react";

import { OakFlex } from "@/components/atoms";
import { OakTertiaryInvertedButton } from "@/components/molecules/OakTertiaryInvertedButton";

export type SubCarouselPositionControlProps = {
  onBack: () => void;
  onFwd: () => void;
  disableFwd?: boolean;
  disableBack?: boolean;
};

export const SubCarouselPositionControl = ({
  onBack,
  onFwd,
  disableBack,
  disableFwd,
}: SubCarouselPositionControlProps) => {
  return (
    <OakFlex $gap={"space-between-m"}>
      <OakTertiaryInvertedButton
        onClick={onBack}
        iconName="chevron-left"
        disabled={disableBack}
      />
      <OakTertiaryInvertedButton
        onClick={onFwd}
        iconName="chevron-right"
        disabled={disableFwd}
      />
    </OakFlex>
  );
};
