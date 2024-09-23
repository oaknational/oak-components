import React, { HTMLAttributes, ReactNode, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FocusOn } from "react-focus-on";
import { Transition, TransitionStatus } from "react-transition-group";
import styled from "styled-components";

import { InternalShadowRoundButton } from "@/components/molecules/InternalShadowRoundButton";
import { OakBox, OakFlex, OakImage } from "@/components/atoms";
import { parseOpacity } from "@/styles/helpers/parseOpacity";
import useCanaryObserver from "@/hooks/useCanaryObserver";
import InternalSlideInFlex from "@/components/atoms/InternalSlideInFlex/InternalSlideInFlex";
import useMounted from "@/hooks/useMounted";

export type OakModalProps = {
  /**
   * The content of the modal.
   * Use with `<OakModalBody>` for best results.
   */
  children: ReactNode;
  /**
   * Slot for the footer of the modal.
   * Use with `<OakModalFooter>` for best results.
   */
  footerSlot?: ReactNode;
  /**
   * Indicates whether the modal is open or closed
   */
  isOpen: boolean;
  /**
   * Called when the modal is closed
   */
  onClose: () => void;
  /**
   * The DOM container to render the modal portal into.
   *
   * @default document.body
   */
  domContainer?: Element;
  /**
   * Optional z-index override.
   *
   * Defaults to token: `modal-dialog`
   *
   * 🚨 This prop is intended for use by consumers that do not use
   * the internal system of z-index tokens.
   *
   * NB *The modal is rendered inside a portal so it will not respect the stacking context of its parent component*.
   */
  zIndex?: number;
} & Pick<
  HTMLAttributes<Element>,
  "aria-label" | "aria-description" | "aria-labelledby" | "aria-describedby"
>;

export const FadeOutBox = styled(OakBox)<{ $state: TransitionStatus }>`
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

const logoSrc = `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/logo-mark.svg`;

/**
 * Modal dialog with trapped focus and a close button.
 */
export const OakModal = ({
  children,
  footerSlot,
  domContainer,
  isOpen,
  onClose,
  zIndex,
  ...rest
}: OakModalProps) => {
  const [canaryElement, setCanaryElement] = useState<HTMLDivElement | null>(
    null,
  );
  const transitionRef = useRef<HTMLDivElement>(null);

  const isScrolled = useCanaryObserver(canaryElement);

  // `createPortal` is not supported in SSR so we can only render when mounted on the client
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }

  const finalZIndex = typeof zIndex === "number" ? zIndex : "modal-dialog";

  return createPortal(
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
            ref={transitionRef}
            $zIndex={finalZIndex}
            $state={state}
            isModal={true}
            {...rest}
          >
            <OakFlex
              $ma="space-between-s"
              $justifyContent="space-between"
              $alignItems="center"
            >
              <OakImage
                src={logoSrc}
                $height="all-spacing-8"
                $width="all-spacing-7"
                alt=""
              />
              <InternalShadowRoundButton
                onClick={onClose}
                aria-label="Close"
                defaultIconBackground="transparent"
                defaultIconColor="black"
                defaultTextColor="transparent"
                hoverTextColor="transparent"
                disabledTextColor="transparent"
                hoverIconBackground="black"
                hoverIconColor="white"
                disabledIconBackground="transparent"
                iconBackgroundSize="all-spacing-6"
                iconSize="all-spacing-6"
                iconName="cross"
              />
            </OakFlex>
            <div style={{ display: "contents" }} data-autofocus-inside>
              <OakFlex
                $flexGrow={1}
                $flexDirection="column"
                $overflow="auto"
                $bt="border-solid-s"
                $borderColor={
                  isScrolled ? "border-neutral-lighter" : "transparent"
                }
              >
                <div ref={setCanaryElement} />
                {children}
              </OakFlex>
              {footerSlot}
            </div>
          </InternalSlideInFlex>
        </FocusOn>
      )}
    </Transition>,
    domContainer ?? document.body,
  );
};
