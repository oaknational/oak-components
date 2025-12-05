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
    <OakFlex $alignItems={"center"} $gap={"spacing-8"}>
      <OakIcon iconName={iconName} />
      <OakHeading $font={"heading-6"} tag={tag}>
        {children}
      </OakHeading>
    </OakFlex>
  );
};

/**
 *
 * OakLessonInfoCards are created using the custom card either oakLessoninfoCard or oakStaticMessageCard and the content is added as children. And use the oakCardHeader to create the header of the card.
 *
 */
export const OakLessonInfoCard = (props: OakInfoCardProps) => {
  const { children, ...rest } = props;

  return (
    <OakFlex
      $borderRadius={"border-radius-l"}
      $pa={"spacing-24"}
      $flexDirection={"column"}
      $gap={"spacing-16"}
      $background={"bg-primary"}
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
      <OakFlex $pa={"spacing-0"} $flexDirection={"column"} $gap={"spacing-16"}>
        {children}
      </OakFlex>
    </OakHandDrawnCard>
  );
};
