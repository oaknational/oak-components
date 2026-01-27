import React from "react";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";

const PositionIcon = ({
  isActive,
  numItems,
  index,
}: {
  isActive: boolean;
  numItems: number;
  index: number;
}) => {
  const fill = isActive ? "#222222" : "#FFFFFF";

  const ariaLabel = `Position indicator: ${index + 1} of ${numItems}: ${
    isActive ? "Selected item" : "Not selected"
  }`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      role="img"
      aria-label={ariaLabel}
    >
      <circle
        cx="8"
        cy="8.67798"
        r="7"
        fill={fill}
        stroke="#222222"
        strokeWidth="2"
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
    <PositionIcon
      key={i}
      isActive={activeIndex === i}
      index={i}
      numItems={numberOfItems}
    />
  ));

  return (
    <OakFlex $gap={"spacing-24"} $alignItems={"end"}>
      {positionIndicators}
    </OakFlex>
  );
};
