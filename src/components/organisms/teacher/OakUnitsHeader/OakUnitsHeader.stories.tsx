import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakUnitsHeader } from "./OakUnitsHeader";

import { OakInlineBanner } from "@/components";

const meta: Meta<typeof OakUnitsHeader> = {
  component: OakUnitsHeader,
  tags: ["autodocs"],
  title: "OWA/teacher/OakUnitsHeader",
  argTypes: {
    isLegacy: { type: "boolean" },
    subject: { type: "string" },
    phase: { type: "string" },
    curriculumHref: {
      control: {
        type: "radio",
      },
      options: ["Url", "Null"],
      mapping: { Url: "https://www.thenational.academy", Null: null },
    },
    banner: {
      control: {
        type: "select",
      },
      options: ["show", "hide"],
      mapping: {
        empty: [],
        show: (
          <OakInlineBanner
            isOpen={true}
            message={"Example banner text"}
            type="neutral"
            $width={"100%"}
          />
        ),
        hide: null,
      },
    },
  },
  parameters: {
    controls: {
      include: ["isLegacy", "subject", "phase", "curriculumHref", "banner"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakUnitsHeader>;

export const Default: Story = {
  render: (args) => <OakUnitsHeader {...args} />,
  args: {
    isLegacy: false,
    subject: "maths",
    phase: "secondary",
    curriculumHref: "Url",
  },
};
