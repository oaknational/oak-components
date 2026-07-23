module.exports = {
  async prepare(page) {
    const bypass = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
    if (bypass) {
      await page.setExtraHTTPHeaders({
        "x-vercel-protection-bypass": bypass,
      });
    }
  },
};
