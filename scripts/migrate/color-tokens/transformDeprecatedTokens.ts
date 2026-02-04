import { FileInfo, API, JSXAttribute, JSCodeshift } from "jscodeshift";

const DEPRECATED_TOKENS_MAPPINGS = {
  "bg-icon": "icon-primary",
  "bg-icon-hover": "icon-subdued",
  "icon-inverted ": "icon-primary",
};

const MAPPINGS: Record<string, string> = {
  ...DEPRECATED_TOKENS_MAPPINGS,
};

function replaceSpacingTokens(j: JSCodeshift, val?: JSXAttribute["value"]) {
  if (val?.type === "StringLiteral" && MAPPINGS[val.value]) {
    return j.stringLiteral(MAPPINGS[val.value]!);
  }
  return val;
}

export default function (fileInfo: FileInfo, api: API) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  return root
    .find(j.StringLiteral, () => {
      return true;
    })
    .replaceWith((inner) => {
      return replaceSpacingTokens(j, inner.value);
    })
    .toSource();
}
