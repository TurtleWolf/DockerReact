import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, object } from '@storybook/addon-knobs/react';
import MyComponent from '../components/MyComponent/MyComponent.js';

storiesOf('MyComponent Prop Knobs', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <MyComponent
      title={text('Title', 'The Title')}
      content={text('Content', 'The Content')}
      titleStyle={object('Title Style', { fontWeight: 'normal' })}
      contentStyle={object('Content Style', {
        fontFamily: 'arial',
        fontSize: '1.2em'
      })}
    />
  )); 