import React, { ReactNode } from "react";

import { OakBox } from "@/components/layout-and-structure/OakBox";

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
    <OakBox $position={"relative"} $minHeight={"100%"}>
      <OakBox
        $ph={["spacing-16", "spacing-64", "spacing-64"]}
        $pv={["spacing-16", "spacing-56", "spacing-56"]}
      >
        {props.children}
      </OakBox>
    </OakBox>
  );
};
