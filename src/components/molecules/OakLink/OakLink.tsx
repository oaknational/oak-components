import React, { ElementType, forwardRef } from "react";

import {
  InternalLink,
  InternalLinkProps,
} from "@/components/molecules/InternalLink";
import {
  PolymorphicPropsWithRef,
  PolymorphicRef,
} from "@/components/polymorphic";

export type OakLinkProps = Pick<
  InternalLinkProps,
  "iconName" | "isTrailingIcon" | "isLoading"
>;

type OakLinkComponent = <C extends React.ElementType = "a">(
  props: PolymorphicPropsWithRef<C> & OakLinkProps,
) => React.ReactNode;

/**
 * A blue link with an optional icon and loading state.
 *
 * Defaulting to a `HTMLAnchorElement` this component is polymorphic and can be rendered as a button or any other element.
 */
export const OakLink: OakLinkComponent = forwardRef(
  <C extends ElementType = "a">(
    props: PolymorphicPropsWithRef<C> & OakLinkProps,
    ref: PolymorphicRef<C>,
  ) => {
    return (
      <InternalLink
        color="text-link-active"
        hoverColor="text-link-hover"
        activeColor="text-link-pressed"
        disabledColor="text-disabled"
        visitedColor="text-link-visited"
        {...props}
        ref={ref}
      />
    );
  },
);
