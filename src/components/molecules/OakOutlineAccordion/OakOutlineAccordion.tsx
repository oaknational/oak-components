import React, { ReactNode } from "react";
import styled from "styled-components";

import { OakHandDrawnHR } from "@/components/molecules/OakHandDrawnHR";
import { InternalChevronAccordion } from "@/components/molecules/InternalChevronAccordion";
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
    <OakFlex $position={"relative"} $flexDirection={"column"}>
      <StyledHandDrawnHR $width={"100%"} />
      <InternalChevronAccordion
        header={header}
        id={id}
        initialOpen={initialOpen}
        {...styleProps}
      >
        {children}
      </InternalChevronAccordion>
      <StyledHandDrawnHR $position={"absolute"} $width={"100%"} />
    </OakFlex>
  );
};
