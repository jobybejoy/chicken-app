import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import Map from './index'


const stories = storiesOf('Molecules/Map', module)

stories.addDecorator(withKnobs)
  .add('Current Location', () =>
    (
      <Map />
    )
  )
  .add('Mobile View', () =>
    (
      <div className="page container">
        <Map />
      </div>
    )
  )
  ;


