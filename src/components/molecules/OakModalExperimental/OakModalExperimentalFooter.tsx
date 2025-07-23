import React, { ReactNode, useContext } from "react";

import { OakModalExperimentalBorderColor } from "./OakModalExperimental";

import { OakFlex } from "@/components/atoms";

export type OakModalExperimentalFooterProps = {
  children: ReactNode;
};

/**
 * Intended to be used in the `footer` slot of `OakModalExperimental`
 * it is ideal as a container for one or more buttons.
 * It switches from a horizontal to vertical layout on smaller screens
 */
export const OakModalExperimentalFooter = (
  props: OakModalExperimentalFooterProps,
) => {
  const $borderColor = useContext(OakModalExperimentalBorderColor);
  return (
    <OakFlex
      {...props}
      $flexDirection={["column", "row"]}
      $bt="border-solid-s"
      $borderColor={$borderColor}
      $pa="inner-padding-xl"
      $gap={["space-between-s", "space-between-m"]}
      $width="100%"
    />
  );
};
