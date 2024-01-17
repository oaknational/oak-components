import React, { ElementType, ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

import { parseColor } from "@/styles/helpers/parseColor";
import { parseColorFilter } from "@/styles/helpers/parseColorFilter";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { OakIcon } from "@/components/base";

export type OakBackLinkProps<C extends ElementType> = {
  as?: C;
  label?: string;
} & ComponentPropsWithoutRef<C>;

const StyledBackLink = styled.a`
  border-radius: 50%;
  display: flex;
  width: fit-content;
  height: fit-content;
  border: none;
  padding: 0;
  outline: none;

  img {
    pointer-events: none;
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  &:active {
    box-shadow: ${parseDropShadow("drop-shadow-yellow")},
      ${parseDropShadow("drop-shadow-grey")};
  }

  &:hover,
  &:focus-visible {
    background: ${parseColor("bg-btn-primary")};

    img {
      filter: ${parseColorFilter("text-inverted")};
    }
  }

  &:focus-visible {
    box-shadow: ${parseDropShadow("drop-shadow-centered-yellow")},
      ${parseDropShadow("drop-shadow-centered-grey")};
  }

  &:disabled {
    background: ${parseColor("bg-btn-primary-disabled")};

    img {
      filter: ${parseColorFilter("text-inverted")};
    }
  }
`;

/**
 * Used to navigate the user back to the previous page in the app.
 *
 * Polymorphic rendering as any HTML element or component using `as` — defaults to `a`.
 *
 * E.g.
 *
 * * Default (Anchor) `<OakBackLink href="https://www.thenational.academy/" />`
 * * Button `<OakBackLink as="button" onClick={() => goBack(-1)} />`
 */
export const OakBackLink = <C extends ElementType = "a">({
  as,
  label = "Back",
  ...props
}: OakBackLinkProps<C>) => {
  return (
    <StyledBackLink as={as ?? "a"} aria-label={label} {...props}>
      <OakIcon
        alt=""
        iconName="chevron-left"
        $width="all-spacing-8"
        $height="all-spacing-8"
      />
    </StyledBackLink>
  );
};
