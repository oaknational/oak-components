import React, { FC } from "react";
import { FocusOn } from "react-focus-on";
import { Transition, TransitionStatus } from "react-transition-group";
import styled from "styled-components";

import InternalSlideInFlex from "@/components/molecules/InternalSlideInFlex/InternalSlideInFlex";
import { OakBox } from "@/components/atoms/OakBox";
import { parseOpacity } from "@/styles/helpers/parseOpacity";

type TransitionProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  transitionRef: React.RefObject<HTMLDivElement>;
  finalZIndex: number | "modal-dialog";
  isModal: boolean;
};

const FadeOutBox = styled(OakBox)<{ $state: TransitionStatus }>`
  opacity: ${({ $state }) => {
    switch ($state) {
      case "entered":
      case "entering":
        return parseOpacity("semi-transparent");
      default:
        return parseOpacity("transparent");
    }
  }};
  background-color: black;
  position: fixed;
  inset: 0;
  transition: ease;
`;

const InternalModalTransition: FC<TransitionProps> = ({
  children,
  isOpen,
  transitionRef,
  onClose,
  finalZIndex,
  isModal,
  ...rest
}) => {
  return (
    <Transition
      in={isOpen}
      nodeRef={transitionRef}
      addEndListener={(done) => {
        transitionRef.current?.addEventListener("transitionend", done);
      }}
      timeout={500}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <FocusOn onEscapeKey={onClose} returnFocus autoFocus>
          <FadeOutBox
            $zIndex={finalZIndex}
            $state={state}
            onClick={!isModal ? onClose : undefined}
          />
          <InternalSlideInFlex
            isModal={isModal}
            ref={transitionRef}
            $zIndex={finalZIndex}
            $state={state}
            {...rest}
          >
            {children}
          </InternalSlideInFlex>
        </FocusOn>
      )}
    </Transition>
  );
};

export default InternalModalTransition;
