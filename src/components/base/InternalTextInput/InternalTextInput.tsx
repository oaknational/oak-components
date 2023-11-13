import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  FocusEvent,
  useRef,
} from "react";
import styled from "styled-components";

import { parseColor } from "@/styles/helpers/parseColor";
import { getBreakpoint } from "@/styles/utils/responsiveStyle";

type StyledInputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "ref"
>;
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
`;

export type InternalTextInputProps = StyledInputProps & {
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onInitialFocus?: (e: FocusEvent<HTMLInputElement>) => void;
};

export const InternalTextInput = (props: InternalTextInputProps) => {
  const { onInitialFocus, onBlur, onFocus, ...rest } = props;

  const hadInitialFocused = useRef(false);

  const handleOnFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (!hadInitialFocused.current && props.onInitialFocus) {
      props.onInitialFocus(e);
      hadInitialFocused.current = true;
    } else if (props.onFocus) {
      props.onFocus(e);
    }
  };

  const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (props.onBlur) props.onBlur(e);
  };

  return (
    <StyledInput {...rest} onFocus={handleOnFocus} onBlur={handleOnBlur} />
  );
};
