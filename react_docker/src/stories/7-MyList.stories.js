import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import LinkTo from '@storybook/addon-links/react';
import MyList from '../components/MyList/MyList.js';
// import MyList from '../MyList'; 

storiesOf('MyList', module)
  .add('default', () => (
    <section>
      <MyList />
      <p>
        This is the default. You can also change the{' '}
        <LinkTo story="heading text">heading text</LinkTo>.
      </p>
    </section>
  ))
  .add('heading text', () => (
    <section>
      <MyList headingText="Changed Heading!" />
      <p>
        This time, a custom <code>headingText</code> prop
        changes the heading text. You can also pass{' '}
        <LinkTo story="children">child elements</LinkTo> to{' '}
        <code>MyList</code>.
      </p>
      <button onClick={linkTo('default')}>Default</button>
    </section>
  ))
  .add('children', () => (
    <section>
      <MyList>
        <strong>Child Element</strong>
      </MyList>
      <p>
        Passing a child component. You can also change the{' '}
        <LinkTo story="headingText">heading text</LinkTo> of{' '}
        <code>MyList</code>.
      </p>
      <button onClick={linkTo('default')}>Default</button>
    </section>
  )); 
