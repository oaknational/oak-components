import React, { ReactNode } from "react";

import { OakFlex } from "@/components/atoms";

export type OakModalFooterProps = {
  children: ReactNode;
};

/**
 * Intended to be used in the `footer` slot of `OakModal`
 * it is ideal as a container for one or more buttons.
 * It switches from a horizontal to vertical layout on smaller screens
 */
export const OakModalFooter = (props: OakModalFooterProps) => {
  return (
    <OakFlex
      {...props}
      $flexDirection={["column", "row"]}
      $bt="border-solid-s"
      $borderColor="border-neutral-lighter"
      $pa="inner-padding-xl"
      $gap={["space-between-s", "space-between-m"]}
      $width="100%"
    />
  );
};
