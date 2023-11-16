import React from "react";

import { OakFlex } from "../../base/OakFlex";
import { OakSpan } from "../../base/OakSpan";

import { OakIcon } from "@/components/ui";

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
