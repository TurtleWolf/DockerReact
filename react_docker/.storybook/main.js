module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs/register',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    // '@storybook/theming',
    // '@storybook/addon-storysource',
    '@storybook/preset-create-react-app',
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
// //  documentation is out of date? This use to be set in a different file
// //  which has been merged into the main.js..
//   addons.setConfig({
//   theme: themes.dark,