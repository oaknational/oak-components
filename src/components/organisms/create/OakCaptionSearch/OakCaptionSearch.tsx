import React from "react";

import { OakFlex } from "@/components/atoms";
import { OakPrimaryButton } from "@/components/molecules";
import { OakFormInputWithLabels } from "@/components/molecules/OakFormInputWithLabels/OakFormInputWithLabels";

export interface OakCaptionSearchProps {
  /**
   * Callback function that is called when the search is submitted.
   * It receives the caption ID string as an argument.
   */
  onSearch?: (captionIdString: string) => void;
  /**
   * Indicates if there is an error in the search input.
   */
  hasError?: boolean;
  /**
   * Text to display when there is an error in the search input.
   */
  errorText?: string;
  /**
   * Indicates if the search is currently loading. will disable the input and button.
   */
  isLoading?: boolean;
}

export const OakCaptionSearch = ({
  onSearch,
  hasError,
  errorText,
  isLoading = false,
}: OakCaptionSearchProps) => {
  const handleFormSubmit = (event: React.FormEvent) => {
    // NB. we don't handle caption ID validation here to remain decoupled from the application logic
    event.preventDefault();
    // get the input value from the form
    const form = event.target as HTMLFormElement;
    const input = form.querySelector(
      'input[name="caption-id"]',
    ) as HTMLInputElement;
    const captionIdString = input.value.trim();
    if (onSearch) {
      onSearch(captionIdString);
    }
  };

  return (
    <OakFlex
      as="form"
      $flexDirection={"column"}
      $color={"text-primary"}
      $background={"white"}
      $pa={"inner-padding-xl"}
      $gap={"space-between-m"}
      $borderRadius={"border-radius-s"}
      onSubmit={handleFormSubmit}
    >
      <OakFormInputWithLabels
        label="Caption ID"
        inputName="caption-id"
        helperText="Enter on or more IDs (separated by commas)."
        invalid={hasError}
        invalidText={errorText}
        disabled={isLoading}
        required
      />
      <OakPrimaryButton
        type="submit"
        iconName="search"
        isTrailingIcon
        isLoading={isLoading}
      >
        Search
      </OakPrimaryButton>
    </OakFlex>
  );
};
