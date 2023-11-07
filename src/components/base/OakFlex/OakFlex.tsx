import styled from "styled-components";

import { OakBox, OakBoxProps } from "@/components/base/OakBox";
import { flexStyle, FlexCssProps } from "@/styles/utils/flexStyle";

export type OakFlexProps = FlexCssProps & OakBoxProps;
/**
 * Flex sets `display: flex;` and exposes various flex props, along with Box
 * props.
 *
 * ## Usage
 * Before adding props to this component, think about whether it makes sense
 * to add it to Box instead, as this component extends that.
 */
const OakFlex = styled(OakBox)<OakFlexProps>`
  ${flexStyle}
`;

export { OakFlex };
