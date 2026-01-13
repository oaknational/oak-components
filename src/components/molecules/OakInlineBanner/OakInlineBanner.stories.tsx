import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import React from "react";

import {
  OakInlineBanner,
  bannerTypes,
  bannerVariants,
} from "@/components/molecules/OakInlineBanner";
import { OakSecondaryLink } from "@/components/molecules/OakSecondaryLink";
import { oakIconNames } from "@/components/atoms";
import { OakPrimaryButton } from "@/components/molecules/OakPrimaryButton";

const meta: Meta<typeof OakInlineBanner> = {
  component: OakInlineBanner,
  tags: ["autodocs"],
  title: "components/Messaging and feedback/OakInlineBanner",
  argTypes: {
    type: {
      options: Object.keys(bannerTypes),
    },
    variant: {
      options: Object.keys(bannerVariants),
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
        "variant",
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
    variant: "regular",
    isOpen: true,
    title: "Information",
    message: `Provide users with non-disruptive feedback`,
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
    titleTag: "h2",
  },
};

export const InfoSimple: Story = {
  args: {
    type: "info",
    title: undefined,
  },
};

export const InfoLarge: Story = {
  args: {
    type: "info",
    variant: "large",
    message: `Provide users with clear, timely, and non-disruptive feedback to support 
      their understanding of actions and outcomes without interrupting their 
      flow. Whether confirming a successful task, alerting them to an error, or 
      informing them of a background process, feedback should be subtle and 
      contextual—reinforcing confidence without demanding unnecessary attention.`,
    cta: (
      <OakPrimaryButton iconName="chevron-right" isTrailingIcon>
        Button
      </OakPrimaryButton>
    ),
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

export const NeutralLarge: Story = {
  args: {
    type: "neutral",
    variant: "large",
    message: `Provide users with clear, timely, and non-disruptive feedback to support 
      their understanding of actions and outcomes without interrupting their 
      flow. Whether confirming a successful task, alerting them to an error, or 
      informing them of a background process, feedback should be subtle and 
      contextual—reinforcing confidence without demanding unnecessary attention.`,
    cta: (
      <OakPrimaryButton iconName="chevron-right" isTrailingIcon>
        Button
      </OakPrimaryButton>
    ),
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

export const SuccessLarge: Story = {
  args: {
    type: "success",
    variant: "large",
    message: `Provide users with clear, timely, and non-disruptive feedback to support 
      their understanding of actions and outcomes without interrupting their 
      flow. Whether confirming a successful task, alerting them to an error, or 
      informing them of a background process, feedback should be subtle and 
      contextual—reinforcing confidence without demanding unnecessary attention.`,
    cta: (
      <OakPrimaryButton iconName="chevron-right" isTrailingIcon>
        Button
      </OakPrimaryButton>
    ),
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

export const AlertLarge: Story = {
  args: {
    type: "alert",
    variant: "large",
    message: `Provide users with clear, timely, and non-disruptive feedback to support 
      their understanding of actions and outcomes without interrupting their 
      flow. Whether confirming a successful task, alerting them to an error, or 
      informing them of a background process, feedback should be subtle and 
      contextual—reinforcing confidence without demanding unnecessary attention.`,
    cta: (
      <OakPrimaryButton iconName="chevron-right" isTrailingIcon>
        Button
      </OakPrimaryButton>
    ),
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
  },
};

export const WarningSimple: Story = {
  args: {
    type: "warning",
    title: undefined,
  },
};

export const WarningLarge: Story = {
  args: {
    type: "warning",
    variant: "large",
    message: `Provide users with clear, timely, and non-disruptive feedback to support 
      their understanding of actions and outcomes without interrupting their 
      flow. Whether confirming a successful task, alerting them to an error, or 
      informing them of a background process, feedback should be subtle and 
      contextual—reinforcing confidence without demanding unnecessary attention.`,
    cta: (
      <OakPrimaryButton iconName="chevron-right" isTrailingIcon>
        Button
      </OakPrimaryButton>
    ),
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

export const ErrorLarge: Story = {
  args: {
    type: "error",
    variant: "large",
    message: `Provide users with clear, timely, and non-disruptive feedback to support 
      their understanding of actions and outcomes without interrupting their 
      flow. Whether confirming a successful task, alerting them to an error, or 
      informing them of a background process, feedback should be subtle and 
      contextual—reinforcing confidence without demanding unnecessary attention.`,
    cta: (
      <OakPrimaryButton iconName="chevron-right" isTrailingIcon>
        Button
      </OakPrimaryButton>
    ),
  },
};

export const OverriddenStyling: Story = {
  args: {
    type: undefined,
    canDismiss: false,
    icon: "rocket",
    $borderColor: "border-decorative4",
    $background: "bg-decorative4-very-subdued",
    iconColorFilter: "oakGreen",
  },
};

export const OverriddenStylingSimple: Story = {
  args: {
    type: undefined,
    canDismiss: false,
    icon: "rocket",
    $borderColor: "border-decorative4",
    $background: "bg-decorative4-very-subdued",
    iconColorFilter: "oakGreen",
    title: undefined,
  },
};

export const OverriddenStylingLarge: Story = {
  args: {
    type: undefined,
    canDismiss: false,
    icon: "rocket",
    $borderColor: "border-decorative4",
    $background: "bg-decorative4-very-subdued",
    iconColorFilter: "oakGreen",
    variant: "large",
    message: `Provide users with clear, timely, and non-disruptive feedback to support 
      their understanding of actions and outcomes without interrupting their 
      flow. Whether confirming a successful task, alerting them to an error, or 
      informing them of a background process, feedback should be subtle and 
      contextual—reinforcing confidence without demanding unnecessary attention.`,
    cta: (
      <OakPrimaryButton iconName="chevron-right" isTrailingIcon>
        Button
      </OakPrimaryButton>
    ),
  },
};
