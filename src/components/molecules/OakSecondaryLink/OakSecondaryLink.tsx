import React, { ElementType, forwardRef } from "react";
import styled from "styled-components";

import {
  InternalLink,
  InternalLinkProps,
} from "@/components/molecules/InternalLink";
import {
  PolymorphicPropsWithRef,
  PolymorphicRef,
} from "@/components/polymorphic";

export type OakSecondaryLinkProps = {
  /*
   * This colours the link as disabled, but does not disable the link.
   * It should be used when the link is wrapped in an element which prevents cursor interaction, such as a card
   */
  displayDisabled?: boolean;
} & Pick<InternalLinkProps, "iconName" | "isTrailingIcon" | "isLoading">;

type OakLinkComponent = <C extends React.ElementType = "a">(
  props: PolymorphicPropsWithRef<C> & OakSecondaryLinkProps,
) => React.ReactNode;

// we do this to avoid type errors when spreading props
const StyledInternalLink = styled(InternalLink)``;

/**
 * A black link with an optional icon and loading state.
 *
 * Defaulting to a `HTMLAnchorElement` this component is polymorphic and can be rendered as a button or any other element.
 *
 */
export const OakSecondaryLink: OakLinkComponent = forwardRef(
  <C extends ElementType = "a">(
    props: PolymorphicPropsWithRef<C> & OakSecondaryLinkProps,
    ref: PolymorphicRef<C>,
  ) => {
    const { displayDisabled, ...restProps } = props;
    const color = displayDisabled ? "text-disabled" : "text-primary";
    const visitedColor = displayDisabled ? "text-disabled" : "text-primary";

    return (
      <StyledInternalLink
        color={color}
        hoverColor={color}
        activeColor={color}
        disabledColor="text-disabled"
        visitedColor={visitedColor}
        {...restProps}
        ref={ref}
      />
    );
  },
);
