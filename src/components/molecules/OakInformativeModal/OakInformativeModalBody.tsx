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
    <OakBox $position={"relative"} $minHeight={"100%"}>
      <OakBox
        $ph={["inner-padding-m", "inner-padding-xl6", "inner-padding-xl6"]}
        $pv={["inner-padding-m", "inner-padding-xl5", "inner-padding-xl5"]}
      >
        {props.children}
      </OakBox>
    </OakBox>
  );
};
