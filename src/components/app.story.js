import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import App from './app'
// Todo : App Desc for story book home! 

storiesOf('App', module)
  .add('to Storybook', () => <App />)
  ;

