import styled from "styled-components";

import {
  OakFlex,
  OakFlexProps,
} from "@/components/layout-and-structure/OakFlex";

export type InternalCardProps = OakFlexProps;

export const internalCardDefaults = {
  $pa: "spacing-24",
  $flexDirection: "column",
  $flexGrow: 1,
  $position: "relative",
} satisfies Partial<InternalCardProps>;

/**
 *
 * InternalCard extends OakFlex. It has all the props of OakFlex, but applies default styles for consistency.
 *
 */
const InternalCard = styled(OakFlex).attrs<InternalCardProps>((props) => ({
  ...internalCardDefaults,
  ...props,
}))``;

export { InternalCard };
