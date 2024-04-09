import React, { ElementType, forwardRef } from "react";

import { InternalLink, InternalLinkProps } from "../InternalLink";

import {
  PolymorphicPropsWithRef,
  PolymorphicRef,
} from "@/components/polymorphic";

export type OakSecondaryLinkProps = Pick<
  InternalLinkProps,
  "iconName" | "isTrailingIcon" | "isLoading"
>;

type OakLinkComponent = <C extends React.ElementType = "a">(
  props: PolymorphicPropsWithRef<C> & OakSecondaryLinkProps,
) => React.ReactNode;

/**
 * A black link with an optional icon and loading state.
 *
 * Defaulting to a `HTMLAnchorElement` this component is polymorphic and can be rendered as a button or any other element.
 */
export const OakSecondaryLink: OakLinkComponent = forwardRef(
  <C extends ElementType = "a">(
    props: PolymorphicPropsWithRef<C> & OakSecondaryLinkProps,
    ref: PolymorphicRef<C>,
  ) => {
    return (
      <InternalLink
        color="text-primary"
        hoverColor="text-primary"
        activeColor="text-primary"
        disabledColor="text-disabled"
        visitedColor="text-subdued"
        {...props}
        ref={ref}
      />
    );
  },
);
