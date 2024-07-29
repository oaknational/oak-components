import React from "react";

import { OakFlex, OakIcon, OakImage, OakSpan } from "@/components/atoms";
import { OakAllSpacingToken } from "@/styles";

export type InternalQuizResultItemProps = {
  feedbackState?: "correct" | "incorrect" | null;
  standardText?: string;
  boldPrefixText?: string;
  imageURL?: string;
  imageAlt?: string;
};

const DisplayText = ({
  boldPrefixText,
  standardText,
  height = "all-spacing-5",
}: Pick<InternalQuizResultItemProps, "boldPrefixText" | "standardText"> & {
  height: OakAllSpacingToken;
}) => {
  if (boldPrefixText && standardText) {
    return (
      <OakFlex $color={"text-primary"} $height={height} $alignItems={"center"}>
        <OakSpan $font={"body-2-bold"}>{boldPrefixText}</OakSpan>
        <OakSpan $font={"body-2"}>
          {"\u00A0"}-{"\u00A0"}
          {standardText}
        </OakSpan>
      </OakFlex>
    );
  } else if (standardText) {
    return (
      <OakFlex $alignItems={"center"} $height={height}>
        <OakSpan $color={"text-primary"} $font={"body-2"}>
          {standardText}
        </OakSpan>
      </OakFlex>
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
export const InternalQuizResultItem = ({
  standardText,
  boldPrefixText,
  feedbackState,
  imageURL,
  imageAlt,
}: InternalQuizResultItemProps) => {
  if (boldPrefixText && !standardText) {
    throw new Error(
      "standardText must be provided if boldPrefixText is provided",
    );
  }

  if (!standardText && !imageURL) {
    throw new Error("Either standardText or imageURL must be provided");
  }

  if (imageURL && !imageAlt) {
    throw new Error("Image URL provided without alt text");
  }

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
          height="all-spacing-7"
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
