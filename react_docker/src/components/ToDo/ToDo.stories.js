import ToDo from '../ToDo/Todo';
import React from 'react';
// import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, object } from '@storybook/addon-knobs';

storiesOf('ToDo', module)
    .addDecorator(withKnobs)
    .add('default', withInfo(` 
  ToDo list encapsulated as it's own component 
`)(() => (
        <ToDo />
    )));