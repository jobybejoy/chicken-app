import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select, object } from '@storybook/addon-knobs';

import SubItem from './index'

const stories = storiesOf('Organisms/Card/SubItem', module)

stories.addDecorator(withKnobs)
  .add('Loading', () =>
    (
      <div>
        <div style={object('style', {
          padding: '40px'
        })} >
          Loading <SubItem loading={true} />
        </div>
      </div >
    ))
  .add('Active', () =>
    (
      <div>
        <div style={object('style', {
          padding: '40px'
        })} >
          Active <SubItem item={
            {
              name: "Meat",
              price: '50 AED',
              availableCount: 235
            }
          } />
        </div>
      </div >
    ))
  ;


