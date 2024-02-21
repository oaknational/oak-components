import styled from "styled-components";

import { OakFlex, OakFlexProps } from "@/components/atoms/OakFlex";

export type InternalCardProps = OakFlexProps;
const InternalCard = styled(OakFlex)``;

InternalCard.defaultProps = {
  $pa: "inner-padding-xl",
  $flexDirection: "column",
  $flexGrow: 1,
  $position: "relative",
};

export { InternalCard };
