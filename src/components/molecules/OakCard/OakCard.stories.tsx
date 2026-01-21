import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakCard } from "./OakCard";

import { oakIconNames } from "@/components/atoms";
import { additionalSpacingTokens, oakAllSpacingTokens } from "@/styles/theme/spacing";


const controlIconNames = [...oakIconNames].sort((a, b) => a.localeCompare(b));
const controlSpacingNames = [
  ...Object.keys(additionalSpacingTokens),
  ...Object.keys(oakAllSpacingTokens)]


const meta: Meta<typeof OakCard> = {
  title: "Components/molecules/OakCard",
  component: OakCard,
  tags: ["autodocs"],
  argTypes: {
    cardOrientation: {
      options: ['row', 'column']
    },
    cardWidth: {
      options: controlSpacingNames
    },
    aspectRatio: {
      options: ['1/1', '4/3']
    },
    linkIconName: {
      options: controlIconNames,
    },
  },
  parameters: {
    controls: {
      include: [
        "heading",
        "cardOrientation",
        "cardWidth",
        "aspectRatio",
        "subCopy",
        "tagName",
        "linkText",
        "linkIconName",
        "href",
      ],
    },
  }
};

export default meta;

type Story = StoryObj<typeof OakCard>;

export const Default: Story = {
  render: (args) => <OakCard {...args} />,
  args: {
    heading: "A Heading",
    cardOrientation: "column",
    cardWidth: "spacing-360",
    imageSrc: `https://${process.env.NEXT_PUBLIC_OAK_ASSETS_HOST}/${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/v1698336490/sample.jpg`,
    imageAlt: "Example Image Alt",
    aspectRatio: "4/3",
    subCopy: "Some subcopy",
    tagName: "Tag Name",
    linkText: "Link Text",
    linkIconName: "arrow-right",
    href: "https://example.com",
  },
};

export const ColumnOrientationWithSquareImage: Story = {
  render: (args) => <OakCard {...args} />,
  args: {
    heading: "Raising ambition and inspiring a love for language with Oak's English curriculum",
    cardOrientation: "column",
    cardWidth: "spacing-360",
    imageSrc: "https://sanity-asset-cdn.thenational.academy/images/cuvjke51/production/bb3aaee85a870c0356d88b6123c396115f28475f-2018x1134.png?w=640&fm=webp&q=80&fit=clip&auto=format",
    imageAlt: "Two pupils laughing in a classroom ",
    aspectRatio: "1/1",
    linkText: "Watch the video",
    linkIconName: "arrow-right",
    href: "https://example.com",
  },
};

export const RowOrientationWithRectangularImage: Story = {
  render: (args) => <OakCard {...args} />,
  args: {
    heading: "Building curious, confident historians: inside Oak's history curriculum",
    cardOrientation: "row",
    cardWidth: "100%",
    imageSrc: "https://sanity-asset-cdn.thenational.academy/images/cuvjke51/production/7830648e67825d0f931e4535f11bbf21d10e82aa-600x400.jpg?w=640&fm=webp&q=80&fit=clip&auto=format",
    imageAlt: "Pupils sat in a classroom at desks, some pupils are raising their hands",
    aspectRatio: "4/3",
    subCopy: "7 January 2026",
    tagName: "Curriculum planning",
    linkText: "Read more",
    linkIconName: "arrow-right",
    href: "https://example.com",
  },
};

export const DownloadCard: Story = {
  render: (args) => <OakCard {...args} />,
  args: {
    heading: "Oak's 2022-2025 strategy: April 2024 update",
    cardOrientation: "column",
    cardWidth: "spacing-240",
    subCopy: "PDF, 4.8MB",
    linkText: "Download",
    linkIconName: "download",
    href: "https://example.com/brochure.pdf",
  },
};
