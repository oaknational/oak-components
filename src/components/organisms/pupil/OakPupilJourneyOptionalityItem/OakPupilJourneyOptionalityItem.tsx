import React from "react";

import { OakBox, OakFlex, OakGrid } from "@/components/atoms";

export type OakPupilJourneyOptionalityItemProps = {
  children: React.ReactNode;
  index: number;
  title: string;
  unavailable?: boolean;
  disabled?: boolean;
};

/**
 *
 * OakPupilJourneyOptionalityItem is a styled container to be used for units with optionality, OakPupilJourneyOptionalityButton should be used as children
 *
 */
export const OakPupilJourneyOptionalityItem = (
  props: OakPupilJourneyOptionalityItemProps,
) => {
  const { children, index, title, unavailable, disabled, ...rest } = props;
  const disabledOrUnavailable = props.disabled || props.unavailable;
  return (
    <OakFlex
      $borderRadius={"border-radius-m"}
      $pa={"inner-padding-xl"}
      $flexDirection={"column"}
      $gap={"space-between-m"}
      $background={unavailable ? "bg-neutral" : "bg-primary"}
      {...rest}
    >
      <OakFlex $alignItems={"center"} $gap={"space-between-m2"}>
        <OakFlex>
          <OakBox
            $font={["heading-5", "heading-4"]}
            $color={props.unavailable ? "text-subdued" : "text-primary"}
            $textDecoration={"none"}
          >
            {props.index}
          </OakBox>
        </OakFlex>
        <OakBox
          $font={["heading-6", "heading-5"]}
          $color={disabledOrUnavailable ? "text-subdued" : "text-primary"}
        >
          {props.title}
        </OakBox>
      </OakFlex>
      <OakGrid
        $gridTemplateColumns={["repeat(1,1fr)", "repeat(2, 1fr)"]}
        $cg={"space-between-xs"}
        $rg={"space-between-xs"}
      >
        {children}
      </OakGrid>
    </OakFlex>
  );
};
