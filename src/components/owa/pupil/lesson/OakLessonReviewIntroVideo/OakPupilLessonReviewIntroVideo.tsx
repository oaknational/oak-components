import React from "react";

import {
  ReviewItemContainer,
  ReviewItemTitleSection,
} from "@/components/owa/pupil/lesson/OakLessonReviewQuiz";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakRoundIcon } from "@/components/images-and-icons/OakRoundIcon";
import { OakUiRoleToken } from "@/styles";

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
    completedBackgroundColor: OakUiRoleToken,
    borderColor: OakUiRoleToken,
    iconBackgroundColor: OakUiRoleToken,
  ] =
    lessonSectionName === "intro"
      ? [
          "bg-decorative2-very-subdued",
          "border-decorative2",
          "bg-decorative2-main",
        ]
      : [
          "bg-decorative4-very-subdued",
          "border-decorative4",
          "bg-decorative4-main",
        ];

  const summaryForIncomplete =
    lessonSectionName === "intro" ? "Prepare" : "Learn";

  const lessonSectionNameToIconMap = new Map();

  lessonSectionNameToIconMap.set("intro", "intro");
  lessonSectionNameToIconMap.set("video", "video");

  return (
    <ReviewItemContainer
      $background={completed ? completedBackgroundColor : "bg-primary"}
      $borderColor={completed ? completedBackgroundColor : borderColor}
      {...rest}
    >
      <OakFlex $gap="spacing-24" $alignItems="center">
        <OakRoundIcon
          iconName={lessonSectionNameToIconMap.get(lessonSectionName)}
          $width="spacing-56"
          $height="spacing-56"
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
