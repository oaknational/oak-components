import React, { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FocusOn } from "react-focus-on";
import { Transition, TransitionStatus } from "react-transition-group";
import styled, { css } from "styled-components";

import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { useMounted } from "@/hooks/useMounted";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { OakAllSpacingToken } from "@/styles/theme/spacing";
import { OakBorderRadiusToken } from "@/styles/theme/borders";
import { getMediaQuery } from "@/styles/utils/responsiveStyle";

export type InternalModalPlacement =
  | "fullscreen"
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "centre";

/**
 * A modal must have an accessible name. Exactly one of `aria-label` or
 * `aria-labelledby` is required: passing neither, or both, is a type error.
 * For the public modal components' props.
 */
export type InternalModalAccessibleName =
  | { "aria-label": string; "aria-labelledby"?: never }
  | { "aria-labelledby": string; "aria-label"?: never };

export type InternalModalBaseProps = {
  /**
   * Whether the modal is open
   */
  isOpen: boolean;
  /**
   * Where the panel is placed on the screen
   */
  placement: InternalModalPlacement;
  /**
   * Called when the user presses Escape or clicks the backdrop.
   *
   * When omitted the modal can't be dismissed this way.
   */
  onDismiss?: () => void;
  /**
   * Width of the panel for `left`, `right` and `centre` placements.
   * Capped at the size of the screen.
   *
   * @default spacing-640
   */
  width?: OakAllSpacingToken;
  /**
   * Height of the panel for `top` and `bottom` placements,
   * and the maximum height for `centre`.
   * Capped at the size of the screen.
   *
   * @default spacing-640
   */
  height?: OakAllSpacingToken;
  /**
   * @default dialog
   */
  role?: "dialog" | "alertdialog";
  /**
   * Border radius of the panel
   */
  borderRadius?: OakBorderRadiusToken;
  /**
   * Fixed area above the content
   */
  header?: ReactNode;
  /**
   * Scrollable content
   */
  children: ReactNode;
  /**
   * Fixed area below the content
   */
  footerSlot?: ReactNode;
  /**
   * Focus the top of the content when the modal opens.
   *
   * When off, focus goes to the element marked with `data-autofocus`,
   * or else the first focusable element.
   */
  autoFocusContent?: boolean;
  "aria-describedby"?: string;
  /**
   * The DOM container to render the modal portal into.
   *
   * @default document.body
   */
  domContainer?: Element;
  /**
   * Optional z-index override. Defaults to token: `modal-dialog`
   */
  zIndex?: number;
  /**
   * Override for the `returnFocus` behaviour of `FocusOn`.
   *
   * By default focus returns to the element that was focused before the modal opened.
   */
  returnFocus?: (returnTo: Element) => boolean | FocusOptions;
  /**
   * Loosely typed so wrappers can pass both props straight through. Public
   * components enforce exactly one with `InternalModalAccessibleName`.
   * `aria-labelledby` wins if both are given.
   */
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

/**
 * How long the fade in and out takes. Matches the `standard-ease` transition token.
 */
const FADE_DURATION = 300;

/**
 * Space kept around a `centre` panel when the screen is smaller than the panel
 */
const CENTRE_GAP: OakAllSpacingToken = "spacing-20";

/**
 * Offset for pinning the panel to the screen edges
 */
const EDGE = parseSpacing("spacing-0");

const isDrawer = (placement: InternalModalPlacement) =>
  placement !== "fullscreen" && placement !== "centre";

type PanelStyleProps = {
  $placement: InternalModalPlacement;
  $panelWidth: OakAllSpacingToken;
  $panelHeight: OakAllSpacingToken;
};

const placementCss = ({
  $placement,
  $panelWidth,
  $panelHeight,
}: PanelStyleProps) => {
  const gap = parseSpacing(CENTRE_GAP);
  const screenMinusGaps = `calc(100% - ${gap} - ${gap})`;

  switch ($placement) {
    case "fullscreen":
      // `inset` rather than `100vh` so mobile browser chrome doesn't crop the panel
      return css`
        inset: ${EDGE};
      `;
    case "centre":
      return css`
        inset: ${EDGE};
        margin: auto;
        width: ${parseSpacing($panelWidth)};
        height: fit-content;
        max-width: ${screenMinusGaps};
        max-height: ${`min(${parseSpacing($panelHeight)}, ${screenMinusGaps})`};
      `;
    case "left":
    case "right":
      return css`
        top: ${EDGE};
        bottom: ${EDGE};
        ${$placement}: ${EDGE};
        width: ${parseSpacing($panelWidth)};
        max-width: 100%;
      `;
    case "top":
    case "bottom":
      return css`
        left: ${EDGE};
        right: ${EDGE};
        ${$placement}: ${EDGE};
        height: ${parseSpacing($panelHeight)};
        max-height: 100%;
      `;
  }
};

// Drawers are too cramped on small screens so they fill the screen instead
const smallScreenCss = ({ $placement }: PanelStyleProps) =>
  isDrawer($placement) &&
  css`
    @media ${getMediaQuery("mobile")} {
      inset: ${EDGE};
      width: auto;
      height: auto;
      max-width: none;
      max-height: none;
    }
  `;

const Panel = styled(OakFlex)<PanelStyleProps>`
  position: fixed;
  overflow: clip;
  ${placementCss}
  ${smallScreenCss}
`;

// Fades the backdrop and panel in and out together
const Fade = styled(OakBox)<{ $state: TransitionStatus }>`
  opacity: ${({ $state }) =>
    $state === "entering" || $state === "entered" ? 1 : 0};
`;

const Backdrop = styled(OakBox)<{ $hideOnSmallScreen: boolean }>`
  ${({ $hideOnSmallScreen }) =>
    $hideOnSmallScreen &&
    css`
      @media ${getMediaQuery("mobile")} {
        display: none;
      }
    `}
`;

/**
 * Shared behaviour for `OakModal` and `OakDialog`.
 *
 * - Portals into `document.body` (or `domContainer`) once mounted on the client
 * - Traps focus, locks body scroll and returns focus to the trigger on close
 * - Fades in and out with the `standard-ease` transition
 * - Shows a backdrop behind every placement except `fullscreen`
 * - Caps the panel at the screen size, and shows drawers fullscreen on small screens
 * - Makes the content focusable when it scrolls so keyboard users can scroll it
 */
export const InternalModalBase = ({
  isOpen,
  placement,
  onDismiss,
  width = "spacing-640",
  height = "spacing-640",
  role = "dialog",
  borderRadius,
  header,
  children,
  footerSlot,
  autoFocusContent = false,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  domContainer,
  zIndex,
  returnFocus,
}: InternalModalBaseProps) => {
  // `createPortal` is not supported in SSR so we only render once mounted on the client
  const isMounted = useMounted();
  const fadeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentInnerRef = useRef<HTMLDivElement>(null);

  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    // Let keyboard users scroll the content when it overflows
    const checkIsScrollable = () => {
      const content = contentRef.current;
      setIsScrollable(!!content && content.scrollHeight > content.clientHeight);
    };

    checkIsScrollable();

    // Re-check whenever the scroll area or its content changes size, e.g. the
    // window resizes, images load, an accordion opens or a child adds content
    const content = contentRef.current;
    const contentInner = contentInnerRef.current;
    if (!content || !contentInner || typeof ResizeObserver === "undefined") {
      return;
    }
    const resizeObserver = new ResizeObserver(checkIsScrollable);
    resizeObserver.observe(content);
    resizeObserver.observe(contentInner);

    return () => resizeObserver.disconnect();
  }, [isOpen, isMounted]);

  if (!isMounted) {
    return null;
  }

  const finalZIndex = zIndex ?? "modal-dialog";
  // Rounded corners would clip a scrollbar at the panel's edge, so the centred
  // panel's scrolling area is moved 8px in from the edges, as in Figma. Its
  // padding is 8px smaller to match, so the content stays 56px / 64px from the edges.
  const isCentre = placement === "centre";

  let contentTabIndex: 0 | -1 | undefined;
  if (isScrollable) {
    contentTabIndex = 0; // users can Tab to it to scroll
  } else if (autoFocusContent) {
    contentTabIndex = -1; // the Dialog can focus it on open, but Tab skips it
  }

  return createPortal(
    <Transition
      in={isOpen}
      nodeRef={fadeRef}
      timeout={FADE_DURATION}
      appear
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <Fade
          ref={fadeRef}
          $state={state}
          $position="relative"
          $zIndex={finalZIndex}
          $transition="standard-ease"
          data-testid="modal-root"
        >
          {placement !== "fullscreen" && (
            <Backdrop
              $hideOnSmallScreen={isDrawer(placement)}
              $position="fixed"
              $inset="spacing-0"
              $background="bg-inverted-semi-transparent"
              data-testid="modal-backdrop"
            />
          )}
          <FocusOn
            // Only while open, so a closing modal can't be dismissed twice
            onEscapeKey={isOpen ? onDismiss : undefined}
            onClickOutside={isOpen ? onDismiss : undefined}
            returnFocus={returnFocus ?? true}
            autoFocus
            preventScrollOnFocus
          >
            <Panel
              $placement={placement}
              $panelWidth={width}
              $panelHeight={height}
              $flexDirection="column"
              $background="bg-primary"
              $color="text-primary"
              $dropShadow="drop-shadow-centred-standard"
              $borderRadius={borderRadius}
              role={role}
              aria-modal={true}
              aria-label={ariaLabelledBy ? undefined : ariaLabel}
              aria-labelledby={ariaLabelledBy}
              aria-describedby={ariaDescribedBy}
            >
              {header && <OakFlex $flexShrink={0}>{header}</OakFlex>}
              <OakFlex
                ref={contentRef}
                $flexDirection="column"
                $flexGrow={1}
                // Lets the content shrink and scroll instead of pushing the footer off-screen
                $minHeight="spacing-0"
                $overflow="auto"
                $ma={isCentre ? "spacing-8" : undefined}
                // Stops the content shifting sideways when a scrollbar appears
                style={{ scrollbarGutter: "stable" }}
                tabIndex={contentTabIndex}
                // Tells the focus lock to focus the content when the modal opens
                data-autofocus={autoFocusContent || undefined}
                data-testid="modal-content"
              >
                <OakFlex
                  ref={contentInnerRef}
                  $flexDirection="column"
                  $pv={isCentre ? "spacing-48" : "spacing-56"}
                  $ph={
                    isCentre
                      ? ["spacing-16", "spacing-56", "spacing-56"]
                      : ["spacing-16", "spacing-64", "spacing-64"]
                  }
                  data-testid="modal-content-inner"
                >
                  {children}
                </OakFlex>
              </OakFlex>
              {footerSlot && (
                <OakFlex $flexShrink={0} $flexDirection="column">
                  {footerSlot}
                </OakFlex>
              )}
            </Panel>
          </FocusOn>
        </Fade>
      )}
    </Transition>,
    domContainer ?? document.body,
  );
};
