import React, { ElementType, forwardRef } from "react";
import styled from "styled-components";

import { Variant, variantConfig } from "./config";

import {
  InternalLink,
  InternalLinkProps,
} from "@/components/internal-components/InternalLink";
import {
  PolymorphicPropsWithRef,
  PolymorphicRef,
} from "@/components/polymorphic";
import { TypographyStyleProps } from "@/styles/utils/typographyStyle";

export type OakLinkProps = Pick<
  InternalLinkProps,
  "iconName" | "isTrailingIcon" | "isLoading"
> & {
  /**
   * Style variant of the OakLink component: "primary" | "secondary"
   *
   * @default "primary"
   */
  variant?: Variant;
} & Pick<TypographyStyleProps, "$font">;

type OakLinkComponent = <C extends React.ElementType = "a">(
  props: PolymorphicPropsWithRef<C> & OakLinkProps,
) => React.ReactNode;

const StyledInternalLink = styled(InternalLink)``;

/**
 * A link with an optional icon and loading state.
 *
 * Defaulting to a `HTMLAnchorElement` this component is polymorphic and can be rendered as a button or any other element.
 */
export const OakLink: OakLinkComponent = forwardRef(
  <C extends ElementType = "a">(
    props: PolymorphicPropsWithRef<C> & OakLinkProps,
    ref: PolymorphicRef<C>,
  ) => {
    const { variant = "primary", ...restProps } = props;
    const variantDefinition = variantConfig[variant];

    return (
      <StyledInternalLink
        color={variantDefinition.color}
        hoverColor={variantDefinition.hoverColor}
        activeColor={variantDefinition.activeColor}
        visitedColor={variantDefinition.visitedColor}
        textDecoration={variantDefinition.textDecoration}
        disabledColor={"text-disabled"}
        {...restProps}
        ref={ref}
      />
    );
  },
);
