import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import AppBar from './index'
import BadgeIcon from './BadgeIcon'

const stories = storiesOf('Molecules/AppBar', module)

stories.addDecorator(withKnobs)
  .add('AppBar', () =>
    (
      <div className='page container'>
        <AppBar />
      </div>
    )
  )
  .add('Badge Icon', () =>
    (
      <div className='page container'>
        <BadgeIcon count={text('Count', 10)} icon={'cart'} />
      </div>
    )
  )
  ;


