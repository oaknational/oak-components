import React, { MouseEventHandler, ReactNode, useState } from "react";

import { OakTooltip } from "@/components/molecules";
import { OakHintButton } from "@/components/organisms/pupil/quiz/OakHintButton";
import { OakBox } from "@/components/atoms";

export type OakQuizHintProps = {
  /**
   * Some content to give as a hint to answer a question
   */
  hint: ReactNode;
  id: string;
};

/**
 * Presents a button which will show a hint when clicked
 */
export const OakQuizHint = ({ hint, id }: OakQuizHintProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick: MouseEventHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <OakBox $display="none" id={id}>
        {hint}
      </OakBox>
      <OakTooltip tooltip={hint} isOpen={isOpen} tooltipPosition="top-left">
        <OakHintButton
          isOpen={isOpen}
          onClick={handleClick}
          buttonProps={{ "aria-describedby": id }}
        />
      </OakTooltip>
    </>
  );
};
