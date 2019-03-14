import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import ChipGroup from './index'

const stories = storiesOf('Molecules/ChipGroup', module)

stories.addDecorator(withKnobs)
  .add('Default', () =>
    (
      <div>
        <h3>Chip Group</h3>
        <ChipGroup propData={[{ value: 20 }, { value: 30 }, { value: 40 }]} />
      </div>
    )
  )
  ;


