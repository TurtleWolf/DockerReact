module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs/register',
    '@storybook/addon-links',
    '@storybook/preset-create-react-app',
    // '@storybook/theming',
  ],
};
// //  documentation is out of date? This use to be set in a different file
// //  which has been merged into the main.js..
//   addons.setConfig({
//   theme: themes.dark,