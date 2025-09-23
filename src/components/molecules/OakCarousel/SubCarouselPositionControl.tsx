import React from "react";

import { OakFlex } from "@/components/atoms";
import { OakTertiaryInvertedButton } from "@/components/molecules/OakTertiaryInvertedButton";

export type SubCarouselPositionControlProps = {
  onBack: () => void;
  onFwd: () => void;
  disableFwd?: boolean;
  disableBack?: boolean;
  backLabel: string;
  fwdLabel: string;
};

export const SubCarouselPositionControl = ({
  onBack,
  onFwd,
  disableBack,
  disableFwd,
  backLabel,
  fwdLabel,
}: SubCarouselPositionControlProps) => {
  return (
    <OakFlex $gap={"spacing-24"}>
      <OakTertiaryInvertedButton
        onClick={onBack}
        iconName="chevron-left"
        disabled={disableBack}
        aria-label={backLabel}
      />
      <OakTertiaryInvertedButton
        onClick={onFwd}
        iconName="chevron-right"
        disabled={disableFwd}
        aria-label={fwdLabel}
      />
    </OakFlex>
  );
};
