import Header from './Header.js';
// import Header from '../Header/Header';
import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, object } from '@storybook/addon-knobs';

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('default', withInfo(` 
  Opening Content on the Header page, encapsulated as it's own component 
`)(() => (
    <Header
      title={text('Title', 'React in a DockerContainer')}
      content={text('Content', 'In this recipe you will learn how to add styles to components. If you want to learn more you can visit our Youtube Channel ')}
      titleStyle={object('Title Style', { fontWeight: 'normal' })}
      contentStyle={object('Content Style', {
        fontFamily: 'arial',
        fontSize: '1.2em'
      })}
    />

  ))); 