import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
// import { linkTo } from '@storybook/addon-links';

import Button from './index';

// TODO Have to make Grid to components


const stories = storiesOf('Atoms/Button', module)
stories.addDecorator(withKnobs);

stories
  .add('Button', () => (
    <div>
      <h4>Button home !!</h4>
      <Button
        varient={select('varient', ['PRIMARY', 'OUTLINE', 'TEXT'])}
        name={'name'}
        onClick={action('clicked')}
        disabled={boolean('Disabled', false)}
      >
        {text('Text', 'Interactive Button')}
      </Button>
    </div>
  ))
  .add('Primary Button', () => (<Button varient={'PRIMARY'} name={'primary'} disabled={boolean('Disabled', false)}>{text('Text', 'Primary')}</Button>))
  .add('Outline Button', () => (<Button varient={'OUTLINE'} name={'outline'} disabled={boolean('Disabled', false)}>{text('Text', 'Outline')}</Button>))
  .add('Text Button', () => (<Button varient={'TEXT'} name={'text_btn'} disabled={boolean('Disabled', false)}>{text('Text', 'Text Button')}</Button>))
  ;