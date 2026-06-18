import React, {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
  useState,
} from "react";

import {
  OakTooltip,
  OakTooltipProps,
} from "@/components/messaging-and-feedback/OakTooltip";
import { OakInfoButton } from "@/components/owa/OakInfoButton";
import { InternalShadowRoundButtonProps } from "@/components/internal-components/InternalShadowRoundButton";

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
      <OakTooltip tooltip={hint} isOpen={isOpen} {...tooltipProps}>
        <OakInfoButton
          onClick={handleClick}
          isOpen={isOpen}
          isLoading={isLoading}
          disabled={disabled}
          buttonProps={{
            "aria-expanded": isOpen,
            "aria-describedby": isOpen ? id : undefined,
            "aria-label": isOpen ? "close info tooltip" : "open info tooltip",
            ...buttonProps,
          }}
        />
      </OakTooltip>
      {isOpen && (
        <div
          id={id}
          aria-live="polite"
          aria-relevant="all"
          style={{ position: "absolute", left: "-9999px" }}
          data-testid={`${id}-announcement`}
        >
          {hint}
        </div>
      )}
    </>
  );
};
