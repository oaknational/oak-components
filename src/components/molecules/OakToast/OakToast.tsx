import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Transition, TransitionStatus } from "react-transition-group";

import { OakFlex } from "@/components/atoms/OakFlex";
import { OakColorToken } from "@/styles";
import { parseOpacity } from "@/styles/helpers/parseOpacity";

export type OakToastProps = {
  message: React.ReactNode;
  background?: OakColorToken;
  autoDismissDuration?: number;
  autoDismiss?: boolean;
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
  background,
  autoDismiss,
  autoDismissDuration,
}: OakToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoDismiss && isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, autoDismissDuration || 5000);
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, autoDismissDuration, isVisible]);

  const transitionRef = React.useRef<HTMLDivElement>(null);

  return (
    <Transition nodeRef={transitionRef} in={isVisible} timeout={300} appear>
      {(state) => (
        <StyledFlex
          data-testid="oak-toast"
          $pa="inner-padding-m"
          $borderRadius="border-radius-m2"
          $background={background ?? "bg-decorative1-main"}
          $state={state}
        >
          {message}
        </StyledFlex>
      )}
    </Transition>
  );
};
