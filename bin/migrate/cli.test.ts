import { spawnSync } from "node:child_process";

describe("cli", () => {
  it("callable (help)", () => {
    const result = spawnSync(__dirname + "/../../node_modules/.bin/tsx", [
      __dirname + "/cli.ts",
      "--help",
    ]);
    expect(result.stdout.toString()).toContain("cli.ts <mod> <path>");
  });

  it("mod errors with invalid args", () => {
    const result = spawnSync(__dirname + "/../../node_modules/.bin/tsx", [
      __dirname + "/cli.ts",
      "foo",
      "./foo.ts",
    ]);
    expect(result.stderr.toString()).toContain(
      `Argument: mod, Given: "foo", Choices: "oaksecondarylink"`,
    );
  });
});
