import React, { ComponentPropsWithRef, FC, forwardRef } from "react";
import { TransitionStatus } from "react-transition-group";
import styled from "styled-components";

import { OakFlex } from "@/components/atoms/OakFlex";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

type InternalSlideInFlexProps = {
  finalZIndex?: number;
  transitionRef?: React.RefObject<HTMLDivElement>;
  state: TransitionStatus;
  isLeftHandSide: boolean;
  children: React.ReactNode;
};

const SlideInFlex = styled(OakFlex)<{
  $state: TransitionStatus;
  isLeftHandSide: boolean;
}>`
  max-width: ${({ isLeftHandSide }) =>
    isLeftHandSide
      ? `calc(100vw - ${parseSpacing("inner-padding-l")})`
      : "100vw"};
  transform: ${({ $state, isLeftHandSide }) => {
    switch ($state) {
      case "entered":
      case "entering":
        return "translateX(0)";
      default:
        return isLeftHandSide ? "translateX(-100%)" : "translateX(100%)";
    }
  }};
  ${({ isLeftHandSide }) =>
    !isLeftHandSide &&
    `
      @media (min-width: 768px) {
        max-width: 600px;
      }
    `}
`;

const InternalSlideInFlex: FC<
  InternalSlideInFlexProps & ComponentPropsWithRef<typeof OakFlex>
> = forwardRef<
  HTMLDivElement,
  InternalSlideInFlexProps & ComponentPropsWithRef<typeof OakFlex>
>((props, ref) => {
  const { finalZIndex, state, isLeftHandSide, children, ...rest } = props;

  return (
    <SlideInFlex
      ref={ref}
      $background="bg-primary"
      $right={!isLeftHandSide ? "all-spacing-0" : null}
      $left={isLeftHandSide ? "all-spacing-0" : null}
      $position="fixed"
      $bottom="all-spacing-0"
      $width={["all-spacing-22"]}
      $top="all-spacing-0"
      $transition="standard-ease"
      $zIndex={finalZIndex}
      $flexDirection="column"
      $state={state}
      $color="text-primary"
      role="dialog"
      isLeftHandSide={isLeftHandSide}
      {...rest}
    >
      {children}
    </SlideInFlex>
  );
});

export default InternalSlideInFlex;
