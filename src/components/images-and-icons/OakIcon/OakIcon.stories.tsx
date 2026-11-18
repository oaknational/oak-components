import React, { Fragment } from "react";
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
const notes: Record<string, string> = {};
function pick(key: string, note?: string) {
  if (note) {
    notes[key] = note;
  }
  const index = allIconNames.findIndex((icon) => icon === key);
  if (index !== -1) {
    allIconNames.splice(index, 1);
    return key;
  } else {
    return `missing:${key}`;
  }
}

// NOTE: These groups match the design-kit and should stay that way so it's
// easy to work out what's out of sync
const groups = [
  {
    name: "AI",
    icons: [
      pick("ai-auto-evaluation"),
      pick("ai-based-on-oak-content"),
      pick("ai-bias"),
      pick("ai-content-guidance-required"),
      pick("ai-doing-the-heavy-lifting"),
      pick("ai-generated-image"),
      pick("ai-hallucinations"),
      pick("ai-icon"),
      pick("ai-idea-generation"),
      pick("ai-lesson"),
      pick("ai-lesson-history"),
      pick("ai-no-image-found"),
      pick("ai-prompt"),
      pick("ai-safe"),
      pick("ai-safety"),
      pick("ai-safety-rails-around-ai"),
      pick("ai-teacher-in-the-loop"),
      pick("ai-threats"),
      pick("ai-toxic"),
    ],
  },
  {
    name: "AI resources",
    icons: [
      pick("ai-additional-material"),
      pick("ai-quiz"),
      pick("ai-slidedeck"),
      pick("ai-worksheet"),
    ],
  },
  {
    name: "Learning cycle",
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
    name: "Media",
    icons: [
      pick("back-10"),
      pick("captions"),
      pick("forward-10"),
      pick("full-screen"),
      pick("go"),
      pick("grid"),
      pick("out-of-window"),
      pick("pause"),
      pick("play"),
      pick("playback-0.5x"),
      pick("playback-0.75x"),
      pick("playback-1.5x"),
      pick("playback-1x"),
      pick("playback-2.5x"),
      pick("playback-2x"),
      pick("playback-3x"),
      pick("sign-language"),
      pick("sound-high"),
      pick("sound-low"),
      pick("sound-off"),
      pick("transcript"),
    ],
  },
  {
    name: "Social",
    icons: [pick("facebook"), pick("instagram"), pick("linkedin"), pick("x")],
  },
  {
    name: "Sound",
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
    name: "Subject",
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
      pick("subject-expressive-arts-and-design"),
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
      // Aliases: These are because it's easier to use "subject slugs" for working out what icons you need
      pick("subject-digital-literacy"),
      pick("subject-combined-science"),
      pick("subject-computer-science"),
      pick("subject-literacy"),
      pick("subject-rshe"),
      pick("subject-rule-of-law"),
      pick("subject-specialist"),
      pick("subject-therapies"),
      // TODO: These should be removed once OWA has updated the logic
      pick("subject-gcse-citizenship"),
      pick("subject-core-citizenship"),
      pick("subject-core-computing"),
      pick("subject-computing-non-gcse"),
      pick("subject-core-physical-education"),
      pick("subject-gcse-physical-education"),
      pick("subject-core-religious-education"),
      pick("subject-gcse-religious-education"),
    ],
  },
  {
    name: "System",
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
      pick("clock"),
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
      pick("flag-filled"),
      pick("flag-outline"),
      pick("globe"),
      pick("google-classroom"),
      pick("hamburger-menu"),
      pick("hide"),
      pick("home"),
      pick("image"),
      pick("info"),
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
      pick("print"),
      pick("question-mark"),
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
      pick("unlock"),
      pick("upload"),
      pick("video"),
      pick("warning"),
    ],
  },
  {
    name: "Teaching resources",
    icons: [
      pick("additional-material"),
      pick("ai-creation"),
      pick("ai-lesson-plan"),
      pick("curriculum-aligned"),
      pick("curriculum-plan"),
      pick("lesson-files"),
      pick("lesson-plan"),
      pick("media"),
      pick("quiz"),
      pick("resources-folder"),
      pick("signed-video"),
      pick("slide-deck"),
      pick("video"),
      pick("worksheet"),
    ],
  },
  {
    name: "Illustrations (deprecated to be removed)",
    icons: [
      pick("looping-arrow-1"),
      pick("looping-line-1"),
      pick("looping-line-2"),
      pick("looping-line-3"),
      pick("looping-line-4"),
      pick("looping-line-5"),
      pick("burst"),
      pick("confetti"),
      pick("pencil"),
      pick("lightbulb-yellow"),
      pick("tick-mark-happiness"),
      pick("header-underline"),
      pick("audio-clip-large"),
      pick("audio-clip-small"),
      pick("tag-promotional"),
      pick("underline-1"),
      pick("loopdown"),
      pick("magic-carpet"),
      pick("homepage-teacher-map"),
      pick("speech-bubble"),
      pick("box-border-bottom"),
      pick("box-border-left"),
      pick("box-border-right"),
      pick("box-border-top"),
    ],
  },
  {
    name: "Renamed in design-kit to be updated in oak-components",
    icons: [
      pick("supervision-level"),
      pick("subject-art"),
      pick("subject-cooking-nutrition"),
      pick("subject-creative-arts"),
      pick("subject-design-technology"),
      pick("subject-english-language"),
      pick("subject-english-grammar"),
      pick("subject-english-handwriting"),
      pick("subject-english-reading-for-pleasure"),
      pick("subject-english-spelling"),
      pick("subject-english-reading-writing-oracy"),
      pick("subject-english-vocabulary"),
      pick("subject-personal-social-and-emotional-development"),
      pick("subject-physical-education"),
      pick("subject-social-science"),
      pick("subject-sensory-integration"),
      pick("subject-speech-and-language-therapy"),
      pick("subject-occupational-therapy"),
    ],
  },
  {
    name: "To be added to design-kit with grouping",
    icons: [
      pick("lightbulb"),
      pick("intro"),
      pick("move-arrows"),
      pick("bookmark-outlined"),
      pick("clipboard"),
      pick("book-steps"),
      pick("free-tag"),
      pick("spreadsheet"),
      pick("chatting"),
      pick("teacher-group"),
      pick("snack-break"),
      pick("class-grouping"),
      pick("strand"),
      pick("lc-explanation"),
      pick("lc-check-for-understanding"),
      pick("lc-practice"),
      pick("lc-feedback"),
      pick("logo"),
    ],
  },
  {
    name: "Deprecated icons",
    icons: [
      pick("rocket"),
      pick("twitter"),
      pick("worksheet-3", `pupil to use "worksheet" instead`),
      pick("quiz-3", `pupil to use "quiz" instead`),
      pick("books", `teach to pick another fallback`),
      pick("quiz-white"),
      pick("slide-deck-3", `pupil to use "slide-deck" instead`),
      pick("equipment-required", `pupil to use "scissors" instead`),
      pick("copyright", `to use "license" instead`),
      pick("project"),
      pick("dot", `make "black" and reuse for "teacher-lesson" replacement`),
      pick("threads"),
      pick("data"),
      pick(
        "homepage-robot-waving",
        `used in "OakHomepageTabButton" to be removed`,
      ),
      pick(
        "homepage-three-pupils",
        `used in "OakHomepageTabButton" to be removed`,
      ),
      pick("homepage-teacher", `used in "OakHomepageTabButton" to be removed`),
      pick("bubble-1"),
      pick("bubble-2"),
      pick("icon-background-square"),
      pick("trash", `use "trashcan" instead`),
      pick("video-2"),
      pick("audio"),
      pick("video-3"),
      pick("content-guidance", `use "warning" instead`),
      pick("teacher-lesson", `use "dot" with "$colorFilter"`),
      pick("teacher-unit", `use "square" with "$colorFilter"`),
      pick(
        "occupational-therapy",
        `use "subject-occupational-therapy" instead`,
      ),
    ],
  },
];

