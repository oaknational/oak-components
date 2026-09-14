// @vitest-environment node
import tmp from "tmp";
import { readFile, writeFile } from "fs/promises";
import { run } from "./index";
import { resolveWithExtension } from "./helper";

tmp.setGracefulCleanup();

const oaksecondarylinkContentInput = `
import { OakSecondaryLink } from "@oaknational/oak-components";

function Main () {
    return <OakSecondaryLink />;
}
`.trim();

const oaksecondarylinkContentOutput = `
import { OakLink } from "@oaknational/oak-components";

function Main () {
    return <OakLink variant="secondary" />;
}
`.trim();

describe("migrate", () => {
  describe("mods/oaksecondarylink", () => {
    it("should transform oaksecondarylink correctly", async () => {
      const { name } = tmp.dirSync();
      const filepath = name + "/oaksecondarylink.ts";
      await writeFile(filepath, oaksecondarylinkContentInput, "utf8");
      const transformPath = resolveWithExtension(
        __dirname + "/mods/oaksecondarylink/index",
      );
      await run(transformPath, { path: name, dry: false, silent: true });
      const content = await readFile(filepath, "utf8");
      expect(content).toEqual(oaksecondarylinkContentOutput);
    });
  });
});
