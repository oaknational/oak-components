import React from "react";
import styled from "styled-components";

import { OakP } from "@/components/typography";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakImage } from "@/components/images-and-icons";

const StyledImage = styled(OakImage)`
  height: 56px;
  width: 56px;
  flex-shrink: 0;
  img {
    border-radius: 50%;
  }
`;

export type OakBioProps = {
  imageSrc?: string;
  name: string;
  role?: string;
  organisationName?: string;
};

export default function OakBio({
  imageSrc,
  name,
  role,
  organisationName,
}: OakBioProps) {
  const title = [role, organisationName].filter(Boolean).join(" at ");

  return (
    <OakFlex $gap="spacing-12" $alignItems="center">
      {imageSrc && <StyledImage src={imageSrc} alt="" />}
      <OakFlex $flexDirection="column">
        <OakP $font="body-2-bold">{name}</OakP>
        {title && <OakP>{title}</OakP>}
      </OakFlex>
    </OakFlex>
  );
}
