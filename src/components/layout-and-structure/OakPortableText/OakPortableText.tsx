import React from "react";
import { PortableText } from "@portabletext/react";
import type {
  PortableTextBlockComponent,
  PortableTextMarkComponent,
  PortableTextBlock,
} from "@portabletext/react";

export type OakPortableTextProps = {
  value: PortableTextBlock[];
  components: {
    paragraph?: PortableTextBlockComponent;
    strong?: PortableTextMarkComponent;
    em?: PortableTextMarkComponent;
  };
};

/**
 * This component will provide a default maxWidth and ph value, it take Flex props.
 * ## Usage
 * Use this component on pages to limit the max-width to a specific container.
 * This will make it easier to create full browser width or custom width containers on the same page
 * with different background colors / image url.
 */
export function OakPortableText({
  value,
  components: { paragraph, strong, em },
}: OakPortableTextProps) {
  return (
    <PortableText
      value={value}
      components={{
        block: {
          normal: paragraph,
        },
        types: {},
        marks: {
          strong: strong,
          em: em,
        },
      }}
    />
  );
}
