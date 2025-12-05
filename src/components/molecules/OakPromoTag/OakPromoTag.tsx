import React from "react";
import styled from "styled-components";

import { OakFlex, OakSpan } from "@/components/atoms";
import { InternalStyledSvg } from "@/components/atoms/InternalStyledSvg";
import { SizeStyleProps } from "@/styles/utils/sizeStyle";
import { DisplayStyleProps } from "@/styles/utils/displayStyle";

const StyledPromoTag = styled(OakFlex)`
  aspect-ratio: 2 / 1;
`;

export type OakPromoTagProps = {
  width?: SizeStyleProps["$width"];
  display?: DisplayStyleProps["$display"];
};

/**
 * Renders a tag with the text "New"
 */
export const OakPromoTag = (props: OakPromoTagProps) => {
  const {
    width = ["spacing-40", "spacing-48", "spacing-56"],
    display = "flex",
  } = props;

  return (
    <StyledPromoTag
      $alignItems="center"
      $justifyContent="center"
      $position="relative"
      $width={width}
      $display={display}
    >
      <InternalStyledSvg
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 56 27"
        $fill="icon-primary"
      >
        <path d="M6.421 0c8.661.839 17.303.834 26.16.714a89.843 89.843 0 0 1 4.834-.013c6.333.32 12.39.317 18.506-.275 0 1.26.178 2.352 0 3.44-.276 1.38-.829 2.759-1.342 4.15-.138.354-.532.706-.808 1.06-.445.248-.63.5-.553.753 1.598 1.093-.256 2.185 0 3.277.276 1.529 1.322 3.058 1.204 4.572-.138 1.771-1.046 3.543-1.973 5.312-.288.4-1.065.792-2.309 1.169-2.288.755-4.103 1.67-11.206 1.965-9.936.417-20.953.385-30.678-.09-2.447-.12-4.38-.532-5.209-.853-1.035-.458-1.52-.929-1.44-1.4C.937 18.988-.109 14.194.01 9.4c0-2.645 1.973-5.29 3.413-7.933.237-.424 1.697-.839 3-1.468Z" />
      </InternalStyledSvg>
      <OakFlex
        $position="absolute"
        $inset="spacing-0"
        $alignItems="center"
        $justifyContent="center"
      >
        <OakSpan
          $color="text-promo"
          $background={"icon-primary"}
          $font={["body-3-bold", "body-3-bold", "heading-7"]}
        >
          New
        </OakSpan>
      </OakFlex>
    </StyledPromoTag>
  );
};
