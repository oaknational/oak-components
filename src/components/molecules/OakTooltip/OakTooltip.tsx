import React, {
  ReactElement,
  ReactNode,
  useLayoutEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";

import {
  InternalTooltip,
  InternalTooltipProps,
} from "@/components/atoms/InternalTooltip/InternalTooltip";
import { OakBox, OakBoxProps } from "@/components/atoms";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

export type OakTooltipProps = InternalTooltipProps & {
  /**
   * The target element that triggers the tooltip
   */
  children: ReactElement;
  /**
   * The content of the tooltip
   */
  tooltip: ReactNode;
  /**
   * Whether the tooltip is open or not
   */
  isOpen?: boolean;
  /**
   * The DOM container to render the tooltip portal into
   *
   * @default document.body
   */
  domContainer?: Element;
};

/**
 * A tooltip with oven-ready styling and positioning.
 */
export const OakTooltip = ({
  tooltipPosition,
  children,
  tooltip,
  isOpen,
  domContainer,
  ...props
}: OakTooltipProps) => {
  const [targetElement, setTargetElement] = useState<Element | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(true);
  const [domContainerState, setDomContainerState] = useState<
    Element | undefined
  >(domContainer);
  const isVisible = isOpen && isIntersecting;

  /**
   * The overlay is positioned on top of the target element in a portal.
   * It tracks the target's size and position.
   *
   * we use it to position the tooltip relative to the target element without interfering
   * with the page layout
   */
  const [overlayStyle, setOverlayStyle] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  }>();
  const squaredCornerRadiusProp: keyof InternalTooltipProps = (() => {
    switch (tooltipPosition) {
      case "bottom-right":
        return "$btrr";
      case "top-right":
        return "$bbrr";
      case "top-left":
        return "$bblr";
      default:
        return "$btlr";
    }
  })();
  const borderRadiusProps: Partial<InternalTooltipProps> = {
    $borderRadius: "border-radius-m",
    [squaredCornerRadiusProp]: "border-radius-square",
  };

  useLayoutEffect(() => {
    if (!targetElement) {
      return;
    }
    let ticking = false;
    const updateOverlayStyle = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          ticking = false;
          const rect = targetElement.getBoundingClientRect();

          setOverlayStyle({
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
          });
        });
        ticking = true;
      }
    };

    // We use an intersection observer to detect when the target element is no longer visible
    const intersection = new IntersectionObserver((entries) => {
      setIsIntersecting(entries.every((entry) => entry.isIntersecting));
    });
    intersection.observe(targetElement);

    // We use a resize observer to detect when the target element's size changes
    const resize = new ResizeObserver(updateOverlayStyle);
    resize.observe(targetElement);

    // Update the overlay position on scroll and resize
    window.addEventListener("scroll", updateOverlayStyle, true);
    window.addEventListener("resize", updateOverlayStyle);

    return () => {
      resize.disconnect();
      intersection.disconnect();
      window.removeEventListener("scroll", updateOverlayStyle, true);
      window.removeEventListener("resize", updateOverlayStyle);
    };
  }, [targetElement]);

  useLayoutEffect(() => {
    if (domContainerState) {
      return;
    }
    setDomContainerState(document.body);
  }, [domContainerState]);

  return (
    <>
      {domContainerState &&
        createPortal(
          isVisible && (
            <OakBox
              $position="fixed"
              style={overlayStyle}
              $pointerEvents="none"
              $zIndex="modal-dialog"
            >
              <OakBox
                $width="fit-content"
                $height="fit-content"
                $position="absolute"
                {...getTooltipPositionProps(tooltipPosition)}
              >
                <InternalTooltip
                  $background="bg-decorative5-main"
                  $color="text-primary"
                  $pv="spacing-16"
                  $ph="spacing-24"
                  $font="heading-light-7"
                  tooltipPosition={tooltipPosition}
                  aria-expanded={isVisible}
                  {...borderRadiusProps}
                  {...props}
                >
                  {tooltip}
                </InternalTooltip>
              </OakBox>
            </OakBox>
          ),
          domContainerState,
        )}
      <div
        ref={(domElement) => {
          setTargetElement(domElement?.firstElementChild ?? null);
        }}
        style={{ display: "contents" }}
      >
        {children}
      </div>
    </>
  );
};

function getTooltipPositionProps(
  tooltipPosition: OakTooltipProps["tooltipPosition"],
) {
  const props: Partial<OakBoxProps> = {};

  switch (tooltipPosition) {
    case "top-left":
    case "top-right":
      props.$top = "spacing-0";
      props.$transform = `translateY(calc(-100% - ${parseSpacing(
        "spacing-16",
      )}))`;
      break;
    default:
      props.$bottom = "spacing-0";
      props.$transform = `translateY(calc(100% + ${parseSpacing(
        "spacing-16",
      )}))`;
      break;
  }

  switch (tooltipPosition) {
    case "top-left":
    case "bottom-left":
      props.$left = "spacing-0";
      break;
    default:
      props.$right = "spacing-0";
      break;
  }

  return props;
}
