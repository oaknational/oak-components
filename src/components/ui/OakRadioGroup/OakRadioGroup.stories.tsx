import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakRadioButton } from "../OakRadioButton/OakRadioButton";

import { OakRadioGroup } from "./OakRadioGroup";

import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { typographyArgTypes } from "@/storybook-helpers/typographyStyleHelpers";
import { radioInputArgTypes } from "@/storybook-helpers/radioInputHelpers";
import { flexArgTypes } from "@/storybook-helpers/flexStyleHelpers";

/**
 *
 * An unstyled button to be used as a basis for all UI button components.
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`

 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */

const meta: Meta<typeof OakRadioGroup> = {
  component: OakRadioGroup,
  tags: ["autodocs"],
  title: "components/ui/OakRadioGroup",
  argTypes: {
    ...flexArgTypes,
    ...colorArgTypes,
    ...typographyArgTypes,
    ...radioInputArgTypes,
  },
  parameters: {
    controls: {
      include: [
        ...Object.keys(flexArgTypes),
        ...Object.keys(typographyArgTypes),
        ...Object.keys(radioInputArgTypes),
        ...Object.keys(colorArgTypes),
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakRadioGroup>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("1");
    return (
      <>
        <OakRadioGroup {...args} state={value} setState={setValue}>
          <OakRadioButton
            value="1"
            label="Option 1"
            $inputCheckedColor={"black"}
            $inputHoverColor={"lemon"}
          />
          <OakRadioButton
            value="2"
            label="Option 2"
            $inputCheckedColor={"black"}
            $inputHoverColor={"lemon"}
          />
          <OakRadioButton
            value="3"
            label="Option 3"
            $inputCheckedColor={"black"}
            $inputHoverColor={"lemon"}
          />
        </OakRadioGroup>
      </>
    );
  },
  args: {
    name: "test",
  },
};
