import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import LabeledForm from './LabeledForm'
import TextArea from './TextArea'


const stories = storiesOf('Molecules/Form', module)

stories.addDecorator(withKnobs)
  .add('LabeledForm', () =>
    (
      <div>
        <LabeledForm name="firstName" placeholder={'First Name'} label={'First Name'} helperType={'ERROR'} helperText={'Must Be a Valid Name!!'} />
        <LabeledForm name="lastName" placeholder={'Last Name'} label={'Last Name'} />
      </div>
    )
  )
  .add('TextArea', () =>
    (
      <div>
        <TextArea name="firstName" placeholder={'First Name'} label={'First Name'} helperType={'ERROR'} helperText={'Must Be a Valid Name!!'} />
        <TextArea name="lastName" placeholder={'Last Name'} label={'Last Name'} />
        <TextArea name="lastName" className={'fullWidth'} placeholder={'Last Name'} label={'Last Name'} />
      </div>
    )
  )
  ;


