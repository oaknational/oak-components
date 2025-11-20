import React, { ReactNode } from "react";

import { NativeOption } from "./NativeOption";

import { OakDropShadowToken } from "@/styles";

export type OakOptionProps = {
  children: ReactNode;
  disabled?: boolean;
  selected?: boolean;
  value?: string;
  asDefault?: boolean;
  $focusRingDropShadows?: OakDropShadowToken[];
};
export function OakOption({
  selected,
  disabled,
  value,
  children,
  asDefault,
  $focusRingDropShadows = [
    "drop-shadow-centered-lemon",
    "drop-shadow-centered-grey",
  ],
}: Readonly<OakOptionProps>) {
  return (
    <NativeOption
      $asDefault={asDefault}
      value={value}
      disabled={disabled}
      selected={selected}
      $ph={"spacing-16"}
      $pv={"spacing-8"}
      $focusRingDropShadows={$focusRingDropShadows}
    >
      {children}
    </NativeOption>
  );
}
