import React from 'react';
import { storiesOf } from '@storybook/react';
import MyComponent from '../components/MyComponent/MyComponent.js';

storiesOf('MyComponent Properties', module)
  .add('No Props', () => <MyComponent />)
  .add('Just "title"', () => <MyComponent title="The Title" />)
  .add('Just "Content"', () => <MyComponent content="The Content" />)
  .add('Both "title" and "content"', () => (
    <MyComponent title="The Title" content="The Content" />
  ))
  .add('Just "titleStyle"', () => (
    <MyComponent
      title="The Title"
      content="The Content"
      titleStyle={{ fontWeight: 'normal' }}
    />
  ))
  .add('Just "contentStyle"', () => (
    <MyComponent
      title="The Title"
      content="The Content"
      contentStyle={{ fontFamily: 'arial', fontSize: '1.2em' }}
    />
  ))
  .add('Both "titleStyle" and "contentStyle"', () => (
    <MyComponent
      title="The Title"
      content="The Content"
      titleStyle={{ fontWeight: 'normal' }}
      contentStyle={{ fontFamily: 'arial', fontSize: '1.2em' }}
    />
  )); 
