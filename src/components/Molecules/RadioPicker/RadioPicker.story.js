import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import RadioPicker from './index'


const stories = storiesOf('Molecules/RadioPicker', module)

stories.addDecorator(withKnobs)
  .add('Cart default', () =>
    (
      <div className={'page container'} style={{ position: 'relative', height: ' 90vh', }}>
        <RadioPicker
          options={
            [
              { title: "Pickup" },
              { title: "Home", address: `Lizzy Bunglow, Karuvatta, Adoor, Pathanamthitta, Kerala, India 691523` }
            ]
          }
        />
      </div>
    )
  );