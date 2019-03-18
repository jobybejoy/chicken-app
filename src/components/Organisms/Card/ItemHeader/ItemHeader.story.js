import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select, object } from '@storybook/addon-knobs';

import ItemHeader from './index'

const stories = storiesOf('Organisms/Card/ItemHeader', module)

stories.addDecorator(withKnobs)
  .add('Loading', () =>
    (
      <div>
        <div style={object('style', {
          padding: '40px'
        })} >
          Loading <ItemHeader loading={true} />
        </div>
      </div >
    )
  )
  .add('Active', () =>
    (
      <div>
        <div style={object('style', {
          padding: '40px'
        })} >
          Loading <ItemHeader item={
            { name: "Ducky", url: 'coming sooon' }
          } />
        </div>
      </div >
    )
  )
  ;


