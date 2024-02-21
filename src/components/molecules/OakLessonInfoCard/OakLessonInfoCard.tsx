import React from "react";

import {
  OakFlex,
  OakHeading,
  OakHeadingTag,
  OakIcon,
  OakIconName,
} from "@/components/atoms";
import { OakHandDrawnCard } from "@/components/molecules/OakHandDrawnCard";

export type OakInfoCardProps = {
  children: React.ReactNode;
};

export type OakCardHeaderprops = {
  iconName: OakIconName;
  tag: OakHeadingTag;
  children: string;
};

export const OakCardHeader = (props: OakCardHeaderprops) => {
  const { iconName, tag, children } = props;

  return (
    <OakFlex $alignItems={"center"} $gap={"space-between-ssx"}>
      <OakIcon iconName={iconName} />
      <OakHeading $font={"heading-6"} tag={tag}>
        {children}
      </OakHeading>
    </OakFlex>
  );
};

export const OakLessonInfoCard = (props: OakInfoCardProps) => {
  const { children, ...rest } = props;

  return (
    <OakFlex
      $borderRadius={"border-radius-l"}
      $pa={"inner-padding-xl"}
      $flexDirection={"column"}
      $gap={"space-between-s"}
      $background={"white"}
      {...rest}
    >
      {children}
    </OakFlex>
  );
};

export const OakStaticMessageCard = (props: OakInfoCardProps) => {
  const { children, ...rest } = props;

  return (
    <OakHandDrawnCard
      {...rest}
      fill={[
        "bg-decorative2-very-subdued",
        "bg-decorative2-subdued",
        "bg-decorative2-subdued",
      ]}
    >
      <OakFlex
        $pa={"inner-padding-none"}
        $flexDirection={"column"}
        $gap={"space-between-s"}
      >
        {children}
      </OakFlex>
    </OakHandDrawnCard>
  );
};
