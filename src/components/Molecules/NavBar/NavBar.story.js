import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import NavBar from './index'


const stories = storiesOf('Molecules/NavBar', module)

stories.addDecorator(withKnobs)
  .add('Default', () =>
    (
      <div className={'page container'} style={{ padding: 40 }}>
        <NavBar />
      </div>
    )
  )
  .add('selected', () =>
    (
      <div className={'page container'} >
        <NavBar />
      </div>
    )
  );;