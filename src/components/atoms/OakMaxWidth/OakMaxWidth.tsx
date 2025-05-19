import styled from "styled-components";

import { OakFlex, OakFlexProps } from "@/components/atoms/OakFlex";
import { responsiveStyle } from "@/styles/utils/responsiveStyle";
import { parseSpacing } from "@/styles/helpers/parseSpacing";

export type OakMaxWidthProps = OakFlexProps;

/**
 * This component will provide a default maxWidth and ph value, it take Flex props.
 * ## Usage
 * Use this component on pages to limit the max-width to a specific container.
 * This will make it easier to create full browser width or custom width containers on the same page
 * with different background colors / image url.
 */
export const OakMaxWidth = styled(OakFlex)<OakMaxWidthProps>`
  ${responsiveStyle(
    "max-width",
    (props) => props.$maxWidth || ["all-spacing-21", "all-spacing-24"],
    parseSpacing,
  )}
  ${responsiveStyle(
    "padding-left",
    (props) =>
      props.$pa ||
      props.$ph ||
      props.$pl || ["inner-padding-none", "inner-padding-s"],
    parseSpacing,
  )}
  ${responsiveStyle(
    "padding-right",
    (props) =>
      props.$pa ||
      props.$ph ||
      props.$pr || ["inner-padding-none", "inner-padding-s"],
    parseSpacing,
  )}
  $flexDirection: "column";
  $flexGrow: 1;
  $width: "100%";
  $mh: "auto";
`;
