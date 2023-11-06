import { parseTransitions } from "./parseTransitions";

describe("parseDropShadow", () => {
  it("should return undefined if value is null or undefined", () => {
    expect(parseTransitions(null)).toBeUndefined();
    expect(parseTransitions()).toBeUndefined();
  });
});
