import React from 'react';
import { storiesOf } from '@storybook/react';

import LoginPage from '../pages/LoginPage';

storiesOf('LoginPage', module)
  .add('with on page load', () => {
    return <LoginPage />
  },
    { jest: [], }
  );
