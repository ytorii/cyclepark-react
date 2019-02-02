import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import LoginButton from '../components/LoginButton';

storiesOf('LoginButton', module)
  .add('with on page load', () => {
    return <LoginButton onSubmit={action('clicked')} />
  },
    { jest: [], }
  );
