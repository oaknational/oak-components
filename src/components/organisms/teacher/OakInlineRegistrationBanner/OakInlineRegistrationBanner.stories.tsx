import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakInlineRegistrationBanner } from "./OakInlineRegistrationBanner";

import { colorArgTypes } from "@/storybook-helpers/colorStyleHelpers";
import { borderArgTypes } from "@/storybook-helpers/borderStyleHelpers";
import { OakHeading, OakSpan } from "@/components/atoms";
import { OakLink } from "@/components/molecules";
const success = () => Promise.resolve("Success");
const failure = () => {
  throw new Error("oops");
};

const meta: Meta<typeof OakInlineRegistrationBanner> = {
  title: "Components/Organisms/teacher/OakInlineRegistrationBanner",
  component: OakInlineRegistrationBanner,
  tags: ["autodocs"],
  argTypes: {
    onSubmit: {
      control: { type: "radio" },
      options: ["success", "failure"],
      mapping: {
        success,
        failure,
      },
    },
    ...colorArgTypes,
    ...borderArgTypes,
  },
};

export default meta;

type Story = StoryObj<typeof OakInlineRegistrationBanner>;

export const Default: Story = {
  render: (args) => <OakInlineRegistrationBanner {...args} />,
  args: {
    onSubmit: success,
    headerText: (
      <OakHeading tag="h2" $font={["heading-5", "heading-4", "heading-4"]}>
        Full unit on the way!
      </OakHeading>
    ),
    bodyText: (
      <OakSpan $font="body-1">
        We’re busy creating the final lessons for our new curriculum. Stay tuned
        for updates. You can unsubscribe at any time. Read our{" "}
        <OakLink>privacy policy</OakLink>.
      </OakSpan>
    ),
  },
};
