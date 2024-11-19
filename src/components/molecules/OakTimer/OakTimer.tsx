import React from "react";
import styled from "styled-components";

import { OakBox, OakBoxProps, OakLabel } from "@/components/atoms";

export type OakTimerProps = {
  timeCode: string;
} & Omit<OakBoxProps, "onClick" | "label">;

const StyledTimeBox = styled(OakBox)`
  opacity: 0.9;
  padding-left: 2px;
  padding-right: 2px;
`;

export const OakTimer = (props: OakTimerProps) => {
  const { timeCode, ...oakBoxProps } = props;

  function formatTimeCode(timeCode: string): string {
    const [, minutes, seconds] = timeCode.split(":");
    return `${minutes}:${seconds}`;
  }

  const formattedTimeCode = formatTimeCode(timeCode);

  return (
    <StyledTimeBox
      $color={"text-inverted"}
      $borderRadius={"border-radius-xs"}
      $background={"bg-icon"}
      $font={["body-4"]}
      aria-label={`Media clip length: ${formattedTimeCode}`}
      {...oakBoxProps}
    >
      <OakLabel>{formattedTimeCode}</OakLabel>
    </StyledTimeBox>
  );
};
