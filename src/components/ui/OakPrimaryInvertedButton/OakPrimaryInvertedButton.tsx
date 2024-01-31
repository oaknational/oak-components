import styled from "styled-components";

import { InternalRectButton } from "@/components/ui/InternalRectButton";
import { parseDropShadow } from "@/styles/helpers/parseDropShadow";

export const OakPrimaryInvertedButton = styled(InternalRectButton)`
  .grey-shadow:has(+ * + .internal-button:focus-visible) {
    box-shadow: ${parseDropShadow("drop-shadow-centered-grey")};
  }
  .yellow-shadow:has(+ .internal-button:focus-visible) {
    box-shadow: ${parseDropShadow("drop-shadow-centered-lemon")};
  }
  .yellow-shadow:has(+ .internal-button:hover) {
    box-shadow: ${parseDropShadow("drop-shadow-lemon")};
  }
  .grey-shadow:has(+ * + .internal-button:hover) {
    box-shadow: none;
  }
  .grey-shadow:has(+ * + .internal-button:active) {
    box-shadow: ${parseDropShadow("drop-shadow-grey")};
  }
  .yellow-shadow:has(+ .internal-button:active) {
    box-shadow: ${parseDropShadow("drop-shadow-lemon")};
  }
`;
