import React, { ReactNode, useId } from "react";
import { Meta, StoryObj } from "@storybook/nextjs";

import { OakModal, OakModalProps } from "./OakModal";

import {
  OakModalFooter,
  OakModalFooterLayout,
} from "@/components/messaging-and-feedback/OakModalFooter";
import { OakPrimaryButton } from "@/components/buttons/OakPrimaryButton";
import { OakSecondaryButton } from "@/components/buttons/OakSecondaryButton";
import { OakIcon } from "@/components/images-and-icons/OakIcon";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakLink } from "@/components/navigation/OakLink";
import { OakHeading } from "@/components/typography/OakHeading";
import { OakP } from "@/components/typography/OakP";
import { OakSpan } from "@/components/typography/OakSpan";
import { oakAllSpacingTokens } from "@/styles/theme/spacing";
import { useStoryOpenState } from "@/storybook-helpers/useStoryOpenState";

const meta: Meta<typeof OakModal> = {
  component: OakModal,
  tags: ["autodocs"],
  title: "components/Messaging and feedback/OakModal",
  argTypes: {
    isOpen: { control: "boolean" },
    position: {
      control: "select",
      options: ["fullscreen", "left", "right", "top", "bottom"],
    },
    size: { control: "select", options: Object.keys(oakAllSpacingTokens) },
    headerVariant: { control: "radio", options: ["default", "inverted"] },
    onClose: { action: "onClose" },
  },
  parameters: {
    controls: {
      include: ["isOpen", "position", "size", "headerVariant", "onClose"],
    },
  },
  args: {
    isOpen: false,
    position: "right",
    "aria-labelledby": "oak-modal-title",
  },
};

export default meta;

type Story = StoryObj<typeof OakModal>;

// Two buttons for horizontal / vertical, one for left / right, as in Figma
// Buttons fill the footer for horizontal / vertical, as in Figma
const footer = (layout: OakModalFooterLayout, onAction: () => void) => {
  const isFullWidth = layout === "horizontal" || layout === "vertical";
  const width = isFullWidth ? "100%" : undefined;
  return (
    <OakModalFooter layout={layout}>
      {isFullWidth && (
        <OakSecondaryButton onClick={onAction} width={width}>
          Secondary
        </OakSecondaryButton>
      )}
      <OakPrimaryButton onClick={onAction} width={width}>
        Primary
      </OakPrimaryButton>
    </OakModalFooter>
  );
};

const ModalStory = ({
  args,
  footerLayout,
  headerSlot,
  paragraphs = 2,
}: {
  args: OakModalProps;
  footerLayout?: OakModalFooterLayout;
  headerSlot?: ReactNode;
  paragraphs?: number;
}) => {
  const [isOpen, setIsOpen] = useStoryOpenState(args.isOpen);
  const close = () => {
    args.onClose?.();
    setIsOpen(false);
  };

  return (
    <>
      <OakSecondaryButton onClick={() => setIsOpen(true)}>
        Open modal
      </OakSecondaryButton>
      <OakModal
        {...args}
        isOpen={isOpen}
        onClose={close}
        headerSlot={headerSlot}
        footerSlot={footerLayout && footer(footerLayout, close)}
      >
        <OakFlex $flexDirection="column" $gap="spacing-20">
          <OakHeading tag="h2" id="oak-modal-title" $font="heading-5">
            Modal title
          </OakHeading>
          {Array.from({ length: paragraphs }, (_, i) => (
            <OakP key={i} $font="body-2">
              Modals are for actions or notifications that give critical
              information related to a task. Close this one with the close
              button, the Escape key, or by clicking the backdrop.
            </OakP>
          ))}
        </OakFlex>
      </OakModal>
    </>
  );
};

// Logo and title for the header, as in Figma's "Logo / Title" example
const LogoAndTitle = ({ isInverted = false }: { isInverted?: boolean }) => (
  <OakFlex $alignItems="center" $gap="spacing-8" $pa="spacing-4">
    <OakIcon
      iconName="logo"
      $width="spacing-24"
      $height="spacing-24"
      $colorFilter={isInverted ? "icon-inverted" : "icon-primary"}
    />
    <OakSpan $font="heading-light-7">Oak National Academy</OakSpan>
  </OakFlex>
);

const renderModal =
  (options: Omit<React.ComponentProps<typeof ModalStory>, "args">) =>
  (args: OakModalProps) => <ModalStory args={args} {...options} />;

export const Default: Story = {
  render: renderModal({ footerLayout: "horizontal" }),
};

export const Fullscreen: Story = {
  args: { position: "fullscreen" },
  render: renderModal({ footerLayout: "right" }),
};

export const Left: Story = {
  args: { position: "left" },
  render: renderModal({ footerLayout: "horizontal" }),
};

