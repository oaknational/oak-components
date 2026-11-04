import React, { ComponentProps, ElementType } from "react";
import { StoryObj } from "@storybook/nextjs";

import { OakFlex } from "@/components";
import { parseSpacing } from "@/styles";

export type VariantTableProps<T extends ElementType> = {
  component: T;
  defaultProps: Partial<ComponentProps<T>>;
  states: {
    name: string;
    props: Partial<ComponentProps<T>>;
  }[];
  variants: Partial<ComponentProps<T>>[];
};
export function VariantTable<T extends ElementType>({
  defaultProps,
  component,
  states,
  variants,
}: VariantTableProps<T>) {
  const Component = component as ElementType;

  return (
    <table
      style={{
        borderSpacing: `${parseSpacing("spacing-24")} ${parseSpacing("spacing-16")}`,
      }}
    >
      <thead>
        <tr>
          <th style={{ fontWeight: "normal" }}></th>
          {states.map((state) => {
            return (
              <th key={state.name} style={{ fontWeight: "normal" }}>
                <code>{state.name}</code>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {variants.map((args) => {
          const argsAsString = JSON.stringify(args, null, 2);
          return (
            <tr key={argsAsString}>
              <th style={{ textAlign: "left", fontWeight: "normal" }}>
                <pre>
                  <code>{argsAsString}</code>
                </pre>
              </th>
              {states.map((state) => {
                return (
                  <td key={state.name}>
                    <OakFlex $justifyContent="center" $alignItems="center">
                      <Component {...defaultProps} {...args} {...state.props} />
                    </OakFlex>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export function generateVariantTableStory<T extends ElementType>(
  props: Readonly<VariantTableProps<T>>,
) {
  const TableStory = {
    parameters: {
      controls: {
        disable: true,
      },
      docs: {
        canvas: {
          // This is a state table so code doesn't make sense here
          sourceState: "none",
        },
      },
    },
    render: () => {
      return (
        <VariantTable
          component={props.component}
          defaultProps={props.defaultProps}
          states={props.states}
          variants={props.variants}
        />
      );
    },
  } satisfies StoryObj<typeof VariantTable<T>>;
  return TableStory;
}
