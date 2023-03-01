module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-svelte-csf", "@storybook/addon-mdx-gfm"],
  framework: '@storybook/sveltekit',
  features: {
    storyStoreV7: true
  },
  docs: {
    autodocs: true
  }
};