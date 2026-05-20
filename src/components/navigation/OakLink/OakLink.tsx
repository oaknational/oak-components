import React, { ElementType, forwardRef } from "react";

import { Variant, variantConfig } from "./config";

import { OakAllSpacingToken } from "@/styles";
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
  iconWidth?: OakAllSpacingToken;
  iconHeight?: OakAllSpacingToken;
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
    const { variant = "primary" } = props;
    const variantDefinition = variantConfig[variant];

    return (
      <InternalLink
        color={variantDefinition.color}
        hoverColor={variantDefinition.hoverColor}
        activeColor={variantDefinition.activeColor}
        disabledColor={variantDefinition.disabledColor}
        visitedColor={variantDefinition.visitedColor}
        textDecoration={variantDefinition.textDecoration}
        {...props}
        ref={ref}
      />
    );
  },
);
