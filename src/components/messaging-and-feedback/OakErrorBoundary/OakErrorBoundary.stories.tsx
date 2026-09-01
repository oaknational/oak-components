import { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";
import React, { useState } from "react";

import { OakErrorBoundary } from "./OakErrorBoundary";

import { OakP } from "@/components/typography";
import { OakFlex } from "@/components/layout-and-structure";
import { OakPrimaryButton } from "@/components/buttons";

const mockOnRetryFunction = fn().mockName("onRetry");

function ComponentThatThrowsError() {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error("This is a test error");
  }

  return (
    <OakFlex $gap="spacing-12" $flexDirection="column">
      <OakP>
        This component will throw an error on re-render when the button is
        clicked.
      </OakP>
      <OakPrimaryButton onClick={() => setShouldThrow(true)}>
        Throw render error
      </OakPrimaryButton>
    </OakFlex>
  );
}

const meta: Meta<typeof OakErrorBoundary> = {
  component: OakErrorBoundary,
  tags: ["autodocs"],
  title: "components/Messaging and feedback/OakErrorBoundary",
  argTypes: {
    sectionName: {
      control: "text",
    },
    message: {
      control: "text",
      optional: true,
    },
    onRetry: {
      options: ["undefined", "mockFunction"],
      mapping: {
        undefined: undefined,
        mockFunction: mockOnRetryFunction,
      },
      control: {
        type: "select", // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          undefined: "undefined",
          mockFunction: "Example function",
        },
      },
    },
  },
  parameters: {
    controls: {
      include: ["sectionName", "message", "onRetry"],
    },
  },
  args: {
    onError: fn().mockName("onError"),
    onRetry: undefined,
  },
};

export default meta;

type Story = StoryObj<typeof OakErrorBoundary>;

export const OnlySectionName: Story = {
  render: (args) => {
    return (
      <OakErrorBoundary {...args}>
        <ComponentThatThrowsError />
      </OakErrorBoundary>
    );
  },
  args: {
    sectionName: "video",
  },
};
export const WithMessage: Story = {
  render: (args) => {
    return (
      <OakErrorBoundary
        {...args}
        sectionName="video"
        message="An error occurred while loading the video."
      >
        <ComponentThatThrowsError />
      </OakErrorBoundary>
    );
  },
  args: {
    sectionName: "video",
    message: "An error occurred while loading the video.",
  },
};
export const WithRetry: Story = {
  render: (args) => {
    return (
      <OakErrorBoundary {...args}>
        <ComponentThatThrowsError />
      </OakErrorBoundary>
    );
  },
  args: {
    onRetry: mockOnRetryFunction,
    sectionName: "video",
  },
};

export const WithMessageAndRetry: Story = {
  render: (args) => {
    return (
      <OakErrorBoundary {...args}>
        <ComponentThatThrowsError />
      </OakErrorBoundary>
    );
  },
  args: {
    onRetry: mockOnRetryFunction,
    sectionName: "video",
    message: "An error occurred while loading the video.",
  },
};
