import React, { HTMLAttributes, ReactNode, useRef } from "react";
import { createPortal } from "react-dom";

import { InternalShadowRoundButton } from "@/components/molecules/InternalShadowRoundButton";
import { OakFlex, OakImage } from "@/components/atoms";
import useIsScrolled from "@/hooks/useIsScrolled";
import useMounted from "@/hooks/useMounted";
import InternalModalTransition from "@/components/molecules/InternalModalTransition/InternalModalTransition";

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
  /**
   * Whether the modal should be right-aligned.
   *
   * Defaults to `false`
   */
  isRightHandSide?: boolean;
} & Pick<
  HTMLAttributes<Element>,
  "aria-label" | "aria-description" | "aria-labelledby" | "aria-describedby"
>;

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
  isRightHandSide,
  zIndex,
  ...rest
}: OakModalProps) => {
  const transitionRef = useRef<HTMLDivElement>(null);

  const { isScrolled, ObserveScroll } = useIsScrolled();

  // `createPortal` is not supported in SSR so we can only render when mounted on the client
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }

  const finalZIndex = typeof zIndex === "number" ? zIndex : "modal-dialog";

  return createPortal(
    <InternalModalTransition
      isOpen={isOpen}
      transitionRef={transitionRef}
      onClose={onClose}
      finalZIndex={finalZIndex}
      isRightHandSide={isRightHandSide}
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
          $borderColor={isScrolled ? "border-neutral-lighter" : "transparent"}
        >
          <ObserveScroll>{children}</ObserveScroll>
        </OakFlex>
        {footerSlot}
      </div>
    </InternalModalTransition>,
    domContainer ?? document.body,
  );
};
