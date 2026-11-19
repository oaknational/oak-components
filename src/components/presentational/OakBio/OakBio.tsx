import React from "react";

import { OakP } from "@/components/typography";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakImage } from "@/components/images-and-icons";

export type OakBioProps = {
  imageSrc?: string;
  name: string;
  title?: string;
};

export default function OakBio({
  imageSrc,
  name,
  title,
}: Readonly<OakBioProps>) {
  return (
    <OakFlex $gap="spacing-12" $alignItems="center">
      {imageSrc && (
        <OakFlex $flexShrink={0}>
          <OakImage
            src={imageSrc}
            alt=""
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
