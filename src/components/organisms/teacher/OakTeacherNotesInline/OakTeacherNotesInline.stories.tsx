import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { OakTeacherNotesInline } from "./OakTeacherNotesInline";

const meta: Meta<typeof OakTeacherNotesInline> = {
  component: OakTeacherNotesInline,
  tags: ["autodocs"],
  argTypes: {
    sanitizedHtml: {
      name: "sanitizedHtml",
      type: { name: "string" },
      description: "HTML to be rendered",
      defaultValue: "<p>Teacher notes</p><b>bold</b>",
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    controls: {
      include: ["type"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof OakTeacherNotesInline>;

const htmlString = `
<p>Lets see how this goes</p>
<p><strong>some bold text</strong></p>
<ul>
<li><p>point 1</p></li>
<li><p>point 2</p>
  <ul>
    <li><p>sub point 1</p></li><li><p>sub point 2</p></li>
  </ul>
</li>
<li><p>point 3</p></li>
</ul>
<p>Continuation</p>
<p></p>
<p>
<a target="_blank" rel="noopener noreferrer nofollow" href="https://test.com">https://test.com</a>
</p>
<p></p>
<p></p>`;

export const Default: Story = {
  render: (args) => <OakTeacherNotesInline {...args} />,
  args: { sanitizedHtml: htmlString },
};
