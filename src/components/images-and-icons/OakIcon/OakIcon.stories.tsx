import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs";

import { OakIcon, OakIconName, OakIconProps, oakIconNames } from "./OakIcon";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakTypography } from "@/components/typography/OakTypography";
import { sizeArgTypes } from "@/storybook-helpers/sizeStyleHelpers";
import { colorFilterArgTypes } from "@/storybook-helpers/colorFilterStyleHelpers";
import { OakHeading } from "@/components/typography";
import { OakBox } from "@/index";

const controlIconNames = [...oakIconNames].sort((a, b) => a.localeCompare(b));

const meta: Meta<typeof OakIcon> = {
  component: OakIcon,
  tags: ["autodocs"],
  title: "components/Images and icons/OakIcon",
  argTypes: {
    iconName: {
      options: controlIconNames,
    },
    ...sizeArgTypes,
    ...colorFilterArgTypes,
  },
  parameters: {
    controls: {
      include: [
        "iconName",
        "$width",
        "$height",
        ...Object.keys(colorFilterArgTypes),
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakIcon>;

const allIconNames = [...oakIconNames];
function pick(key: string) {
  const index = allIconNames.findIndex((icon) => icon === key);
  if (index !== -1) {
    allIconNames.splice(index, 1);
    return key;
  } else {
    return `missing:${key}`;
  }
}
const groups = [
  {
    name: "media",
    icons: [
      pick("captions"),
      pick("playback-0.5x"),
      pick("playback-0.75x"),
      pick("playback-1x"),
      pick("playback-1.5x"),
      pick("playback-2x"),
      pick("playback-2.5x"),
      pick("playback-3x"),
      pick("play"),
      pick("pause"),
      pick("go"),
      pick("sign-language"),
      pick("forward-10"),
      pick("back-10"),
      pick("sound-off"),
      pick("sound-low"),
      pick("sound-high"),
      pick("transcript"),
      pick("grid"),
      pick("full-screen"),
      pick("out-of-window"),
    ],
  },
  {
    name: "social",
    icons: [
      pick("facebook"),
      pick("instagram"),
      pick("linkedin"),
      pick("twitter"),
    ],
  },
  {
    name: "teaching-resources",
    icons: [
      pick("additional-material"),
      pick("ai-lesson-plan"),
      pick("quiz"),
      pick("signed-video"),
      pick("slide-deck"),
      pick("video"),
      pick("media"),
      pick("worksheet"),
      pick("lesson-plan"),
      pick("lesson-files"),
      pick("curriculum-plan"),
      pick("curriculum-aligned"),
      pick("ai-creation"),
      pick("resources-folder"),
    ],
  },
  {
    name: "ai-resources",
    icons: [
      pick("ai-additional-material"),
      pick("ai-quiz"),
      pick("ai-slidedeck"),
      pick("ai-worksheet"),
    ],
  },
  {
    name: "learning-cycle",
    icons: [
      pick("book"),
      pick("book-a"),
      pick("book-b"),
      pick("book-c"),
      pick("book-d"),
      pick("book-e"),
      pick("book-f"),
      pick("book-g"),
      pick("book-h"),
      pick("book-t"),
      pick("check-for-understanding"),
      pick("explanation"),
      pick("feedback"),
      pick("practice"),
    ],
  },
  {
    name: "sound",
    icons: [
      pick("sound-a"),
      pick("sound-b"),
      pick("sound-c"),
      pick("sound-d"),
      pick("sound-e"),
      pick("sound-f"),
      pick("sound-g"),
      pick("sound-h"),
      pick("sound-i"),
      pick("sound-j"),
    ],
  },
  {
    name: "system",
    icons: [
      pick("ai"),
      pick("arrow-down"),
      pick("arrow-left"),
      pick("arrow-right"),
      pick("arrow-up"),
      pick("bell"),
      pick("bookmark"),
      pick("bookmark-filled"),
      pick("branch"),
      pick("chevron-down"),
      pick("chevron-left"),
      pick("chevron-right"),
      pick("chevron-up"),
      pick("circle"),
      pick("circle-filled"),
      pick("comment"),
      pick("cookie"),
      pick("copy"),
      pick("cross"),
      pick("download"),
      pick("drag"),
      pick("edit"),
      pick("error"),
      pick("expand"),
      pick("external"),
      pick("filter"),
      pick("globe"),
      pick("google-classroom"),
      pick("hamburger-menu"),
      pick("home"),
      pick("image"),
      pick("info"),
      pick("lesson"),
      pick("license"),
      pick("list"),
      pick("loading"),
      pick("lock"),
      pick("microsoft-teams"),
      pick("mini-menu"),
      pick("minimise"),
      pick("minus"),
      pick("move-all"),
      pick("move-left-right"),
      pick("move-up-down"),
      pick("plus"),
      pick("preview"),
      pick("hide"),
      pick("print"),
      pick("pupil-pencil"),
      pick("question-mark-outlined"),
      pick("retake"),
      pick("save"),
      pick("scissors"),
      pick("search"),
      pick("send"),
      pick("share"),
      pick("star-filled"),
      pick("star-outline"),
      pick("success"),
      pick("supervision"),
      pick("tick"),
      pick("trashcan"),
      pick("unit"),
      pick("unlock"),
      pick("upload"),
      pick("video"),
      pick("warning"),
      pick("clock"),
      pick("question-mark"),
      pick("flag-outlined"),
      pick("flag-filled"),
    ],
  },
  {
    name: "subject",
    icons: [
      pick("subject-art-and-design"),
      pick("subject-biology"),
      pick("subject-chemistry"),
      pick("subject-citizenship"),
      pick("subject-communication-and-language"),
      pick("subject-computing"),
      pick("subject-cooking-and-nutrition"),
      pick("subject-design-and-technology"),
      pick("subject-drama"),
      pick("subject-english"),
      pick("subject-expressive-art-and-design"),
      pick("subject-financial-education"),
      pick("subject-french"),
      pick("subject-geography"),
      pick("subject-german"),
      pick("subject-grammar"),
      pick("subject-handwriting"),
      pick("subject-history"),
      pick("subject-independent-living"),
      pick("subject-language"),
      pick("subject-latin"),
      pick("subject-literature"),
      pick("subject-maths"),
      pick("subject-music"),
      pick("subject-numeracy"),
      pick("subject-pe"),
      pick("subject-philosophy"),
      pick("subject-physical-development"),
      pick("subject-physical-therapy"),
      pick("subject-physics"),
      pick("subject-reading-writing-and-oracy"),
      pick("subject-religious-education"),
      pick("subject-rshe-pshe"),
      pick("subject-science"),
      pick("subject-sensory"),
      pick("subject-social-sciences"),
      pick("subject-spanish"),
      pick("subject-speech-and-language"),
      pick("subject-spelling"),
      pick("subject-swimming"),
      pick("subject-theology"),
      pick("subject-therapy"),
      pick("subject-understanding-the-world"),
      pick("subject-vocabulary"),
    ],
  },
  {
    name: "ai-icons",
    icons: [
      pick("ai-safety"),
      pick("ai-auto-evaluation"),
      pick("ai-icons20"),
      pick("ai-based-on-oak-content"),
      pick("ai-safety-rails-around-ai"),
      pick("ai-threats"),
      pick("ai-teacher-in-the-loop"),
      pick("ai-doing-the-heavy-lifting"),
      pick("ai-bias"),
      pick("ai-hallucinations"),
      pick("ai-prompt"),
      pick("ai-generated-image"),
      pick("ai-no-image-found"),
      pick("ai-content-guidance-required"),
      pick("ai-safe"),
      pick("ai-toxic"),
      pick("ai-lesson"),
      pick("ai-idea-generation"),
      pick("ai-lesson-history"),
    ],
  },
];

console.log({ groups });

export const AllIcons: Story = {
  render: (args: OakIconProps) => (
    <OakFlex $flexDirection={"column"} $gap="spacing-12">
      {groups.flatMap((group) => {
        return (
          <>
            <OakHeading tag="h2">{group.name}</OakHeading>
            {group.icons.map((iconName) => {
              if (iconName?.startsWith("missing:")) {
                return (
                  <OakFlex key={iconName} $gap={"spacing-16"}>
                    <OakBox
                      $width="spacing-32"
                      $height="spacing-32"
                      $background={"bg-incorrect"}
                    ></OakBox>
                    <OakTypography>{iconName}</OakTypography>
                  </OakFlex>
                );
              }
              return (
                <OakFlex key={iconName} $gap={"spacing-16"}>
                  <OakIcon
                    {...args}
                    iconName={iconName as OakIconName}
                    alt=""
                  />
                  <OakTypography>{iconName}</OakTypography>
                </OakFlex>
              );
            })}
          </>
        );
      })}
      <OakHeading tag="h2">Unknown icons</OakHeading>
      {allIconNames.map((iconName) => {
        return (
          <OakFlex key={iconName} $gap={"spacing-16"}>
            <OakIcon {...args} iconName={iconName} alt="" />
            <OakTypography>{iconName}</OakTypography>
          </OakFlex>
        );
      })}
    </OakFlex>
  ),
  args: { $colorFilter: "icon-primary" },
  parameters: {
    controls: {
      include: Object.keys(colorFilterArgTypes),
      sort: "none",
    },
  },
};

export const PickIcon: Story = {
  render: (args: OakIconProps) => <OakIcon {...args} />,
  args: {
    iconName: "home",
    $width: "spacing-360",
    $height: "spacing-360",
  },
  parameters: {
    controls: {
      include: [
        "iconName",
        "$width",
        "$height",
        ...Object.keys(colorFilterArgTypes),
      ],
    },
  },
};
