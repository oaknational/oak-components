import React from "react";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakSpan } from "@/components/typography/OakSpan";
import { OakIcon } from "@/components/images-and-icons/OakIcon";

export type OakFieldErrorProps = {
  children?: React.ReactNode;
};

/**
 *
 * OakFieldError renders a error message when passed children.
 *
 */
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
      <OakFlex $alignSelf={"flex-start"} $mr={"spacing-16"}>
        <OakIcon alt="Error" iconName="content-guidance" $colorFilter={"red"} />
      </OakFlex>
      <OakSpan $color="text-error">{children}</OakSpan>
    </OakFlex>
  );
};
