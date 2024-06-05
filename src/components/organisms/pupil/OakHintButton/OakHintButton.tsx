import React, { HTMLAttributes, MouseEventHandler } from "react";
import styled from "styled-components";

import {
  InternalShadowRoundButton,
  InternalShadowRoundButtonProps,
} from "@/components/molecules/InternalShadowRoundButton";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

export type OakHintButtonProps = {
  isOpen: boolean;
  onClick?: MouseEventHandler;
  isLoading?: boolean;
  disabled?: boolean;
  buttonProps?: Partial<
    InternalShadowRoundButtonProps & HTMLAttributes<Element>
  >;
};

const StyledInternalShadowRoundButton = styled(InternalShadowRoundButton)`
  &:hover .shadow {
    box-shadow: none !important;
  }
  &:active .shadow {
    box-shadow: ${parseDropShadow("drop-shadow-lemon")},
      ${parseDropShadow("drop-shadow-grey")} !important;
  }
`;

/**
 *
 * A specific implementation of InternalShadowRoundButton
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
export const OakHintButton = (props: OakHintButtonProps) => {
  const { isOpen, disabled, buttonProps } = props;
  return (
    <StyledInternalShadowRoundButton
      iconName={isOpen && !disabled ? "lightbulb-yellow" : "lightbulb"}
      defaultIconBackground={isOpen ? "black" : "bg-decorative5-main"}
      hoverIconBackground={isOpen ? "black" : "bg-decorative5-main"}
      defaultTextColor={"text-primary"}
      hoverTextColor={"text-primary"}
      disabledIconBackground={"bg-btn-primary-disabled"}
      disabledTextColor={"text-disabled"}
      disabledIconColor={"white"}
      onClick={props.onClick}
      isLoading={props.isLoading}
      disabled={props.disabled}
      iconBackgroundSize={"all-spacing-8"}
      iconSize={"all-spacing-6"}
      data-rac
      // aria-describedby={describedby}
      {...buttonProps}
    >
      {!isOpen ? "Need a hint?" : "Close hint"}
    </StyledInternalShadowRoundButton>
  );
};
