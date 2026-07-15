import type { TestRunnerConfig } from "@storybook/test-runner";

const config: TestRunnerConfig = {
  async preVisit(page) {
    const bypass = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
    if (bypass) {
      await page.setExtraHTTPHeaders({
        "x-vercel-protection-bypass": bypass,
      });
    }
  },
};

export default config;
