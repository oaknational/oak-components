import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import styled from "styled-components";

import { OakFilterDrawer } from "./OakFilterDrawer";

import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakHeading } from "@/components/typography/OakHeading";
import { OakSearchFilterCheckBox } from "@/components/form-elements";
import { OakRadioGroup } from "@/components/form-elements/OakRadioGroup";
import { OakButton } from "@/components/buttons/OakButton";
import { OakRadioButton } from "@/components/form-elements/OakRadioButton";

const StyledFieldset = styled.fieldset`
  border: 0px;
  margin: 0;
  padding: 0;
`;

const meta: Meta<typeof OakFilterDrawer> = {
  component: OakFilterDrawer,
  tags: ["autodocs"],
  title: "OWA/OakFilterDrawer",
  parameters: {
    controls: {
      include: ["isOpen", "onClose", "clearAllInputs"],
    },
  },
  args: {
    "aria-label": "Example filter drawer",
    "aria-description": "This is an example filter drawer",
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    const onClose = () => updateArgs({ isOpen: false });
    const onOpen = () => updateArgs({ isOpen: true });

    return (
      <>
        <OakButton variant="secondary" onClick={onOpen}>
          Open filter drawer
        </OakButton>
        <OakFilterDrawer
          {...args}
          onClose={onClose}
          footerSlot={
            <OakButton variant="primary" onClick={onClose}>
              Show results (23)
            </OakButton>
          }
        >
          <>
            <StyledFieldset>
              <OakHeading as={"legend"} $mv={"spacing-24"} tag={"h4"}>
                Filter option buttons
              </OakHeading>
              <OakFlex
                $flexWrap={"wrap"}
                $mb={"spacing-32"}
                $gap={"spacing-12"}
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
            </StyledFieldset>
            <StyledFieldset>
              <OakHeading as={"legend"} $mb={"spacing-24"} tag="h4">
                Filter option radio
              </OakHeading>
              <OakBox $mb={"spacing-24"}>
                <OakRadioGroup
                  $gap={"spacing-12"}
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
            </StyledFieldset>
          </>
        </OakFilterDrawer>
      </>
    );
  },
};

export default meta;

type Story = StoryObj<typeof OakFilterDrawer>;

export const Default: Story = {};
