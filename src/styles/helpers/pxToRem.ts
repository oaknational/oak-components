const BASE_FONT_SIZE_PX = 16;
export const REM_DP = 3;

export default function pxToRem(px: number): number {
  return Number((px / BASE_FONT_SIZE_PX).toFixed(REM_DP));
}
