const config = {
  env: (config) => ({
    ...config,
    NEXT_PUBLIC_OAK_ASSETS_HOST: process.env.NEXT_PUBLIC_OAK_ASSETS_HOST,
    NEXT_PUBLIC_OAK_ASSETS_PATH: process.env.NEXT_PUBLIC_OAK_ASSETS_PATH,
  }),
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
