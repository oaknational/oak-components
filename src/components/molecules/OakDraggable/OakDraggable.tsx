import React, {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  FC,
  forwardRef,
} from "react";
import styled from "styled-components";

import { OakBox, OakFlex, OakIcon } from "@/components/atoms";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseBorder } from "@/styles/helpers/parseBorder";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { IconName } from "@/image-map";
import { OakCombinedColorToken } from "@/styles/theme/color";
import { parseBorderWidth } from "@/styles/helpers/parseBorderWidth";
import { parseColorFilter } from "@/styles/helpers/parseColorFilter";

type OakDraggableProps = {
  /**
   * Whether the item is currently being dragged
   */
  isDragging?: boolean;
  /**
   * Present the element in a subdued state with hover effects disabled
   */
  isDisabled?: boolean;
  /**
   * Read only
   *
   * Disables hover effects
   */
  isReadOnly?: boolean;
  /**
   * Icon to display
   */
  iconName?: IconName;
  /**
   * Icon color when not being dragged or hovered
   */
  iconColor?: OakCombinedColorToken;
  /**
   * The background color of the draggable when not being dragged or hovered
   */
  background?: OakCombinedColorToken;
  /**
   * The color of the draggable when not being dragged or hovered
   */
  color?: OakCombinedColorToken;
};

const StyledOakIcon = styled(OakIcon)``;

const StyledDraggable = styled(OakBox)<{ $iconColor: OakCombinedColorToken }>`
  cursor: grab;
  outline: none;
  user-select: none;

  ${StyledOakIcon} {
    filter: ${(props) => parseColorFilter(props.$iconColor)};
  }

  @media (hover: hover) {
    &:hover:not([data-dragging="true"]):not([data-disabled="true"]):not(
        [data-readonly="true"]
      ) {
      background-color: ${parseColor("bg-decorative1-subdued")};
      color: ${parseColor("text-primary")};
      box-shadow: ${parseDropShadow("drop-shadow-standard")};
      border-bottom: ${parseBorder("border-solid-xl")}
        ${parseColor("border-primary")};
      padding-bottom: ${parseSpacing("inner-padding-m")};
      text-decoration: underline;

      ${StyledOakIcon} {
        filter: ${parseColorFilter("icon-inverted")};
      }
    }
  }

  &:focus-visible:not([data-dragging="true"]):not([data-disabled="true"]) {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }

  &[data-dragging="true"] {
    cursor: move;
    background-color: ${parseColor("bg-decorative1-main")};
    color: ${parseColor("text-primary")};
    outline: ${parseBorder("border-solid-xl")} ${parseColor("border-primary")};
    outline-offset: -${parseBorderWidth("border-solid-xl")};
    box-shadow: ${parseDropShadow("drop-shadow-lemon")},
      ${parseDropShadow("drop-shadow-grey")};
    text-decoration: underline;

    ${StyledOakIcon} {
      filter: ${parseColorFilter("icon-inverted")};
    }
  }

  &[data-disabled="true"] {
    cursor: default;
    background-color: ${parseColor("bg-neutral")};
    color: ${parseColor("text-disabled")};

    ${StyledOakIcon} {
      filter: ${parseColorFilter("icon-disabled")};
    }
  }

  &[data-readonly="true"] {
    cursor: default;
  }
`;

const StyledFlex = styled(OakFlex)`
  margin-block: -${parseSpacing("space-between-ssx")};
`;

/**
 * The component has no intrinsic draggable functionality.
 * It is intended to be used with `useDraggable` from `@dnd-kit/core`
 */
export const OakDraggable: FC<
  ComponentPropsWithRef<OakDraggableProps & typeof OakBox>
> = forwardRef<
  HTMLDivElement,
  OakDraggableProps & ComponentPropsWithoutRef<typeof OakBox>
>(
  (
    {
      children,
      iconName = "move-arrows",
      iconColor = "icon-inverted",
      color = "text-primary",
      background = "bg-primary",
      isDragging,
      isDisabled,
      isReadOnly,
      ...props
    },
    ref,
  ) => {
    return (
      <StyledDraggable
        ref={ref}
        $pv="inner-padding-l"
        $pl="inner-padding-s"
        $pr="inner-padding-m"
        $background={background}
        $color={color}
        $borderRadius="border-radius-m2"
        $minHeight="all-spacing-10"
        data-dragging={isDragging}
        data-disabled={isDisabled}
        data-readonly={isReadOnly}
        $iconColor={iconColor}
        {...props}
      >
        <StyledFlex $gap="space-between-s" $alignItems="center">
          <StyledOakIcon
            iconName={iconName}
            $width="all-spacing-7"
            $height="all-spacing-7"
            alt=""
          />
          <OakFlex $font="body-1-bold">{children}</OakFlex>
        </StyledFlex>
      </StyledDraggable>
    );
  },
);
