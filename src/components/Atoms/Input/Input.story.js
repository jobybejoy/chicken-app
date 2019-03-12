import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
// import { linkTo } from '@storybook/addon-links';

import Input from './index';

const stories = storiesOf('Atoms/Input', module)
stories.addDecorator(withKnobs);

stories
  .add('Input', () => (
    <div>
      <h4>Input home !!</h4>
      <Input
        name={'name'}
        placeholder={'placeholder'}
        UISize={'FULL'}
        disabled={boolean('Disabled', false)}
      />
      <br /><br />
      <Input
        name={'name'}
        placeholder={'placeholder'}
        disabled={boolean('Disabled', false)}
      />
      <br /><br />
      <Input
        name={'name'}
        placeholder={'placeholder'}
        UISize={'SMALL'}
        disabled={boolean('Disabled', false)}
      />
    </div>
  ))
  .add('Default', () => (
    <Input
      name={'name'}
      placeholder={'Placeholder'}
      disabled={boolean('Disabled', false)}
    />
  ));
