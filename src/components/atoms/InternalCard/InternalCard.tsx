import styled from "styled-components";

import { OakFlex, OakFlexProps } from "@/components/atoms/OakFlex";

export type InternalCardProps = OakFlexProps;

/**
 *
 * InternalCard extends OakFlex. It has all the props of OakFlex, but applies default styles for consistency.
 *
 */
const InternalCard = styled(OakFlex)``;

InternalCard.defaultProps = {
  $pa: "spacing-24",
  $flexDirection: "column",
  $flexGrow: 1,
  $position: "relative",
};

export { InternalCard };
