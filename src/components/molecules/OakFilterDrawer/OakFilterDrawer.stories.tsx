import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

import { OakFilterDrawer } from "./OakFilterDrawer";

import { OakSecondaryButton } from "@/components/molecules/OakSecondaryButton";
import { OakBox, OakFlex, OakHeading } from "@/components/atoms";
import { OakSearchFilterCheckBox } from "@/components/organisms";
import { OakRadioGroup } from "@/components/molecules/OakRadioGroup";
import { OakPrimaryButton } from "@/components/molecules/OakPrimaryButton";
import { OakRadioButton } from "@/components/molecules/OakRadioButton";

const meta: Meta<typeof OakFilterDrawer> = {
  component: OakFilterDrawer,
  tags: ["autodocs"],
  title: "components/molecules/OakFilterDrawer",
  argTypes: {
    children: {
      control: "text",
    },
  },
  parameters: {
    controls: {
      include: ["children", "isOpen", "onClose", "clearAllInputs"],
    },
  },
  args: {
    "aria-label": "Example filter drawer",
    "aria-description": "This is an example filter drawer",
    children: (
      <>
        <OakHeading $mv={"space-between-m"} tag={"h4"}>
          Filter option buttons
        </OakHeading>
        <OakFlex
          $flexWrap={"wrap"}
          $mb={"space-between-m2"}
          $gap={"space-between-m"}
        >
          {[1, 2, 3].map((i) => {
            return (
              <OakSearchFilterCheckBox
                key={i}
                onChange={() => {}}
                value={`filter-option-${i}`}
                id={`filter-option-${i}`}
                displayValue={`${i} filter option`}
              />
            );
          })}
        </OakFlex>
        <OakHeading $mb={"space-between-m"} tag="h4">
          Filter option radio
        </OakHeading>
        <OakBox $mb={"space-between-m"}>
          <OakRadioGroup
            $gap={"space-between-m"}
            name="radio-group"
            $flexWrap={"wrap"}
          >
            <OakRadioButton id="radio-1" value="1" label="Option 1" />
            <OakRadioButton id="radio-2" value="2" label="Option 2" />
            <OakRadioButton id="radio-3" value="3" label="Option 3" />
            <OakRadioButton id="radio-4" value="4" label="Option 4" />
            <OakRadioButton id="radio-5" value="5" label="Option 5" />
          </OakRadioGroup>
        </OakBox>
      </>
    ),
  },
  render: (args) => {
    const [, updateArgs] = useArgs();
    const onClose = () => updateArgs({ isOpen: false });
    const onOpen = () => updateArgs({ isOpen: true });

    return (
      <>
        <OakSecondaryButton onClick={onOpen}>
          Open filter drawer
        </OakSecondaryButton>
        <OakFilterDrawer
          {...args}
          onClose={onClose}
          footerSlot={
            <OakPrimaryButton onClick={onClose}>
              Show results (23)
            </OakPrimaryButton>
          }
        />
      </>
    );
  },
};

export default meta;

type Story = StoryObj<typeof OakFilterDrawer>;

export const Default: Story = {};
