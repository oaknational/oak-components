import React, { ComponentPropsWithRef, FC, forwardRef } from "react";
import { TransitionStatus } from "react-transition-group";
import styled from "styled-components";

import { OakFlex } from "@/components/atoms/OakFlex";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

type InternalSlideInFlexProps = {
  finalZIndex: number;
  transitionRef: React.RefObject<HTMLDivElement>;
  state: TransitionStatus;
  isModal: boolean;
  children: React.ReactNode;
};

const SlideInFlex = styled(OakFlex)<{
  $state: TransitionStatus;
  isModal: boolean;
}>`
  max-width: ${({ isModal }) =>
    isModal ? `calc(100vw - ${parseSpacing("inner-padding-l")})` : "100vw"};
  transform: ${({ $state, isModal }) => {
    switch ($state) {
      case "entered":
      case "entering":
        return "translateX(0)";
      default:
        return isModal ? "translateX(-100%)" : "translateX(100%)";
    }
  }};
  ${({ isModal }) =>
    !isModal &&
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
  const { finalZIndex, state, isModal, children, ...rest } = props;

  return (
    <SlideInFlex
      ref={ref}
      $background="bg-primary"
      $right={!isModal ? "all-spacing-0" : null}
      $left={isModal ? "all-spacing-0" : null}
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
      isModal={isModal}
      {...rest}
    >
      {children}
    </SlideInFlex>
  );
});

export default InternalSlideInFlex;
