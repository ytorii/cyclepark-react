import React from 'react';
import { storiesOf } from '@storybook/react';

import VehicleTypeRadio from '../components/VehicleTypeRadio';

storiesOf('VehicleTypeRadio', module)
  .add('with on page load', () => {
    return <VehicleTypeRadio />
  },
    { jest: [], }
  );
