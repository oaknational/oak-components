import React, { ComponentPropsWithoutRef } from "react";

import { OakDraggable } from "../OakDraggable";

type OakDraggableFeedbackProps = ComponentPropsWithoutRef<
  typeof OakDraggable
> & {
  /**
   * Alters the appearance of the element to indicate whether or not it is in a correct state
   */
  feedback: "correct" | "incorrect";
};

/**
 * A draggable element that visually indicates whether or not its state is correct or not
 */
export const OakDraggableFeedback = ({
  feedback,
  ...props
}: OakDraggableFeedbackProps) => {
  return (
    <OakDraggable
      {...props}
      iconName={feedback === "correct" ? "tick" : "cross"}
      iconColor={feedback === "correct" ? "icon-success" : "icon-error"}
      $ba="border-solid-xl"
      $borderColor={feedback === "correct" ? "border-success" : "border-error"}
      $background={feedback === "correct" ? "bg-correct" : "bg-incorrect"}
      isReadOnly
    />
  );
};
