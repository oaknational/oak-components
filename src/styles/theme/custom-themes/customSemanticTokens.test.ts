import {
  customSemanticTokens,
  isCustomSemanticToken,
  type CustomSemanticToken,
} from "./customSemanticTokens";

describe("customSemanticTokens", () => {
  describe("token generation", () => {
    it("generates all expected surface tokens", () => {
      expect(customSemanticTokens).toContain("custom-surface-primary");
      expect(customSemanticTokens).toContain("custom-surface-secondary");
      expect(customSemanticTokens).toContain("custom-surface-accent");
      expect(customSemanticTokens).toContain("custom-surface-inverse");
    });

    it("generates all expected text tokens", () => {
      expect(customSemanticTokens).toContain("custom-text-primary");
      expect(customSemanticTokens).toContain("custom-text-muted");
      expect(customSemanticTokens).toContain("custom-text-inverse");
      expect(customSemanticTokens).toContain("custom-text-accent");
    });

    it("generates all expected border tokens", () => {
      expect(customSemanticTokens).toContain("custom-border-subtle");
      expect(customSemanticTokens).toContain("custom-border-strong");
      expect(customSemanticTokens).toContain("custom-border-accent");
    });

    it("generates all expected interactive tokens", () => {
      expect(customSemanticTokens).toContain("custom-interactive-primary");
      expect(customSemanticTokens).toContain("custom-interactive-hover");
      expect(customSemanticTokens).toContain("custom-interactive-focus");
    });

    it("generates all expected shadow tokens", () => {
      expect(customSemanticTokens).toContain("custom-shadow-subtle");
      expect(customSemanticTokens).toContain("custom-shadow-strong");
    });

    it("generates correct total count", () => {
      // 4 surface + 4 text + 3 border + 3 interactive + 2 shadow = 16
      expect(customSemanticTokens).toHaveLength(16);
    });
  });

  describe("isCustomSemanticToken type guard", () => {
    it("returns true for valid custom tokens", () => {
      expect(isCustomSemanticToken("custom-surface-primary")).toBe(true);
      expect(isCustomSemanticToken("custom-text-muted")).toBe(true);
      expect(isCustomSemanticToken("custom-border-subtle")).toBe(true);
      expect(isCustomSemanticToken("custom-interactive-hover")).toBe(true);
      expect(isCustomSemanticToken("custom-shadow-strong")).toBe(true);
    });

    it("returns false for invalid custom tokens", () => {
      expect(isCustomSemanticToken("custom-invalid-token")).toBe(false);
      expect(isCustomSemanticToken("surface-primary")).toBe(false);
      expect(isCustomSemanticToken("custom-foo-bar")).toBe(false);
    });

    it("returns false for Oak tokens", () => {
      expect(isCustomSemanticToken("mint")).toBe(false);
      expect(isCustomSemanticToken("bg-decorative1-main")).toBe(false);
      expect(isCustomSemanticToken("text-primary")).toBe(false);
    });

    it("returns false for empty string", () => {
      expect(isCustomSemanticToken("")).toBe(false);
    });
  });

  describe("type inference", () => {
    it("allows type-safe assignment", () => {
      // This test validates compile-time behavior
      const token: CustomSemanticToken = "custom-surface-primary";
      expect(customSemanticTokens).toContain(token);
    });
  });
});
