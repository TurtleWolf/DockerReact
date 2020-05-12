import React from 'react';
import { storiesOf } from '@storybook/react';
import MyComponent from '../components/MyComponent/MyComponent.js';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Home from '../components/Home/Home.js';


export default {
  title: 'MyComponent',
  component: MyComponent,
};

export const myComponent = () => <MyComponent onClick={action('clicked')}>MyComponent</MyComponent>;

export const MyComponently = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
