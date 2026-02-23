import React, { Fragment } from "react";

import { OakSecondaryLink } from "@/components/navigation";
import { OakIcon } from "@/components/images-and-icons";
import { OakFlex } from "@/components/layout-and-structure";
import { OakSpan } from "@/components/typography";

export type OakBreadcrumb = {
  text: string;
  href?: string;
};

export type OakBreadcrumbsProps = {
  breadcrumbs: OakBreadcrumb[];
};

/**
 * The breadcrumb component helps users to understand where they are within a website’s structure and move between levels.
 */
export const OakBreadcrumbs = ({
  breadcrumbs,
}: Readonly<OakBreadcrumbsProps>) => {
  return (
    <OakFlex
      $gap="spacing-8"
      $alignItems={"center"}
      $font={"body-2"}
      $flexWrap={"wrap"}
    >
      {breadcrumbs.map((breadcrumb, breadcrumbIndex) => {
        return (
          <Fragment key={`${breadcrumb.text}_${breadcrumb.href}`}>
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
          </Fragment>
        );
      })}
    </OakFlex>
  );
};
