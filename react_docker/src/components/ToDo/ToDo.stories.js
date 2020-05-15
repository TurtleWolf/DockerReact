import ToDo from '../ToDo/Todo';
// import ToDo from '../ToDo/ToDo';
import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, object } from '@storybook/addon-knobs';

storiesOf('ToDo', module)
    .addDecorator(withKnobs)
    .add('default', withInfo(` 
  Opening Content on the ToDo page, encapsulated as it's own component 
`)(() => (
        <ToDo
            title={text('Title', 'ToDo')}
            content={text('Content', 'Edit src/components/ToDo/ToDo.js and save to reload.')}
            titleStyle={object('Title Style', { fontWeight: 'normal' })}
            contentStyle={object('Content Style', {
                fontFamily: 'arial',
                fontSize: '1.2em'
            })}
        />

    ))); 