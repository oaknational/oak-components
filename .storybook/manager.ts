import { addons } from "@storybook/manager-api";
import { oakStorybookTheme } from "./oakStorybookTheme";

addons.setConfig({
  theme: oakStorybookTheme,
});
