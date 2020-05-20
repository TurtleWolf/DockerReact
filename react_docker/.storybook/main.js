module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-knobs/register',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
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
