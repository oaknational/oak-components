/*
 *
 * FIXME: This component should either live in its own folder or
 * or be renamed to SubModalCenterBody and be excluded from the exports
 * as per the rules stated in src/docs/namingConventions.mdx
 *
 */

import React, { ReactNode } from "react";

import {
  OakFlex,
  OakHeading,
  OakHeadingProps,
  OakIcon,
  OakIconName,
  OakIconProps,
} from "@/components/atoms";

export type OakModalCenterBodyProps = {
  /**
   * The name of the icon to display. Accepts an icon name token
   */
  iconName: OakIconName;
  /**
   * The title of the modal
   */
  title: string;
  /**
   * The content of the modal body
   */
  children: ReactNode;
  /**
   * Override props for the heading
   */
  headingOverride?: Partial<OakHeadingProps>;
  /**
   * Override props for the icon
   */
  iconOverride?: Partial<OakIconProps>;
  /**
   * Hide icon
   */
  hideIcon?: boolean;
};

/**
 * Intended to be used within the `OakModalCenter` component
 * it provides a consistent layout for the body of the modal
 * It includes an icon, a title, and the children passed to it.
 * The icon and title can be extended/overridden with the `iconOverride` and `headingOverride` props.
 *
 *  ## Props
 *
 * - **iconName** \-            The name of the icon to display. Accepts an icon name token
 * - **title** \-               The title of the modal
 * - **children** \-            The content of the modal body
 * - **headingOverride** \-     Override HTMLAttributes & OakHEading props for the heading
 * - **iconOverride** \-        Override HTMLAttributes & OakIcon props for the icon
 */
export const OakModalCenterBody = ({
  children,
  iconName = "info",
  title,
  headingOverride,
  iconOverride,
  hideIcon,
}: OakModalCenterBodyProps) => {
  return (
    <OakFlex
      $pb="spacing-24"
      $width="100%"
      $flexDirection="column"
      $alignItems="center"
      $justifyContent="center"
    >
      {!hideIcon && (
        <OakIcon
          iconName={iconName}
          $width="spacing-100"
          $height="spacing-100"
          $mb="spacing-32"
          data-testid="icon"
          {...iconOverride}
        />
      )}
      <OakHeading
        $font={["heading-5", "heading-5", "heading-4"]}
        data-testid="OakHeading-id"
        tag="h1"
        $mb="spacing-32"
        $textAlign="center"
        {...headingOverride}
      >
        {title}
      </OakHeading>
      {children}
    </OakFlex>
  );
};
