import React, { ReactNode } from "react";

import { OakSpan } from "../OakSpan";

export type OakKbdProps = {
  children: ReactNode;
};

/**
 * Represents textual user input from a keyboard, voice input, or any other text entry device.
 * */
export const OakKbd = ({ children }: OakKbdProps) => {
  return (
    <OakSpan
      $font="body-3"
      as="kbd"
      $borderColor="border-neutral"
      $background="bg-neutral-stronger"
      $borderRadius="border-radius-m"
      $ba="border-solid-m"
      $ph="inner-padding-xs"
      $pv="inner-padding-ssx"
    >
      {children}
    </OakSpan>
  );
};
