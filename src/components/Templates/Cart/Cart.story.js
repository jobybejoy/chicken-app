import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select, object } from '@storybook/addon-knobs';

import Cart from './index'
import CartItem from './CartItem'

const stories = storiesOf('Templates/Cart', module)

stories.addDecorator(withKnobs)
  .add('Loading', () =>
    (
      <Cart loading={true} />
    ))
  .add('Active', () =>
    (
      <Cart
        cart={{
          items: [
            {
              name: "Chicken",
              url: "Comin Soon",
              subItems: [
                { name: 'Meat', price: 20, subPrice: (20 * 10), availableCount: 25, count: 10 },
                { name: 'Egg', price: 1, subprice: (1 * 20), availableCount: 223, count: 20 },
              ]
            },
            {
              name: "Duck",
              url: "Comin Soon",
              subItems: [
                { name: 'Meat', price: 20, subPrice: (20 * 10), availableCount: 25, count: 10 },
              ]
            }
          ]
        }}
      />
    ))
  .add('Cart Item', () =>
    (
      <div className="page container">
        <CartItem
          item={{
            name: "Duck",
            url: "Comin Soon",
            subItems: [
              { name: 'Meat', price: 20, subPrice: (20 * 10), availableCount: 25, count: 10 },
              { name: 'Egg', price: 1, subprice: (1 * 20), availableCount: 223, count: 20 },
            ]
          }}
        />
      </div>
    ));


