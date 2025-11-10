import React, { ReactNode } from "react";

import { OakSpan } from "@/components/atoms/OakSpan";

export type OakKbdProps = {
  children: ReactNode;
};

/**
 * Represents textual user input from a keyboard, voice input, or any other text entry device.
 * */
export const OakKbd = ({ children }: OakKbdProps) => {
  return (
    <OakSpan
      $font="body-3-bold"
      as="kbd"
      $borderColor="border-decorative3-stronger"
      $background="bg-primary"
      $borderRadius="border-radius-m"
      $ba="border-solid-m"
      $ph="spacing-8"
      $pv="spacing-4"
      $whiteSpace="nowrap"
    >
      {children}
    </OakSpan>
  );
};
