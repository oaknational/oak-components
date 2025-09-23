import React, { ReactNode, useState } from "react";

import { OakBox, OakFlex } from "@/components/atoms";
import {
  OakCollapsibleContent,
  OakSmallSecondaryButton,
} from "@/components/molecules";

type OakVideoTranscriptProps = {
  /**
   * The transcript content
   */
  children: ReactNode;
  /**
   * The id of the collapsible content element. This is used to link the button to the content
   */
  id: string;
  /**
   * A control to toggle sign language button (OakSignLanguageButton)
   */
  signLanguageControl?: ReactNode;
  /**
   * A control to toggle copy link button (OakCopyLinkButton)
   */
  copyLinkControl?: ReactNode;
  /**
   * A flag to control state of a transcript
   */
  transcriptToggled?: (props: { isOpen: boolean }) => void;
};

/**
 * Display a togglable video transcript with a slot to display a sign language control
 */
export const OakVideoTranscript = ({
  children,
  id,
  signLanguageControl = null,
  copyLinkControl = null,
  transcriptToggled,
}: OakVideoTranscriptProps) => {
  const [showTranscript, setShowTranscript] = useState(false);

  const handleClick = () => {
    setShowTranscript(!showTranscript);
    if (transcriptToggled) {
      transcriptToggled({ isOpen: !showTranscript });
    }
  };

  const label = showTranscript ? "Hide transcript" : "Show transcript";

  return (
    <>
      <OakFlex
        $flexDirection="row"
        $flexWrap={"wrap"}
        $gap={["spacing-8", "spacing-16"]}
      >
        {/* desktop */}

        {children && (
          <OakBox $display={["none", "block"]}>
            <OakSmallSecondaryButton
              onClick={handleClick}
              iconName={showTranscript ? "chevron-up" : "chevron-down"}
              isTrailingIcon
              aria-controls={id}
              aria-expanded={showTranscript}
            >
              {label}
            </OakSmallSecondaryButton>
          </OakBox>
        )}

        {/* mobile */}
        {children && (
          <OakBox $display={["block", "none"]}>
            <OakSmallSecondaryButton
              onClick={handleClick}
              aria-controls={id}
              aria-expanded={showTranscript}
            >
              {label}
            </OakSmallSecondaryButton>
          </OakBox>
        )}
        {copyLinkControl && <OakBox>{copyLinkControl}</OakBox>}
        {signLanguageControl && <OakBox>{signLanguageControl}</OakBox>}
      </OakFlex>
      {children && (
        <OakCollapsibleContent
          id={id}
          $maxHeight="spacing-960"
          isOpen={showTranscript}
          $font="body-2"
          $color="text-primary"
          $pa={"spacing-12"}
          $mt={["spacing-16", "spacing-32"]}
          aria-live="polite"
        >
          {children}
        </OakCollapsibleContent>
      )}
    </>
  );
};
