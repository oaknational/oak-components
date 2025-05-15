import React from "react";
import styled from "styled-components";

import { OakFlex, OakHeading } from "@/components/atoms";

const StyledNav = styled.nav`
  outline: none;
`;

export type OakSideMenuNavProps = {
  heading: string;
};

export default function OakSideMenuNav(props: OakSideMenuNavProps) {
  const { heading } = props;
  return (
    <StyledNav>
      <OakFlex
        $flexDirection="column"
        $background={["bg-decorative1-subdued", "white"]}
        $pa={["inner-padding-xl4", "inner-padding-none"]}
      >
        <OakHeading tag="h4" $font="heading-light-7" $color="text-subdued">
          {heading}
        </OakHeading>
      </OakFlex>
    </StyledNav>
  );
}
