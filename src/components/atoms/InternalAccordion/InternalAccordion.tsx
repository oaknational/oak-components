import React, { ReactNode } from "react";
import styled from "styled-components";

import useAccordionContext from "./useAccordionContext";

import { OakBox, OakBoxProps, OakFlex, OakFlexProps } from "@/components/atoms";

export type InternalAccordionProps = {
  /**
   * The content of the accordion
   */
  children: ReactNode;
  /**
   * The id of the accordion
   */
  id: string;
};

const StyledButton = styled(OakFlex)`
  font: inherit;
  color: inherit;
  border: none;
  background: none;
  appearance: none;
  outline: none;
  padding: 0;
`;

/**
 *
 *  An accordion component that can be used to show/hide content
 *
 *
 * Must call this coponent inside the AccordionProvider where you can also access the useAccordionContext hook
 *
 * Must use the InternalAccordionButton and InternalAccordionContent components as direct children of InternalAccordion
 *
 *
 */

export const InternalAccordion = styled(OakBox)``;

const UnstyledAccordionContent = ({
  children,
  id,
  ...styleProps
}: InternalAccordionProps & OakBoxProps) => {
  const { isOpen } = useAccordionContext();

  return (
    <OakBox hidden={!isOpen} aria-labelledby={id} role="region" {...styleProps}>
      {children}
    </OakBox>
  );
};

/**
 *
 *  An accordion component that can be used to show/hide content
 *
 * InternalAccordionContent is a child component of InternalAccordion and sibling of InternalAccordionButton
 *
 * The children of InternalAccordionContent will be hidden or shown based on the state of the InternalAccordionButton
 *
 */

export const InternalAccordionContent = styled(UnstyledAccordionContent)``;

const UnstyledAccordionButton = (
  props: InternalAccordionProps & OakFlexProps & OakBoxProps,
) => {
  const { children, id, ...rest } = props;
  const { isOpen, setOpen } = useAccordionContext();

  return (
    <StyledButton
      as="button"
      type="button"
      onClick={() => setOpen(!isOpen)}
      $flexGrow={1}
      aria-expanded={isOpen}
      id={id}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

/**
 *
 *  An accordion component that can be used to show/hide content
 *
 * InternalAccordionButton is a child component of InternalAccordion and sibling of InternalAccordionContent
 *
 * The children of InternalAccordianButton will be used as the button to toggle the visibility of the InternalAccordionContent
 *
 */

export const InternalAccordionButton = styled(UnstyledAccordionButton)``;
