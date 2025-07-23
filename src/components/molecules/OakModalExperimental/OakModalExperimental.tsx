import React, { HTMLAttributes, ReactNode, useRef } from "react";
import { createPortal } from "react-dom";

import { InternalShadowIconButton } from "../InternalShadowIconButton";

import { OakFlex } from "@/components/atoms";
import useIsScrolled from "@/hooks/useIsScrolled";
import useMounted from "@/hooks/useMounted";
import InternalModalTransition from "@/components/molecules/InternalModalTransition/InternalModalTransition";

export type OakModalExperimentalProps = {
  /**
   * The content of the modal.
   * Use with `<OakModalExperimentalBody>` for best results.
   */
  children: ReactNode;
  /**
   * Slot for the footer of the modal.
   * Use with `<OakModalExperimentalFooter>` for best results.
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
  isLeftHandSide?: boolean;
} & Pick<
  HTMLAttributes<Element>,
  "aria-label" | "aria-description" | "aria-labelledby" | "aria-describedby"
>;

/**
 * Modal dialog with trapped focus and a close button.
 */
export const OakModalExperimental = ({
  children,
  footerSlot,
  domContainer,
  isOpen,
  onClose,
  zIndex,
  isLeftHandSide,
  ...rest
}: OakModalExperimentalProps) => {
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
      isLeftHandSide={isLeftHandSide}
      {...rest}
    >
      <OakFlex
        $pa="inner-padding-m"
        // $pb="inner-padding-none"
        $justifyContent={isLeftHandSide ? "flex-end" : "flex-start"}
        $alignItems="center"
      >
        <InternalShadowIconButton
          onClick={onClose}
          aria-label="Close"
          iconName="cross"
          defaultTextColor={"black"}
          hoverTextColor={"black"}
          disabledTextColor={"grey30"}
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
