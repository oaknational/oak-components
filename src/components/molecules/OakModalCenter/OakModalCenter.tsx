import React, {
  HTMLAttributes,
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { FocusOn } from "react-focus-on";
import { Transition, TransitionStatus } from "react-transition-group";
import styled from "styled-components";

import { InternalShadowRoundButton } from "@/components/molecules/InternalShadowRoundButton";
import { OakBox, OakFlex, OakFlexProps, oakBoxCss } from "@/components/atoms";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

export type OakModalCenterProps = {
  /**
   * The content of the modal. Use with `<OakModalCenterBody>` for best results.
   */
  children: ReactNode;
  /**
   * Determines whether to show the modal or not
   */
  isOpen: boolean;
  /**
   * Override HTMLAttributes & OakFlex props for the modal container
   */
  modalFlexProps?: Partial<OakFlexProps & HTMLAttributes<Element>>;
  /**
   * Override HTMLAttributes & OakFlex props for the outer modal container
   */
  modalOuterFlexProps?: Partial<OakFlexProps & HTMLAttributes<Element>>;
  /**
   * Override HTMLAttributes & OakFlex props for the inner modal container
   */
  modalInnerFlexProps?: Partial<OakFlexProps & HTMLAttributes<Element>>;
  /**
   * Override HTMLAttributes & OakFlex props for the backdrop container
   */
  backdropFlexProps?: Partial<OakFlexProps & HTMLAttributes<Element>>;
  /**
   * If true, clicking the backdrop will not call onClose
   */
  disableBackdropClick?: boolean;
  /**
   * If true, pressing the escape key will not call onClose
   */
  disableEscapeKey?: boolean;
  /**
   * If true, the close button will be hidden
   */
  hideCloseButton?: boolean;
  /**
   * Called when the modal is closed via the close button, backdrop click, or escape key
   */
  onClose?: () => void;
  /**
   * The DOM container to render the modal portal into.
   */
  domContainer?: Element;
  /**
   * Slot for the footer of the modal
   */
  footerSlot?: ReactNode;
  /**
   * Override for returnFocus behavior of FocusOn
   */
  returnFocus?: (returnTo: Element) => boolean | FocusOptions;
};

const FocusOnBox = styled(FocusOn)`
  ${oakBoxCss}
`;

const BlurredOakBox = styled(OakBox)`
  backdrop-filter: blur(3px);
`;

const FadeInFlex = styled(OakFlex)<{ $state: TransitionStatus }>`
  opacity: ${({ $state }) => {
    switch ($state) {
      case "entered":
      case "entering":
        return "1";
      default:
        return "0";
    }
  }};
  transition: opacity 0s;
`;

/**
 * Centered modal dialog with trapped focus, close button, backdrop click, and escape key handling.
 *
 * ## Props
 *
 * - **isOpen** \-                  If true the modal will be open, if false it will be closed
 * - **onClose** \-                 Called when the modal is closed via the close button, backdrop click, or escape key
 * - **children** \-                The content of the modal. Use with `<OakModalCenterBody>` for best results.
 * - **domContainer** \-            The DOM container to render the modal portal into.
 * - **disableBackdropClick?** \-   If true, clicking the backdrop will not call onClose
 * - **disableEscapeKey?** \-       If true, pressing the escape key will not call onClose
 * - **hideCloseButton?** \-        If true, the close button will be hidden
 * - **modalFlexProps?** \-         Override HTMLAttributes & OakFlex props for the modal container
 * - **modalOuterFlexProps?** \-    Override HTMLAttributes & OakFlex props for the outer modal container
 * - **modalInnerFlexProps?** \-    Override HTMLAttributes & OakFlex props for the inner modal container
 * - **backdropFlexProps?** \-      Override HTMLAttributes & OakFlex props for the backdrop container
 * - **footerSlot?** \-             Fixed area at the bottom of the modal, this will remain fixed in view if the content is scrollable
 */
export const OakModalCenter = ({
  children,
  domContainer,
  isOpen,
  onClose = () => {},
  disableBackdropClick = false,
  disableEscapeKey = false,
  hideCloseButton = false,
  modalFlexProps,
  modalOuterFlexProps,
  modalInnerFlexProps,
  backdropFlexProps,
  footerSlot,
  returnFocus,
}: OakModalCenterProps) => {
  const [scrollBorders, setScrollBorders] = useState({
    top: false,
    bottom: false,
  });
  const transitionRef = useRef<HTMLDivElement>(null);
  const scrollBoxRef = useRef<HTMLDivElement>(null);

  const checkForScroll = useCallback(() => {
    // To show some borders when the content is scrollable
    const scrollBoxElem = scrollBoxRef.current;
    if (!scrollBoxElem) {
      return;
    }

    if (scrollBoxElem.scrollHeight > scrollBoxElem.clientHeight) {
      scrollBoxRef.current.tabIndex = 0;
    }

    setScrollBorders({
      top: scrollBoxElem.scrollTop > 0,
      bottom: scrollBoxElem.scrollHeight > scrollBoxElem.clientHeight,
    });
  }, []);

  useLayoutEffect(() => {
    checkForScroll();
    scrollBoxRef.current?.addEventListener("scroll", checkForScroll);
    return () => {
      scrollBoxRef.current?.removeEventListener("scroll", checkForScroll);
    };
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("resize", checkForScroll);
    return () => {
      window.removeEventListener("resize", checkForScroll);
    };
  });

  const isClientSide = typeof window !== "undefined";

  const modal = (
    <Transition
      in={isOpen}
      nodeRef={transitionRef}
      addEndListener={(done) => {
        transitionRef.current?.addEventListener("transitionend", done);
      }}
      timeout={0}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <FadeInFlex
          ref={transitionRef}
          $state={state}
          $position="fixed"
          $inset="spacing-0"
          $justifyContent="center"
          $alignItems="center"
          $zIndex="modal-dialog"
        >
          <BlurredOakBox
            $position="fixed"
            $inset="spacing-0"
            $zIndex="behind"
            $background="blackSemiTransparent"
            data-testid="backdrop"
            {...backdropFlexProps}
          />
          <OakFlex
            $alignItems="center"
            $justifyContent="center"
            $maxWidth="spacing-960"
            $width="100%"
            $pa="spacing-20"
            {...modalOuterFlexProps}
          >
            <FocusOnBox
              onEscapeKey={() => !disableEscapeKey && onClose()}
              onClickOutside={() => !disableBackdropClick && onClose()}
              returnFocus={returnFocus ?? true}
              autoFocus
              $width="100%"
            >
              <OakFlex
                $flexDirection="column"
                $background="bg-primary"
                $borderRadius="border-radius-l"
                $width="100%"
                $position="relative"
                role="alertdialog"
                style={{
                  maxHeight: `calc(100vh - ${parseSpacing(
                    "spacing-56",
                  )} - ${parseSpacing("spacing-56")})`,
                }}
                {...modalFlexProps}
              >
                <OakBox $minHeight="spacing-56" $position="relative">
                  {!hideCloseButton && (
                    <OakBox
                      $position="absolute"
                      $top="spacing-12"
                      $right="spacing-12"
                    >
                      <InternalShadowRoundButton
                        onClick={onClose}
                        aria-label="Close Modal"
                        defaultIconBackground="transparent"
                        defaultIconColor="icon-primary"
                        defaultTextColor="transparent"
                        hoverTextColor="transparent"
                        disabledTextColor="transparent"
                        hoverIconBackground="icon-primary"
                        hoverIconColor="icon-inverted"
                        disabledIconBackground="transparent"
                        iconBackgroundSize="spacing-32"
                        iconSize="spacing-32"
                        iconName="cross"
                        data-testid="close-button"
                      />
                    </OakBox>
                  )}
                </OakBox>
                <div style={{ display: "contents" }} data-autofocus-inside>
                  <OakFlex
                    ref={scrollBoxRef}
                    data-testid="modal-main-content"
                    $overflow="auto"
                    $flexDirection="column"
                    $ph="spacing-56"
                    $bt={
                      scrollBorders.top ? "border-solid-s" : "border-solid-none"
                    }
                    $bb={
                      scrollBorders.bottom
                        ? "border-solid-s"
                        : "border-solid-none"
                    }
                    $borderColor="border-neutral-lighter"
                    {...modalInnerFlexProps}
                  >
                    {children}
                  </OakFlex>
                  {footerSlot}
                </div>
              </OakFlex>
            </FocusOnBox>
          </OakFlex>
        </FadeInFlex>
      )}
    </Transition>
  );

  if (domContainer && isClientSide) {
    return createPortal(modal, domContainer);
  } else {
    return modal;
  }
};
