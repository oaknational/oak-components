import React from "react";

import { OakP } from "@/components/typography";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakImage } from "@/components/images-and-icons";

export type OakBioProps = {
  imageSrc?: string;
  name: string;
  title?: string;
  imageAlt?: string;
};
/**
 * Displays a person's image, name and role in a compact layout. Can be used on it’s own or nested in other components, such as quotes.
 */
export function OakBio({
  imageSrc,
  name,
  title,
  imageAlt,
}: Readonly<OakBioProps>) {
  return (
    <OakFlex $gap="spacing-12" $alignItems="center">
      {imageSrc && (
        <OakFlex $flexShrink={0}>
          <OakImage
            src={imageSrc}
            alt={imageAlt ?? ""}
            $width="spacing-56"
            $height="spacing-56"
            $borderRadius="border-radius-circle"
            $overflow="hidden"
          />
        </OakFlex>
      )}
      <OakFlex $flexDirection="column">
        <OakP $font="body-2-bold">{name}</OakP>
        {title && <OakP>{title}</OakP>}
      </OakFlex>
    </OakFlex>
  );
}
