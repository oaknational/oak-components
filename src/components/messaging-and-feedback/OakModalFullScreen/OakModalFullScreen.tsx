import React, {
  HTMLAttributes,
  ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { FocusOn } from "react-focus-on";
import { Transition, TransitionStatus } from "react-transition-group";
import styled from "styled-components";

import { OakCloseButton } from "@/components/buttons/OakCloseButton";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakHeading, OakHeadingTag } from "@/components/typography/OakHeading";
import { useIsScrolled } from "@/hooks/useIsScrolled";
import { useMounted } from "@/hooks/useMounted";

export type OakModalFullScreenProps = {
  /**
   * The content of the modal
   */
  children: ReactNode;
  /**
   * Determines whether to show the modal or not
   */
  isOpen: boolean;
  /**
   * Called when the modal is closed via the close button or the escape key
   */
  onClose: () => void;
  /**
   * The title of the modal, rendered in the header and used to name the dialog
   */
  title: string;
  /**
   * The heading level of the title.
   *
   * @default h2
   */
  headingTag?: OakHeadingTag;
  /**
   * Accessible label for the close button
   *
   * @default Close
   */
  closeButtonLabel?: string;
  /**
   * Fixed area at the bottom of the modal, which remains in view when the
   * content is scrolled
   */
  footerSlot?: ReactNode;
  /**
   * If true, pressing the escape key will not call onClose
   */
  disableEscapeKey?: boolean;
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
   * NB *The modal is rendered inside a portal so it will not respect the stacking context of its parent component*.
   */
  zIndex?: number;
  /**
   * Override for returnFocus behavior of FocusOn
   */
  returnFocus?: (returnTo: Element) => boolean | FocusOptions;
} & Pick<
  HTMLAttributes<Element>,
  "aria-label" | "aria-description" | "aria-labelledby" | "aria-describedby"
>;

const FadeInFlex = styled(OakFlex)<{ $state: TransitionStatus }>`
  opacity: ${({ $state }) =>
    $state === "entering" || $state === "entered" ? 1 : 0};
`;

/**
 * Full screen modal dialog with trapped focus, close button, and escape key handling.
 */
export const OakModalFullScreen = ({
  children,
  isOpen,
  onClose,
  title,
  headingTag = "h2",
  closeButtonLabel = "Close",
  footerSlot,
  disableEscapeKey = false,
  domContainer,
  zIndex,
  returnFocus,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...rest
}: OakModalFullScreenProps) => {
  const { isScrolled, ObserveScroll } = useIsScrolled();
  const isMounted = useMounted();
  const headingId = useId();
  const transitionRef = useRef<HTMLDivElement>(null);
  const scrollBoxRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    // To let keyboard users scroll the content when it overflows
    const checkIsScrollable = () => {
      const scrollBox = scrollBoxRef.current;

      setIsScrollable(
        !!scrollBox && scrollBox.scrollHeight > scrollBox.clientHeight,
      );
    };

    checkIsScrollable();
    window.addEventListener("resize", checkIsScrollable);

    return () => window.removeEventListener("resize", checkIsScrollable);
  }, [isOpen, children]);

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
      timeout={300}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <FocusOn
          onEscapeKey={() => !disableEscapeKey && onClose()}
          returnFocus={returnFocus ?? true}
          autoFocus
          preventScrollOnFocus
        >
          <FadeInFlex
            ref={transitionRef}
            $state={state}
            role="dialog"
            aria-modal={true}
            $position="fixed"
            $inset="spacing-0"
            $zIndex={finalZIndex}
            $background="bg-primary"
            $color="text-primary"
            $flexDirection="column"
            $transition="standard-ease"
            data-testid="modal-full-screen"
            {...rest}
            aria-label={ariaLabel}
            aria-labelledby={
              ariaLabelledBy || (ariaLabel ? undefined : headingId)
            }
          >
            <OakFlex
              $alignItems="center"
              $justifyContent="space-between"
              $gap="spacing-16"
              $pv={["spacing-12", "spacing-16"]}
              $ph={["spacing-16", "spacing-24"]}
            >
              <OakHeading
                id={headingId}
                tag={headingTag}
                $font={["heading-6", "heading-5"]}
              >
                {title}
              </OakHeading>
              <OakCloseButton onClose={onClose} aria-label={closeButtonLabel} />
            </OakFlex>
            <OakFlex
              ref={scrollBoxRef}
              $flexGrow={1}
              $flexDirection="column"
              $overflow="auto"
              $ph={["spacing-16", "spacing-24"]}
              $pb={["spacing-16", "spacing-24"]}
              $bt="border-solid-s"
              $borderColor={
                isScrolled ? "border-neutral-lighter" : "transparent"
              }
              tabIndex={isScrollable ? 0 : undefined}
              style={{ scrollbarGutter: "stable" }}
              data-testid="modal-full-screen-content"
            >
              <ObserveScroll>
                <div style={{ display: "contents" }} data-autofocus-inside>
                  {children}
                </div>
              </ObserveScroll>
            </OakFlex>
            {footerSlot && (
              <OakFlex
                $flexDirection={["column", "row"]}
                $alignItems="center"
                $justifyContent="flex-end"
                $gap={["spacing-16", "spacing-24"]}
                $pv="spacing-12"
                $ph={["spacing-16", "spacing-24"]}
                $width="100%"
                $bt="border-solid-s"
                $borderColor="border-neutral-lighter"
              >
                {footerSlot}
              </OakFlex>
            )}
          </FadeInFlex>
        </FocusOn>
      )}
    </Transition>,
    domContainer ?? document.body,
  );
};
