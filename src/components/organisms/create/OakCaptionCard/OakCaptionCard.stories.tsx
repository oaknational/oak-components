import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { OakCaptionCard } from "./OakCaptionCard";

import { OakFlex } from "@/components/atoms";

const meta: Meta<typeof OakCaptionCard> = {
  component: OakCaptionCard,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    checked: {
      control: { type: "boolean" },
    },
    highlighted: {
      control: { type: "boolean" },
    },
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
    controls: {
      include: [
        "disabled",
        "checked",
        "highlighted",
        "displayValue",
        "value",
        "icon",
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof OakCaptionCard>;

export const Default: Story = {
  render: (args) => <OakCaptionCard {...args} />,
  args: {
    captionId: "CAP-TEST-01234",
    videoTitle: "This is a test video title",
    lessonUid: "LESS-TEST-01234",
    videoType: "lesson",
    lastUpdated: "2023-01-01",
    lastEdited: "2023-01-01",
    checked: false,
    highlighted: false,
    disabled: false,
  },
  parameters: {
    controls: {
      include: ["checked", "highlighted", "disabled"],
    },
  },
};

export const SetText: Story = {
  render: (args) => <OakCaptionCard {...args} />,
  args: {
    captionId: "CAP-TEST-01234",
    videoTitle: "This is a test video title",
    lessonUid: "LESS-TEST-01234",
    videoType: "lesson",
    lastUpdated: "2023-01-01",
    lastEdited: "2023-01-01",
    checked: false,
    highlighted: false,
  },
  parameters: {
    controls: {
      include: [
        "captionId",
        "videoTitle",
        "lessonUid",
        "lastUpdated",
        "lastEdited",
      ],
    },
  },
};

const nowDate = new Date();
const secondsAgo = new Date();
const minutesAgo = new Date();
const hoursAgo = new Date();
const daysAgo = new Date();
const weeksAgo = new Date();
const monthsAgo = new Date();
const yearsAgo = new Date();
secondsAgo.setMilliseconds(nowDate.getMilliseconds() - 2000);
minutesAgo.setMinutes(nowDate.getMinutes() - 5);
hoursAgo.setHours(nowDate.getHours() - 2);
daysAgo.setDate(nowDate.getDate() - 3);
weeksAgo.setDate(nowDate.getDate() - 14);
monthsAgo.setMonth(nowDate.getMonth() - 1);
yearsAgo.setFullYear(nowDate.getFullYear() - 1);

export const MultipleOptions: Story = {
  render: () => (
    <OakFlex $flexDirection="column">
      <OakCaptionCard
        captionId={"CAP-TEST-0001"}
        videoTitle={"This is a test video title"}
        lessonUid={"LESS-TEST-0001"}
        videoType={"lesson"}
        lastUpdated={nowDate.toUTCString()}
        lastEdited={secondsAgo.toUTCString()}
        checked={false}
        onCheckChanged={() => {}}
      />
      <OakCaptionCard
        captionId={"CAP-TEST-0002"}
        videoTitle={"This is a test video title"}
        lessonUid={"LESS-TEST-0002"}
        videoType={"lesson"}
        lastUpdated={minutesAgo.toUTCString()}
        lastEdited={hoursAgo.toUTCString()}
        checked={true}
        onCheckChanged={() => {}}
      />
      <OakCaptionCard
        captionId={"CAP-TEST-0003"}
        videoTitle={"This is a test video title"}
        lessonUid={"LESS-TEST-0003"}
        videoType={"lesson"}
        lastUpdated={daysAgo.toUTCString()}
        lastEdited={weeksAgo.toUTCString()}
        checked={false}
        disabled={true}
        onCheckChanged={() => {}}
      />
      <OakCaptionCard
        captionId={"CAP-TEST-0004"}
        videoTitle={"This is a test video title"}
        lessonUid={"LESS-TEST-0004"}
        videoType={"lesson"}
        lastUpdated={monthsAgo.toUTCString()}
        lastEdited={yearsAgo.toUTCString()}
        checked={false}
        onCheckChanged={() => {}}
      />
      <OakCaptionCard
        captionId={"CAP-TEST-0005"}
        videoTitle={"This is a test video title"}
        lessonUid={"LESS-TEST-0005"}
        videoType={"lesson"}
        lastUpdated={"2025-07-01"}
        lastEdited={"2025-07-28T12:26:40.425868+00:00"}
        checked={false}
        onCheckChanged={() => {}}
      />
    </OakFlex>
  ),
};
