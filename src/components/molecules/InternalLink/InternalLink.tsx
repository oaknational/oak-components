import React, { ElementType, forwardRef } from "react";
import styled from "styled-components";

import { OakLoadingSpinner } from "@/components/molecules/OakLoadingSpinner";
import {
  PolymorphicPropsWithRef,
  PolymorphicRef,
} from "@/components/polymorphic";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { OakFlex, OakIcon, OakIconProps, OakSpan } from "@/components/atoms";
import { parseColorFilter } from "@/styles/helpers/parseColorFilter";
import { OakAllSpacingToken, OakCombinedColorToken } from "@/styles";

const StyledOakIcon = styled(OakIcon)``;

const StyledLink = styled.a<{
  $color: OakCombinedColorToken;
  $visitedColor: OakCombinedColorToken;
  $hoverColor: OakCombinedColorToken;
  $activeColor: OakCombinedColorToken;
  $disabledColor: OakCombinedColorToken;
}>`
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
  color: ${(props) => parseColor(props.$color)};

  ${StyledOakIcon} {
    filter: ${(props) => parseColorFilter(props.$color)};
  }

  &:focus-visible {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }

  &:visited {
    color: ${(props) => parseColor(props.$visitedColor)};

    ${StyledOakIcon} {
      filter: ${(props) => parseColorFilter(props.$visitedColor)};
    }
  }

  @media (hover: hover) {
    &:hover,
    &:visited:hover {
      color: ${(props) => parseColor(props.$hoverColor)};
      ${StyledOakIcon} {
        filter: ${(props) => parseColorFilter(props.$hoverColor)};
      }
    }
  }

  &:active {
    color: ${(props) => parseColor(props.$activeColor)};

    ${StyledOakIcon} {
      filter: ${(props) => parseColorFilter(props.$activeColor)};
    }
  }

  &[disabled] {
    cursor: not-allowed;
    color: ${(props) => parseColor(props.$disabledColor)};

    ${StyledOakIcon} {
      filter: ${(props) => parseColorFilter(props.$disabledColor)};
    }
  }
`;

export type InternalLinkProps = {
  /**
   * The icon to display before or after the children.
   */
  iconName?: OakIconProps["iconName"];
  /**
   * Whether the icon should be displayed after the children.
   */
  isTrailingIcon?: boolean;
  /**
   * Displays a loading spinner in place of the icon.
   */
  isLoading?: boolean;
  color: OakCombinedColorToken;
  visitedColor: OakCombinedColorToken;
  hoverColor: OakCombinedColorToken;
  activeColor: OakCombinedColorToken;
  disabledColor: OakCombinedColorToken;
  iconWidth?: OakAllSpacingToken;
  iconHeight?: OakAllSpacingToken;
};

type InternalLinkComponent = <C extends React.ElementType = "a">(
  props: PolymorphicPropsWithRef<C> & InternalLinkProps,
) => React.ReactNode;

/**
 * A link with an optional icon and loading state.
 *
 * Defaulting to a `HTMLAnchorElement` this component is polymorphic and can be rendered as a button or any other element.
 */
export const InternalLink: InternalLinkComponent = forwardRef(
  <C extends ElementType = "a">(
    props: PolymorphicPropsWithRef<C> & InternalLinkProps,
    ref: PolymorphicRef<C>,
  ) => {
    const {
      element = "a",
      iconName,
      isTrailingIcon,
      children,
      isLoading,
      color,
      disabledColor,
      visitedColor,
      hoverColor,
      activeColor,
      iconWidth = "all-spacing-6",
      iconHeight = "all-spacing-6",
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
          return (
            <StyledOakIcon
              iconName={iconName}
              iconWidth={iconWidth}
              iconHeight={iconHeight}
            />
          );
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
      <StyledLink
        as={element}
        ref={ref}
        disabled={disabled}
        $color={color}
        $disabledColor={disabledColor}
        $visitedColor={visitedColor}
        $hoverColor={hoverColor}
        $activeColor={activeColor}
        {...rest}
      >
        {!isTrailingIcon && icon}
        <OakSpan>{children}</OakSpan>
        {isTrailingIcon && icon}
      </StyledLink>
    );
  },
);
