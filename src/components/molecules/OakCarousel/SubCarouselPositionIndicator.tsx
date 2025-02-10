import React from "react";

import { OakFlex } from "@/components/atoms";

const PositionIcon = ({ isActive }: { isActive: boolean }) => {
  const fill = isActive ? "#222222" : "#FFFFFF";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <circle
        cx="8"
        cy="8.67798"
        r="7"
        fill={fill}
        stroke="#222222"
        stroke-width="2"
      />
    </svg>
  );
};

export type SubCarouselPositionIndicatorProps = {
  numberOfItems: number;
  activeIndex: number;
};

export const SubCarouselPositionIndicator = ({
  numberOfItems,
  activeIndex,
}: SubCarouselPositionIndicatorProps) => {
  const positionIndicators = Array.from({ length: numberOfItems }, (_, i) => (
    <PositionIcon key={i} isActive={activeIndex === i} />
  ));

  return (
    <OakFlex $gap={"space-between-m"} $alignItems={"end"}>
      {positionIndicators}
    </OakFlex>
  );
};
