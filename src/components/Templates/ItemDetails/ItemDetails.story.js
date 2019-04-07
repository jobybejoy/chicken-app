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
          name: "Duck",
          url: "Comin Soon",
          subItems: [
            { name: 'Meat', price: 20, subPrice: (20 * 10), availableCount: 25, count: 10 },
            { name: 'Egg', price: 1, subprice: (1 * 20), availableCount: 223, count: 20 },
          ]
        }}
      />
    ));


