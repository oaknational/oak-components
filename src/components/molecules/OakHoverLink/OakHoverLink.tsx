import React, { ElementType, forwardRef } from "react";
import styled from "styled-components";

import { OakAllSpacingToken } from "@/styles";
import {
  InternalLink,
  InternalLinkProps,
} from "@/components/molecules/InternalLink";
import {
  PolymorphicPropsWithRef,
  PolymorphicRef,
} from "@/components/polymorphic";

export type OakHoverLinkProps = Pick<
  InternalLinkProps,
  "iconName" | "isTrailingIcon" | "isLoading"
> & {
  iconWidth?: OakAllSpacingToken;
  iconHeight?: OakAllSpacingToken;
};

type OakHoverLinkComponent = <C extends React.ElementType = "a">(
  props: {
    /**
     * This colours the link as disabled, but does not disable the link.
     * It should be used when the link is wrapped in an element which prevents cursor interaction, such as a card
     */
    displayDisabled?: boolean;
  } & PolymorphicPropsWithRef<C> &
    OakHoverLinkProps,
) => React.ReactNode;

/**
 * A link with an optional icon where underline is shown on hover.
 *
 * Defaulting to a `HTMLAnchorElement` this component is polymorphic and can be rendered as a button or any other element.
 * A linkDisabled prop is also available to disable the link even when it is not a button.
 */

const StyleInternalLink = styled(InternalLink)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  display: inline-flex;
  align-items: center;
`;

export const OakHoverLink: OakHoverLinkComponent =
  forwardRef<HTMLAnchorElement>(
    <C extends ElementType = "a">(
      props: PolymorphicPropsWithRef<C> & OakHoverLinkProps,
      ref: PolymorphicRef<C>,
    ) => {
      const color = props.displayDisabled ? "text-disabled" : "text-primary";

      return (
        <StyleInternalLink
          color={color}
          hoverColor={color}
          activeColor={color}
          disabledColor={color}
          visitedColor={color}
          {...props}
          ref={ref}
        />
      );
    },
  );
