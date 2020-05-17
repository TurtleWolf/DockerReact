import NotesBook from './NotesBook';
import { notes1, notes2 } from './data';
import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, object } from '@storybook/addon-knobs';

storiesOf('Notes', module)
  .addDecorator(withKnobs)
  .add('default', withInfo(` 
  Notes encapsulated as it's own component 
`)(() => (
    <NotesBook />
  )));