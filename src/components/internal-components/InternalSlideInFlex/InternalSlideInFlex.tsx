import React, { ComponentPropsWithRef, FC, forwardRef } from "react";
import { TransitionStatus } from "react-transition-group";
import styled from "styled-components";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

type InternalSlideInFlexProps = {
  finalZIndex: number;
  transitionRef: React.RefObject<HTMLDivElement>;
  state: TransitionStatus;
  isLeftHandSide: boolean;
  children: React.ReactNode;
};

const SlideInFlex = styled(OakFlex)<{
  $state: TransitionStatus;
  isLeftHandSide: boolean;
}>`
  max-width: ${({ isLeftHandSide }) =>
    isLeftHandSide ? `calc(100vw - ${parseSpacing("spacing-20")})` : "100vw"};
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
  ComponentPropsWithRef<InternalSlideInFlexProps & typeof OakFlex>
> = forwardRef<
  HTMLDivElement,
  InternalSlideInFlexProps & ComponentPropsWithRef<typeof OakFlex>
>((props, ref) => {
  const { finalZIndex, state, isLeftHandSide, children, ...rest } = props;

  return (
    <SlideInFlex
      ref={ref}
      $background="bg-primary"
      $right={!isLeftHandSide ? "spacing-0" : null}
      $left={isLeftHandSide ? "spacing-0" : null}
      $position="fixed"
      $bottom="spacing-0"
      $width={["spacing-640"]}
      $top="spacing-0"
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
