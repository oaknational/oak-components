import React, { ReactElement } from "react";
import styled from "styled-components";

import {
  InternalCard,
  InternalCardProps,
} from "@/components/atoms/InternalCard";
import { OakBox } from "@/components/atoms/OakBox";

export type InternalCardWithBackgroundElementProps = InternalCardProps & {
  backgroundElement: ReactElement;
};

/**
 * The `backgroundElement` should be sized to fit the entire card
 */
const StyledBackgroundBox = styled(OakBox)`
  & > * {
    width: 100%;
    height: 100%;
  }
`;

/**
 * A flexed card with a presentational background element positioned behind the card contents.
 */
export const InternalCardWithBackgroundElement = ({
  backgroundElement,
  children,
  ...props
}: InternalCardWithBackgroundElementProps) => {
  return (
    <InternalCard {...props}>
      <StyledBackgroundBox $position="absolute" $inset="spacing-0" aria-hidden>
        {backgroundElement}
      </StyledBackgroundBox>
      <OakBox $position="relative">{children}</OakBox>
    </InternalCard>
  );
};
