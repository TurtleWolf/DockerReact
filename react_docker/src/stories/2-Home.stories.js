import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Home from '../components/Home/Home.js';


export default {
  title: 'Home',
  component: Home,
};

export const home = () => <Home onClick={action('clicked')}>Home</Home>;

export const homely = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
