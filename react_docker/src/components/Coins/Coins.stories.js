import Coins from './Coins';
import React from 'react';
// import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, object } from '@storybook/addon-knobs';

storiesOf('Coins', module)
  .addDecorator(withKnobs)
  .add('default', withInfo(` 
  Coins encapsulated as it's own component 
`)(() => (
    <Coins />
  )));