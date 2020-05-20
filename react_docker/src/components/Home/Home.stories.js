// src/components/Home.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';

import Home from './Home';

export default {
    component: Home,
    title: 'Home',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const homeData = {
    id: '1',
    title: 'Test Home',
    state: 'HOME_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
    onPinHome: action('onPinHome'),
    onArchiveHome: action('onArchiveHome'),
};

export const Default = () => <Home home={{ ...homeData }} {...actionsData} />;

export const Pinned = () => <Home home={{ ...homeData, state: 'HOME_PINNED' }} {...actionsData} />;

export const Archived = () => (
    <Home home={{ ...homeData, state: 'HOME_ARCHIVED' }} {...actionsData} />
);