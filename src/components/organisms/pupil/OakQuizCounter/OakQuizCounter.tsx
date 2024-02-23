import React from "react";

import { OakSpan } from "@/components/atoms";

export type OakQuizCounterProps = {
  counter: number;
  total: number;
};

/**
 * A counter representing progress through the questions in a quiz
 */
export const OakQuizCounter = (props: OakQuizCounterProps) => {
  const { counter, total } = props;
  return (
    <OakSpan $font={"heading-light-4"} $color={"text-disabled"}>
      <OakSpan $font={"heading-4"} $color={"text-primary"}>
        {counter}{" "}
      </OakSpan>
      of {total}
    </OakSpan>
  );
};
