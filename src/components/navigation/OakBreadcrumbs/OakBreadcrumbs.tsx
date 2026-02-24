import React from "react";
import styled from "styled-components";

import { OakSecondaryLink } from "@/components/navigation";
import { OakIcon } from "@/components/images-and-icons";
import { OakSpan } from "@/components/typography";
import { parseFontSize, parseSpacing } from "@/styles";

export type OakBreadcrumb = {
  text: string;
  href?: string;
};

export type OakBreadcrumbsProps = {
  breadcrumbs: OakBreadcrumb[];
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
`;

/**
 * The breadcrumb component helps users to understand where they are within a website’s structure and move between levels.
 */
export const OakBreadcrumbs = ({
  breadcrumbs,
}: Readonly<OakBreadcrumbsProps>) => {
  return (
    <BreadcrumbsUl>
      {breadcrumbs.map((breadcrumb, breadcrumbIndex) => {
        return (
          <BreadcrumbsLi key={`${breadcrumb.text}_${breadcrumb.href}`}>
            {!breadcrumb.href && <OakSpan>{breadcrumb.text}</OakSpan>}
            {breadcrumb.href && (
              <OakSecondaryLink href={breadcrumb.href ?? ""}>
                {breadcrumb.text}
              </OakSecondaryLink>
            )}
            {breadcrumbIndex < breadcrumbs.length - 1 && (
              <OakIcon
                $height={"spacing-20"}
                $width={"spacing-20"}
                iconName="chevron-right"
              />
            )}
          </BreadcrumbsLi>
        );
      })}
    </BreadcrumbsUl>
  );
};
