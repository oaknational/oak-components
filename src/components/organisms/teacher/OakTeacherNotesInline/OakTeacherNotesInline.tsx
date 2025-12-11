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
    color: ${() => parseColor("icon-link-active")};  
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
      $pv="spacing-24"
      $pr="spacing-24"
      $ba={"border-solid-m"}
      $borderColor={"bg-decorative2-main"}
      $borderRadius={"border-radius-l"}
      data-testid={"oak-teacher-notes-inline"}
    >
      <LeftScrollBox
        $overflow={"scroll"}
        $pl="spacing-24"
        $height={"spacing-72"}
        dangerouslySetInnerHTML={{ __html: innerHtml }}
      />
    </OakBox>
  );
};
