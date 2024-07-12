import React, { ReactNode } from "react";
import styled from "styled-components";

import { OakHandDrawnHR } from "../OakHandDrawnHR";
import { InternalShadowAccordion } from "../InternalShadowAccordion";

import { OakFlex } from "@/components/atoms";
import { PositionStyleProps } from "@/styles/utils/positionStyle";
import { SizeStyleProps } from "@/styles/utils/sizeStyle";
import { FlexStyleProps } from "@/styles/utils/flexStyle";
import { SpacingStyleProps } from "@/styles/utils/spacingStyle";

export type OakOutlineAccordionProps = {
  /**
   * The header of the accordion
   */
  header: ReactNode;
  /**
   * Whether the accordion should be open initially
   */
  initialOpen?: boolean;
  /**
   * The content of the accordion
   */
  children: ReactNode;
  /**
   * The id of the accordion
   */
  id: string;
} & FlexStyleProps &
  SizeStyleProps &
  SpacingStyleProps;

const StyledHandDrawnHR = styled(OakHandDrawnHR)<
  PositionStyleProps & SizeStyleProps
>`
  height: 0.125rem;
  position: ${(props) => props.$position};
  width: ${(props) => props.$width};
  bottom: 0.125rem;
`;

/**
 * An accordion component that can be used to show/hide content
 */
export const OakOutlineAccordion = ({
  header,
  children,
  id,
  initialOpen = false,
  ...styleProps
}: OakOutlineAccordionProps) => {
  return (
    <OakFlex $position={"relative"} $display={"flex"} $flexDirection={"column"}>
      <StyledHandDrawnHR />
      <InternalShadowAccordion
        header={header}
        id={id}
        initialOpen={initialOpen}
        {...styleProps}
      >
        {children}
      </InternalShadowAccordion>
      <StyledHandDrawnHR $position={"absolute"} $width={"100%"} />
    </OakFlex>
  );
};
