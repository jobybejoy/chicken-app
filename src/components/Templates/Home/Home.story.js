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
      <Home loading={true} items={[
        { name: "Chicken" },
        { name: "Duck" },
        { name: "Roast" },
        { name: "Something" },
        { name: "Chicken" },
        { name: "Duck" },
        { name: "Chicken" },
        { name: "Chicken" },
        { name: "Chicken" },
        { name: "Duck" },
        { name: "Chicken" },
        { name: "Chicken" },
      ]} />
    ))
  .add('Active', () =>
    (
      <Home items={[
        { name: "Chicken" },
        { name: "Duck" },
        { name: "Roast" },
        { name: "Something" },
        { name: "Chicken" },
        { name: "Duck" },
        { name: "Roast" },
        { name: "Something" },
        { name: "Chicken" },
        { name: "Duck" },
        { name: "Roast" },
        { name: "Something" },
        { name: "Chicken" },
      ]} />
    ))
  ;


