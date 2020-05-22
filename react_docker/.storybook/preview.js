import React from 'react';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import { GlobalStyle } from '../src/shared/global';

addDecorator(withA11y);

addDecorator(story => (
    <>
        <GlobalStyle />
        {story()}
    </>
));

import { addParameters } from '@storybook/react';

addParameters({
    notes: 'global notes',
    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
    backgrounds: {
        default: 'twitter',
        values: [
            { name: 'twitter', value: '#00aced' },
            { name: 'facebook', value: '#3b5998' },
        ],
    },
});