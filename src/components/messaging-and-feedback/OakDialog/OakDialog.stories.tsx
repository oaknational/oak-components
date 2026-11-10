import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs";

import { OakDialog, OakDialogProps } from "./OakDialog";
import { OakDialogFooter, OakDialogFooterLayout } from "./OakDialogFooter";

import { OakPrimaryButton } from "@/components/buttons/OakPrimaryButton";
import { OakSecondaryButton } from "@/components/buttons/OakSecondaryButton";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakLink } from "@/components/navigation/OakLink";
import { OakHeading } from "@/components/typography/OakHeading";
import { OakP } from "@/components/typography/OakP";
import { oakAllSpacingTokens } from "@/styles/theme/spacing";
import { useStoryOpenState } from "@/storybook-helpers/useStoryOpenState";

const spacingOptions = Object.keys(oakAllSpacingTokens);

const meta: Meta<typeof OakDialog> = {
  component: OakDialog,
  tags: ["autodocs"],
  title: "components/Messaging and feedback/OakDialog",
  argTypes: {
    isOpen: { control: "boolean" },
    width: { control: "select", options: spacingOptions },
    maxHeight: { control: "select", options: spacingOptions },
    focusContentOnOpen: { control: "boolean" },
  },
  parameters: {
    controls: {
      include: ["isOpen", "width", "maxHeight"],
    },
  },
  args: {
    isOpen: false,
    "aria-labelledby": "oak-dialog-title",
    "aria-describedby": "oak-dialog-description",
  },
};

export default meta;

type Story = StoryObj<typeof OakDialog>;

// Two buttons for horizontal / vertical, one for left / right, as in Figma
const footer = (layout: OakDialogFooterLayout, onAction: () => void) => (
  <OakDialogFooter layout={layout}>
    {(layout === "horizontal" || layout === "vertical") && (
      <OakSecondaryButton onClick={onAction}>Secondary</OakSecondaryButton>
    )}
    <OakPrimaryButton onClick={onAction}>Primary</OakPrimaryButton>
  </OakDialogFooter>
);

const DialogStory = ({
  args,
  footerLayout,
  paragraphs = 1,
}: {
  args: OakDialogProps;
  footerLayout: OakDialogFooterLayout;
  paragraphs?: number;
}) => {
  const [isOpen, setIsOpen] = useStoryOpenState(args.isOpen);
  const close = () => setIsOpen(false);

  return (
    <>
      <OakSecondaryButton onClick={() => setIsOpen(true)}>
        Open dialog
      </OakSecondaryButton>
      <OakDialog
        {...args}
        isOpen={isOpen}
        footerSlot={footer(footerLayout, close)}
      >
        <OakFlex $flexDirection="column" $gap="spacing-20">
          <OakHeading tag="h2" id="oak-dialog-title" $font="heading-5">
            This lesson contains conflict or violence
          </OakHeading>
          {Array.from({ length: paragraphs }, (_, i) => (
            <OakP
              key={i}
              id={i === 0 ? "oak-dialog-description" : undefined}
              $font="body-2"
            >
              Adult supervision is suggested. Read the guidance before you
              continue. The dialog can't be closed with Escape or by clicking
              the backdrop, so you must choose an option below.
            </OakP>
          ))}
        </OakFlex>
      </OakDialog>
    </>
  );
};

const renderDialog =
  (options: Omit<React.ComponentProps<typeof DialogStory>, "args">) =>
  (args: OakDialogProps) => <DialogStory args={args} {...options} />;

export const Default: Story = {
  render: renderDialog({ footerLayout: "horizontal" }),
};

export const WithScrolling: Story = {
  render: renderDialog({ footerLayout: "horizontal", paragraphs: 20 }),
};

export const FooterHorizontal: Story = {
  name: "Footer: horizontal",
  render: renderDialog({ footerLayout: "horizontal" }),
};

export const FooterVertical: Story = {
  name: "Footer: vertical",
  render: renderDialog({ footerLayout: "vertical" }),
};

export const FooterLeft: Story = {
  name: "Footer: left",
  render: renderDialog({ footerLayout: "left" }),
};

export const FooterRight: Story = {
  name: "Footer: right",
  render: renderDialog({ footerLayout: "right" }),
};

export const FocusButtonOnOpen: Story = {
  name: "Focus a button on open",
  args: {
    focusContentOnOpen: false,
  },
  parameters: {
    controls: {
      include: ["width", "maxHeight", "focusContentOnOpen"],
    },
    docs: {
      description: {
        story: `By default, focus goes to the dialog content when it opens. To focus a
button instead, set \`focusContentOnOpen={false}\` and add \`data-autofocus\`
to the button. For a choice that can't be undone, focus the safest option,
like "Cancel" here.

Open the dialog with the keyboard to see "Cancel" focused. Turn
\`focusContentOnOpen\` on to compare.`,
      },
    },
  },
  render: (args) => <FocusButtonOnOpenDemo {...args} />,
};

function FocusButtonOnOpenDemo(args: OakDialogProps) {
  const [isOpen, setIsOpen] = useStoryOpenState(args.isOpen);
  const close = () => setIsOpen(false);

  return (
    <>
      <OakSecondaryButton onClick={() => setIsOpen(true)}>
        Open dialog
      </OakSecondaryButton>
      <OakDialog
        {...args}
        isOpen={isOpen}
        footerSlot={
          <OakDialogFooter layout="right">
            <OakSecondaryButton onClick={close} data-autofocus>
              Cancel
            </OakSecondaryButton>
            <OakPrimaryButton onClick={close}>Delete</OakPrimaryButton>
          </OakDialogFooter>
        }
      >
        <OakFlex $flexDirection="column" $gap="spacing-20">
          <OakHeading tag="h2" id="oak-dialog-title" $font="heading-5">
            Delete this unit?
          </OakHeading>
          <OakP id="oak-dialog-description" $font="body-2">
            The unit and all its lessons will be removed from your plan. You
            can't undo this.
          </OakP>
          <OakP $font="body-2">
            <OakLink href="#">Read what happens to shared copies</OakLink>
          </OakP>
        </OakFlex>
      </OakDialog>
    </>
  );
}
