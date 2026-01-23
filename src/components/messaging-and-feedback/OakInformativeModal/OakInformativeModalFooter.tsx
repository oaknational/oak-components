import React, { ReactNode, useContext } from "react";

import { OakInformativeModalBorderColor } from "./OakInformativeModal";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";

export type OakInformativeModalFooterProps = {
  children: ReactNode;
};

/**
 * Intended to be used in the `footer` slot of `OakInformativeModal`
 * it is ideal as a container for one or more buttons.
 * It switches from a horizontal to vertical layout on smaller screens
 */
export const OakInformativeModalFooter = (
  props: OakInformativeModalFooterProps,
) => {
  const $borderColor = useContext(OakInformativeModalBorderColor);
  return (
    <OakFlex
      {...props}
      $flexDirection={["column", "row"]}
      $bt="border-solid-s"
      $borderColor={$borderColor}
      $ph={["spacing-16", "spacing-16", "spacing-16"]}
      $pv={["spacing-12", "spacing-16", "spacing-16"]}
      $gap={["spacing-16", "spacing-24"]}
      $width="100%"
    />
  );
};
