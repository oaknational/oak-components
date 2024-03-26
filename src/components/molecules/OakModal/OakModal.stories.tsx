import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import React, { Fragment } from "react";

import { OakSecondaryButton } from "../OakSecondaryButton";
import { OakPrimaryButton } from "../OakPrimaryButton";
import { OakTextInput } from "../OakTextInput";

import { OakModal } from "./OakModal";
import { OakModalFooter } from "./OakModalFooter";
import { OakModalBody } from "./OakModalBody";

import { OakBox, OakP } from "@/components/atoms";

const meta: Meta<typeof OakModal> = {
  component: OakModal,
  tags: ["autodocs"],
  title: "components/molecules/OakModal",
  argTypes: {
    children: {
      control: { type: "text" },
    },
    footerSlot: {
      control: { type: "text" },
    },
  },
  parameters: {
    controls: {
      include: ["children", "footerSlot", "isOpen", "onClose"],
    },
  },
  args: {
    "aria-label": "Example modal",
    "aria-description": "This is an example modal",
    children: (
      <OakModalBody>
        <OakBox $mb="space-between-m">Modal content</OakBox>
        <OakTextInput />
      </OakModalBody>
    ),
    footerSlot: (
      <OakModalFooter>
        <OakSecondaryButton width="100%">Secondary action</OakSecondaryButton>
        <OakPrimaryButton width="100%">Primary action</OakPrimaryButton>
      </OakModalFooter>
    ),
  },
  render: (args) => {
    const [, updateArgs] = useArgs();
    const onClose = () => updateArgs({ isOpen: false });
    const onOpen = () => updateArgs({ isOpen: true });

    return (
      <>
        <OakSecondaryButton onClick={onOpen}>Open modal</OakSecondaryButton>
        <OakModal {...args} onClose={onClose} />
      </>
    );
  },
};
export default meta;

type Story = StoryObj<typeof OakModal>;

export const Default: Story = {};

export const WithScrolling: Story = {
  args: {
    "aria-label": "Scrolling modal",
    "aria-description": "A modal with scrolling content",
    children: (
      <OakModalBody>
        {[1, 2, 3].map((i) => (
          <Fragment key={i}>
            <OakP>
              In today's digital landscape, privacy concerns have become
              increasingly paramount, prompting the need for transparency and
              user consent regarding data collection practices. A cookie banner
              serves as the initial point of contact between a website and its
              visitors, notifying them of the site's use of cookies and other
              tracking technologies. This notification is essential in fostering
              trust and ensuring compliance with privacy regulations such as the
              General Data Protection Regulation (GDPR) in the European Union
              and the California Consumer Privacy Act (CCPA) in the United
              States.
            </OakP>
            <OakP>
              Without a cookie banner, website visitors may remain unaware of
              the data being collected about them, including their browsing
              habits, preferences, and demographic information. This lack of
              transparency can erode trust and lead to potential legal
              repercussions if users' privacy rights are violated. By
              prominently displaying a cookie banner, websites demonstrate their
              commitment to respecting user privacy and empower visitors to make
              informed choices about their online data.
            </OakP>
            <OakP>
              Furthermore, cookie banners not only inform users about the
              presence of cookies but also provide options for managing cookie
              preferences. Through these banners, visitors can choose to accept
              or reject certain types of cookies, such as those used for
              tracking or advertising purposes. This level of control empowers
              users to tailor their browsing experience according to their
              privacy preferences, enhancing their sense of agency and control
              over their personal data.
            </OakP>
            <OakP>
              In addition to legal compliance and user empowerment, cookie
              banners also play a crucial role in enhancing user experience. By
              providing clear and concise information about cookies, websites
              can minimize confusion and frustration among visitors. This
              transparency fosters a positive user experience by promoting trust
              and reducing the likelihood of unexpected data collection,
              ultimately contributing to increased user engagement and loyalty.
            </OakP>
            <OakP>
              In summary, the need for a cookie banner on a website is
              multifaceted. Not only does it ensure compliance with privacy
              regulations and mitigate legal risks, but it also fosters trust,
              empowers users, and enhances overall user experience. By
              proactively addressing privacy concerns and providing transparent
              information about data collection practices, websites can build
              stronger relationships with their visitors and establish
              themselves as trustworthy stewards of user data.
            </OakP>
          </Fragment>
        ))}
      </OakModalBody>
    ),
  },
};
