import styled from "styled-components";

import { OakFlex, OakFlexProps } from "@/components/base/OakFlex";

export type OakBaseCardProps = OakFlexProps;
const OakBaseCard = styled(OakFlex)``;

OakBaseCard.defaultProps = {
  $pa: "inner-padding-xl",
  $flexDirection: "column",
  $flexGrow: 1,
  $position: "relative",
};

export { OakBaseCard };
