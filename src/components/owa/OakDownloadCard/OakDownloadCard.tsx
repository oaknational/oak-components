import React, { useContext } from "react";
import styled from "styled-components";

import { RadioContext } from "@/components/form-elements/OakRadioGroup";
import {
  BaseCheckBoxProps,
  InternalCheckBoxHoverFocus,
} from "@/components/internal-components/InternalCheckBox/InternalCheckBox";
import { InternalCheckBoxWrapper } from "@/components/internal-components/InternalCheckBoxWrapper";
import { InternalRadio } from "@/components/internal-components/InternalRadio/InternalRadio";
import { InternalRadioWrapper } from "@/components/internal-components/InternalRadioWrapper";
import { OakIcon } from "@/components/images-and-icons/OakIcon";
import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakUiRoleToken } from "@/styles";
import { parseColor } from "@/styles/helpers/parseColor";
import { IconName } from "@/image-map";

const SingleIcon = ({ iconName }: { iconName: IconName }) => {
  return (
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
  );
};

const MultipleIcons = ({ iconName }: { iconName: IconName[] }) => {
  return (
    <OakFlex
      $background={"bg-decorative5-main"}
      $pa={"spacing-12"}
      $alignItems={"center"}
      $flexDirection={"column"}
      $gap={"spacing-16"}
      $justifyContent={"center"}
    >
      {iconName.map((name, index) => (
        <OakFlex
          key={`${name}-${index}`}
          $position={"relative"}
          $alignContent={"center"}
          $alignItems={"center"}
          $justifyContent={"center"}
        >
          <OakIcon
            iconName={name}
            $width={"spacing-40"}
            $height={"spacing-40"}
            $mr={index < iconName.length - 1 ? "spacing-8" : "spacing-0"}
          />
        </OakFlex>
      ))}
    </OakFlex>
  );
};

export type OakDownloadCardProps = BaseCheckBoxProps & {
  /**
   * The primary title content for the download.
   */
  title: React.ReactNode;
  /**
   * Optional file size content shown beneath the title.
   */
  fileSize?: React.ReactNode;
  /**
   * The file format or secondary metadata shown beneath the title.
   */
  format: React.ReactNode;
  /**
   * The icon used to represent the download type.
   */
  iconName: IconName | IconName[];
  /**
   * If true, renders the selection control as a radio button instead of a checkbox.
   *
   * @default false
   */
  isRadio?: boolean;
  /**
   * If true, adds an informational `Editable` tag to the download card.
   *
   * @default false
   */
  isEditable?: boolean;
};

const LabelContainer = styled("label")`
  flex: 1;
  cursor: pointer;
  display: flex;
`;

const Container = styled(OakFlex)<{ $hoverBackground: OakUiRoleToken }>`
  cursor: pointer;

  &:has(input:focus-within) {
    &:focus-visible {
      box-shadow:
        0px 0px 0px 2px ${parseColor("bg-decorative5-main")},
        0px 0px 0px 5px ${parseColor("bg-btn-primary-hover")};
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
 * Download cards present a downloadable resource with metadata and a selectable control.
 * ## Usage
 * Use this component when users need to select one or more downloadable resources,
 * such as lesson plans, slide decks, or worksheets.
 * Design document: <https://www.figma.com/design/YcWQMMhHPVVmc47cHHEEAl/Oak-Design-Kit?node-id=14795-5603>
 */
export const OakDownloadCard = (props: OakDownloadCardProps) => {
  const radioContext = useContext(RadioContext);
  const {
    title,
    fileSize,
    format,
    iconName,
    value,
    disabled = false,
    defaultChecked,
    checked,
    onChange,
    onFocus,
    onBlur,
    onHovered,
    isRadio = false,
    "data-testid": dataTestId,
    isEditable = false,
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
  const isChecked = value === radioContext.currentValue;
  const radioChecked = checked ?? isChecked;

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    radioContext.onValueUpdated?.(event);
    onChange?.(event);
  };

  const isMultipleIcon = Array.isArray(iconName);

  return (
    <Container
      data-testid={dataTestId}
      $background={"bg-primary"}
      $ba={"border-solid-m"}
      $borderRadius={"border-radius-s"}
      $overflow={"hidden"}
      $hoverBackground="bg-btn-secondary-hover"
      $color={"text-primary"}
      $width={"100%"}
    >
      <LabelContainer>
        <OakFlex $alignItems={"stretch"} $flexGrow={1}>
          {isMultipleIcon ? (
            <MultipleIcons iconName={iconName} />
          ) : (
            <SingleIcon iconName={iconName} />
          )}
          <OakFlex
            $flexGrow={1}
            $flexDirection={"column"}
            $justifyContent={"center"}
            $gap="spacing-4"
            $pv="spacing-12"
            $ph="spacing-16"
          >
              {isEditable && (
                <OakTagFunctional
                  $alignSelf={"flex-end"}
                  $font={"heading-light-7"}
                  label="Editable"
                  $background={"bg-decorative2-main"}
                />
              )}
          </OakFlex>
        </OakFlex>
        <OakFlex>
          <OakFlex $alignItems={"center"} $pr={"spacing-16"}>
            {isRadio && (
              <InternalRadioWrapper
                checked={isChecked}
                size={checkboxSize}
                disabled={anyDisabled}
                radioBorderColor={checkedBorderColor}
                internalRadio={
                  <InternalRadio
                    {...rest}
                    id={props.id}
                    name={props.name ?? radioContext.name}
                    value={value}
                    disabled={anyDisabled}
                    onHovered={onHovered}
                    onChange={handleRadioChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    defaultChecked={defaultChecked}
                    checked={radioChecked}
                  />
                }
              />
            )}
            {!isRadio && (
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
                    onHovered={onHovered}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    defaultChecked={defaultChecked}
                    checked={checked}
                    disabled={anyDisabled}
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
