import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import Counter from './index'

const stories = storiesOf('Molecules/Counter', module)

stories.addDecorator(withKnobs)
  .add('Default', () =>
    (
      <div>
        <h3>Counter</h3>
        <Counter />
      </div>
    )
  )
  ;


