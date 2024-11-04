import React from "react";

import styled from "styled-components";
import { OakButtonAsRadioGroup } from "@/components/molecules/OakButtonAsRadioGroup";
import { OakSecondaryButtonAsRadio } from "@/components/molecules/OakSecondaryButtonAsRadio";
import { OakSecondaryButton } from "@/components/molecules/OakSecondaryButton";
import { OakOutlineAccordion } from "@/components/molecules/OakOutlineAccordion";
import { OakHeading } from "@/components/atoms/OakHeading";
import { OakFlex } from "@/components/atoms";

const StyledOakSecondaryButton = styled(OakSecondaryButton)`
  & > button {
    opacity: 0;
    position: absolute;
    &:focus-visible {
      opacity: 1;
      position: relative;
    }
  }
`;

type MenuItem = {
  displayText: string;
  value: string;
};

export type OakPupilJourneyUnitsFilterProps = {
  menuItems: MenuItem[];
  selected: string;
  onSelected: (arg0: MenuItem) => void;
  onSkipCallback: () => void;
};

/**
 *
 * OakPupilJourneyUnitsFilter component is a radio group of buttons that can be used to filter pupil journey units
 * add the menu items as an array of objects with text and id properties and provide a selected item id, and a callback function to handle the selection event.
 * The following callbacks are available for tracking focus events:
 *
 * ### Callbacks
 * onSelected: Callback when a menu item is selected, takes the selected item as an argument
 *
 */

export const OakPupilJourneyUnitsFilter = (
  props: OakPupilJourneyUnitsFilterProps,
) => {
  const { menuItems, selected, onSelected, onSkipCallback } = props;

  const OakRadioGroup = (
    <OakButtonAsRadioGroup
      name="OakPupilJourneyUnitsFilter"
      ariaLabel="OakPupilJourneyUnitsFilter"
      onChange={(value) => {
        const selectedItem = menuItems.find((item) => item.value === value);
        if (!selectedItem) {
          throw new Error("Selected item not found");
        }
        onSelected(selectedItem);
      }}
      defaultValue={selected}
      $justifyContent={["start", "start", "end"]}
      $flexWrap={"wrap"}
    >
      {menuItems.map((item, i) => {
        return (
          <OakSecondaryButtonAsRadio
            key={item.value + "_" + i}
            value={item.value}
          >
            {item.displayText}
          </OakSecondaryButtonAsRadio>
        );
      })}
    </OakButtonAsRadioGroup>
  );

  return (
    <>
      <OakFlex $display={["block", "none"]} $flexGrow={1}>
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
      </OakFlex>
      <OakFlex
        $display={["none", "flex"]}
        $gap={"space-between-m"}
        $flexDirection={"column"}
        $alignItems={"end"}
      >
        {menuItems.length > 3 && (
          <StyledOakSecondaryButton onClick={onSkipCallback}>
            Skip to results
          </StyledOakSecondaryButton>
        )}

        <OakFlex $display={"block"} $flexGrow={1}>
          {OakRadioGroup}
        </OakFlex>
      </OakFlex>
    </>
  );
};
