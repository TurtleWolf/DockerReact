module.exports = {
  // automatically import all files ending in *.stories.js|mdx
  stories: ['../src/components/Intro.stories.mdx', '../src/**/*.stories.(js|mdx)'],
  // stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-knobs/register',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    // '@storybook/addon-docs',
    // '@storybook/theming',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    // {
    //   name: '@storybook/addon-storysource',
    //   options: {
    //     rule: {
    //       // test: [/\.stories\.jsx?$/], This is default
    //       include: [path.resolve(__dirname, '../src')], // You can specify directories
    //     },
    //     loaderOptions: {
    //       prettierConfig: { printWidth: 80, singleQuote: false },
    //     },
    //   },
    // },
  ],
};
