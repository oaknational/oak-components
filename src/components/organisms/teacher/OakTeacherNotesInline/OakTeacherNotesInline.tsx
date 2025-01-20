import React from "react";
import styled from "styled-components";

import { OakBox } from "@/components/atoms";
import { parseColor } from "@/styles/helpers/parseColor";

export type OakTeacherNotesInlineProps = {
  sanitizedHtml?: string | TrustedHTML;
};

const LeftScrollBox = styled(OakBox)`
  direction: rtl;

  & > * {
    direction: ltr;
  }

  scrollbar-color: ${() => parseColor("bg-decorative2-main")} #fff;

  a{
    color: ${() => parseColor("navy")};  
    text-decoration: underline;
  }

  a::active {
    color: ${() => parseColor("text-link-active")};
  }

  a::hover {
    color: ${() => parseColor("text-link-hover")};
  }

  a::visited {
    color: ${() => parseColor("text-link-visited")};
  }

  a::pressed {
    color: ${() => parseColor("text-link-pressed")};
  }

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
