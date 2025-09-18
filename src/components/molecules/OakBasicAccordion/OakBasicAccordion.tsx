import React, { ReactNode } from "react";

import { InternalChevronAccordion } from "@/components/molecules/InternalChevronAccordion";
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
  /**
   * A slot before header outside of the button's interact area
   */
  beforeButtonSlot?: ReactNode;
  /**
   * A slot after the header outside of the button's interact area
   */
  afterButtonSlot?: ReactNode;
} & BorderStyleProps &
  FlexStyleProps;

export const OakBasicAccordion = ({
  header,
  children,
  id,
  initialOpen,
  subheading,
  beforeButtonSlot,
  afterButtonSlot,
  ...styleProps
}: OakBasicAccordionProps) => {
  return (
    <InternalChevronAccordion
      header={header}
      id={id}
      initialOpen={initialOpen}
      subheading={subheading}
      beforeButtonSlot={beforeButtonSlot}
      afterButtonSlot={afterButtonSlot}
      {...styleProps}
    >
      {children}
    </InternalChevronAccordion>
  );
};
