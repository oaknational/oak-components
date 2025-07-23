import React, { ReactNode } from "react";

import { OakBox } from "@/components/atoms";

export type OakInformativeModalBodyProps = {
  children: ReactNode;
};

/**
 * Intended to be used in the `children` slot of `OakInformativeModal`
 * it applies some padding and margin to ensure that the contents
 * line up with the modal's header and footer
 */
export const OakInformativeModalBody = (
  props: OakInformativeModalBodyProps,
) => {
  return (
    <OakBox $pa="inner-padding-m" $pt="inner-padding-none" $minHeight={"100%"}>
      {props.children}
    </OakBox>
  );
};
