import React, { ReactNode } from "react";

import { OakBox } from "@/components/atoms";

export type OakModalBodyProps = {
  children: ReactNode;
};

/**
 * Intended to be used in the `children` slot of `OakModal`
 * it applies some padding and margin to ensure that the contents
 * line up with the modal's header and footer
 */
export const OakModalBody = (props: OakModalBodyProps) => {
  return (
    <OakBox $mv="space-between-m" $ph="inner-padding-m">
      {props.children}
    </OakBox>
  );
};
