import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import Chip from './index'

const stories = storiesOf('Atoms/Chip', module)

stories.addDecorator(withKnobs)
  .add('All', () =>
    (
      <div>
        <h3>Chip</h3>
        <Chip text={text('Text', 'Interactive Chip')} varient={select('varient', ['DEFAULT', 'SELECTED'])} disabled={boolean('Disabled', false)} />
      </div>
    )
  )
  .add('Default', () => <Chip />)
  .add('Selected', () => <Chip varient="SELECTED" />)
  .add('Disabled', () => <Chip disabled />)
  ;


