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

export type OakTooltipProps = Pick<InternalTooltipProps, "tooltipPosition"> & {
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
  domContainer = document.body,
  ...props
}: OakTooltipProps) => {
  const [targetElement, setTargetElement] = useState<Element | null>(null);
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

    const updateOverlayStyle = () => {
      const rect = targetElement.getBoundingClientRect();

      setOverlayStyle({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    };

    const observer = new ResizeObserver(updateOverlayStyle);
    observer.observe(targetElement);
    observer.observe(document.documentElement);

    return () => {
      observer.disconnect();
    };
  }, [targetElement]);

  return (
    <>
      {createPortal(
        isOpen && (
          <OakBox
            $position="absolute"
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
                $pv="inner-padding-m"
                $ph="inner-padding-xl"
                $font="heading-light-7"
                tooltipPosition={tooltipPosition}
                {...props}
                {...borderRadiusProps}
              >
                {tooltip}
              </InternalTooltip>
            </OakBox>
          </OakBox>
        ),
        domContainer,
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
      props.$top = "space-between-none";
      props.$transform = `translateY(calc(-100% - ${parseSpacing(
        "space-between-s",
      )}))`;
      break;
    default:
      props.$bottom = "space-between-none";
      props.$transform = `translateY(calc(100% + ${parseSpacing(
        "space-between-s",
      )}))`;
      break;
  }

  switch (tooltipPosition) {
    case "top-left":
    case "bottom-left":
      props.$left = "space-between-none";
      break;
    default:
      props.$right = "space-between-none";
      break;
  }

  return props;
}
