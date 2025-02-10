import React, { ReactNode, useState } from "react";

import { SubCarouselPositionIndicator } from "./SubCarouselPositionIndicator";
import { SubCarouselPositionControl } from "./SubCarouselPositionControl";

import { OakFlex } from "@/components/atoms";

export type OakCarouselProps = {
  content: ReactNode[];
  isLooping?: boolean;
};

export const OakCarousel = ({ content, isLooping }: OakCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleFwd = () => {
    if (!isLooping) {
      if (activeIndex < content.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    } else {
      setActiveIndex((activeIndex + 1) % content.length);
    }
  };

  const handleBack = () => {
    if (!isLooping) {
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    } else {
      setActiveIndex((activeIndex - 1 + content.length) % content.length);
    }
  };

  return (
    <OakFlex
      $pt={"inner-padding-xl5"}
      $pb={"inner-padding-xl2"}
      $ph={"inner-padding-xl2"}
      $background={"mint30"}
      $borderRadius={"border-radius-l"}
      $flexDirection={"column"}
      $gap={"space-between-xl"}
    >
      {content[activeIndex]}
      <OakFlex $justifyContent={"space-between"}>
        <SubCarouselPositionIndicator
          activeIndex={activeIndex}
          numberOfItems={content.length}
        />
        <SubCarouselPositionControl
          onFwd={handleFwd}
          onBack={handleBack}
          disableFwd={!isLooping && activeIndex === content.length - 1}
          disableBack={!isLooping && activeIndex === 0}
        />
      </OakFlex>
    </OakFlex>
  );
};
