import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select, object } from '@storybook/addon-knobs';

import Order from './index'

const stories = storiesOf('Templates/Order', module)

stories.addDecorator(withKnobs)
  .add('Loading', () =>
    (
      <div className="page container">
        <Order loading={true} />
      </div>
    ))
  .add('Active', () =>
    (
      <div className="page container">
        <Order />
      </div>
    ));


