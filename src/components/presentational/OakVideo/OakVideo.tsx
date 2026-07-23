import React, { useState, useId } from "react";

import { OakSecondaryButton } from "@/components/buttons";
import { OakFlex, OakBox } from "@/components/layout-and-structure";
import { OakHeading, OakP } from "@/components/typography";

export type OakVideoProps = {
  heading?: string;
  body?: string;
  videoSlot: React.ReactNode;
  transcript?: string[];
  showTranscript?: boolean;
  showCopyLink?: boolean;
  showSignLanguage?: boolean;
  onCopyLink?: () => void;
  onShowSignLanguage?: () => void;
};

export function OakVideo({
  heading,
  body,
  videoSlot,
  transcript,
  showTranscript = false,
  showCopyLink = false,
  showSignLanguage = false,
  onCopyLink,
  onShowSignLanguage,
}: Readonly<OakVideoProps>) {
  const transcriptId = useId();
  const [isTranscriptOpen, setIsTranscriptOpen] = useState(false);
  const transcriptEnabled =
    showTranscript && transcript && transcript.length > 0;
  const copyLinkEnabled = showCopyLink && onCopyLink;
  const signLanguageEnabled = showSignLanguage && onShowSignLanguage;

  return (
    <OakFlex $flexDirection={"column"} $gap={"spacing-24"}>
      <OakFlex $flexDirection={"column"} $gap={"spacing-24"}>
        <OakBox $aspectRatio={"30/17"}>{videoSlot}</OakBox>
      </OakFlex>
      <OakFlex $flexDirection={"column"} $gap={"spacing-8"}>
        {heading && (
          <OakHeading
            tag={"h1"}
            $color={"text-primary"}
            $font={["heading-5", "heading-4", "heading-4"]}
          >
            {heading}
          </OakHeading>
        )}
        {body && (
          <OakP $color={"text-primary"} $font={["body-2", "body-1", "body-1"]}>
            {body}
          </OakP>
        )}
      </OakFlex>
      <OakFlex $flexDirection={["column", "row", "row"]} $gap={["spacing-16"]}>
        <OakFlex $gap={"spacing-16"} $flexGrow={1}>
          {transcriptEnabled && (
            <OakSecondaryButton
              iconName={isTranscriptOpen ? "chevron-up" : "chevron-down"}
              onClick={() => setIsTranscriptOpen(!isTranscriptOpen)}
              aria-controls={transcriptId}
              aria-expanded={isTranscriptOpen}
            >
              Show transcript
            </OakSecondaryButton>
          )}
          {copyLinkEnabled && (
            <OakSecondaryButton onClick={onCopyLink} iconName={"copy"}>
              Copy link
            </OakSecondaryButton>
          )}
        </OakFlex>
        {signLanguageEnabled && (
          <OakSecondaryButton
            onClick={onShowSignLanguage}
            iconName={"sign-language"}
          >
            Show sign language
          </OakSecondaryButton>
        )}
      </OakFlex>
      {transcriptEnabled && (
        <OakFlex
          id={transcriptId}
          $display={!isTranscriptOpen ? "none" : undefined}
          $height="spacing-360"
          $background={"bg-neutral-stronger"}
          $pa={"spacing-16"}
          $borderRadius={"border-radius-s"}
          $gap={"spacing-32"}
        >
          <OakFlex
            $gap={"spacing-8"}
            $overflowY={"auto"}
            $flexDirection={"column"}
          >
            {transcript.map((transcriptLine, transcriptIndex) => {
              return (
                <OakP key={transcriptIndex} $font={"body-1"}>
                  {transcriptLine}
                </OakP>
              );
            })}
          </OakFlex>
        </OakFlex>
      )}
    </OakFlex>
  );
}
