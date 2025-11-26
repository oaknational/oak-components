import React, { useState } from "react";
import styled from "styled-components";

import { InternalLink } from "@/components/molecules/InternalLink";
import { parseColor } from "@/styles/helpers/parseColor";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";
import { OakLI } from "@/components/atoms/OakLI";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import { OakAnchorTarget, OakBox, OakSpan } from "@/components/atoms";

const StyledNav = styled.nav`
  outline: none;
`;
const StyledOakLink = styled(InternalLink)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  display: Flex;
  width: 100%;
  &:focus {
    box-shadow: none;
  }

  &::before {
    content: counter(list-counter);
    min-width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${parseColor("black")};
    color: ${parseColor("white")};
    text-align: center;
    line-height: 32px;
    margin-right: ${parseSpacing("spacing-12")};
    text-decoration: none;
  }
  &:hover::before {
    background-color: ${parseColor("bg-btn-primary-hover")};
    box-shadow: ${parseDropShadow("drop-shadow-lemon")};
    text-decoration: none;
  }

  &:focus-within::before {
    box-shadow:
      ${parseDropShadow("drop-shadow-centered-lemon")},
      ${parseDropShadow("drop-shadow-centered-grey")};
    text-decoration: none;
  }
  &:active {
    color: ${parseColor("black")};
  }
  &:active::before {
    box-shadow:
      ${parseDropShadow("drop-shadow-lemon")},
      ${parseDropShadow("drop-shadow-grey")};
    background-color: ${parseColor("black")};
  }
`;

const StyledOL = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
`;

const StyledOLItem = styled(OakLI)`
  position: relative;
  counter-increment: list-counter;
  display: flex;
  align-items: center;
  margin-bottom: ${parseSpacing("spacing-12")};
  min-height: 40px;
  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    text-decoration: underline;
    color: ${parseColor("bg-btn-primary-hover")};
  }
`;

export type OakTertiaryOLNavProps = {
  title?: string;
  items: { title: string; href: string }[];
  ariaLabel?: string;
  anchorTarget?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

export const OakTertiaryOLNav = ({
  items,
  ariaLabel,
  title,
  anchorTarget,
  onClick,
  ...rest
}: OakTertiaryOLNavProps) => {
  const [currentHref, setCurrentHref] = useState<string | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key && event.key !== "Tab") {
      setCurrentHref(event.currentTarget.hash);
    }
  };

  return (
    <StyledNav aria-label={ariaLabel} {...rest}>
      {anchorTarget && <OakAnchorTarget id={anchorTarget} />}
      {title && (
        <OakBox $mb={"spacing-24"}>
          <OakSpan $font={"heading-light-7"}>{title}</OakSpan>
        </OakBox>
      )}
      <StyledOL role="list">
        {items.map((item, index) => (
          <StyledOLItem $font={"heading-7"} key={index}>
            <StyledOakLink
              onClick={onClick}
              href={item.href}
              aria-current={item.href === currentHref ? "true" : undefined}
              onKeyDown={handleKeyDown}
            >
              {item.title}
            </StyledOakLink>
          </StyledOLItem>
        ))}
      </StyledOL>
    </StyledNav>
  );
};
