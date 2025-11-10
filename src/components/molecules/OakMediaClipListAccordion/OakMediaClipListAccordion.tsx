import React, { ReactNode } from "react";
import styled from "styled-components";

import { InternalChevronAccordion } from "@/components/molecules/InternalChevronAccordion";
import { OakFlex } from "@/components/atoms";
import { SizeStyleProps } from "@/styles/utils/sizeStyle";
import { FlexStyleProps } from "@/styles/utils/flexStyle";
import { SpacingStyleProps } from "@/styles/utils/spacingStyle";

export type OakSolidBorderAccordionProps = {
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

const AccordionWrapper = styled(OakFlex)`
  position: relative;
  border-width: 2px;
`;

// @todo only show shadow when there is are more items to scroll and remove once scrolled to the bottom
// const BottomBoxShadow = styled(OakBox)`
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   height: 50px;
//   z-index: 100;
//   -webkit-box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);
//   -moz-box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);
//   box-shadow: inset 0px -55px 30px -30px rgba(255, 255, 255, 1);
// `;

/**
 * An accordion component that can be used to show/hide content
 */
export const OakMediaClipListAccordion = ({
  header,
  children,
  id,
  initialOpen,
  ...styleProps
}: OakSolidBorderAccordionProps) => {
  return (
    <AccordionWrapper $position={"relative"} $flexDirection={"column"}>
      <InternalChevronAccordion
        header={header}
        id={id}
        initialOpen={initialOpen}
        $pv={"spacing-0"}
        $borderStyle={"solid"}
        $borderColor={"border-primary"}
        $ba={"border-solid-m"}
        $bl={["border-solid-m", "border-solid-m", "border-solid-none"]}
        {...styleProps}
      >
        {children}
      </InternalChevronAccordion>
    </AccordionWrapper>
  );
};
