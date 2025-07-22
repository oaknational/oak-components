import React, { ElementType, forwardRef } from "react";

import { OakAllSpacingToken, OakCombinedColorToken } from "@/styles";
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
> & {
  iconWidth?: OakAllSpacingToken;
  iconHeight?: OakAllSpacingToken;
  /**
   * Overrides the default link color and all its states (hover, active, disabled, visited)
   * with the provided OakCombinedColorToken.
   */
  colorOverride?: OakCombinedColorToken;
};

type OakLinkComponent = <C extends React.ElementType = "a">(
  props: PolymorphicPropsWithRef<C> & OakLinkProps,
) => React.ReactNode;

/**
 * A blue link with an optional icon and loading state.
 *
 * Defaulting to a `HTMLAnchorElement` this component is polymorphic and can be rendered as a button or any other element.
 *
 * @prop colorOverride - Overrides the default link color and its states (hover, active, disabled, visited) with the provided OakColorToken.
 */
export const OakLink: OakLinkComponent = forwardRef(
  <C extends ElementType = "a">(
    props: PolymorphicPropsWithRef<C> & OakLinkProps,
    ref: PolymorphicRef<C>,
  ) => {
    return (
      <InternalLink
        color={props.colorOverride ? props.colorOverride : "text-link-active"}
        hoverColor={
          props.colorOverride ? props.colorOverride : "text-link-hover"
        }
        activeColor={
          props.colorOverride ? props.colorOverride : "text-link-pressed"
        }
        disabledColor={
          props.colorOverride ? props.colorOverride : "text-disabled"
        }
        visitedColor={
          props.colorOverride ? props.colorOverride : "text-link-visited"
        }
        {...props}
        ref={ref}
      />
    );
  },
);
