import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select, object } from '@storybook/addon-knobs';

import Location from './index'

const stories = storiesOf('Templates/Location', module)

stories.addDecorator(withKnobs)
  .add('Loading', () =>
    (
      <div className="page container">
        <Location loading={true} />
      </div>
    ))
  .add('Active', () =>
    (
      <div className="page container">
        <Location />
      </div>
    ));


