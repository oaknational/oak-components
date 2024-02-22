import React from "react";

import { OakFlex } from "@/components/atoms/OakFlex";
import { OakSpan } from "@/components/atoms/OakSpan";
import { OakIcon } from "@/components/atoms/OakIcon";

export type OakFieldErrorProps = {
  children?: React.ReactNode;
};

export const OakFieldError = (props: OakFieldErrorProps) => {
  const { children } = props;
  if (!children) {
    /**
     * Return early to avoid unwanted whitespace when there's no error
     */
    return null;
  }
  return (
    <OakFlex $alignItems={"center"} $flexDirection={"row"}>
      <OakFlex $alignSelf={"flex-start"} $mr={"space-between-s"}>
        <OakIcon iconName="content-guidance" $colorFilter={"red"} />
      </OakFlex>
      <OakSpan $color="red">{children}</OakSpan>
    </OakFlex>
  );
};
