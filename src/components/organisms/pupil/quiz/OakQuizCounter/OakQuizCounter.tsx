import React from "react";

import { OakFlex, OakSpan } from "@/components/atoms";
import { InternalStyledSvg } from "@/components/atoms/InternalStyledSvg";

export type OakQuizCounterProps = {
  counter: number;
  total: number;
};

/**
 *
 * The visual counter
 *
 */
const Pill = ({ isFilled }: { isFilled: boolean }) => {
  const fill = isFilled ? "black" : "border-decorative2";

  return (
    <InternalStyledSvg width={"26"} height={"7"} $fill={fill}>
      <path d="M25.9946 5.39444C25.6239 6.06393 25.2305 6.19303 24.8209 6.19244C22.1095 6.19103 19.4038 6.23513 16.6954 6.17886C13.8755 6.12554 11.0568 5.95577 8.23701 5.88647C6.08245 5.83383 3.92583 5.88168 1.77031 5.82906C1.37083 5.78688 0.974633 5.65207 0.587438 5.4266C0.239034 5.25091 0.0260169 4.4051 0.0657282 3.57544C0.0802365 3.27187 0.0835151 2.96627 0.0755221 2.6621C0.0593152 2.37422 0.0360468 2.08902 0.00583733 1.80794C0.211693 1.68853 0.420931 1.60668 0.631687 1.56313C2.21116 1.50998 3.79364 1.36545 5.37098 1.47899C7.02772 1.59957 8.68371 1.52614 10.3396 1.54859C14.1278 1.60068 17.9156 1.66799 21.7032 1.75053C22.6376 1.77378 23.5699 1.94774 24.5023 2.08061C24.7434 2.11977 24.982 2.21437 25.2147 2.36309C25.7285 2.68279 25.9726 3.48442 25.9866 4.74866C25.9835 4.9519 25.99 5.1389 25.9946 5.39444ZM1.01098 5.12095L1.01116 4.96572L0.732258 4.97309C0.732185 5.03473 0.732113 5.09636 0.732038 5.16028L1.01098 5.12095ZM0.98205 2.54457C0.854219 3.37199 0.854223 3.37199 1.06634 3.33442C1.04341 3.07024 1.01467 2.80621 0.986893 2.54444L0.98205 2.54457ZM7.78254 2.02475L7.80301 1.91236L7.31881 1.92515L7.31868 2.03701L7.78254 2.02475ZM7.94252 3.502L7.95696 3.57693L8.21359 3.57015L8.21367 3.49483L7.94252 3.502ZM0.558722 1.85039L0.542114 1.97638L0.905262 1.96678L0.90541 1.84123L0.558722 1.85039Z" />
    </InternalStyledSvg>
  );
};

/**
 * A counter representing progress through the questions in a quiz
 */
export const OakQuizCounter = (props: OakQuizCounterProps) => {
  const { counter, total } = props;
  const pills = Array.from({ length: props.total }, (_, i) => (
    <Pill key={i} isFilled={i < props.counter} />
  ));
  return (
    <OakFlex
      $flexDirection={"column"}
      $gap={"space-between-xs"}
      $alignItems={"end"}
    >
      <OakSpan $font={"heading-light-4"} $color={"text-subdued"}>
        <OakSpan $font={"heading-4"} $color={"text-primary"}>
          {counter}{" "}
        </OakSpan>
        of {total}
      </OakSpan>
      <OakFlex $gap={"space-between-ssx"} $flexWrap={"wrap"}>
        {pills}
      </OakFlex>
    </OakFlex>
  );
};