export const Right: Story = {
  args: { position: "right" },
  render: renderModal({ footerLayout: "horizontal" }),
};

export const Top: Story = {
  args: { position: "top" },
  render: renderModal({ footerLayout: "right" }),
};

export const Bottom: Story = {
  args: { position: "bottom" },
  render: renderModal({ footerLayout: "right" }),
};

export const WithScrolling: Story = {
  render: renderModal({ footerLayout: "horizontal", paragraphs: 30 }),
};

export const FooterHorizontal: Story = {
  name: "Footer: horizontal",
  render: renderModal({ footerLayout: "horizontal" }),
};

export const FooterVertical: Story = {
  name: "Footer: vertical",
  render: renderModal({ footerLayout: "vertical" }),
};

export const FooterLeft: Story = {
  name: "Footer: left",
  render: renderModal({ footerLayout: "left" }),
};

export const FooterRight: Story = {
  name: "Footer: right",
  render: renderModal({ footerLayout: "right" }),
};

export const HeaderActionLink: Story = {
  name: "Header: action link",
  parameters: {
    controls: {
      include: ["position"],
    },
    docs: {
      description: {
        story: `When a modal has an action link in the header, you can set
\`focusCloseButtonOnOpen={false}\` and add \`data-autofocus\` to the link so it
receives focus when the modal opens instead of the close button.`,
      },
    },
  },
  render: (args) => <HeaderActionLinkDemo {...args} />,
};

function HeaderActionLinkDemo(args: OakModalProps) {
  const [isOpen, setIsOpen] = useStoryOpenState(args.isOpen);
  const close = () => {
    args.onClose?.();
    setIsOpen(false);
  };

  return (
    <>
      <OakSecondaryButton onClick={() => setIsOpen(true)}>
        Open modal
      </OakSecondaryButton>
      <OakModal
        {...args}
        isOpen={isOpen}
        onClose={close}
        focusCloseButtonOnOpen={false}
        headerSlot={
          <OakLink variant="secondary" href="#" data-autofocus>
            Action
          </OakLink>
        }
        footerSlot={footer("horizontal", close)}
      >
        <OakFlex $flexDirection="column" $gap="spacing-20">
          <OakHeading tag="h2" id="oak-modal-title" $font="heading-5">
            Modal title
          </OakHeading>
          <OakP $font="body-2">
            Modals are for actions or notifications that give critical
            information related to a task. Close this one with the close button,
            the Escape key, or by clicking the backdrop.
          </OakP>
        </OakFlex>
      </OakModal>
    </>
  );
}

export const HeaderLogoAndTitle: Story = {
  name: "Header: logo and title",
  render: renderModal({
    headerSlot: <LogoAndTitle />,
    footerLayout: "horizontal",
  }),
};

export const HeaderInverted: Story = {
  name: "Header: inverted",
  args: { position: "fullscreen", headerVariant: "inverted" },
  render: renderModal({
    headerSlot: <LogoAndTitle isInverted />,
    footerLayout: "horizontal",
  }),
};

export const ReturnFocus: Story = {
  name: "Return focus to another element",
  parameters: {
    controls: {
      include: ["position"],
    },
    docs: {
      description: {
        story: `By default, focus goes back to the button that opened the modal when it
closes. To send it somewhere else, pass a \`returnFocus\` function that focuses
the element you want and returns \`false\`, so focus isn't also moved back to
the trigger.

Open the modal, then close it: focus moves to "View results".`,
      },
    },
  },
  render: (args) => <ReturnFocusDemo {...args} />,
};

function ReturnFocusDemo(args: OakModalProps) {
  const [isOpen, setIsOpen] = useStoryOpenState(args.isOpen);
  const resultsId = useId();
  const close = () => {
    args.onClose?.();
    setIsOpen(false);
  };
  const returnFocus = () => {
    document.getElementById(resultsId)?.focus();
    return false;
  };

  return (
    <OakFlex $gap="spacing-16">
      <OakSecondaryButton onClick={() => setIsOpen(true)}>
        Open modal
      </OakSecondaryButton>
      <OakSecondaryButton id={resultsId}>View results</OakSecondaryButton>
      <OakModal
        {...args}
        isOpen={isOpen}
        onClose={close}
        returnFocus={returnFocus}
        footerSlot={footer("right", close)}
      >
        <OakFlex $flexDirection="column" $gap="spacing-20">
          <OakHeading tag="h2" id="oak-modal-title" $font="heading-5">
            Filters
          </OakHeading>
          <OakP $font="body-2">
            When this modal closes, focus moves to &quot;View results&quot;
            instead of the button that opened it.
          </OakP>
        </OakFlex>
      </OakModal>
    </OakFlex>
  );
}
