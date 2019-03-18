import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select, object } from '@storybook/addon-knobs';

import ItemDetails from './index'

const stories = storiesOf('Templates/ItemDetails', module)

stories.addDecorator(withKnobs)
  .add('Loading', () =>
    (
      <ItemDetails loading={true} />
    ))
  .add('Active', () =>
    (
      <ItemDetails
        item={{
          name: 'Ducky',
          url: 'coming soon'
        }}
        subitems={
          [
            { name: "Meat", price: '50 AED', availableCount: 25 },
            { name: "Egg", price: "01 AED", availableCount: 200 }
          ]
        }
      />
    ));


