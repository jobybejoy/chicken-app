import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import ItemCounter from './index'

const stories = storiesOf('Organisms/ItemCounter', module)
stories.addDecorator(withKnobs);

stories
  .add('with Chip', () => (
    <div>
      <ItemCounter withChip={true} maxCountValue={70} />
    </div>
  ))
  .add('without Chip', () => (
    <div>
      <ItemCounter withChip={false} maxCountValue={70} />
    </div>
  ))
  // .add('Primary Button', () => (<Button varient={'PRIMARY'} name={'primary'} disabled={boolean('Disabled', false)}>{text('Text', 'Primary')}</Button>))

  ;