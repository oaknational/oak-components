import React, { HTMLAttributes, ReactNode, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import { OakCloseButton } from "@/components/molecules/OakCloseButton";
import { OakSecondaryButton } from "@/components/molecules/OakSecondaryButton";
import { OakBox, OakFlex } from "@/components/atoms";
import useMounted from "@/hooks/useMounted";
import InternalModalTransition from "@/components/molecules/InternalModalTransition/InternalModalTransition";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

const HamburgerMenuWrapper = styled(OakBox)`
  @media (min-width: 750px) {
    max-width: ${parseSpacing("spacing-480")};
  }
`;

type OakHamburgerMenuProps = {
  /**
   * The content of the menu.
   */
  children: ReactNode;
  /**
   * The DOM container to render the menu portal into.
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
   * NB *The menu is rendered inside a portal so it will not respect the stacking context of its parent component*.
   */
  zIndex?: number;
} & Pick<
  HTMLAttributes<Element>,
  "aria-label" | "aria-description" | "aria-labelledby" | "aria-describedby"
>;

/**
 *
 * A hamburger menu that slides in from the left side of the screen.
 * Designed for mobile and tablet devices only - does not display on desktop.
 *
 * Full width on mobile, "spacing-480" (480px) on tablet, hidden on desktop.
 *
 * Includes a trigger button with hamburger icon.
 *
 */

export const OakHamburgerMenu = ({
  domContainer,
  zIndex,
  children,
  ...rest
}: OakHamburgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const transitionRef = useRef<HTMLDivElement>(null);

  const isMounted = useMounted();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const finalZIndex = typeof zIndex === "number" ? zIndex : "modal-dialog";

  return (
    <>
      <OakSecondaryButton
        $borderStyle={"none"}
        iconName="hamburger"
        onClick={handleOpen}
      />
      {isMounted &&
        createPortal(
          <HamburgerMenuWrapper $display={["block", "block", "none"]}>
            <InternalModalTransition
              isOpen={isOpen}
              transitionRef={transitionRef}
              onClose={handleClose}
              finalZIndex={finalZIndex}
              isLeftHandSide={false}
              closeOnBackgroundClick
              {...rest}
            >
              <OakFlex
                $pa="spacing-16"
                $justifyContent="flex-end"
                $alignItems="center"
              >
                <OakCloseButton onClose={handleClose} />
              </OakFlex>
              <OakFlex $flexGrow={1} $flexDirection="column" $overflow="auto">
                {children}
              </OakFlex>
            </InternalModalTransition>
          </HamburgerMenuWrapper>,
          domContainer ?? document.body,
        )}
    </>
  );
};
