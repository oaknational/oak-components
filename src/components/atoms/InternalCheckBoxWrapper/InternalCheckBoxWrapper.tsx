import React from "react";
import styled from "styled-components";

import { OakBox, OakBoxProps } from "@/components/atoms/OakBox";
import { OakIcon } from "@/components/atoms/OakIcon";
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

/**
 *
 * This component is a wrapper for the InternalCheckBox component. It allows for customisable icons.
 *
 * NB. size must have the same value as the InternalCheckBox width and height
 *
 *
 */
export const InternalCheckBoxWrapper = (
  props: InternalCheckBoxWrapperProps,
) => {
  const {
    size = "spacing-24",
    iconPadding = "spacing-0",
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
        $top={"spacing-0"}
        $left={"spacing-0"}
        $pa={iconPadding}
        $width={size}
        $height={size}
      >
        {checkedIcon}
      </StyledIconContainer>
    </OakBox>
  );
};
