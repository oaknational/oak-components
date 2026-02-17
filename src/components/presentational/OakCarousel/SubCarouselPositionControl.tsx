import React from "react";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakButton } from "@/components/buttons/OakButton";

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
      <OakButton
        variant="tertiary"
        colorScheme="inverted"
        onClick={onBack}
        iconName="chevron-left"
        disabled={disableBack}
        aria-label={backLabel}
      />
      <OakButton
        variant="tertiary"
        colorScheme="inverted"
        onClick={onFwd}
        iconName="chevron-right"
        disabled={disableFwd}
        aria-label={fwdLabel}
      />
    </OakFlex>
  );
};
