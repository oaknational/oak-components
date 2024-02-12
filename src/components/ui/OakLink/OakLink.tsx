import React, { ElementType, forwardRef } from "react";
import styled from "styled-components";

import { OakLoadingSpinner } from "../OakLoadingSpinner";

import {
  PolymorphicPropsWithRef,
  PolymorphicRef,
} from "@/components/utils/polymorphic";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { OakFlex, OakIcon, OakIconProps, OakSpan } from "@/components/base";
import { parseColorFilter } from "@/styles/helpers/parseColorFilter";

const StyledOakIcon = styled(OakIcon)`
  width: ${parseSpacing("all-spacing-6")};
  height: ${parseSpacing("all-spacing-6")};
`;

const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${parseSpacing("space-between-sssx")};
  outline: none;
  border-radius: ${parseBorderRadius("border-radius-m")};
  padding: ${parseSpacing("inner-padding-ssx")};
  margin: -${parseSpacing("inner-padding-ssx")};
  appearance: none;
  font: inherit;
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;

  color: ${parseColor("text-link-active")};
  ${StyledOakIcon} {
    filter: ${parseColorFilter("text-link-active")};
  }

  &:focus-visible {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }

  &:visited {
    color: ${parseColor("text-link-visited")};

    ${StyledOakIcon} {
      filter: ${parseColorFilter("text-link-visited")};
    }
  }

  @media (hover: hover) {
    &:hover,
    &:visited:hover {
      color: ${parseColor("text-link-hover")};
      ${StyledOakIcon} {
        filter: ${parseColorFilter("text-link-hover")};
      }
    }
  }

  &:active {
    color: ${parseColor("text-link-pressed")};

    ${StyledOakIcon} {
      filter: ${parseColorFilter("text-link-pressed")};
    }
  }

  &[disabled] {
    cursor: not-allowed;
    color: ${parseColor("text-disabled")};

    ${StyledOakIcon} {
      filter: ${parseColorFilter("icon-disabled")};
    }
  }
`;

export type OakLinkProps = {
  iconName?: OakIconProps["iconName"];
  isTrailingIcon?: boolean;
  isLoading?: boolean;
};

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
    const {
      element = "a",
      iconName,
      isTrailingIcon,
      children,
      isLoading,
      ...rest
    } = props;
    const icon = (() => {
      switch (true) {
        case isLoading:
          return (
            <OakFlex
              $width="all-spacing-6"
              $height="all-spacing-6"
              $alignItems="center"
              $justifyContent="center"
            >
              <OakLoadingSpinner
                $width="all-spacing-4"
                $color="icon-inverted"
              />
            </OakFlex>
          );
        case !!iconName:
          return <StyledOakIcon iconName={iconName} />;
        default:
          return null;
      }
    })();
    const disabled = (() => {
      switch (true) {
        case "disabled" in rest:
          return rest.disabled;
        case isLoading:
          return true;
        default:
          return undefined;
      }
    })();

    return (
      <StyledLink as={element} ref={ref} disabled={disabled} {...rest}>
        {!isTrailingIcon && icon}
        <OakSpan>{children}</OakSpan>
        {isTrailingIcon && icon}
      </StyledLink>
    );
  },
);
