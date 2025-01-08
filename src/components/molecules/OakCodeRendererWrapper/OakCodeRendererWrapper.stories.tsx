import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakCodeRendererWrapper } from "./OakCodeRendererWrapper";

const meta: Meta<typeof OakCodeRendererWrapper> = {
  title: "Components/molecules/OakCodeRendererWrapper",
  component: OakCodeRendererWrapper,
  tags: ["autodocs"],
  parameters: {
    controls: {
      include: ["string", "type"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakCodeRendererWrapper>;

export const Default: Story = {
  render: (args) => <OakCodeRendererWrapper string={args.string} />,
  args: {
    string:
      'What is the `output` of the following Python code?\n\n```is_weekend = True\nhave_homework = False\n\nif is_weekend and not have_homework:\n   print("Time to chill and relax")\nelse:\n   print("Time to study.")```',
  },
};

export const QuestionStem1: Story = {
  render: (args) => <OakCodeRendererWrapper string={args.string} />,
  args: {
    string:
      'What will be the output of the following Python code?\n\n```   grade = 75\n\nif grade >= 90:\n    print("A")\nelif grade >= 80:\n    print("B")\nelif grade >= 70:\n    print("C")\nelse:\n    print("Fail")```',
  },
};

export const QuestionStem2: Story = {
  render: (args) => <OakCodeRendererWrapper string={args.string} />,
  args: {
    string:
      "What is the primary purpose of indentation in Python code, especially in the context of `if`, `elif`, and `else` statements?",
  },
};

export const Answer1: Story = {
  render: (args) => <OakCodeRendererWrapper string={args.string} />,
  args: {
    string: '`"Hello world!"`',
  },
};

export const NoCode: Story = {
  render: (args) => <OakCodeRendererWrapper string={args.string} />,
  args: {
    string: "This is a simple text without any backticks.",
  },
};
