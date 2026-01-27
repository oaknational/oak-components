import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Transition, TransitionStatus } from "react-transition-group";

import { InternalShadowIconButton } from "@/components/internal-components/InternalShadowIconButton";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakCombinedColorToken } from "@/styles";
import { parseOpacity } from "@/styles/helpers/parseOpacity";
import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakIcon } from "@/components/images-and-icons/OakIcon";

export type OakToastProps = {
  message: React.ReactNode;
  variant: VariantKey;
  autoDismissDuration?: number;
  autoDismiss: boolean;
  showIcon: boolean;
  onClose?: () => void;
  id?: number;
};

type VariantKey =
  | "green"
  | "yellow"
  | "pink"
  | "blue"
  | "aqua"
  | "light"
  | "dark"
  | "error"
  | "success";

type Variant = Record<
  VariantKey,
  {
    background: OakCombinedColorToken;
    icon: React.ReactNode;
    color: OakCombinedColorToken;
  }
>;

const SuccessIconBackground = styled(OakBox)`
  top: 6px;
  left: 6px;
`;

const SuccessIcon = (
  <OakBox $position="relative">
    <SuccessIconBackground
      $width="spacing-20"
      $height="spacing-20"
      $background="bg-primary"
      $borderRadius="border-radius-circle"
      $position="absolute"
    />
    <OakIcon iconName="success" $width="spacing-32" $height="spacing-32" />
  </OakBox>
);

const variants: Variant = {
  green: {
    background: "bg-decorative1-main",
    icon: SuccessIcon,
    color: "text-primary",
  },
  yellow: {
    background: "bg-decorative5-main",
    icon: SuccessIcon,
    color: "text-primary",
  },
  pink: {
    background: "bg-decorative4-main",
    icon: SuccessIcon,
    color: "text-primary",
  },
  blue: {
    background: "bg-decorative3-main",
    icon: SuccessIcon,
    color: "text-primary",
  },
  aqua: {
    background: "bg-decorative2-main",
    icon: SuccessIcon,
    color: "text-primary",
  },
  light: {
    background: "bg-primary",
    icon: SuccessIcon,
    color: "text-primary",
  },
  dark: {
    background: "bg-inverted",
    icon: SuccessIcon,
    color: "text-inverted",
  },
  error: {
    background: "bg-error",
    icon: (
      <OakIcon
        iconName="warning"
        $colorFilter="text-inverted"
        $height="spacing-32"
        $width="spacing-32"
      />
    ),
    color: "text-inverted",
  },
  success: {
    background: "bg-success",
    icon: SuccessIcon,
    color: "text-inverted",
  },
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

export const OakToast = ({
  message,
  variant,
  autoDismiss = false,
  autoDismissDuration = 5000,
  showIcon,
  onClose,
  id,
}: OakToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoDismiss && isVisible) {
      const timer = setTimeout(
        () => {
          setIsVisible(false);
        },
        Math.max(5000, autoDismissDuration),
      );
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, autoDismissDuration, isVisible, id]);

  const transitionRef = useRef<HTMLDivElement>(null);

  const { background, icon, color } = variants[variant];

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
          {showIcon && icon}
          {message}
          {!autoDismiss && (
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
