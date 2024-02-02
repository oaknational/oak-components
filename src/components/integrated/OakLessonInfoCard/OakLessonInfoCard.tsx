import React from "react";

import {
  OakFlex,
  OakHeading,
  OakHeadingTag,
  OakIcon,
  OakIconName,
} from "@/components/base";

export type LessonInfoCardProps = {
  iconName: OakIconName;
  infoCardTitle: string;
  infoCardDescription: string;
  tag: OakHeadingTag;
};

export const OakLessonInfoCard = (props: LessonInfoCardProps) => {
  const { iconName, infoCardTitle, infoCardDescription, tag, ...rest } = props;

  return (
    <OakFlex
      $borderRadius={"border-radius-l"}
      $pa={"inner-padding-xl"}
      $background={"white"}
      $flexDirection={"column"}
      $gap={"space-between-s"}
      {...rest}
    >
      <OakFlex $alignItems={"center"} $gap={"space-between-ssx"}>
        <OakIcon iconName={iconName} />
        <OakHeading $font={"heading-6"} tag={tag}>
          {infoCardTitle}
        </OakHeading>
      </OakFlex>
      <OakFlex $font={"text-primary"}>{infoCardDescription}</OakFlex>
    </OakFlex>
  );
};
