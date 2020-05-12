import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MyButton from '../components/MyButton/MyButton.js';
import MyRangeInput from '../components/MyRangeInput/MyRangeInput';

storiesOf('MyButton', module).add('clicks', () => (
  <MyButton onClick={action('my component clicked')} />
));

storiesOf('MyRangeInput', module).add('slides', () => (
  <MyRangeInput
    onChange={action('range input changed')}
    onRender={action('range input rendered')}
  />
)); 