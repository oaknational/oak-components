import React from "react";

import { OakSmallTertiaryInvertedButton } from "@/components/molecules/OakSmallTertiaryInvertedButton";

export type OakSaveButtonProps = {
  isSaved: boolean;
  isLoading: boolean;
  onSave: () => void;
  unavailable?: boolean;
  saveButtonId?: string;
  title: string;
};

export const OakSaveButton = (props: OakSaveButtonProps) => {
  const { isSaved, isLoading, onSave, unavailable, saveButtonId, title } =
    props;
  return (
    <OakSmallTertiaryInvertedButton
      iconName={isSaved ? "bookmark-filled" : "bookmark-outlined"}
      isTrailingIcon
      aria-disabled={isLoading}
      disabled={unavailable}
      onClick={onSave}
      width="spacing-100"
      $justifyContent="end"
      aria-label={`${isSaved ? "Unsave" : "Save"} this unit: ${title} `}
      id={saveButtonId}
    >
      {isSaved ? "Saved" : "Save"}
    </OakSmallTertiaryInvertedButton>
  );
};
