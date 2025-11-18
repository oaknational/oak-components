import styled from "styled-components";

import { parseColor } from "@/styles/helpers/parseColor";
import { paddingStyle, PaddingStyleProps } from "@/styles/utils/spacingStyle";

export const NativeLegend = styled("legend")<PaddingStyleProps>`
  cursor: pointer;
  border: none;
  color: ${parseColor("text-subdued")};

  &::checkmark {
    display: none;
  }

  ${paddingStyle};
`;
