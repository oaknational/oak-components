import React, { ReactNode, useState } from "react";

import { OakBox, OakFlex } from "@/components/atoms";
import {
  OakCollapsibleContent,
  OakTertiaryButton,
} from "@/components/molecules";

type OakLessonVideoTranscriptProps = {
  /**
   * The transcript content
   */
  children: ReactNode;
  /**
   * The id of the collapsible content element. This is used to link the button to the content
   */
  id: string;
  /**
   * A control to toggle the video to display sign language
   */
  signLanguageControl?: ReactNode;
  transcriptToggled?: (props: { isOpen: boolean }) => void;
};

/**
 * Display a togglable video transcript with a slot to display a sign language control
 */
export const OakLessonVideoTranscript = ({
  children,
  id,
  signLanguageControl = null,
  transcriptToggled,
}: OakLessonVideoTranscriptProps) => {
  const [showTranscript, setShowTranscript] = useState(false);

  const handleClick = () => {
    setShowTranscript(!showTranscript);
    if (transcriptToggled) {
      transcriptToggled({ isOpen: !showTranscript });
    }
  };

  return (
    <>
      <OakFlex
        $flexDirection={["column-reverse", "row"]}
        $justifyContent="space-between"
      >
        <OakBox>
          {children && (
            <OakTertiaryButton
              onClick={handleClick}
              iconName={showTranscript ? "chevron-up" : "chevron-down"}
              isTrailingIcon
              aria-controls={id}
              aria-expanded={showTranscript}
              $mb="space-between-m"
            >
              {showTranscript ? "Hide transcript" : "Show transcript"}
            </OakTertiaryButton>
          )}
        </OakBox>
        {signLanguageControl && (
          <OakBox $mb="space-between-m">{signLanguageControl}</OakBox>
        )}
      </OakFlex>
      {children && (
        <OakCollapsibleContent
          id={id}
          $maxHeight="all-spacing-23"
          isOpen={showTranscript}
          $font="body-1"
          $color="text-primary"
        >
          {children}
        </OakCollapsibleContent>
      )}
    </>
  );
};
