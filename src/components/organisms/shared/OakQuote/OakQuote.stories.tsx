import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakQuote } from "./OakQuote";

import { OakMaxWidth } from "@/components/atoms";

const meta: Meta<typeof OakQuote> = {
  component: OakQuote,
  tags: ["autodocs"],
  title: "components/Presentational/OakQuote",
  argTypes: {
    quote: { type: "string" },
    color: { type: "string" },
    authorName: { type: "string" },
    authorTitle: { type: "string" },
    authorImageSrc: { type: "string" },
  },
  parameters: {
    controls: {
      include: [
        "quote",
        "color",
        "authorName",
        "authorTitle",
        "authorImageSrc",
      ],
    },
  },
  args: {
    quote:
      "Using AI to support my planning and teaching wasn’t something I’d really considered until I came across Aila. To say I was blown away would be an understatement!",
    color: "bg-decorative1-main",
  },
};

export default meta;

type Story = StoryObj<typeof OakQuote>;

export const Default: Story = {
  render: (args) => <OakQuote {...args} />,
  args: {
    authorName: "Suzanne",
    authorTitle: "Headteacher at Maple Grove Primary School",
    authorImageSrc: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336490/test-images/test_quote_author.jpg`,
  },
};

export const QuoteOnly: Story = {
  render: (args) => <OakQuote {...args} />,
  args: {
    color: "bg-decorative2-main",
  },
};

export const WithoutImage: Story = {
  render: (args) => <OakQuote {...args} />,
  args: {
    authorName: "Suzanne",
    authorTitle: "Headteacher at Maple Grove Primary School",
    color: "bg-decorative3-main",
  },
};

export const MintPageBackground: Story = {
  render: (args) => (
    <OakMaxWidth $background={"bg-decorative1-main"} $pa={"spacing-24"}>
      <OakQuote {...args} />
    </OakMaxWidth>
  ),
  args: {
    color: "blackSemiTransparent",
  },
};
