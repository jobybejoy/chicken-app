import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import LabeledForm from './LabeledForm'


const stories = storiesOf('Molecules/Form', module)

stories.addDecorator(withKnobs)
  .add('LabeledForm', () =>
    (
      <div>
        <LabeledForm name="firstName" placeholder={'First Name'} label={'First Name'} helperType={'ERROR'} helperText={'Must Be a Valid Name!!'} />
        <LabeledForm name="lastName" placeholder={'Last Name'} label={'Last Name'} />
      </div>
    )
  );


