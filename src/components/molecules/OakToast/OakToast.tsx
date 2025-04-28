import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Transition, TransitionStatus } from "react-transition-group";

import { InternalShadowIconButton } from "../InternalShadowIconButton";

import { OakFlex } from "@/components/atoms/OakFlex";
import { OakColorToken } from "@/styles";
import { parseOpacity } from "@/styles/helpers/parseOpacity";
import { OakBox, OakIcon } from "@/components/atoms";

export type OakToastProps = {
  message: React.ReactNode;
  variant: VariantKey;
  autoDismissDuration?: number;
  autoDismiss: boolean;
  showIcon: boolean;
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
    background: OakColorToken;
    icon: React.ReactNode;
    color: OakColorToken;
  }
>;

const SuccessIcon = (
  <OakBox $position="relative">
    <OakBox
      $width="all-spacing-4"
      $height="all-spacing-4"
      $background="white"
      $borderRadius="border-radius-circle"
      $position="absolute"
      $top="all-spacing-1"
      $left="all-spacing-1"
    />
    <OakIcon
      iconName="success"
      $width="all-spacing-6"
      $height="all-spacing-6"
    />
  </OakBox>
);

const variants: Variant = {
  green: {
    background: "mint",
    icon: SuccessIcon,
    color: "black",
  },
  yellow: {
    background: "lemon",
    icon: SuccessIcon,
    color: "black",
  },
  pink: {
    background: "pink",
    icon: SuccessIcon,
    color: "black",
  },
  blue: {
    background: "lavender110",
    icon: SuccessIcon,
    color: "black",
  },
  aqua: {
    background: "aqua",
    icon: SuccessIcon,
    color: "black",
  },
  light: {
    background: "white",
    icon: SuccessIcon,
    color: "black",
  },
  dark: {
    background: "black",
    icon: SuccessIcon,
    color: "white",
  },
  error: {
    background: "red",
    icon: (
      <OakIcon
        iconName="warning"
        $colorFilter="text-inverted"
        $height="all-spacing-6"
        $width="all-spacing-6"
      />
    ),
    color: "white",
  },
  success: {
    background: "oakGreen",
    icon: SuccessIcon,
    color: "white",
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
  }, [autoDismiss, autoDismissDuration, isVisible]);

  const transitionRef = React.useRef<HTMLDivElement>(null);

  const { background, icon, color } = variants[variant];

  return (
    <Transition nodeRef={transitionRef} in={isVisible} timeout={300} appear>
      {(state) => (
        <StyledFlex
          data-testid="oak-toast"
          $pa="inner-padding-m"
          $borderRadius="border-radius-m2"
          $background={background}
          $state={state}
          $width="max-content"
          $maxWidth="all-spacing-20"
          $gap="space-between-xs"
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
              aria-label={"Dismiss toast"}
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
