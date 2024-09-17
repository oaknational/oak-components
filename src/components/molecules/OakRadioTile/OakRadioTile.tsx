import React from "react";
import styled, { css } from "styled-components";

import { OakFlex } from "@/components/atoms/OakFlex";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import {
  OakBox,
  OakBoxProps,
  OakLabel,
  OakLabelProps,
} from "@/components/atoms";

export type TileItem = { id: string; label: string };

export type OakRadioTileProps = {
  tileItem: TileItem;
  isChecked: boolean;
  isFocussed: boolean;
  id: string;
  onChange: (tileItem: TileItem) => void;
  onFocus: (value: string | undefined) => void;
};

const RadioTileLabel = styled(OakLabel)<OakLabelProps>`
  cursor: pointer;
  display: flex;
  gap: ${parseSpacing("space-between-s")};
`;

const HiddenRadioButtonInput = styled.input.attrs({
  type: "radio",
})`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const RadioTileFocus = styled(OakBox)<OakBoxProps>`
  box-shadow: ${`inset 0 0 0 0.15rem #ffe555`};
  width: calc(100% + 12px);
  height: calc(100% + 12px);
  top: -6px;
  left: -6px;
`;

const OakRadioTileCss = css<OakRadioTileProps>``;

const UnstyledComponent = (props: OakRadioTileProps) => {
  const { tileItem, isChecked, isFocussed, id, onChange, onFocus } = props;
  return (
    <OakBox
      $borderColor="border-neutral"
      $ba="border-solid-m"
      $borderRadius="border-radius-s"
      $pa="inner-padding-s"
      key={tileItem.id}
      $position={"relative"}
      $background={isFocussed || isChecked ? "black" : "transparent"}
      $color={isFocussed || isChecked ? "white" : "black"}
    >
      {isFocussed && (
        <RadioTileFocus
          $background="transparent"
          $position="absolute"
          $ba="border-solid-l"
          $borderColor="grey60"
          $borderRadius="border-radius-s"
        />
      )}

      <RadioTileLabel htmlFor={id}>
        <HiddenRadioButtonInput
          value={tileItem.id}
          id={id}
          checked={isChecked}
          onChange={() => onChange(tileItem)}
          tabIndex={0}
          onFocus={() => onFocus(tileItem.id)}
          onBlur={() => onFocus(undefined)}
        />
        <OakFlex
          $height="all-spacing-6"
          $width="all-spacing-6"
          $borderColor="border-neutral"
          $flexGrow={0}
          $flexShrink={0}
          $alignItems="center"
          $justifyContent="center"
          $background="bg-primary"
          $ba="border-solid-m"
          $borderRadius="border-radius-circle"
        >
          {isChecked && (
            <OakBox
              $height="all-spacing-4"
              $width="all-spacing-4"
              $background="black"
              $position="absolute"
              $borderRadius="border-radius-circle"
            />
          )}
        </OakFlex>
        {tileItem.label}
      </RadioTileLabel>
    </OakBox>
  );
};

export const OakRadioTile = styled(UnstyledComponent)`
  ${OakRadioTileCss}
`;
