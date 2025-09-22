import React, { ReactNode, useContext } from "react";

import { OakInformativeModalBorderColor } from "./OakInformativeModal";

import { OakFlex } from "@/components/atoms";

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
      $ph={["inner-padding-m", "inner-padding-m", "inner-padding-m"]}
      $pv={["inner-padding-s", "inner-padding-m", "inner-padding-m"]}
      $gap={["space-between-s", "space-between-m"]}
      $width="100%"
    />
  );
};
