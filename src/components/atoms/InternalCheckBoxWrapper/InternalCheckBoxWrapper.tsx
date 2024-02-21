import React from "react";
import styled from "styled-components";

import { OakBox, OakBoxProps, OakIcon } from "@/components/atoms";
import { OakAllSpacingToken, OakInnerPaddingToken } from "@/styles";
import { ResponsiveValues } from "@/styles/utils/responsiveStyle";

const StyledIconContainer = styled(OakBox)<
  OakBoxProps & { disabled?: boolean }
>`
  pointer-events: none;
  opacity: 0;

  input:checked + & {
    opacity: 1;
  }
`;

export type InternalCheckBoxWrapperProps = {
  size?: ResponsiveValues<OakAllSpacingToken>;
  internalCheckbox: React.JSX.Element;
  iconPadding?: OakInnerPaddingToken;
  checkedIcon?: React.JSX.Element;
};

export const InternalCheckBoxWrapper = (
  props: InternalCheckBoxWrapperProps,
) => {
  const {
    size = "all-spacing-6",
    iconPadding = "inner-padding-none",
    internalCheckbox,
    checkedIcon = (
      <OakIcon
        iconName="tick"
        $width={"100%"}
        $height={"100%"}
        $colorFilter={"white"}
      />
    ),
  } = props;

  return (
    <OakBox $position="relative" $width={size} $height={size}>
      {internalCheckbox}
      <StyledIconContainer
        $position={"absolute"}
        $top={"all-spacing-0"}
        $left={"all-spacing-0"}
        $pa={iconPadding}
        $width={size}
        $height={size}
      >
        {checkedIcon}
      </StyledIconContainer>
    </OakBox>
  );
};
