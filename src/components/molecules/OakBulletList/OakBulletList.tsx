import React from "react";

import { OakSpan, OakSpanProps } from "@/components/atoms";

export type OakBulletListProps = {
  listItems: string[];
} & OakSpanProps;

export const OakBulletList = (props: OakBulletListProps) => {
  const { listItems, ...rest } = props;
  return (
    <OakSpan {...rest}>
      {listItems.map((item, i) => {
        return (
          <OakSpan key={i}>
            {i !== 0 && <OakSpan> • </OakSpan>}
            <OakSpan>{item}</OakSpan>
          </OakSpan>
        );
      })}
    </OakSpan>
  );
};
