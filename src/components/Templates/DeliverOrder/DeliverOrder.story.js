import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select, object } from '@storybook/addon-knobs';

import Checkout from './index'

const stories = storiesOf('Templates/DeliverOrder', module)

stories.addDecorator(withKnobs)
  .add('Loading', () =>
    (
      <div className="App">
        <div className="page container">
          <Checkout loading={true} />
        </div>
      </div>

    ))
  .add('Active', () =>
    (
      <div className="app">
        <div className="page container">
          <Checkout />
        </div>
      </div>
    ));


