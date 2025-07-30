import React from "react";
import styled from "styled-components";

import {
  BaseCheckBoxProps,
  InternalCheckBoxHoverFocus,
} from "@/components/atoms/InternalCheckBox/InternalCheckBox";
import { InternalCheckBoxLabelProps } from "@/components/atoms/InternalCheckBoxLabel";
import { InternalCheckBoxWrapper } from "@/components/atoms/InternalCheckBoxWrapper";
import { OakBox, OakFlex, OakIcon } from "@/components/atoms";
import { parseColor } from "@/styles/helpers/parseColor";
import { OakCombinedColorToken } from "@/styles";
import { IconName } from "@/image-map";

export type OakDownloadCheckBoxProps = BaseCheckBoxProps & {
  titleSlot: React.ReactNode;
  fileSizeSlot?: React.ReactNode;
  formatSlot: React.ReactNode;
  iconName: IconName;
  displayValue?: string;
} & InternalCheckBoxLabelProps;

const Container = styled(OakFlex)<{ $hoverBackground: OakCombinedColorToken }>`
  cursor: pointer;

  &:has(input:focus-within):has(:focus-visible) {
    box-shadow: ${() => `0px 0px 0px 2px ${parseColor("lemon")}`},
      ${() => `0px 0px 0px 5px ${parseColor("grey60")}`};
  }
  @media (hover: hover) {
    &:hover:not(:disabled, :active) {
      background: ${(props) =>
        props.$hoverBackground ? parseColor(props.$hoverBackground) : null};
    }
  }
`;

/**
 *
 * Used for choosing teaching resources, curriculum maps, or any downloadable items.
 *
 * Design document: <https://www.figma.com/design/YcWQMMhHPVVmc47cHHEEAl/Oak-Design-Kit?node-id=14795-5603>
 *
 */
export const OakDownloadCheckBox = (props: OakDownloadCheckBoxProps) => {
  const {
    id,
    titleSlot,
    fileSizeSlot,
    formatSlot,
    iconName,
    value,
    disabled = false,
    defaultChecked,
    checked,
    onChange,
    onFocus,
    onBlur,
    onHovered,
    "data-testid": dataTestId,
    ...rest
  } = props;

  const checkboxSize = "all-spacing-6";
  const checkedBorderColor = "border-primary";
  const disabledColor = "text-disabled";

  const currentCheckedBackgroundFill = disabled
    ? disabledColor
    : checkedBorderColor;
  const currentCheckedBorderColor = disabled
    ? disabledColor
    : checkedBorderColor;

  return (
    <Container
      data-testid={dataTestId}
      $ba={"border-solid-m"}
      $borderRadius={"border-radius-s"}
      $overflow={"hidden"}
      $hoverBackground="bg-btn-secondary-hover"
    >
      <label style={{ flex: 1, cursor: "pointer" }}>
        <OakFlex>
          <OakFlex
            $background={"lemon"}
            $pa={"inner-padding-s"}
            $alignItems={"center"}
          >
            <OakIcon
              iconName={iconName}
              $width={"all-spacing-9"}
              $height={"all-spacing-9"}
            />
          </OakFlex>
          <OakFlex
            $flexGrow={1}
            $flexDirection={"column"}
            $gap="all-spacing-1"
            $pv="inner-padding-s"
            $ph="inner-padding-m"
          >
            <OakBox $font={"body-2-bold"}>{titleSlot}</OakBox>
            {fileSizeSlot && <OakBox $font={"body-3"}>{fileSizeSlot}</OakBox>}
            <OakBox $font={"body-3"}>{formatSlot}</OakBox>
          </OakFlex>
          <OakFlex $alignItems={"center"} $pr={"inner-padding-m"}>
            <InternalCheckBoxWrapper
              size={checkboxSize}
              internalCheckbox={
                <InternalCheckBoxHoverFocus
                  id={id}
                  value={value}
                  $width={checkboxSize}
                  $height={checkboxSize}
                  $ba={"border-solid-m"}
                  $borderRadius={"border-radius-xs"}
                  $borderColor={"text-primary"}
                  $checkedBackground={currentCheckedBackgroundFill}
                  $checkedBorderColor={currentCheckedBorderColor}
                  $uncheckedBorderColor={"border-neutral"}
                  $hoverBorderRadius={"border-radius-xs"}
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  defaultChecked={defaultChecked}
                  checked={checked}
                  disabled={disabled}
                  {...rest}
                />
              }
              iconPadding={"inner-padding-none"}
            />
          </OakFlex>
        </OakFlex>
      </label>
    </Container>
  );
};
