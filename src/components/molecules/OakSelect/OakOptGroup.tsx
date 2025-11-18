import React, { ReactNode } from "react";

import { NativeOptGroup } from "./NativeOptGroup";
import { NativeLegend } from "./NativeLegend";

export type OakOptGroupProps = {
  label: string;
  children: ReactNode;
};
export function OakOptGroup({ label, children }: OakOptGroupProps) {
  return (
    <NativeOptGroup label={label} $ph={"spacing-16"} $pv={"spacing-8"}>
      <NativeLegend $ph={"spacing-16"} $pv={"spacing-8"}>
        {label}
      </NativeLegend>
      {children}
    </NativeOptGroup>
  );
}
