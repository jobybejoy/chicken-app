import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import OrderItem from './OrderItem/index'

const stories = storiesOf('Organisms/OrderList', module)
stories.addDecorator(withKnobs);

stories
  .add('Order Item', () => (
    <div className={'page container mobile'}>
      <OrderItem />
      {/* <ItemCounter withChip={true} maxCountValue={70} name={'Chicken'} /> */}
    </div>
  ))
  .add('without Chip', () => (
    <div className={'page container'}>
      {/* <ItemCounter withChip={false} maxCountValue={70} name={'Chicken'} /> */}
    </div>
  ))
  // .add('Primary Button', () => (<Button varient={'PRIMARY'} name={'primary'} disabled={boolean('Disabled', false)}>{text('Text', 'Primary')}</Button>))

  ;