import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakCarousel } from "./OakCarousel";

import { OakQuote } from "@/components/organisms/shared/OakQuote/OakQuote";

const meta: Meta<typeof OakCarousel> = {
  component: OakCarousel,
  tags: ["autodocs"],
  title: "components/Presentational/OakCarousel/OakCarousel",
  argTypes: {},
  parameters: {
    controls: {
      include: ["isLooping", "backLabel", "fwdLabel"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakCarousel>;

const testimonials = [
  {
    authorName: "Suzanne",
    authorTitle: "Headteacher at Maple Grove Primary School",
    authorImageSrc: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336490/test-images/test_quote_author.jpg`,
    quote:
      "I must say, this has been a life saver for me. As an ECT 1 Teacher of Science, quality of resource has been of tremendous help, cutting my planning time into half.",
  },
  {
    authorName: "Jenny",
    authorTitle: "Teacher at Oak Grove Primary School",
    authorImageSrc: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336490/test-images/test_quote_author.jpg`,
    quote:
      "I must say, this has been a life saver for me. As an ECT 1 Teacher of Science, quality of resource has been of tremendous help, cutting my planning time into half.",
  },
  {
    authorName: "Rachel",
    authorTitle: "Teaching Assistant at Chestnut Grove Primary School",
    authorImageSrc: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336490/test-images/test_quote_author.jpg`,
    quote:
      "I must say, this has been a life saver for me. As an ECT 1 Teacher of Science, quality of resource has been of tremendous help, cutting my planning time into half.",
  },
];

const content = testimonials.map((testimonial, i) => (
  <OakQuote
    key={testimonial.authorName + i}
    {...testimonial}
    color={"transparent"}
  />
));

export const Default: Story = {
  render: (args) => <OakCarousel {...args} />,
  args: {
    content,
    backLabel: "Back",
    fwdLabel: "Forward",
    containerLabel: "Carousel",
  },
};

export const IsLooping: Story = {
  render: (args) => <OakCarousel {...args} />,
  args: {
    content,
    isLooping: true,
    backLabel: "Back",
    fwdLabel: "Forward",
    containerLabel: "Carousel",
  },
};
