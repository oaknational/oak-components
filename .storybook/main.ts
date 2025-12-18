import { StorybookConfig } from "@storybook/nextjs";
import { config as dotenvConfig } from "dotenv";

let host = process.env.NEXT_PUBLIC_OAK_ASSETS_HOST;
let path = process.env.NEXT_PUBLIC_OAK_ASSETS_PATH;
let cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

const isLocal = !process.env.VERCEL && !process.env.GITHUB_ACTION;

// Envs missing. If we are local, attempt to load from .env file. Note: this is redundant once we update to latest Storybook.
if (isLocal && (!host || !path || !cloudinaryCloudName)) {
  console.info("Attempting to load envs from .env file");
  dotenvConfig({ path: [".env", ".env.local"] });

  // Re-assign envs
  host = process.env.NEXT_PUBLIC_OAK_ASSETS_HOST;
  path = process.env.NEXT_PUBLIC_OAK_ASSETS_PATH;
  cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
}

// Final check regardless of context.
if (!host || !path || !cloudinaryCloudName) {
  throw new Error(
    `All envs are required. NEXT_PUBLIC_OAK_ASSETS_HOST: ${!!host}, NEXT_PUBLIC_OAK_ASSETS_PATH: ${!!path}, and NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: ${!!cloudinaryCloudName}`,
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
