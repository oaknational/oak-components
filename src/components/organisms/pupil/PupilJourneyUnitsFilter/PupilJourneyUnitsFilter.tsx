import React from "react";
import styled from "styled-components";

import {
  OakButtonAsRadioGroup,
  OakOutlineAccordion,
  OakSecondaryButtonAsRadio,
} from "../../../molecules";
import { OakBox, OakHeading } from "../../../atoms";

export type menuItem = {
  text: string;
  id: number;
};

export type PupilJourneyUnitsFilterProps = {
  menuItems: menuItem[];
  selected: number;
  onSelected: (arg0: menuItem) => void;
};

const UnstyledComponent = (props: PupilJourneyUnitsFilterProps) => {
  const { menuItems, selected, onSelected, ...rest } = props;

  const OakRadioGroup = (
    <OakButtonAsRadioGroup
      name="PupilJourneyUnitsFilter"
      ariaLabel="PupilJourneyUnitsFilter"
      onChange={(value) => {
        const selectedItem = menuItems.find(
          (item) => item.id.toString() === value,
        );
        onSelected(selectedItem || { text: "", id: 0 }); // Provide a default value for selectedItem
      }}
      defaultValue={selected.toString()}
      $flexWrap={"wrap"}
      {...rest}
    >
      {menuItems.map((item) => {
        return (
          <OakSecondaryButtonAsRadio value={item.id.toString()}>
            {item.text}
          </OakSecondaryButtonAsRadio>
        );
      })}
    </OakButtonAsRadioGroup>
  );

  return (
    <>
      {" "}
      <OakBox $display={["block", "none"]}>
        <OakOutlineAccordion
          id={"mobile-unit-filter-accordion"}
          header={
            <OakHeading tag="h2" $font={"heading-5"}>
              Categories
            </OakHeading>
          }
          $pv={"inner-padding-xl"}
          $gap={"space-between-m"}
        >
          {OakRadioGroup}
        </OakOutlineAccordion>
      </OakBox>
      <OakBox $display={["none", "block"]}>{OakRadioGroup}</OakBox>
    </>
  );
};

/**
 *
 * PupilJourneyUnitsFilter component is a radio group of buttons that can be used to filter pupil journey units
 * add the menu items as an array of objects with text and id properties and provide a selected item id, and a callback function to handle the selection event.
 * The following callbacks are available for tracking focus events:
 *
 * ### Callbacks
 * onSelected: Callback when a menu item is selected, takes the selected item as an argument
 *
 */
export const PupilJourneyUnitsFilter = styled(UnstyledComponent)``;
