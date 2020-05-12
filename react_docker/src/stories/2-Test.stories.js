import React from 'react';
// import { linkTo } from '@storybook/addon-links';
// import { Welcome } from '@storybook/react/demo';
import { storiesOf } from '@storybook/react/';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
// import App from '../components/App.js';

export default {
  title: 'Test',
  // component: Welcome,
};

export const test = () => <textarea>Hong Test Text Area in StoryBook</textarea>;   
