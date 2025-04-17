import React, {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
  useState,
} from "react";

import {
  OakTooltip,
  OakTooltipProps,
  OakInfoButton,
} from "@/components/molecules";
import { OakBox } from "@/components/atoms";
import { InternalShadowRoundButtonProps } from "@/components/molecules/InternalShadowRoundButton";

export type OakInfoProps = {
  /**
   * Some content to give as a hint to answer a question
   */
  hint: ReactNode;
  id: string;
  isLoading?: boolean;
  disabled?: boolean;
  buttonProps?: Partial<
    InternalShadowRoundButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
  >;
} & Omit<OakTooltipProps, "children" | "tooltip" | "id">;

/**
 * Presents a button which will show a hint when clicked
 */
export const OakInfo = (props: OakInfoProps) => {
  const { hint, id, isLoading, disabled, buttonProps, ...tooltipProps } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleClick: MouseEventHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <OakBox $display="none" id={id}>
        {hint}
      </OakBox>
      <OakTooltip tooltip={hint} isOpen={isOpen} {...tooltipProps}>
        <OakInfoButton
          onClick={handleClick}
          isOpen={isOpen}
          buttonProps={{
            "aria-describedby": id,
            "aria-label": isOpen ? "close info tooltip" : "open info tooltip",
            ...buttonProps,
          }}
        />
      </OakTooltip>
    </>
  );
};
