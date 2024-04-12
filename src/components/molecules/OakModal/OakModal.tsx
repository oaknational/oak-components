import React, {
  HTMLAttributes,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { FocusOn } from "react-focus-on";
import { Transition, TransitionStatus } from "react-transition-group";
import styled from "styled-components";

import { InternalShadowRoundButton } from "../InternalShadowRoundButton";

import { OakBox, OakFlex, OakImage } from "@/components/atoms";
import { parseOpacity } from "@/styles/helpers/parseOpacity";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

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
} & Pick<
  HTMLAttributes<Element>,
  "aria-label" | "aria-description" | "aria-labelledby" | "aria-describedby"
>;

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
`;

const SlideInFlex = styled(OakFlex)<{ $state: TransitionStatus }>`
  max-width: calc(100vw - ${parseSpacing("inner-padding-l")});
  transform: ${({ $state }) => {
    switch ($state) {
      case "entered":
      case "entering":
        return "translateX(0)";
      default:
        return "translateX(-100%)";
    }
  }};
`;

const logoSrc = `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/logo-mark.svg`;

/**
 * Modal dialog with trapped focus and a close button.
 */
export const OakModal = ({
  children,
  footerSlot,
  domContainer = document.body,
  isOpen,
  onClose,
  ...rest
}: OakModalProps) => {
  const [canaryElement, setCanaryElement] = useState<HTMLDivElement | null>(
    null,
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const transitionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!canaryElement) {
      return;
    }
    const observer = new IntersectionObserver(
      (mutations) => {
        setIsScrolled(!mutations.some((mutation) => mutation.isIntersecting));
      },
      {
        root: canaryElement.parentElement,
      },
    );
    observer.observe(canaryElement);

    return () => {
      observer.disconnect();
    };
  }, [canaryElement]);

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
          <FadeOutBox
            $position="fixed"
            $inset="all-spacing-0"
            $zIndex="modal-dialog"
            $background="black"
            $opacity="semi-transparent"
            $state={state}
            $transition="standard-ease"
          />
          <SlideInFlex
            ref={transitionRef}
            $background="bg-primary"
            $position="fixed"
            $left="all-spacing-0"
            $top="all-spacing-0"
            $bottom="all-spacing-0"
            $width={["all-spacing-22"]}
            $zIndex="modal-dialog"
            $flexDirection="column"
            $transition="standard-ease"
            $color="text-primary"
            role="dialog"
            $state={state}
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
          </SlideInFlex>
        </FocusOn>
      )}
    </Transition>,
    domContainer,
  );
};
