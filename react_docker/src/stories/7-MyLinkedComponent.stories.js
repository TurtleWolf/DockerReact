import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import LinkTo from '@storybook/addon-links/react';
import MyLinkedComponent from '../components/MyLinkedComponent/MyLinkedComponent.js';
// import MyLinkedComponent from '../MyLinkedComponent'; 

storiesOf('MyLinkedComponent', module)
  .add('default', () => (
    <section>
      <MyLinkedComponent />
      <p>
        This is the default. You can also change the{' '}
        <LinkTo story="heading text">heading text</LinkTo>.
      </p>
    </section>
  ))
  .add('heading text', () => (
    <section>
      <MyLinkedComponent headingText="Changed Heading!" />
      <p>
        This time, a custom <code>headingText</code> prop
        changes the heading text. You can also pass{' '}
        <LinkTo story="children">child elements</LinkTo> to{' '}
        <code>MyLinkedComponent</code>.
      </p>
      <button onClick={linkTo('default')}>Default</button>
    </section>
  ))
  .add('children', () => (
    <section>
      <MyLinkedComponent>
        <strong>Child Element</strong>
      </MyLinkedComponent>
      <p>
        Passing a child component. You can also change the{' '}
        <LinkTo story="headingText">heading text</LinkTo> of{' '}
        <code>MyLinkedComponent</code>.
      </p>
      <button onClick={linkTo('default')}>Default</button>
    </section>
  )); 
