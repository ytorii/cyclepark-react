import React from 'react';
import { storiesOf } from '@storybook/react';

import MenuPage from '../components/MenuPage';

storiesOf('MenuPage', module)
  .add('with on page load', () => {
    return <MenuPage />
  },
    { jest: [], }
  );
