import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakTertiaryOLNav, OakTertiaryOLNavProps } from "./OakTertiaryOLNav";

import { OakAnchorTarget, OakFlex } from "@/components/atoms";
import { OakLink } from "@/components/molecules";

const items: OakTertiaryOLNavProps = {
  items: [
    {
      title: "Creating solid explanations and good modelling",
      href: "#solid-explanations",
    },
    {
      title: "Short item",
      href: "#short-item",
    },
    {
      title: "What is a lesson plan",
      href: "#lesson-plan",
    },
  ],
  ariaLabel: "navigation",
  title: "contents",
  anchorTarget: "nav",
};
/**
 * `OakTertiaryOLNav` provides a styled ordered list navigation.
 *
 * Each navigation link can be activated to represent the current view in a single-page layout or a sectioned page,
 * with an `aria-current` attribute that dynamically updates based on the `currentHref` prop to indicate the currently active section.
 *
 * ### Props
 *
 * - `title?: string`: Optional. Title displayed at the top of the navigation list.
 * - `items: { title: string; href: string }[]`: Required. An array of objects, each with a title and href, representing the navigation items.
 * - `ariaLabel?: string`: Optional. Aria-label for the navigation element to improve accessibility.
 * - `anchorTarget?: string`: Optional. An ID used to link to the target section, useful for anchor navigation.
 * - `currentHref?: string`: Optional. The href of the currently active section, used to dynamically set `aria-current`.
 * - `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void`: Optional. Callback function triggered on click events on navigation items.
 
 * ```
 */
const meta: Meta<typeof OakTertiaryOLNav> = {
  component: OakTertiaryOLNav,
  tags: ["autodocs"],
  title:
    "components/organisms/OWA (❌ to be moved out)/teacher/OakTertiaryOLNav",
};
export default meta;

type Story = StoryObj<typeof OakTertiaryOLNav>;

export const Default: Story = {
  render: (args) => {
    return (
      <>
        <OakTertiaryOLNav {...args} />
        <OakFlex
          $flexDirection={"column"}
          $mt={"spacing-48"}
          $gap={"spacing-120"}
          $background={"bg-decorative2-very-subdued"}
          $pa={"spacing-16"}
        >
          <OakFlex $position={"relative"}>
            <OakAnchorTarget id="solid-explanations" />
            <OakLink href={"#nav"}>Content 1</OakLink>
          </OakFlex>
          <OakFlex $position={"relative"}>
            <OakAnchorTarget id="short-item" />
            <OakLink href={"#nav"}>Content 2</OakLink>
          </OakFlex>
          <OakFlex $position={"relative"}>
            <OakAnchorTarget id="lesson-plan" />
            <OakLink href={"#nav"}>Content 3</OakLink>
          </OakFlex>
        </OakFlex>
      </>
    );
  },
  args: items,
};
