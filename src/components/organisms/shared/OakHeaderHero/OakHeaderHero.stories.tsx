import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakHeaderHero } from "./OakHeaderHero";

import { OakLink } from "@/components/molecules";

const meta: Meta<typeof OakHeaderHero> = {
  title: "Components/organisms/OakHeaderHero",
  component: OakHeaderHero,
  tags: ["autodocs"],
  argTypes: {
    headingTitle: { type: "string" },
    authorName: { type: "string" },
    authorTitle: { type: "string" },
    heroImageSrc: { type: "string" },
    heroImageAlt: { type: "string" },
    authorImageSrc: { type: "string" },
    imageSrc: { type: "string" },
    imageAlt: { type: "string" },
    subHeadingText: { type: "string" },
  },
  parameters: {
    controls: {
      include: [
        "headingTitle",
        "authorName",
        "authorTitle",
        "subHeadingText",
        "heroImageSrc",
        "imageSrc",
        "type",
      ],
    },
  },
  args: {
    headingTitle: "How to plan a lesson: a helpful guide for teachers",
    //Breadcrumb component doesn't exist in the storybook/component library
    breadcrumbs: (
      <>
        <OakLink href="/home">Home</OakLink> {">"}
        <OakLink href="/lessons">Lessons</OakLink>
      </>
    ),
    heroImageAlt: "Hero image",
    authorImageAlt: "Author image",
    blogProfileAuthor: "Rachel Storm",
    authorTitle: "Head of School Support",
    authorName: "Rachel Storm",
    authorImageSrc: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336490/test-images/test_author.jpg`,
    subHeadingText:
      "Body 1 Our guide for teachers, whether you're in your ITT, an ECT or a teacher of many years experience looking for a fresh look on lesson planning, is place to dive into expertise from across the sector.",
    heroImageSrc: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336490/sample.jpg`,
  },
};

export default meta;

type Story = StoryObj<typeof OakHeaderHero>;

export const Default: Story = {
  render: (args) => <OakHeaderHero {...args} />,
  args: {},
};
