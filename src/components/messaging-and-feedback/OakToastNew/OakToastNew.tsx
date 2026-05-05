import React, { useRef, useEffect, useState } from "react";
import { Transition, TransitionStatus } from "react-transition-group";
import styled from "styled-components";

import { colorSchemeConfig, variantConfig } from "./config";

import { OakIcon, OakIconProps } from "@/components/images-and-icons/OakIcon";
import { InternalShadowIconButton } from "@/components/internal-components/InternalShadowIconButton";
import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakUiTextToken, OakUiBackgroundToken } from "@/styles";
import { parseOpacity } from "@/styles/helpers/parseOpacity";

export type OakToastNewProps = {
  /**
   * The text for the toast notification.
   */
  children?: React.ReactNode;
  /**
   * The semantic variant of the toast. Controls icon, colors, default text and role.
   * - 'success': Success icon, green background, white text, default "Success" text or uses children if provided, role "status"
   * - 'error': Alert icon, red background, white text, default "Something went wrong" text or uses children if provided, role "alert"
   * - 'informative': Success icon, uses children as text, role "status"
   * @default 'informative'
   */
  variant?: "success" | "error" | "informative";
  /**
   * The color scheme for the toast. Only affects 'informative' variant. Controls background and text colors.
   * @default 'primary'
   */
  colorScheme?: "primary" | "inverted";
  /**
   * Custom background color override. Only affects 'informative' variant.
   */
  backgroundColor?: OakUiBackgroundToken;
  /**
   * If true, the toast will automatically dismiss after the specified duration.
   * @default false
   */
  isAutoDismiss?: boolean;
  /**
   * Duration in ms before auto-dismiss. Minimum 5000ms.
   * @default 5000
   */
  autoDismissDuration?: number;
  /**
   * If true, shows the icon for the variant.
   * @default true
   */
  hasIcon?: boolean;
  /**
   * Callback fired when the toast is dismissed.
   */
  onClose?: () => void;
  /**
   * Optional id for the toast instance.
   */
  id?: number;
};

const IconBackground = styled(OakBox)`
  top: 6px;
  left: 6px;
`;

type ToastIconProps = {
  iconName: OakIconProps["iconName"];
  iconBackground?: OakUiBackgroundToken | "transparent";
  colorFilter?: OakIconProps["$colorFilter"];
};

const ToastIcon = ({
  iconName,
  iconBackground = "transparent",
  colorFilter,
}: ToastIconProps) => {
  return (
    <OakBox $position="relative">
      <IconBackground
        $width="spacing-20"
        $height="spacing-20"
        $background={iconBackground}
        $borderRadius="border-radius-circle"
        $position="absolute"
      />
      <OakIcon
        data-testid={`oak-toast-${iconName}-icon`}
        iconName={iconName}
        $colorFilter={colorFilter}
        $width="spacing-32"
        $height="spacing-32"
      />
    </OakBox>
  );
};

const StyledFlex = styled(OakFlex)<{ $state: TransitionStatus }>`
  opacity: ${({ $state }) => {
    switch ($state) {
      case "exiting":
      case "entering":
        return parseOpacity("semi-transparent");
      case "exited":
        return parseOpacity("transparent");
      case "entered":
        return parseOpacity("opaque");
      default:
        return parseOpacity("transparent");
    }
  }};
  transition: opacity 0.3s ease-in-out;
`;

/**
 * Toasts communicate confirmation of an action or a low-priority message.
 * ## Usage
 * Use this component to show brief, dismissible notifications to users.
 */
export const OakToastNew = ({
  children,
  variant = "informative",
  colorScheme = "primary",
  backgroundColor,
  isAutoDismiss = false,
  autoDismissDuration = 5000,
  hasIcon = true,
  onClose,
  id,
}: OakToastNewProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isAutoDismiss && isVisible) {
      const timer = setTimeout(
        () => {
          setIsVisible(false);
        },
        Math.max(5000, autoDismissDuration),
      );
      return () => clearTimeout(timer);
    }
  }, [isAutoDismiss, autoDismissDuration, isVisible, id]);

  const transitionRef = useRef<HTMLDivElement>(null);

  const variantDefinition = variantConfig[variant];
  const colorSchemeDefinition = colorSchemeConfig[colorScheme];
  const background = (variantDefinition.background ??
    backgroundColor ??
    colorSchemeDefinition.background) as OakUiBackgroundToken;
  const color = (variantDefinition.color ??
    colorSchemeDefinition.color) as OakUiTextToken;
  const text = children ?? variantDefinition.text ?? "";
  const role = variantDefinition.role;

  return (
    <Transition
      nodeRef={transitionRef}
      in={isVisible}
      timeout={300}
      appear
      onExited={onClose}
    >
      {(state) => (
        <StyledFlex
          data-testid="oak-toast"
          role={role}
          $pa="spacing-16"
          $borderRadius="border-radius-m2"
          $background={background}
          $state={state}
          $width="max-content"
          $maxWidth={["spacing-240", "spacing-360"]}
          $gap="spacing-12"
          $dropShadow="drop-shadow-standard"
          $alignItems="center"
          $font="heading-light-7"
          $color={color}
          $position="relative"
        >
          {hasIcon && (
            <ToastIcon
              iconName={variantDefinition.iconProps.iconName}
              iconBackground={variantDefinition.iconProps.iconBackground}
              colorFilter={variantDefinition.iconProps.$colorFilter}
            />
          )}
          {text}
          {!isAutoDismiss && (
            <InternalShadowIconButton
              aria-label={"Dismiss"}
              defaultIconColor={color}
              defaultTextColor="transparent"
              hoverTextColor="transparent"
              disabledTextColor="transparent"
              hoverIconColor={color}
              iconName="cross"
              onClick={() => setIsVisible(false)}
            />
          )}
        </StyledFlex>
      )}
    </Transition>
  );
};
