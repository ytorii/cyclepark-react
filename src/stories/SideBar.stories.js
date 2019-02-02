import React from 'react';
import { storiesOf } from '@storybook/react';

import SideBar from '../components/SideBar';

storiesOf('SideBar', module)
  .add('with on page load', () => {
    return <SideBar/>
  },
    { jest: [], }
  );
