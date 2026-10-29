import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs";

import type { OakIconButtonProps } from "./OakIconButton";
import { OakIconButton } from "./OakIconButton";

import { oakIconNames } from "@/components/images-and-icons/OakIcon";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { parseSpacing } from "@/index";

const controlIconNames = [
  null,
  [...oakIconNames].sort((a, b) => a.localeCompare(b)),
].flat();

const meta: Meta<typeof OakIconButton> = {
  component: OakIconButton,
  tags: ["autodocs"],
  title: "components/Buttons/OakIconButton",
  argTypes: {
    isLoading: {
      control: "boolean",
    },
    iconName: {
      options: controlIconNames,
    },
    $colorScheme: {
      options: ["primary", "inverted"],
    },
    $size: {
      options: ["sm", "md"],
    },
    $variant: {
      options: ["primary", "secondary"],
    },
    $disabled: {
      control: "boolean",
    },
  },
  parameters: {
    controls: {
      include: [
        "isLoading",
        "iconName",
        "$colorScheme",
        "$size",
        "$variant",
        "$disabled",
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakIconButton>;

export const Default: Story = {
  render: (args) => <OakIconButton {...args}>Primary Button</OakIconButton>,
  args: {
    iconName: "arrow-right",
    $colorScheme: "primary",
    $size: "md",
    $variant: "primary",
  },
};

export const StateGrid: Story = {
  render: () => {
    const states = [
      { $colorScheme: "primary", $size: "md", $variant: "primary" },
      { $colorScheme: "primary", $size: "sm", $variant: "primary" },
      { $colorScheme: "inverted", $size: "md", $variant: "primary" },
      { $colorScheme: "inverted", $size: "sm", $variant: "primary" },
      { $colorScheme: "primary", $size: "md", $variant: "secondary" },
      { $colorScheme: "primary", $size: "sm", $variant: "secondary" },
    ] as const;

    return (
      <table
        style={{
          borderSpacing: `${parseSpacing("spacing-24")} ${parseSpacing("spacing-16")}`,
        }}
      >
        <thead>
          <tr>
            <th style={{ fontWeight: "normal" }}></th>
            <th style={{ fontWeight: "normal" }}>
              <code>default</code>
            </th>
            <th style={{ fontWeight: "normal" }}>
              <code>disabled</code>
            </th>
            <th style={{ fontWeight: "normal" }}>
              <code>loading</code>
            </th>
          </tr>
        </thead>
        <tbody>
          {states.map(
            (
              args: Pick<
                OakIconButtonProps,
                "$colorScheme" | "$size" | "$variant"
              >,
            ) => {
              const { $variant, $colorScheme, $size } = args;
              const argsAsString = JSON.stringify(args, null, 2);
              return (
                <tr key={argsAsString}>
                  <th style={{ textAlign: "left", fontWeight: "normal" }}>
                    <pre>
                      <code>{argsAsString}</code>
                    </pre>
                  </th>
                  <td>
                    <OakFlex $justifyContent="center" $alignItems="center">
                      <OakIconButton
                        $variant={$variant}
                        iconName="arrow-right"
                        $colorScheme={$colorScheme}
                        $size={$size}
                      />
                    </OakFlex>
                  </td>
                  <td>
                    <OakFlex $justifyContent="center" $alignItems="center">
                      <OakIconButton
                        $variant={$variant}
                        $disabled
                        iconName="arrow-right"
                        $colorScheme={$colorScheme}
                        $size={$size}
                      />
                    </OakFlex>
                  </td>
                  <td>
                    <OakFlex $justifyContent="center" $alignItems="center">
                      <OakIconButton
                        $variant={$variant}
                        isLoading
                        iconName="arrow-right"
                        $colorScheme={$colorScheme}
                        $size={$size}
                      />
                    </OakFlex>
                  </td>
                </tr>
              );
            },
          )}
        </tbody>
      </table>
    );
  },
};
