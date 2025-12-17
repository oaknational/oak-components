import { StorybookConfig } from "@storybook/nextjs";

const host = process.env.NEXT_PUBLIC_OAK_ASSETS_HOST;
const path = process.env.NEXT_PUBLIC_OAK_ASSETS_PATH;
const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

if (!host || !path || !cloudinaryCloudName) {
  throw new Error(
    "NEXT_PUBLIC_OAK_ASSETS_HOST, NEXT_PUBLIC_OAK_ASSETS_PATH, and NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME are required",
  );
}

const config: StorybookConfig = {
  env: (existingEnv) => ({
    ...existingEnv,
    NEXT_PUBLIC_OAK_ASSETS_HOST: host,
    NEXT_PUBLIC_OAK_ASSETS_PATH: path,
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: cloudinaryCloudName,
  }),
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
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
  staticDirs: ["./public"],
};
export default config;
