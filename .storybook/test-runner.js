module.exports = {
  async prepare({ browserContext }) {
    const bypass = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
    if (bypass) {
      await browserContext.setExtraHTTPHeaders({
        "x-vercel-protection-bypass": bypass,
      });
    }
  },
};
