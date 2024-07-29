import React from "react";

import { OakFlex, OakIcon, OakImage, OakSpan } from "@/components/atoms";

export type OakQuizResultItemProps = {
  feedbackState: "correct" | "incorrect" | null;
  standardText?: string;
  boldPrefixText?: string;
  imageURL?: string;
  imageAlt?: string;
};

const DisplayText = ({
  boldPrefixText,
  standardText,
}: Pick<OakQuizResultItemProps, "boldPrefixText" | "standardText">) => {
  if (boldPrefixText && standardText) {
    return (
      <OakFlex $color={"text-primary"}>
        <OakSpan $font={"body-2-bold"}>{boldPrefixText}</OakSpan>
        <OakSpan $font={"body-2"}>
          {"\u00A0"}-{"\u00A0"}
          {standardText}
        </OakSpan>
      </OakFlex>
    );
  } else if (standardText) {
    return (
      <OakSpan $color={"text-primary"} $font={"body-2"}>
        {standardText}
      </OakSpan>
    );
  } else {
    return null;
  }
};

/**
 *
 * Add the description of the component here and it will appear on the story for the component
 * The following callbacks are available for tracking focus events:
 *
 * ### Callbacks
 * make sure to add descriptions and types for any callbacks for the component
 *
 * NB. We must export a styled component for it to be inheritable
 */
export const OakQuizResultItem = ({
  standardText,
  boldPrefixText,
  feedbackState,
  imageURL,
  imageAlt,
}: OakQuizResultItemProps) => {
  const background = (() => {
    if (feedbackState === "correct") {
      return "bg-decorative5-subdued";
    } else if (feedbackState === "incorrect") {
      return "bg-neutral";
    } else {
      return null;
    }
  })();

  return (
    <OakFlex
      $flexDirection={"column"}
      $alignItems={"start"}
      $gap={"space-between-ssx"}
    >
      <OakFlex
        $background={background}
        $pa={"inner-padding-xs"}
        $borderRadius={"border-radius-m"}
        $width={"fit-content"}
        $gap={"space-between-xs"}
        $alignItems={"center"}
      >
        {feedbackState && (
          <OakIcon
            iconName={feedbackState === "correct" ? "tick" : "cross"}
            $width={"all-spacing-7"}
            $height={"all-spacing-7"}
            $colorFilter={
              feedbackState === "correct" ? "text-primary" : "icon-error"
            }
          />
        )}
        <DisplayText
          standardText={standardText}
          boldPrefixText={boldPrefixText}
        />
      </OakFlex>
      {imageURL && imageAlt && (
        <OakImage
          src={imageURL}
          alt={imageAlt}
          $width={"all-spacing-17"}
          $height={"all-spacing-17"}
          $background={"bg-neutral"}
        />
      )}
    </OakFlex>
  );
};
