import React from "react";

import {
  OakTextInput,
  OakTextInputProps,
} from "@/components/form-elements/OakTextInput";

type OakQuizTextInputProps = Omit<
  OakTextInputProps,
  "validity" | "iconName" | "iconAlt" | "isTrailingIcon"
> & {
  /**
   * Alters the appearance of the input to indicate whether or not a correct answer was given.
   * Also sets the input to read-only.
   */
  feedback?: "correct" | "incorrect" | null;
};

/**
 * A text input for a free-text question in a quiz
 */
export const OakQuizTextInput = ({
  feedback,
  readOnly,
  ...props
}: OakQuizTextInputProps) => {
  let validity: OakTextInputProps["validity"];
  let iconName: OakTextInputProps["iconName"];
  let iconAlt: OakTextInputProps["iconAlt"] = undefined;

  switch (feedback) {
    case "correct":
      validity = "valid";
      iconName = "tick";
      iconAlt = "Correct";
      break;
    case "incorrect":
      validity = "invalid";
      iconName = "cross";
      iconAlt = "Incorrect";
      break;
  }

  return (
    <OakTextInput
      {...props}
      validity={validity}
      iconName={iconName}
      iconAlt={iconAlt}
      readOnly={readOnly || !!feedback}
      isTrailingIcon
    />
  );
};
