import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import React, { Fragment } from "react";

import { OakSecondaryButton } from "@/components/buttons/OakSecondaryButton";
import { OakPrimaryButton } from "@/components/buttons/OakPrimaryButton";
import { OakPrimaryInvertedButton } from "@/components/buttons/OakPrimaryInvertedButton";
import {
  OakModalCenter,
  OakModalCenterBody,
} from "@/components/messaging-and-feedback/OakModalCenter";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakHeading } from "@/components/typography/OakHeading";
import { OakP } from "@/components/typography/OakP";

const meta: Meta<typeof OakModalCenter> = {
  component: OakModalCenter,
  tags: ["autodocs"],
  title: "components/Messaging and feedback/OakModalCenter",
  argTypes: {
    children: {
      control: "text",
    },
    disableBackdropClick: {
      control: "boolean",
    },
    disableEscapeKey: {
      control: "boolean",
    },
  },
  parameters: {
    controls: {
      include: [
        "children",
        "isOpen",
        "modalFlexProps",
        "modalOuterFlexProps",
        "modalInnerFlexProps",
        "backdropFlexProps",
        "onClose",
        "hideCloseButton",
        "disableBackdropClick",
        "disableEscapeKey",
        "footerSlot",
      ],
    },
  },
  args: {
    isOpen: false,
    hideCloseButton: false,
    disableBackdropClick: false,
    disableEscapeKey: false,
    domContainer: document.body,
    children: (
      <OakModalCenterBody
        title="Modal Title"
        iconName="warning"
        iconOverride={{ $colorFilter: "icon-warning" }}
      >
        <OakP $textAlign="center">
          In summary, the need for a cookie banner on a website is multifaceted.
          Not only does it ensure compliance with privacy regulations and
          mitigate legal risks, but it also fosters trust, empowers users, and
          enhances overall user experience. By proactively addressing privacy
          concerns and providing transparent information about data collection
          practices, websites can build stronger relationships with their
          visitors and establish themselves as trustworthy stewards of user
          data.
        </OakP>
      </OakModalCenterBody>
    ),
    footerSlot: (
      <OakFlex
        $pv="spacing-24"
        $justifyContent="center"
        $alignItems="center"
        $flexDirection="column"
        $rowGap="spacing-24"
      >
        <OakPrimaryButton $font="heading-7">
          I understand, continue
        </OakPrimaryButton>
        <OakPrimaryInvertedButton iconName="arrow-left" $font="heading-7">
          Take me home
        </OakPrimaryInvertedButton>
      </OakFlex>
    ),
  },
  render: function DefaultStory(args) {
    const [, updateArgs] = useArgs();
    const onClose = () => updateArgs({ isOpen: false });
    const onOpen = () => updateArgs({ isOpen: true });

    return (
      <>
        <OakSecondaryButton onClick={onOpen}>Open modal</OakSecondaryButton>
        <OakModalCenter {...args} onClose={onClose} />
      </>
    );
  },
};
export default meta;

type Story = StoryObj<typeof OakModalCenter>;

export const Default: Story = {};

export const ContentGuidence: Story = {
  args: {
    children: (
      <OakModalCenterBody
        iconName="warning"
        title="This lesson contains conflict or violence."
        iconOverride={{ $colorFilter: "icon-warning" }}
      >
        <OakHeading
          tag="h2"
          $font={["heading-light-7", "heading-light-7", "heading-light-6"]}
          $textAlign="center"
        >
          Adult supervision is suggested.
        </OakHeading>
      </OakModalCenterBody>
    ),
    hideCloseButton: true,
  },
};

export const WithScrolling: Story = {
  args: {
    children: (
      <OakModalCenterBody
        iconName="books"
        title="Modal Title"
        iconOverride={{ $colorFilter: "icon-primary" }}
      >
        {[1, 2, 3].map((i) => (
          <Fragment key={i}>
            <OakP $mb="spacing-16">
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
            <OakP $mb="spacing-16">
              Without a cookie banner, website visitors may remain unaware of
              the data being collected about them, including their browsing
              habits, preferences, and demographic information. This lack of
              transparency can erode trust and lead to potential legal
              repercussions if users' privacy rights are violated. By
              prominently displaying a cookie banner, websites demonstrate their
              commitment to respecting user privacy and empower visitors to make
              informed choices about their online data.
            </OakP>
          </Fragment>
        ))}
      </OakModalCenterBody>
    ),
  },
};
