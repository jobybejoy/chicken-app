import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select, object } from '@storybook/addon-knobs';

import Home from './index'

const stories = storiesOf('Templates/Home', module)

stories.addDecorator(withKnobs)
  .add('Loading', () =>
    (
      <Home />
    ));


