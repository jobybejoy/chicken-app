import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';


import Text from './index';

const stories = storiesOf('Atoms/Text', module)
stories.addDecorator(withKnobs);

stories
  .add('Demo', () => (
    < div>
      {/* <input type="text" value={text} /> */}
      <Text component="h1" varient={'h1'}>{text('Heading', 'The face of the moon was in shadow.')}</Text>
      <Text component="h2" varient={'h2'}>{text('Heading', 'The face of the moon was in shadow.')}</Text>
      <Text component="h3" varient={'h3'}>{text('Heading', 'The face of the moon was in shadow.')}</Text>
      <Text component="h4" varient={'h4'}>{text('Heading', 'The face of the moon was in shadow.')}</Text>
      <Text component="h5" varient={'h5'}>{text('Heading', 'The face of the moon was in shadow.')}</Text>
      <Text component="h6" varient={'h6'}>{text('Heading', 'The face of the moon was in shadow.')}</Text>
      <Text component="body" varient={'body1'}>{text('Body', 'The spectacle before us was indeed sublime.')}</Text>
      <Text component="a" varient={'body1link'}>{text('Link', 'Click Here')}</Text>
      <Text component="body" varient={'body2'}>{text('Body', 'The spectacle before us was indeed sublime.')}</Text>
      <Text component="body" varient={'body2semibold'}>{text('Body', 'The spectacle before us was indeed sublime.')}</Text>
      <Text component="body" varient={'subheading'}>{text('Body', 'The spectacle before us was indeed sublime.')}</Text>
      <Text component="a" varient={'subheadinglink'}>{text('Link', 'Click Here')}</Text>
      <Text component="body" varient={'caption'}>{text('Body', 'The spectacle before us was indeed sublime.')}</Text>
      <Text component="body" varient={'qoute'}>{text('Body', 'The spectacle before us was indeed sublime.')}</Text>
      <Text component="body" varient={'buttonText'}>{text('Link', 'Click Here')}</Text>
      <Text component="body" varient={'label'}>label</Text>

      <Text>{text('Text', 'Default')}</Text>
    </div >
  )
  )
  .add('test', () => (<Text varient={'h1'}>{text('Text', 'Demo Text')}</Text>))