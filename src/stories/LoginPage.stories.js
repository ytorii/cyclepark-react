import React from 'react';
import { storiesOf } from '@storybook/react';

import LoginPage from '../components/LoginPage';

storiesOf('LoginPage', module)
  .add('with on page load', () => {
    return <LoginPage />
  },
    { jest: [], }
  );
