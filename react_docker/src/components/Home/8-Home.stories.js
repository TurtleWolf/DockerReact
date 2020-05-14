import Home from './Home.js';
// import Home from '../Home/Home';
import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, object } from '@storybook/addon-knobs';

storiesOf('Home', module)
  .addDecorator(withKnobs)
  .add('default', withInfo(` 
  Opening Content on the home page, encapsulated as it's own component 
`)(() => (
    <Home
      title={text('Title', 'Home')}
      content={text('Content', 'Edit src/components/Home/Home.js and save to reload.')}
      titleStyle={object('Title Style', { fontWeight: 'normal' })}
      contentStyle={object('Content Style', {
        fontFamily: 'arial',
        fontSize: '1.2em'
      })}
    />

  ))); 