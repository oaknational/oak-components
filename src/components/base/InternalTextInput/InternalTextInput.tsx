import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  FocusEvent,
  useRef,
} from "react";
import styled from "styled-components";

import { parseColor } from "@/styles/helpers/parseColor";
import { getBreakpoint } from "@/styles/utils/responsiveStyle";
import { SpacingStyleProps, spacingStyle } from "@/styles/utils/spacingStyle";
import { SizeStyleProps, sizeStyle } from "@/styles/utils/sizeStyle";

type StyledInputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "ref"
> &
  SpacingStyleProps &
  SizeStyleProps;

/**
 * Using `appearance none !important;` here because many style resets will set this
 * value to textfield, causing some browsers to implement undesirable styles.
 * E.g. ios and rounded borders (which border-radius doesn't fix without
 * appearance: none)
 */
const StyledInput = styled.input`
  appearance: none !important;
  border: 0;
  border-radius: 0;
  border-color: transparent;
  box-shadow: none;
  font-family: inherit;
  background: transparent;
  outline: none;
  color: inherit;

  @media (max-width: ${getBreakpoint("small")}px) {
    /* iOS zooms in on inputs with font sizes <16px on mobile */
    font-size: 16px;
  }

  ::placeholder {
    color: ${({ theme }) =>
      theme && theme.uiColors && parseColor(theme.uiColors["text-subdued"])};
  }

  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    appearance: none;
  }

  ${spacingStyle}
  ${sizeStyle}
`;

export type InternalTextInputProps = StyledInputProps & {
  placeholder?: string;
  /**
   * Fired only when the input is focused for the first time
   */
  onInitialFocus?: (e: FocusEvent<HTMLInputElement>) => void;
};

/**
 *
 * An unstyled input to be used as a basis for UI input components.
 * Supports all the props of a regular `HTMLInputElement`
 *
 * 🚨 The CSS `outline` is disabled so a focus ring must be applied by the consuming component.
 *
 * The following callbacks are available for tracking focus events:
 *
 *  ### onFocus
 * `(e: FocusEvent<HTMLInputElement>) => void;`
 *  ### onBlur
 * `(e: FocusEvent<HTMLInputElement>) => void;`
 *  ### onInitialFocus
 * `(e: FocusEvent<HTMLInputElement>) => void;`<br>
 *  occurs only when the input is focused for the first time
 *
 */
export const InternalTextInput = (props: InternalTextInputProps) => {
  const { onInitialFocus, onFocus, ...rest } = props;

  const hadInitialFocused = useRef(false);

  const handleOnFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (!hadInitialFocused.current && props.onInitialFocus) {
      props.onInitialFocus(e);
      hadInitialFocused.current = true;
    }

    if (props.onFocus) {
      props.onFocus(e);
    }
  };

  return <StyledInput {...rest} onFocus={handleOnFocus} />;
};
