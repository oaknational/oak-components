import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";

import { InternalChevronAccordion } from "./InternalChevronAccordion";

import { OakCheckBox } from "@/components/molecules/OakCheckBox";
import { OakHandDrawnHR } from "@/components/molecules/OakHandDrawnHR";
import { OakFlex } from "@/components/atoms";
import { PositionStyleProps } from "@/styles/utils/positionStyle";
import { SizeStyleProps } from "@/styles/utils/sizeStyle";

const meta: Meta<typeof InternalChevronAccordion> = {
  component: InternalChevronAccordion,
  tags: ["autodocs"],
  title: "components/molecules/InternalChevronAccordion",
  parameters: {
    controls: {
      include: ["header", "headerAfterSlot", "children"],
    },
  },
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    header: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    id: "accordion-1",
    header: "Embedded content",
    children:
      "Any cookies required for video or other embedded learning content to work",
  },
  render: (args) => <InternalChevronAccordion {...args} />,
};
export default meta;

type Story = StoryObj<typeof InternalChevronAccordion>;

export const Default: Story = {};

const StyledHandDrawnHR = styled(OakHandDrawnHR)<
  PositionStyleProps & SizeStyleProps
>`
  height: 0.125rem;
  position: ${(props) => props.$position};
  width: ${(props) => props.$width};
  bottom: 0.125rem;
`;

export const OutlineAccordion: Story = {
  render: () => {
    return (
      <OakFlex
        $position={"relative"}
        $display={"flex"}
        $flexDirection={"column"}
      >
        <StyledHandDrawnHR />
        <InternalChevronAccordion header={"Title"} id={"out-line-accordion"}>
          Subcopy area
        </InternalChevronAccordion>
        <StyledHandDrawnHR $position={"absolute"} $width={"100%"} />
      </OakFlex>
    );
  },
  args: {},
};

export const FillAccordion: Story = {
  render: () => {
    return (
      <InternalChevronAccordion
        header={"Title"}
        id={"out-line-accordion"}
        $background={"bg-decorative4-very-subdued"}
        $borderRadius={"border-radius-s"}
      >
        Subcopy area
      </InternalChevronAccordion>
    );
  },
  args: {},
};

export const BeforeAfterSlotsAccordion: Story = {
  render: () => {
    const [checked, setChecked] = useState([false, false]);
    return (
      <InternalChevronAccordion
        beforeButtonSlot={
          <OakCheckBox
            checked={checked[0]}
            value={""}
            onChange={() =>
              setChecked((prev) => {
                const newChecked = [...prev];
                newChecked[0] = !newChecked[0];
                return newChecked;
              })
            }
            id={"checkbox-1"}
          />
        }
        afterButtonSlot={
          <OakCheckBox
            checked={checked[1]}
            value={""}
            onChange={() =>
              setChecked((prev) => {
                const newChecked = [...prev];
                newChecked[1] = !newChecked[1];
                return newChecked;
              })
            }
            id={"checkbox-2"}
          />
        }
        header={"Title"}
        id={"before-after-slot-accordion"}
      >
        Subcopy area
      </InternalChevronAccordion>
    );
  },
};

export const MultipleAccordions: Story = {
  parameters: {
    controls: {
      include: [],
    },
  },
  render: () => {
    return (
      <>
        <InternalChevronAccordion
          id="necessary-accordion"
          header="Strictly necessary"
        >
          Necessary for the website to function
        </InternalChevronAccordion>
        <InternalChevronAccordion
          id="embedded-accordion"
          header="Embedded content"
        >
          Any cookies required for video or other embedded learning content to
          work
        </InternalChevronAccordion>
        <InternalChevronAccordion id="statistics-accordion" header="Statistics">
          Any cookies that may be used to track website usage
        </InternalChevronAccordion>
      </>
    );
  },
};
