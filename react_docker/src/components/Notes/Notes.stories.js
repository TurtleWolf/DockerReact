// src/components/Notes.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';

import Notes from './Notes';

export default {
    component: Notes,
    title: 'Notes',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const notesData = {
    id: '1',
    title: 'Test Notes',
    state: 'NOTES_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
    onPinNotes: action('onPinNotes'),
    onArchiveNotes: action('onArchiveNotes'),
};

export const Default = () => <Notes notes={{ ...notesData }} {...actionsData} />;

export const Pinned = () => <Notes notes={{ ...notesData, state: 'NOTES_PINNED' }} {...actionsData} />;

export const Archived = () => (
    <Notes notes={{ ...notesData, state: 'NOTES_ARCHIVED' }} {...actionsData} />
);