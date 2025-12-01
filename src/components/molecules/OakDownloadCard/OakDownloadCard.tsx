import React, { useContext } from "react";
import styled from "styled-components";

import { RadioContext } from "@/components/molecules/OakRadioGroup";
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
import { InternalRadioWrapper } from "@/components/atoms/InternalRadioWrapper";
import { InternalRadio } from "@/components/atoms/InternalRadio/InternalRadio";

export type OakDownloadCardProps = BaseCheckBoxProps & {
  titleSlot: React.ReactNode;
  fileSizeSlot?: React.ReactNode;
  formatSlot: React.ReactNode;
  iconName: IconName;
  displayValue?: string;
  asRadio?: boolean;
} & InternalCheckBoxLabelProps;

const LabelContainer = styled("label")`
  flex: 1;
  cursor: pointer;
  display: flex;
`;

const Container = styled(OakFlex)<{ $hoverBackground: OakCombinedColorToken }>`
  cursor: pointer;

  &:has(input:focus-within) {
    &:focus-visible {
      box-shadow: ${() => `0px 0px 0px 2px ${parseColor("icon-promo")}`},
        ${() => `0px 0px 0px 5px ${parseColor("icon-subdued")}`};
    }
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
export const OakDownloadCard = (props: OakDownloadCardProps) => {
  const radioContext = useContext(RadioContext);
  const {
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
    asRadio = false,
    "data-testid": dataTestId,
    ...rest
  } = props;

  const checkboxSize = "spacing-24";
  const checkedBorderColor = "border-primary";
  const disabledColor = "text-disabled";

  const currentCheckedBackgroundFill = disabled
    ? disabledColor
    : checkedBorderColor;
  const currentCheckedBorderColor = disabled
    ? disabledColor
    : checkedBorderColor;
  const anyDisabled = disabled || radioContext.disabled;

  return (
    <Container
      data-testid={dataTestId}
      $background={"bg-primary"}
      $ba={"border-solid-m"}
      $borderRadius={"border-radius-s"}
      $overflow={"hidden"}
      $hoverBackground="bg-btn-secondary-hover"
      $color={"text-primary"}
    >
      <LabelContainer>
        <OakFlex $alignItems={"flex-start"} $flexGrow={1}>
          <OakFlex
            $background={"bg-decorative5-main"}
            $pa={"spacing-12"}
            $alignItems={"center"}
            $alignSelf={"stretch"}
          >
            <OakIcon
              iconName={iconName}
              $width={"spacing-48"}
              $height={"spacing-48"}
            />
          </OakFlex>
          <OakFlex
            $flexGrow={1}
            $flexDirection={"column"}
            $gap="spacing-4"
            $pv="spacing-12"
            $ph="spacing-16"
          >
            <OakBox $font={"body-2-bold"}>{titleSlot}</OakBox>
            {fileSizeSlot && <OakBox $font={"body-3"}>{fileSizeSlot}</OakBox>}
            <OakBox $font={"body-3"}>{formatSlot}</OakBox>
          </OakFlex>
        </OakFlex>
        <OakFlex>
          <OakFlex $alignItems={"center"} $pr={"spacing-16"}>
            {asRadio && (
              <InternalRadioWrapper
                checked={value === radioContext.currentValue}
                size={checkboxSize}
                disabled={anyDisabled}
                radioBorderColor={checkedBorderColor}
                internalRadio={
                  <InternalRadio
                    {...rest}
                    name={radioContext.name}
                    value={value}
                    disabled={anyDisabled}
                    onChange={radioContext.onValueUpdated}
                    checked={value === radioContext.currentValue}
                  />
                }
              />
            )}
            {!asRadio && (
              <InternalCheckBoxWrapper
                size={checkboxSize}
                internalCheckbox={
                  <InternalCheckBoxHoverFocus
                    name={radioContext.name}
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
                iconPadding={"spacing-0"}
              />
            )}
          </OakFlex>
        </OakFlex>
      </LabelContainer>
    </Container>
  );
};
