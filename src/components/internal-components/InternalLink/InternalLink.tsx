import React, { ElementType, forwardRef } from "react";
import styled from "styled-components";

import { OakLoadingSpinner } from "@/components/messaging-and-feedback/OakLoadingSpinner";
import {
  PolymorphicPropsWithRef,
  PolymorphicRef,
} from "@/components/polymorphic";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { parseBorderRadius } from "@/styles/helpers/parseBorderRadius";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakIcon, OakIconProps } from "@/components/images-and-icons/OakIcon";
import { OakSpan } from "@/components/typography/OakSpan";
import { parseColorFilter } from "@/styles/helpers/parseColorFilter";
import { OakUiRoleToken } from "@/styles";
import { OakFontToken, OakTextDecoration } from "@/styles/theme/typography";
import { typographyStyle } from "@/styles/utils/typographyStyle";

const StyledOakIcon = styled(OakIcon)`
  width: 1.25em;
  min-width: 1.25em;
  height: 1.25em;
  min-height: 1.25em;
`;

const StyledOakLoadingSpinner = styled(OakLoadingSpinner)`
  --width: 1.25em;
`;

const StyledLink = styled.a<{
  $color: OakUiRoleToken;
  $visitedColor: OakUiRoleToken;
  $hoverColor: OakUiRoleToken;
  $activeColor: OakUiRoleToken;
  $disabledColor: OakUiRoleToken;
  $textDecoration: OakTextDecoration;
  $font?: OakFontToken;
}>`
  display: inline;
  align-items: center;
  gap: ${parseSpacing("spacing-4")};
  outline: none;
  border-radius: ${parseBorderRadius("border-radius-m")};
  padding: ${parseSpacing("spacing-4")};
  margin: -${parseSpacing("spacing-4")};
  appearance: none;
  ${(props) => (props.$font ? typographyStyle : "font: inherit;")}
  background: none;
  border: none;
  text-decoration: ${(props) => props.$textDecoration};
  cursor: pointer;
  color: ${(props) => parseColor(props.$color)};
  overflow-wrap: break-word;

  ${StyledOakIcon} {
    filter: ${(props) => parseColorFilter(props.$color)};
    display: inline-block;
    vertical-align: text-top;
  }

  &:focus-visible {
    box-shadow:
      ${parseDropShadow("drop-shadow-centered-lemon")},
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
      text-decoration: underline;
      text-decoration-thickness: 18%;
    }
  }

  &:active {
    color: ${(props) => parseColor(props.$activeColor)};
    outline: 1px solid ${(props) => parseColor(props.$activeColor)};
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
  color: OakUiRoleToken;
  visitedColor: OakUiRoleToken;
  hoverColor: OakUiRoleToken;
  activeColor: OakUiRoleToken;
  disabledColor: OakUiRoleToken;
  textDecoration?: OakTextDecoration;
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
      textDecoration = "underline",
      ...rest
    } = props;

    const icon = (() => {
      switch (true) {
        case isLoading:
          return (
            <OakBox
              $pl={isTrailingIcon ? "spacing-4" : undefined}
              $pr={isTrailingIcon ? undefined : "spacing-4"}
              $display={"inline-block"}
            >
              <StyledOakLoadingSpinner $color="icon-primary" />
            </OakBox>
          );
        case !!iconName:
          return (
            <OakBox
              $pl={isTrailingIcon ? "spacing-4" : undefined}
              $pr={isTrailingIcon ? undefined : "spacing-4"}
              $display={"inline-block"}
            >
              <StyledOakIcon iconName={iconName} />
            </OakBox>
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
        $textDecoration={textDecoration}
        {...rest}
      >
        {!isTrailingIcon && icon}
        <OakSpan>{children}</OakSpan>
        {isTrailingIcon && icon}
      </StyledLink>
    );
  },
);
