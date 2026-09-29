import { resolveWithExtension } from "./helper";

describe("resolveWithExtension", () => {
  it("resolve .ts", () => {
    const output = resolveWithExtension(__dirname + "/helper.ts");
    expect(output).toBe(__dirname + "/helper.ts");
  });

  it("no ext", () => {
    const output = resolveWithExtension(__dirname + "/helper");
    expect(output).toBe(__dirname + "/helper.ts");
  });

  it("error when missing", () => {
    expect(() => resolveWithExtension(__dirname + "/missing")).toThrow();
  });
});
