import React from "react";

import {
  ReviewItemContainer,
  ReviewItemTitleSection,
} from "@/components/organisms/pupil/lesson/OakLessonReviewQuiz";
import { OakFlex } from "@/components/atoms";
import { OakRoundIcon } from "@/components/molecules";
import { OakCombinedColorToken } from "@/styles";

type LessonSectionName = "intro" | "video";
type BaseOakLessonReviewItemProps = {
  completed: boolean;
};

type VideoSectionProps = {
  lessonSectionName: "video";
};
type IntroSectionProps = {
  lessonSectionName: "intro";
};

export type OakLessonReviewIntroVideoProps = BaseOakLessonReviewItemProps & {
  lessonSectionName: LessonSectionName;
} & (IntroSectionProps | VideoSectionProps);

export const OakLessonReviewIntroVideo = (
  props: OakLessonReviewIntroVideoProps,
) => {
  const { completed, lessonSectionName, ...rest } = props;
  const [completedBackgroundColor, borderColor, iconBackgroundColor]: [
    completedBackgroundColor: OakCombinedColorToken,
    borderColor: OakCombinedColorToken,
    iconBackgroundColor: OakCombinedColorToken,
  ] =
    lessonSectionName === "intro"
      ? ["bg-decorative2-very-subdued", "border-decorative2", "aqua"]
      : ["bg-decorative4-very-subdued", "border-decorative4", "pink"];

  const summaryForIncomplete =
    lessonSectionName === "intro" ? "Prepare" : "Learn";

  const lessonSectionNameToIconMap = new Map();

  lessonSectionNameToIconMap.set("intro", "intro");
  lessonSectionNameToIconMap.set("video", "video");

  return (
    <ReviewItemContainer
      $background={completed ? completedBackgroundColor : "white"}
      $borderColor={completed ? completedBackgroundColor : borderColor}
      {...rest}
    >
      <OakFlex $gap="space-between-m" $alignItems="center">
        <OakRoundIcon
          iconName={lessonSectionNameToIconMap.get(lessonSectionName)}
          $width="all-spacing-10"
          $height="all-spacing-10"
          $background={iconBackgroundColor}
        />
        <ReviewItemTitleSection
          sectionHeader={
            lessonSectionName === "intro" ? "Introduction" : "Lesson video"
          }
          completed={completed}
          summaryForIncomplete={summaryForIncomplete}
        />
      </OakFlex>
    </ReviewItemContainer>
  );
};
