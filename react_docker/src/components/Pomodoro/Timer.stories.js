import Timer from './Timer';
import React from 'react';
// import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, object } from '@storybook/addon-knobs';

storiesOf('Timer', module)
  .addDecorator(withKnobs)
  .add('default', withInfo(` 
  Timer encapsulated as it's own component 
`)(() => (
    <Timer />
  )));