export const PickIcon: Story = {
  render: (args: OakIconProps) => <OakIcon {...args} />,
  args: {
    iconName: "logo",
    $width: "spacing-40",
    $height: "spacing-40",
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

export const AllIcons: Story = {
  render: (args: OakIconProps) => (
    <OakFlex $flexDirection={"column"} $gap="spacing-12">
      {groups.flatMap((group) => {
        return (
          <Fragment key={group.name}>
            <OakHeading tag="h2">{group.name}</OakHeading>
            {group.icons.map((iconName) => {
              if (iconName?.startsWith("missing:")) {
                return (
                  <OakFlex
                    key={iconName}
                    $gap={"spacing-16"}
                    $alignItems={"center"}
                  >
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
                <OakFlex
                  key={iconName}
                  $gap={"spacing-16"}
                  $alignItems={"center"}
                >
                  <OakIcon
                    {...args}
                    iconName={iconName as OakIconName}
                    alt={iconName}
                  />
                  <OakTypography>
                    {iconName}
                    {notes[iconName] && ` — ${notes[iconName]}`}
                  </OakTypography>
                </OakFlex>
              );
            })}
          </Fragment>
        );
      })}
      {allIconNames.length > 0 && (
        <>
          <OakHeading tag="h2">Ungrouped icons</OakHeading>
          {allIconNames.map((iconName) => {
            return (
              <OakFlex
                key={iconName}
                $gap={"spacing-16"}
                $alignItems={"center"}
              >
                <OakIcon {...args} iconName={iconName} alt={iconName} />
                <OakTypography>{iconName}</OakTypography>
              </OakFlex>
            );
          })}
        </>
      )}
    </OakFlex>
  ),
  args: { $colorFilter: "icon-primary" },
  parameters: {
    controls: {
      include: ["$width", "$height", ...Object.keys(colorFilterArgTypes)],
      sort: "none",
    },
    docs: {
      canvas: {
        // This doesn't make sense in this story
        sourceState: "none",
      },
    },
  },
};
