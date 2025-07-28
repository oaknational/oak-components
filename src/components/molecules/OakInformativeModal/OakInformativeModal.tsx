import React, { createContext, HTMLAttributes, ReactNode, useRef } from "react";
import { createPortal } from "react-dom";

import { OakCloseButton } from "../OakCloseButton";

import { OakFlex } from "@/components/atoms";
import useIsScrolled from "@/hooks/useIsScrolled";
import useMounted from "@/hooks/useMounted";
import InternalModalTransition from "@/components/molecules/InternalModalTransition/InternalModalTransition";
import { BorderStyleProps } from "@/styles/utils/borderStyle";

export const OakInformativeModalBorderColor = createContext<
  BorderStyleProps["$borderColor"]
>("border-neutral-lighter");

export type OakInformativeModalCloseAction = "close_button" | undefined;

export type OakInformativeModalProps = {
  /**
   * The content of the modal.
   * Use with `<OakInformativeModalBody>` for best results.
   */
  children: ReactNode;
  /**
   * Slot for the footer of the modal.
   * Use with `<OakInformativeModalFooter>` for best results.
   */
  footerSlot?: ReactNode;
  /**
   * Indicates whether the modal is open or closed
   */
  isOpen: boolean;
  /**
   * Called when the modal is closed
   */
  onClose: (action?: OakInformativeModalCloseAction) => void;
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
 * Modal dialog with trapped focus and a close button. See the [design specification](https://www.figma.com/design/YcWQMMhHPVVmc47cHHEEAl/Oak-Design-Kit?node-id=15135-2063)
 */
export const OakInformativeModal = ({
  children,
  footerSlot,
  domContainer,
  isOpen,
  onClose,
  zIndex,
  isLeftHandSide,
  ...rest
}: OakInformativeModalProps) => {
  const transitionRef = useRef<HTMLDivElement>(null);

  const { isScrolled, ObserveScroll } = useIsScrolled();

  // `createPortal` is not supported in SSR so we can only render when mounted on the client
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }

  const onCloseModal = () => {
    onClose();
  };

  const onCloseButton = () => {
    onClose("close_button");
  };

  const finalZIndex = typeof zIndex === "number" ? zIndex : "modal-dialog";

  return createPortal(
    <OakInformativeModalBorderColor.Provider value={"border-neutral-lighter"}>
      <InternalModalTransition
        isOpen={isOpen}
        transitionRef={transitionRef}
        onClose={onCloseModal}
        finalZIndex={finalZIndex}
        isLeftHandSide={isLeftHandSide}
        {...rest}
      >
        <OakFlex
          $background={"white"}
          $flexDirection={"column"}
          $height={"100%"}
        >
          <OakFlex
            $pa="inner-padding-m"
            // $pb="inner-padding-none"
            $justifyContent={"flex-end"}
            $alignItems="center"
          >
            <OakCloseButton onClose={onCloseButton} />
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
              <ObserveScroll>{children}</ObserveScroll>
            </OakFlex>
            {footerSlot}
          </div>
        </OakFlex>
      </InternalModalTransition>
    </OakInformativeModalBorderColor.Provider>,
    domContainer ?? document.body,
  );
};
