import React from "react";
import styled from "styled-components";

import { OakBox } from "@/components/atoms";

export type OakTeacherNotesInlineProps = {
  sanitizedHtml?: string | TrustedHTML;
};

const LeftScrollBox = styled(OakBox)`
  direction: rtl;

  & > * {
    direction: ltr;
  }
`;

export const OakTeacherNotesInline = ({
  sanitizedHtml,
}: OakTeacherNotesInlineProps) => {
  const innerHtml = sanitizedHtml ?? "";
  return (
    <OakBox
      $pv="inner-padding-xl"
      $pr="inner-padding-xl"
      $ba={"border-solid-m"}
      $borderColor={"bg-decorative2-main"}
      $borderRadius={"border-radius-l"}
      data-testid={"oak-teacher-notes-inline"}
    >
      <LeftScrollBox
        $overflow={"scroll"}
        $pl="inner-padding-xl"
        $height={"all-spacing-12"}
        dangerouslySetInnerHTML={{ __html: innerHtml }}
      />
    </OakBox>
  );
};
