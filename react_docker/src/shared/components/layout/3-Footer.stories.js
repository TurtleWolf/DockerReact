import Footer from './Footer.js';
// import Footer from '../Footer/Footer';
import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, object } from '@storybook/addon-knobs';

storiesOf('Footer', module)
  .addDecorator(withKnobs)
  .add('default', withInfo(` 
  Footer encapsulated as it's own component 
`)(() => (
    <Footer
      title={text('Title', 'TW.com')}
      content={text('Content', 'keep this simple')}
      titleStyle={object('Title Style', { fontWeight: 'normal' })}
      contentStyle={object('Content Style', {
        fontFamily: 'arial',
        fontSize: '1.2em'
      })}
    />

  ))); 