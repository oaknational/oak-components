import React from "react";
import styled from "styled-components";

import useAccordionContext from "./useAccordionContext";

import { OakBox, OakBoxProps, OakFlex, OakFlexProps } from "@/components/atoms";

const FlexWithReset = styled(OakFlex)`
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
 * Content which will appear and disappear
 *
 * Must appear as a sibling of InternalAccordionButton
 *
 */

export const InternalAccordionContent = ({
  children,
  onScroll,
  ref,
  ...rest
}: OakBoxProps & {
  "aria-labelledby": string;
  onScroll?: () => void;
  ref?: React.MutableRefObject<null | HTMLDivElement>;
}) => {
  const { isOpen } = useAccordionContext();

  return (
    <OakBox
      hidden={!isOpen}
      role="region"
      {...rest}
      onScroll={onScroll}
      ref={ref}
    >
      {children}
    </OakBox>
  );
};

/**
 *
 * User interface to toggle visibility of InternalAccordionContent
 *
 * Must appear as a sibling of InternalAccordionContent
 *
 */

const AccordionButton = (props: { id: string } & OakFlexProps) => {
  const { children, id, ...rest } = props;
  const { isOpen, setOpen } = useAccordionContext();

  return (
    <FlexWithReset
      as="button"
      type="button"
      onClick={() => setOpen(!isOpen)}
      $flexGrow={1}
      aria-expanded={isOpen}
      id={id}
      {...rest}
    >
      {children}
    </FlexWithReset>
  );
};

export const InternalAccordionButton = styled(AccordionButton)``;
