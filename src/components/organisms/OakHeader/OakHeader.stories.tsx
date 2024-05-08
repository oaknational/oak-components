import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakHeader } from "./OakHeader";

import { OakLink } from "@/components/molecules";

const meta: Meta<typeof OakHeader> = {
  //  "title" is the title of the story and where to look for compoent in the storybook
  title: "Components/organisms/OakHeader",
  component: OakHeader,
  tags: ["autodocs"],
  argTypes: {
    headingTitle: { type: "string" },
    authorName: { type: "string" },
    authorTitle: { type: "string" },
    backgroundColour: { type: "string" },
    heroImageSrc: { type: "string" },
    heroImageAlt: { type: "string" },
    imageSrc: { type: "string" },
    imageAlt: { type: "string" },
    subHeadingText: { type: "string" },
  },
  parameters: {
    controls: {
      include: [
        // include the argTypes from the storybook-helpers
        // ...Object.keys(colorArgTypes),
        // ...Object.keys(spacingArgTypes),
        // ...Object.keys(borderArgTypes),
        "type",
      ],
    },
  },
  args: {
    headingTitle: "How to plan a lesson: a helpful guide for teachers",
    backgroundColour: "bg-decorative3-main",
    //Breadcrumb component doesn't exist in the storybook/component library
    breadcrumbs: (
      <>
        <OakLink href="/home">Home</OakLink> {">"}
        <OakLink href="/lessons">Lessons</OakLink>
      </>
    ),
    blogProfileAuthor: "Rachel Storm",
    authorTitle: "Head of School Support",
    authorName: "Rachel Storm",
    subHeadingText:
      "Body 1 Our guide for teachers, whether you're in your ITT, an ECT or a teacher of many years experience looking for a fresh look on lesson planning, is place to dive into expertise from across the sector.",
    heroImageSrc: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336490/sample.jpg`,
  },
};

export default meta;

type Story = StoryObj<typeof OakHeader>;

export const Default: Story = {
  render: (args) => <OakHeader {...args} />,
  args: {},
};
