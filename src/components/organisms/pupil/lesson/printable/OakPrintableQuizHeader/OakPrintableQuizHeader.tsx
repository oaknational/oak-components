import React from "react";
import { OakBox, OakFlex, OakHeading, OakSpan } from "@/components/atoms";
import { FlexStyleProps } from "@/styles/utils/flexStyle";

export type OakPrintableQuizHeaderProps = {
  title: string;
  grade: number;
  numQuestions: number;
  attempts: number;
} & FlexStyleProps;

/**
 * This component is the header for the pupil journey;
 *
 * the icon, title and list of items are passed as props and change change depending on which page it is called
 *
 *
 */
export const OakPrintableQuizHeader = ({
  title,
  grade,
  numQuestions,
  attempts,
}: OakPrintableQuizHeaderProps) => {
  return (
    <OakFlex
      $flexDirection={"row"}
      $gap={"space-between-s"}
      $justifyContent={"space-between"}
      $alignItems={"center"}
    >
      <OakHeading tag="h1" $font={"heading-6"}>
        {title}
      </OakHeading>
      <OakFlex
        $flexDirection={"row"}
        $gap={"space-between-m"}
        $background={"bg-neutral"}
        $pv={"inner-padding-ssx"}
        $ph={"inner-padding-s"}
        $borderRadius={"border-radius-m"}
      >
        <OakBox>
          <OakSpan $font="heading-4">{grade}</OakSpan>
          <OakSpan $font="heading-6">&nbsp;/&nbsp;{numQuestions}</OakSpan>
        </OakBox>
        <OakFlex
          $flexDirection={"column"}
          $gap={"space-between-xs"}
          $justifyContent={"center"}
        >
          <OakSpan $font="heading-6">Attempts: {attempts}</OakSpan>
        </OakFlex>
      </OakFlex>
    </OakFlex>
  );
};
