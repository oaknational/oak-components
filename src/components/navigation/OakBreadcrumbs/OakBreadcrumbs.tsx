import React, { ReactNode } from "react";
import styled from "styled-components";

import { OakSecondaryLink } from "@/components/navigation";
import { OakIcon } from "@/components/images-and-icons";
import { parseFontSize, parseSpacing } from "@/styles";
import { OakBox, OakBoxProps } from "@/components/layout-and-structure";

export type OakBreadcrumb = {
  text: string;
  href?: string;
};

// Used for the last page
export type OakBreadcrumbWithoutHref = {
  text: string;
};

export type OakBreadcrumbsProps = {
  breadcrumbs: [...OakBreadcrumb[], OakBreadcrumbWithoutHref];
};

const BreadcrumbsUl = styled("ul")`
  margin: ${parseSpacing("spacing-0")};
  padding: ${parseSpacing("spacing-0")};
  list-style: none;
  display: flex;
  gap: ${parseSpacing("spacing-8")};
  align-items: center;
  font-size: ${parseFontSize("body-2")};
  font-weight: ${parseFontSize("body-2")};
  flex-wrap: wrap;
`;

const BreadcrumbsLi = styled("li")`
  display: flex;
  gap: ${parseSpacing("spacing-8")};
  align-items: center;
  flex: 0;
  max-width: 100%;
`;

function OakBreadcrumbText(props: OakBoxProps & { children: ReactNode }) {
  return (
    <OakBox
      $whiteSpace={"nowrap"}
      $textOverflow={"ellipsis"}
      $minWidth={"spacing-0"}
      $overflow={"hidden"}
      {...props}
    >
      {props.children}
    </OakBox>
  );
}

/**
 * The breadcrumb component helps users to understand where they are within a website’s structure and move between levels.
 */
export const OakBreadcrumbs = ({
  breadcrumbs,
}: Readonly<OakBreadcrumbsProps>) => {
  return (
    <OakBox as="nav" aria-label="Breadcrumb" $color={"text-primary"}>
      <BreadcrumbsUl>
        {breadcrumbs.map((breadcrumb, breadcrumbIndex) => {
          // Last element doesn't have a "href" because it's the current page (typesafe)
          const isLast = !("href" in breadcrumb);
          return (
            <BreadcrumbsLi key={`${breadcrumb.text}`}>
              {breadcrumbIndex > 0 && (
                <OakIcon
                  $height={"spacing-20"}
                  $width={"spacing-20"}
                  iconName="chevron-right"
                />
              )}
              {isLast && (
                <OakBreadcrumbText aria-current="page">
                  {breadcrumb.text}
                </OakBreadcrumbText>
              )}
              {!isLast && (
                <OakBreadcrumbText>
                  <OakSecondaryLink href={breadcrumb.href}>
                    {breadcrumb.text}
                  </OakSecondaryLink>
                </OakBreadcrumbText>
              )}
            </BreadcrumbsLi>
          );
        })}
      </BreadcrumbsUl>
    </OakBox>
  );
};
