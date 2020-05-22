module.exports = {
  // automatically import all files ending in *.stories.js|mdx
  stories: ['../src/components/Intro.stories.mdx', '../src/**/*.stories.(js|mdx)'],
  // stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-cssresources',
    '@storybook/addon-design-assets',
    '@storybook/addon-events',
    '@storybook/addon-google-analytics',
    '@storybook/addon-graphql',
    '@storybook/addon-jest',
    '@storybook/addon-knobs/register',
    '@storybook/addon-links',
    '@storybook/addon-queryparams',
    // '@storybook/addon-storyshots',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
    '@storybook/preset-create-react-app',
    // '@storybook/theming',
    // '@storybook/addon-docs',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
};
