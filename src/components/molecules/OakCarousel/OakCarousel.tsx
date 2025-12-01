import React, { ReactNode, useState } from "react";
import styled from "styled-components";

import { SubCarouselPositionIndicator } from "./SubCarouselPositionIndicator";
import { SubCarouselPositionControl } from "./SubCarouselPositionControl";

import { OakFlex, OakFlexProps } from "@/components/atoms";

type SlideContainerProps = {
  activeIndex: number;
} & OakFlexProps;

const SlideContainer = styled(OakFlex)<SlideContainerProps>`
  width: 100%;
  transform: translateX(${(props) => -props.activeIndex * 100}%);

  @media (prefers-reduced-motion) {
    transition: none;
  }
`;

export type OakCarouselProps = {
  content: ReactNode[];
  isLooping?: boolean;
  backLabel: string;
  fwdLabel: string;
  containerLabel: string;
};

export const OakCarousel = ({
  content,
  isLooping,
  backLabel,
  fwdLabel,
  containerLabel,
}: OakCarouselProps) => {
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
      $pt={"spacing-56"}
      $pb={"spacing-32"}
      $ph={"spacing-32"}
      $background={"bg-decorative1-very-subdued"}
      $borderRadius={"border-radius-l"}
      $flexDirection={"column"}
      $gap={"spacing-56"}
      role="region"
      aria-label={containerLabel}
      $height={"100%"}
      $justifyContent={"space-between"}
    >
      <OakFlex $overflow={"hidden"}>
        <SlideContainer activeIndex={activeIndex} $transition={"standard-ease"}>
          {content.map((item, index) => {
            return (
              <OakFlex
                key={index}
                aria-live={index === activeIndex ? "polite" : "off"}
                $width={"100%"}
                $flexShrink={0}
                $overflow={"visible"}
              >
                {item}
              </OakFlex>
            );
          })}
        </SlideContainer>
      </OakFlex>
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
          backLabel={backLabel}
          fwdLabel={fwdLabel}
        />
      </OakFlex>
    </OakFlex>
  );
};
