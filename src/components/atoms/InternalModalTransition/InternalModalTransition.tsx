import React, { FC } from "react";
import { FocusOn } from "react-focus-on";
import { Transition } from "react-transition-group";

import { FadeOutBox } from "@/components/molecules/OakModal";
import InternalSlideInFlex from "@/components/atoms/InternalSlideInFlex/InternalSlideInFlex";

type TransitionProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  transitionRef: React.RefObject<HTMLDivElement>;
  finalZIndex: number | "modal-dialog";
  isModal: boolean;
};

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
          <FadeOutBox $zIndex={finalZIndex} $state={state} />
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
