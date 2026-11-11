export function getCssRulesForSelector(
  selector: string,
  ownerDocument: Document = document,
) {
  return Array.from(ownerDocument.styleSheets)
    .flatMap((sheet) => Array.from(sheet.cssRules))
    .find((rule) => {
      return rule instanceof CSSStyleRule && rule.selectorText === selector;
    }) as CSSStyleRule;
}

/**
 * Find the CSSStyleRule for a selector
 * @param element element to check
 * @param pseudoSelector any pseudo selectors to define
 * @param cssPropName the owner document (if different from document)
 * @returns the css rule if found
 */
export function getStylePropsForSelector(
  element: Element,
  cssPropName: string,
  pseudoSelector?: string,
) {
  for (const selector of [...element.classList.values()].reverse()) {
    const s = `.${selector}${pseudoSelector ?? ""}`;
    const rule = getCssRulesForSelector(s);
    if (rule) {
      const value = rule.style.getPropertyValue(cssPropName);
      if (value) {
        return value;
      }
    }
  }
}
