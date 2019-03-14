import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select, object } from '@storybook/addon-knobs';

import MiniCard from './index'

const stories = storiesOf('Orgainisms/Card/MiniCard', module)

stories.addDecorator(withKnobs)
  .add('Loading', () =>
    (
      <div>
        <div style={object('style', {
          padding: '40px'
        })} >
          Loading <MiniCard loading={true} />
        </div>
      </div >
    ))
  .add('Active', () =>
    (
      <div>
        <div style={object('style', {
          padding: '40px'
        })} >
          Active <MiniCard />
        </div>
      </div >
    ))
  ;


