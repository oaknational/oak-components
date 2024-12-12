const config = {
  env: (config) => ({
    ...config,
    NEXT_PUBLIC_OAK_ASSETS_HOST: process.env.NEXT_PUBLIC_OAK_ASSETS_HOST,
    NEXT_PUBLIC_OAK_ASSETS_PATH: process.env.NEXT_PUBLIC_OAK_ASSETS_PATH,
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
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
  // Config from here https://storybook.js.org/docs/configure/typescript#the-types-are-not-being-generated-for-my-component
  typescript: {
    reactDocgen: "react-docgen-typescript",
    // Provide your own options if necessary.
    // See https://storybook.js.org/docs/configure/typescript for more information.
    reactDocgenTypescriptOptions: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["./public", "../public"],
};
export default config;
