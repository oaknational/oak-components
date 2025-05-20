import React from "react";
import { OakBox, OakFlex, OakIcon, OakSpan } from "@/components/atoms";
import { InternalButton } from "@/components/atoms/InternalButton";

export type OakSaveCountProps = {
  count: number;
  href: string;
};

export const OakSaveCount = ({ count, href }: OakSaveCountProps) => {
  return (
    <InternalButton as="a" href={href}>
      <OakFlex
        $width="all-spacing-10"
        $height="all-spacing-7"
        $background="mint"
        $alignItems="center"
        $pa="inner-padding-ssx"
        $borderRadius="border-radius-s"
      >
        <OakIcon
          iconName={count === 0 ? "bookmark-outlined" : "bookmark-filled"}
          $width="all-spacing-6"
        />
        <OakBox $width="all-spacing-6" $textAlign="center">
          <OakSpan $font="heading-light-7">
            {count > 99 ? "99+" : count}
          </OakSpan>
        </OakBox>
      </OakFlex>
    </InternalButton>
  );
};
