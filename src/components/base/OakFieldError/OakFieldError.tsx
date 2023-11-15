import React from "react";
import { OakFlex } from "../OakFlex";
import { OakIcon } from "@/components/ui";
import { OakSpan } from "../OakSpan";

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
        <OakIcon iconName="content-guidance" $filter={"red"} />
      </OakFlex>
      <OakSpan $color="red">{children}</OakSpan>
    </OakFlex>
  );
};
