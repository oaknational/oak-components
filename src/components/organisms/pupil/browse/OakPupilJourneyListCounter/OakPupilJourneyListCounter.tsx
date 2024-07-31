import React from "react";

import { OakHeading, OakSpan } from "@/components/atoms";

type OakPupilJourneyListCounterProps = {
  count: number;
  countHeader: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const OakPupilJourneyListCounter = (
  props: OakPupilJourneyListCounterProps,
) => {
  const { count, countHeader, tag } = props;
  return (
    <OakHeading tag={tag} $font={["heading-6", "heading-6"]}>
      {countHeader}
      <OakSpan $font={"heading-light-6"}>{` (${count})`}</OakSpan>
    </OakHeading>
  );
};
