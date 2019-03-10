import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Demo from './index';

storiesOf('Demo', module)
  .add('with Demo text', () => <Demo onClick={action('clicked')}>Hello Button</Demo>)
  .add('with some Demo emoji', () => (
    <Demo onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Demo>
  ));