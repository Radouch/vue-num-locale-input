import { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {
      docgen:  {
        plugin: 'vue-component-meta',
        tsconfig: 'tsconfig.json',
      },
    },
  },
  docs: {
    autodocs: true,
  }
};

export default config;
