import React from "react";

import { OakBulletList } from "@/components/molecules";
import { OakFlex, OakHeading } from "@/components/atoms";

export type OakPreviousLessonsHeadingProps = {
  numberOfLessons: number;
  yearDescription: string;
  subjectTitle: string;
  tierDescription?: string;
  examBoardDescription?: string;
};

/**
 * This component is the header for the pupil journey;
 *
 * the icon, title and list of items are passed as props and change change depending on which page it is called
 *
 *
 */
export const OakPreviousLessonsHeading = (
  props: OakPreviousLessonsHeadingProps,
) => {
  const {
    numberOfLessons,
    yearDescription,
    subjectTitle,
    tierDescription,
    examBoardDescription,
  } = props;
  const listItems = [yearDescription, subjectTitle];
  if (tierDescription) {
    listItems.push(tierDescription);
  }
  if (examBoardDescription) {
    listItems.push(examBoardDescription);
  }
  return (
    <OakFlex $flexDirection={"row"} $justifyContent={"space-between"}>
      <OakHeading tag="h1" $font={["heading-6", "heading-6"]}>
        {`Previously released lessons (${numberOfLessons})`}
      </OakHeading>
      <OakBulletList listItems={listItems} />
    </OakFlex>
  );
};
