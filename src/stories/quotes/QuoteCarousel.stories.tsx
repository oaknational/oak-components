import type { Meta } from "@storybook/react";

import { OakCarousel } from "@/components/molecules/OakCarousel/OakCarousel";

export {
  Default,
  IsLooping,
} from "@/components/molecules/OakCarousel/OakCarousel.stories";

const meta: Meta<typeof OakCarousel> = {
  title: "QUOTES/Quote Carousel",
  component: OakCarousel,
  tags: ["autodocs"],
};

export default meta;
