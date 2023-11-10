import React, { FC } from "react";
import styled from "styled-components";

import {
  ResponsiveValues,
  responsiveStyle,
} from "@/styles/utils/responsiveStyle";

export const oakAllApectRatios = ["7:8", "2:3", "1:1", "3:2", "16:9"] as const;
export type OakAllApectRatios = (typeof oakAllApectRatios)[number];

const oakAllApecPercentages = [114, 150, 100, 66.66, 56.25] as const;
export type OakAllApecPercentages = (typeof oakAllApecPercentages)[number];

const oakAspectRatioPercentage: Record<
  OakAllApectRatios,
  OakAllApecPercentages
> = {
  "16:9": 56.25,
  "3:2": 66.66,
  "1:1": 100,
  "2:3": 150,
  "7:8": 114,
};

const parseRatioToPercentage = (ratio?: OakAllApectRatios | null) =>
  ratio ? `${oakAspectRatioPercentage[ratio]}%` : undefined;

export type OakAspectRatioValues = ResponsiveValues<OakAllApectRatios>;
type OakAspectRatioOuterProps = {
  ratio: OakAspectRatioValues;
};

const OakAspectRatioOuter = styled.div<OakAspectRatioOuterProps>`
  width: 100%;
  height: 0;
  position: relative;
  ${responsiveStyle(
    "padding-top",
    (props) => props.ratio,
    parseRatioToPercentage,
  )}
`;
const OakAspectRatioInner = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
`;

type OakAspectRatioProps = {
  children?: React.ReactNode;
} & OakAspectRatioOuterProps;
/**
 *
 * AspectRatio provides a container of fixed aspect ratio
 *
 * ## Usage
 * Use this component when you want to ensure a box has a certain aspect ratio.
 * Wrap with component with <code>position: relative</code> and a width or min-width
 * The 'ratio' prop is responsive, so you can pass an array e.g. <code>["3:2", "16:9"]</code>
 * which will result in different aspect ratios on different screen widths.
 * For an example usage, see the <code>CardImage</code> component.
 */
export const OakAspectRatio: FC<OakAspectRatioProps> = (props) => {
  const { children, ratio, ...htmlAttrs } = props;
  return (
    <OakAspectRatioOuter ratio={ratio} {...htmlAttrs}>
      <OakAspectRatioInner>{children}</OakAspectRatioInner>
    </OakAspectRatioOuter>
  );
};
