import styled from "styled-components";

import { OakFlex, OakFlexProps } from "@/components/atoms/OakFlex";

export type OakMaxWidthProps = OakFlexProps;

/**
 * This component will provide a default maxWidth and ph value, it take Flex props.
 * ## Usage
 * Use this component on pages to limit the max-width to a specific container.
 * This will make it easier to create full browser width or custom width containers on the same page
 * with different background colors / image url.
 */
export const OakMaxWidth = styled(OakFlex)``;

OakMaxWidth.defaultProps = {
  $maxWidth: ["spacing-480", "spacing-1280"],
  $ph: ["spacing-0", "spacing-12"],
  $flexDirection: "column",
  $flexGrow: 1,
  $width: "100%",
  $mh: "auto",
};
