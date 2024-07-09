import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import React from "react";

import {
  OakInlineBanner,
  OakSecondaryLink,
  bannerTypes,
} from "@/components/molecules";
import { oakIconNames } from "@/components/atoms";

const meta: Meta<typeof OakInlineBanner> = {
  component: OakInlineBanner,
  tags: ["autodocs"],
  title: "components/molecules/OakInlineBanner",
  argTypes: {
    type: {
      options: Object.keys(bannerTypes),
    },
    title: {
      control: {
        type: "text",
      },
    },
    message: {
      control: {
        type: "text",
      },
    },
    cta: {
      control: {
        type: "text",
      },
    },
    canDismiss: {
      control: {
        type: "boolean",
      },
    },
    icon: {
      options: [undefined, ...oakIconNames],
    },
  },
  parameters: {
    controls: {
      include: [
        "type",
        "title",
        "isOpen",
        "message",
        "cta",
        "canDismiss",
        "icon",
      ],
    },
  },
  args: {
    type: "info",
    isOpen: true,
    title: "Information",
    message:
      "Lorem ipsum dolor sit amet consectetur. Arcu proin rhoncus eget aliquet.",
    cta: (
      <OakSecondaryLink
        iconName="chevron-right"
        isTrailingIcon
        href={`#${Math.random()}`}
      >
        Link
      </OakSecondaryLink>
    ),
    canDismiss: true,
    onDismiss: () => console.log("dismissed"),
  },
  render: (args) => {
    const [, updateArgs] = useArgs();
    const onDismiss = () => updateArgs({ isOpen: false });

    return (
      <>
        <OakInlineBanner {...args} onDismiss={onDismiss} />
      </>
    );
  },
};
export default meta;

type Story = StoryObj<typeof OakInlineBanner>;

export const Info: Story = {
  args: {
    type: "info",
  },
};

export const InfoSimple: Story = {
  args: {
    type: "info",
    title: undefined,
  },
};

export const Neutral: Story = {
  args: {
    type: "neutral",
  },
};

export const NeutralSimple: Story = {
  args: {
    type: "neutral",
    title: undefined,
  },
};

export const Success: Story = {
  args: {
    type: "success",
  },
};

export const SuccessSimple: Story = {
  args: {
    type: "success",
    title: undefined,
  },
};

export const Alert: Story = {
  args: {
    type: "alert",
  },
};

export const AlertSimple: Story = {
  args: {
    type: "alert",
    title: undefined,
  },
};

export const Error: Story = {
  args: {
    type: "error",
  },
};

export const ErrorSimple: Story = {
  args: {
    type: "error",
    title: undefined,
  },
};

export const OverriddenStyling: Story = {
  args: {
    type: undefined,
    canDismiss: false,
    icon: "rocket",
    $borderColor: "pink",
    $background: "pink30",
    iconColorFilter: "oakGreen",
  },
};

export const OverriddenStylingSimple: Story = {
  args: {
    type: undefined,
    canDismiss: false,
    icon: "rocket",
    $borderColor: "pink",
    $background: "pink30",
    iconColorFilter: "oakGreen",
    title: undefined,
  },
};
