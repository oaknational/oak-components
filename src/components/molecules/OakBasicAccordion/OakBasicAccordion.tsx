import React, { ReactNode } from "react";

import { InternalChevronAccordion } from "../InternalChevronAccordion";

import { FlexStyleProps } from "@/styles/utils/flexStyle";
import { BorderStyleProps } from "@/styles/utils/borderStyle";

export type OakBasicAccordionProps = {
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
   * Optional subheading to display above the fold
   */
  subheading?: ReactNode;
  /**
   * The id of the accordion
   */
  id: string;
} & BorderStyleProps &
  FlexStyleProps;

export const OakBasicAccordion = ({
  header,
  children,
  id,
  initialOpen,
  subheading,
  ...styleProps
}: OakBasicAccordionProps) => {
  return (
    <InternalChevronAccordion
      header={header}
      id={id}
      initialOpen={initialOpen}
      subheading={subheading}
      {...styleProps}
    >
      {children}
    </InternalChevronAccordion>
  );
};
