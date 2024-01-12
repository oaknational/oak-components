import React, { MouseEventHandler, ReactNode, useState } from "react";

// @ts-expect-error:  this is an svg
import lightbulbOutlineIconSvg from "../../../../assets/light-bulb-outline.svg";
// @ts-expect-error:  this is an svg
import lightbulbWhiteOutlineSvg from "../../../../assets/light-bulb-with-white-outline.svg";

import { OakTertiaryButton, OakTooltip } from "@/components/ui";

export type OakQuizHintProps = {
  /**
   * Some content to give as a hint to answer a question
   */
  hint: ReactNode;
};

/**
 * Presents a button which will show a hint when clicked
 */
export const OakQuizHint = ({ hint }: OakQuizHintProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick: MouseEventHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OakTooltip tooltip={hint} isOpen={isOpen}>
      <OakTertiaryButton
        iconSrc={
          isOpen ? lightbulbWhiteOutlineSvg.src : lightbulbOutlineIconSvg.src
        }
        onClick={handleClick}
        iconBackground={isOpen ? "bg-icon" : "bg-decorative5-main"}
      >
        {isOpen ? "Close hint" : "Need a hint?"}
      </OakTertiaryButton>
    </OakTooltip>
  );
};
