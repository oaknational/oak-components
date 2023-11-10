import styled from "styled-components";

import { OakFlex, OakFlexProps } from "../OakFlex";

/**
 * This component will provide a default maxWidth and ph value, it take Flex props.
 * ## Usage
 * Use this component on pages to limit the max-width to a specific container.
 * This will make it easier to create full browser width or custom width containers on the same page
 * with different background colors / image url.
 */
export type OakMaxWidthProps = OakFlexProps;
export const OakMaxWidth = styled(OakFlex)``;

OakMaxWidth.defaultProps = {
  $maxWidth: ["all-spacing-21", "all-spacing-24"],
  $ph: ["inner-padding-none", "inner-padding-s"],
  $flexDirection: "column",
  $flexGrow: 1,
  $width: "100%",
  $mh: "auto",
};
