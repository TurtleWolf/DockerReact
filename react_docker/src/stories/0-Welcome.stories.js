import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import App from '../components/App.js';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;

ToStorybook.story = {
  name: 'to Storybook',
};

export const app = () => <App />;   
