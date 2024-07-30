import React, { MouseEventHandler, ReactNode, useState } from "react";

import { OakInfoButton } from "@/components/organisms/shared/OakinfoButton";
import { OakTooltip, OakTooltipProps } from "@/components/molecules";
import { OakBox } from "@/components/atoms";

export type OakInfoProps = {
  /**
   * Some content to give as a hint to answer a question
   */
  hint: ReactNode;
  id: string;
  isLoading?: boolean;
  disabled?: boolean;
} & Omit<OakTooltipProps, "children" | "tooltip" | "id">;

/**
 * Presents a button which will show a hint when clicked
 */
export const OakInfo = (props: OakInfoProps) => {
  const { hint, id, isLoading, disabled, ...tooltipProps } = props;
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
          buttonProps={{ "aria-describedby": id }}
        />
      </OakTooltip>
    </>
  );
};
