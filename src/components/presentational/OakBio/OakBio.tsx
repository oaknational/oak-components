import React from "react";
import styled from "styled-components";

import { OakP } from "@/components/typography";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakImage } from "@/components/images-and-icons";
import { OakBox } from "@/components/layout-and-structure/OakBox";

const StyledImage = styled(OakImage)`
  height: 56px;
  width: 56px;
  img {
    border-radius: 50%;
  }
`;

export default function OakBio() {
  // optionally school name to appear with "at"
  return (
    <OakFlex $gap="spacing-12" $alignItems="center">
      <OakBox $borderRadius="border-radius-circle">
        <StyledImage
          src="https://www.thenational.academy/images/oak-national-academy-logo-512.png"
          alt=""
        />
      </OakBox>
      <OakFlex $flexDirection="column">
        <OakP $font="body-2-bold">Firstname Surname</OakP>
        <OakP>[role] at [school]</OakP>
      </OakFlex>
    </OakFlex>
  );
}
