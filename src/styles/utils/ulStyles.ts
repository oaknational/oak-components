import { css } from "styled-components";

export type OakDefaultULProps = {
  $reset?: boolean;
};

export const defaultULStyle = css<OakDefaultULProps>`
  ${(props) =>
    props.$reset &&
    css`
      list-style: none;
      padding: 0;
    `}
  margin: 0;
`;
