export { oakColorTokens, oakUiRoleTokens } from "./color";

export type {
  OakColorToken,
  OakCombinedColorToken,
  OakUiRoleToken,
  OakColorFilterToken,
} from "./color";

export {
  oakAllSpacingTokens,
  oakInnerPaddingTokens,
  oakSpaceBetweenTokens,
} from "./spacing";

export type {
  OakAllSpacingToken,
  OakCombinedSpacingToken,
  OakInnerPaddingToken,
  OakSpaceBetweenToken,
} from "./spacing";

export { oakDropShadowTokens } from "./dropShadow";
export type { OakDropShadowToken } from "./dropShadow";

export { oakOpacityTokens } from "./opacity";
export type { OakOpacityToken } from "./opacity";

export { oakTransitionTokens } from "./transitions";
export type { OakTransitionToken } from "./transitions";

export { oakBorderRadiusTokens, oakBorderWidthTokens } from "./borders";
export type { OakBorderRadiusToken, OakBorderWidthToken } from "./borders";

export type { OakTheme } from "./theme";

export { oakFontTokens, oakFontSizeTokens } from "./typography";
export type { OakFontToken, OakFontSizeToken } from "./typography";

export { oakZIndexTokens } from "./zIndex";
export type { OakZIndexToken } from "./zIndex";

export { oakDefaultTheme } from "./default.theme";
export { oakDarkTheme } from "./dark.theme";

// Phase 1: Custom semantic tokens
export {
  customSemanticTokens,
  isCustomSemanticToken,
} from "./customSemanticTokens";
export type { CustomSemanticToken } from "./customSemanticTokens";

// Phase 2: Theme generator
export { generateTheme } from "./generateTheme";
export type {
  GenerateThemeOptions,
  GenerateThemeResult,
} from "./generateTheme";

export { checkContrast, ensureContrast } from "./contrastUtils";
export type { ContrastResult, EnsureContrastResult } from "./contrastUtils";

export {
  hexToOklch,
  oklchToHex,
  getContrastRatio,
  adjustLightness,
  adjustHue,
  isValidHex,
  expandHex,
} from "./colorUtils";
export type { OklchColor } from "./colorUtils";
