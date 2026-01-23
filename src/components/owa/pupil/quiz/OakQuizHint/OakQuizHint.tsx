import React, { MouseEventHandler, ReactNode, useState } from "react";

import { OakTooltip } from "@/components/messaging-and-feedback/OakTooltip";
import { OakHintButton } from "@/components/owa/pupil/quiz/OakHintButton";
import { OakBox } from "@/components/layout-and-structure/OakBox";

export type OakQuizHintProps = {
  /**
   * Some content to give as a hint to answer a question
   */
  hint: ReactNode;
  id: string;
  hintToggled?: (props: { isOpen: boolean }) => void;
};

/**
 * Presents a button which will show a hint when clicked
 */
export const OakQuizHint = ({ hint, id, hintToggled }: OakQuizHintProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick: MouseEventHandler = () => {
    setIsOpen(!isOpen);
    if (hintToggled) {
      hintToggled({ isOpen: !isOpen });
    }
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
