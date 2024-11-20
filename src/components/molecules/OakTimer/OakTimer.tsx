import React from "react";
import styled from "styled-components";

import { OakBox, OakBoxProps, OakLabel } from "@/components/atoms";

export type OakTimerProps = {
  timeCode: number;
} & Omit<OakBoxProps, "onClick" | "label">;

const StyledTimeBox = styled(OakBox)`
  opacity: 0.9;
  padding-left: 2px;
  padding-right: 2px;
`;

export const formatTimeCode = (seconds: number): string => {
  const totalSeconds = Math.floor(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds,
  ).padStart(2, "0")}`;
};

export const OakTimer = (props: OakTimerProps) => {
  const { timeCode, ...oakBoxProps } = props;

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

/**
 *
 * OakTimer component takes time in seconds and converts it to a minutes and seconds format
 *
 */
