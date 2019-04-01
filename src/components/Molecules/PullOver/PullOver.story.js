import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import PullOver from './index'


const stories = storiesOf('Molecules/PullOver', module)

stories.addDecorator(withKnobs)
  .add('Cart default', () =>
    (
      <div className={'page container'} style={{ position: 'relative', height: ' 90vh', }}>
        <PullOver />
      </div>
    )
  )
  .add('Cart', () =>
    (
      <div className={'page container'} style={{ position: 'relative', height: ' 90vh', }}>
        <PullOver label="Sub Total" price="50 AED" cta_label="PAY" />
      </div>
    )
  );;