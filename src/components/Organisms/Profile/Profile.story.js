import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import image from '../../../assets/images/profile.jpeg'

import Profile from './index'
import MiniProfile from './MiniProfile'

const stories = storiesOf('Organisms/Profile', module)
stories.addDecorator(withKnobs);

stories
  .add('MiniProfile', () => (
    <div className={'page container'}>
      <MiniProfile name={'Joby Bejoy'} url={image} email={'jobybp@gmail.com'} />
    </div>
  ))
  .add('MiniProfile Loading', () => (
    <div className={'page container'}>
      <MiniProfile />
    </div>
  ))
  // .add('without Chip', () => (
  //   <div className={'page container'}>
  //     <ItemCounter withChip={false} maxCountValue={70} name={'Chicken'} />
  //   </div>
  // ))
  // .add('Primary Button', () => (<Button varient={'PRIMARY'} name={'primary'} disabled={boolean('Disabled', false)}>{text('Text', 'Primary')}</Button>))

  ;