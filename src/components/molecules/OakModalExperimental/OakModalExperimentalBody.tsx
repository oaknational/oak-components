import React, { ReactNode } from "react";

import { OakBox } from "@/components/atoms";

export type OakModalExperimentalBodyProps = {
  children: ReactNode;
};

/**
 * Intended to be used in the `children` slot of `OakModalExperimental`
 * it applies some padding and margin to ensure that the contents
 * line up with the modal's header and footer
 */
export const OakModalExperimentalBody = (
  props: OakModalExperimentalBodyProps,
) => {
  return (
    <OakBox $pa="inner-padding-m" $pb="inner-padding-none" $minHeight={"100%"}>
      {props.children}
    </OakBox>
  );
};
