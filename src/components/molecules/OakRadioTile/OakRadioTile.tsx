import React, { useState } from "react";
import styled, { css } from "styled-components";

import { OakFlex } from "@/components/atoms/OakFlex";
import { parseSpacing } from "@/styles/helpers/parseSpacing";
import {
  OakBox,
  OakBoxProps,
  OakLabel,
  OakLabelProps,
} from "@/components/atoms";
import { parseColor } from "@/styles/helpers/parseColor";

export type TileItem = { id: string; label: string };
export const isTileItem = (u: unknown): u is TileItem => {
  return (
    typeof u === "object" &&
    u !== null &&
    typeof (u as TileItem).id === "string" &&
    typeof (u as TileItem).label === "string"
  );
};

export type OakRadioTileProps = {
  tileItem: TileItem;
  isChecked: boolean;
  id: string;
  onChange: (tileItem: TileItem) => void;
};

const RadioTileLabel = styled(OakLabel)<OakLabelProps>`
  cursor: pointer;
  display: flex;
  gap: ${parseSpacing("spacing-16")};
`;

const HiddenRadioButtonInput = styled.input.attrs({
  type: "radio",
})`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const RadioTileFocus = styled(OakBox)<OakBoxProps>`
  box-shadow: ${`inset 0 0 0 0.15rem ${parseColor("lemon")}`};
  width: calc(100% + 12px);
  height: calc(100% + 12px);
  top: -6px;
  left: -6px;
`;

const OakRadioTileCss = css<OakRadioTileProps>``;

const UnstyledComponent = (props: OakRadioTileProps) => {
  const { tileItem, isChecked, id, onChange } = props;
  const [isFocussed, setIsFocussed] = useState(false);
  return (
    <OakBox
      $borderColor="border-neutral"
      $ba="border-solid-m"
      $borderRadius="border-radius-s"
      $pa="spacing-12"
      $position="relative"
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
          data-testid="radio-tile-focus"
        />
      )}
      <RadioTileLabel htmlFor={id}>
        <HiddenRadioButtonInput
          value={tileItem.id}
          id={id}
          checked={isChecked}
          onChange={() => onChange(tileItem)}
          tabIndex={0}
          onFocus={() => setIsFocussed(true)}
          onBlur={() => setIsFocussed(false)}
          onClick={(e) => {
            // remove focus on mouse click events
            if (e.clientX || e.clientY) {
              setIsFocussed(false);
            }
          }}
        />
        <OakFlex
          $height={"spacing-24"}
          $width="spacing-24"
          $borderColor="border-neutral"
          $flexGrow={0}
          $flexShrink={0}
          $alignItems={"center"}
          $justifyContent={"center"}
          $background={"bg-primary"}
          $ba="border-solid-m"
          $borderRadius="border-radius-circle"
        >
          {isChecked && (
            <OakBox
              $height="spacing-16"
              $width="spacing-16"
              $background="black"
              $position="absolute"
              $borderRadius="border-radius-circle"
              data-testid="radio-tile-checked"
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
